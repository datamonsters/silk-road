# coding: utf-8
from pandas import json, np

import model.fn_matrix as f




def run(a):
    T = f.T
    goods = f.goods
    count = f.count
    # # road.mass = mass
    # fn.goods_check = ms['goods_check']
    # fn.road_japan_korea =

    # fn.PJ()
    # f.V = np.array(f.df_V)
    # road.P=np.zeros((count,T,goods))
    # V = np.array(ms['tau'])
    print("f.PJ")
    p, j = f.PJ(f.V, f.Q, f.P, a['silk'], True, a['trans_sib'], a['northeast_passage'], a['mongolian'])

    # road.V = V
    # sr_on = ms['roadSilkWay']
    # road.Silk_roads_on = sr_on
    # ts_on = ms['roadTransSib']
    # road.Transsib_on = ts_on
    # rn_on = ms['roadNorthen']
    # road.Northeast_passage_on = rn_on
    # p, j = road.PJ(road.V, road.Q, road.P, sr_on, road.if_changed, ts_on, rn_on, False)
    # return json.dumps({
    #     'p': p.tolist(),
    #     'j': j.tolist()
    # })
    return j




# print(run({
#     "silk": False,
#     "mongolian": False,
#     "trans_sib": False,
#     "northeast_passage": True
# }))
# print("ok")
# print(run({
#     "silk": True,
#     "mongolian": True,
#     "trans_sib": True,
#     "northeast_passage": False
# }))
# road.PJ(road.V, road.Q, road.P, road.Silk_roads_on, road.if_changed, road.Transsib_on, road.Northeast_passage_on, road.mongolian_on)
