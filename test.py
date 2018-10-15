# coding: utf-8
from pandas import json, np

import model.fn_matrix as f


class City(object):
    __slots__ = ('name', 'lat', 'lon', 'id')


cities = []
for i in range(f.cities.shape[0]):
    city = City()
    city.name = f.cities.iloc[i, 0]
    city.lat = f.cities.iloc[i, 1]
    city.lon = f.cities.iloc[i, 2]
    city.id = len(cities)
    cities.append(city)


class Edge(object):
    __slots__ = ('a1', 'a2')


edges = dict
for i in range(f.df_edges_list.shape[0]):
    edge = Edge()
    edge.a1 = f.df_edges_list.iloc[i, 7]
    edge.a2 = f.df_edges_list.iloc[i, 8]
    v2 = f.df_edges_list.iloc[i, 8]
    id = edge.a1 + ":" + edge.a2
    edges[id] = edge


# def run(a):
#     T = f.T
#     goods = f.goods
#     count = f.count
#     # # road.mass = mass
#     # fn.goods_check = ms['goods_check']
#     # fn.road_japan_korea =
#
#     # fn.PJ()
#     f.V = np.array(f.df_V)
#     # road.P=np.zeros((count,T,goods))
#     # V = np.array(ms['tau'])
#     print("f.PJ")
#     p, j = f.PJ(f.V, f.Q, f.P, a['silk'], True, a['trans_sib'], a['northeast_passage'], a['mongolian'])
#
#     # road.V = V
#     # sr_on = ms['roadSilkWay']
#     # road.Silk_roads_on = sr_on
#     # ts_on = ms['roadTransSib']
#     # road.Transsib_on = ts_on
#     # rn_on = ms['roadNorthen']
#     # road.Northeast_passage_on = rn_on
#     # p, j = road.PJ(road.V, road.Q, road.P, sr_on, road.if_changed, ts_on, rn_on, False)
#     return json.dumps({
#         'p': p.tolist(),
#         'j': j.tolist()
#     })
#     return j
#
#
# print(run({
#     "silk": True,
#     "mongolian": False,
#     "trans_sib": False,
#     "northeast_passage": True
# }))
# print("ok")
# print({
#     "silk": True,
#     "mongolian": True,
#     "trans_sib": True,
#     "northeast_passage": False
# })
# road.PJ(road.V, road.Q, road.P, road.Silk_roads_on, road.if_changed, road.Transsib_on, road.Northeast_passage_on, road.mongolian_on)
