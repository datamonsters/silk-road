import functools
import time
from timeit import timeit


def timebenc(func):
    @functools.wraps(func)
    def newfunc(*args, **kwargs):
        startTime = time.time()
        func(*args, **kwargs)
        elapsedTime = time.time() - startTime
        print('function [{}] finished in {} ms'.format(
            func.__name__, int(elapsedTime * 1000)))

    return newfunc


import pandas as pd
import numpy as np
import os

dir_name = os.path.join(os.getcwd(), "data")

df_edges_list = pd.read_csv(os.path.abspath(os.path.join(dir_name, "Edges_category.csv")))
df_vertices_list = pd.read_csv(os.path.abspath(os.path.join(dir_name, "Vertices_list.csv")), index_col=0)
df_V = pd.read_csv(os.path.abspath(os.path.join(dir_name, "V_result.csv")), index_col=0)
df_el = pd.read_csv(os.path.abspath(os.path.join(dir_name, "Edges_list.csv")), index_col=0)
df = pd.read_csv(os.path.abspath(os.path.join(dir_name, "Q.csv")))
cities = pd.read_csv(os.path.abspath(os.path.join(dir_name, "cities.csv")))
df_export = pd.read_csv(os.path.abspath(os.path.join(dir_name, "Export_table_atlas.csv")))

coord = np.array(df_vertices_list)

T = 20
tau = 0.5
gamma = 0.1

if_changed = False
# Transsib_on=True

# road_silk = False
# road_trans_sib = False
# road_northeast_passage = False
# road_japan_korea = False
# road_mongolian = False

count = df_vertices_list.shape[0]

goods = 10
Q0 = 10

# df_Q = Q_module.fill_Q(japan_korea_on, df, cities, df_export)
df_Q = pd.read_csv(os.path.join(dir_name, "Q.csv"))

Q = np.zeros((count, goods))

for i in range(df_Q.shape[0]):
    index1 = df_Q.iloc[i, 3]
    for j in range(Q.shape[1]):
        Q[index1, j] = df_Q.iloc[i, 2] * df_Q.iloc[i, j + 4] * Q0

goods_check = [True, False, False, False, False, False, False, False, False, False]
# goods_check=[True,True,True,True,True,True,True,True,True,True]

V = np.array(df_V)

P = np.zeros((count, T, goods))

J = np.zeros((count, count, T))

matrix = np.zeros((count, count + 1, goods))
k = np.zeros((count, count, goods))


def fill_matrix(V, sr_on, ts_on, np_on, mong_on):
    global df_edges_list
    global goods_check
    matrix = np.zeros((count, count + 1, goods))
    k = np.zeros((count, count, goods))

    for i in range(df_edges_list.shape[0]):
        i1 = df_edges_list.iloc[i, 7]
        j1 = df_edges_list.iloc[i, 8]
        if sr_on == False:
            if df_edges_list.iloc[i, 0] == 0:
                continue
        if ts_on == False:
            if df_edges_list.iloc[i, 0] == 3:
                continue
        if np_on == False:
            if df_edges_list.iloc[i, 0] == 4:
                continue
        if mong_on == False:
            if df_edges_list.iloc[i, 0] == 5:
                continue

        m1 = df_edges_list.iloc[i, 10]
        v1 = V[df_edges_list.iloc[i, 9]]
        l1 = df_edges_list.iloc[i, 6]

        for j in range(goods):
            k[i1, j1, j] = k[i1, j1, j] + m1 * v1 / l1
            k[j1, i1, j] = k[j1, i1, j] + m1 * v1 / l1

    for j in range(goods):
        if goods_check[j] == False:
            continue
        for i in range(count):
            for elem in set(df_el.iloc[i, 1].split(',')):
                elem = int(elem)
                matrix[i, elem, j] = matrix[i, elem, j] - k[i, elem, j] * tau * gamma
                matrix[i, i, j] = matrix[i, i, j] + k[i, elem, j] * tau * gamma
            matrix[i, i, j] = matrix[i, i, j] + 1  #
    return matrix, k


def Next_step(V, Q, P_, sr_on, changed, ts_on, np_on, mong_on):
    global df_edges_list
    global goods_check
    global matrix
    global k
    if changed == True:
        matrix, k = fill_matrix(V, sr_on, ts_on, np_on, mong_on)
    JJ = np.zeros((count, count, goods + 1))
    for j in range(goods):
        if goods_check[j] == False:
            continue
        for i in range(count):
            for elem in set(df_el.iloc[i, 1].split(',')):
                elem = int(elem)
                JJ[i, elem, j] = (P_[elem, j] - P_[i, j]) * k[i, elem, j] * tau * gamma
            matrix[i, -1, j] = P_[i, j] - Q[i, j] * tau * gamma

        m1 = matrix[:, :-1, j]
        m2 = matrix[:, -1, j]
        res = np.linalg.solve(m1, m2)
        P_[:, j] = res
    for j in range(goods):
        if goods_check[j] == False:
            continue
        for i in range(count):
            for elem in set(df_el.iloc[i, 1].split(',')):
                elem = int(elem)
                if goods_check[j] == True:
                    JJ[i, elem, -1] = JJ[i, elem, -1] + JJ[i, elem, j]
    return P_, JJ[:, :, -1]
    # return P_,JJ



def PJ(V, Q, P, sr_on, changed, ts_on, np_on, mong_on):
    global matrix
    global k
    matrix, k = fill_matrix(V, sr_on, ts_on, np_on, mong_on)

    for t in range(1, T):
        P[:, t, :], J[:, :, t] = Next_step(V, Q, P[:, t - 1, :], sr_on, changed, ts_on, np_on, mong_on)

    count = 0
    for i_ in range(J.shape[0]):
        for j_ in range(J.shape[1]):
            if J[i_, j_, -1] > 0:
                count += 1

    # JJ=np.zeros((count,2+goods+1))
    JJ = np.zeros((count, 3))
    count = 0
    for i_ in range(J.shape[0]):
        for j_ in range(J.shape[1]):
            if J[i_, j_, -1] > 0:
                JJ[count, 0] = i_
                JJ[count, 1] = j_
                JJ[count, 2] = J[i_, j_, -1]
                #                 for z in range (2,J.shape[3]+2):
                #                     JJ[count,z]=J[i_,j_,-1,z-2]
                count = count + 1

    return P[:, -1, :], JJ

# P, J = PJ(V, Q, P, Silk_roads_on, if_changed, Transsib_on, Northeast_passage_on, mongolian_on)

# print("done")
