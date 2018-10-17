# start roads
import os
import pickle

roads = {
    "silk": True,
    "mongolian": False,
    "trans_sib": False,
    "northeast_passage": False
    # "japan_korea": False,
}

# start Q settings
settings = [
    23.2328528,
    355.1496702,
    4346.355488,
    61369.86301,
    1448.785163
]

from pandas import json, np
import model.fn_matrix as f

cache = dict()


def norma(a):
    return [int(a[0]), int(a[1]), a[2] * 10000000]


def calc_road(r):
    hash = hash_query(r)
    if hash in cache:
        return load_obj(hash)
    else:
        f.V = np.array(f.df_V)
        print("calc road")
        # xx = list(map(norma, [[23.3, 33.0, 3], [23.3, 33.0, 4]]))
        # print(xx)
        p, j = f.PJ(f.V, f.Q, f.P, r['silk'], True, r['trans_sib'], r['northeast_passage'], r['mongolian'])

        obj = {
            "p": p.tolist(),
            "j": list(map(norma, j.tolist()))
        }
        save_obj(obj, hash)
        return obj


def z(v):
    if v:
        return "1"
    else:
        return "0"


def hash_query(r):
    ar = (z(r['silk']), z(r['trans_sib']), z(r['northeast_passage']), z(r['mongolian']))
    s = "".join(ar)
    return s


def save_obj(obj, name):
    with open('cache/' + name, 'wb') as f:
        pickle.dump(obj, f, pickle.HIGHEST_PROTOCOL)


def load_obj(name):
    with open('cache/' + name, 'rb') as f:
        return pickle.load(f)


for dirname, dirnames, filenames in os.walk('cache'):
    for filename in filenames:
        if filename != ".gitignore":
            cache[filename] = True

