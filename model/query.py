# start roads
import os
import pickle
import time
import timeit

roads = {
    "silk": False,
    "mongolian": False,
    "trans_sib": True,
    "northeast_passage": False
    # "japan_korea": False,
}

# start Q settings
capacity = [
    23.2328528,
    355.1496702,
    4346.355488,
    61369.86301,
    1448.785163
]
# settings = [
#     1,
#     1,
#     1,
#     1,
#     1
# ]

durations = []

from pandas import json, np
import model.fn_matrix as f

cache = dict()


def norma(a):
    return [int(a[0]), int(a[1]), a[2] * 10000000]


def calc_traffic(hash):
    if hash in cache:
        print("from cache", hash)
        return load_obj(hash)
    else:
        print("no hash in cache", hash)
        r = un_hash_query(hash)
        f.V = np.array(r["cap"])
        # f.V = settings
        start = time.time()
        p, j = f.PJ(f.V, f.Q, f.P, r['silk'], True, r['trans_sib'], r['northeast_passage'], r['mongolian'])
        aj = list(map(norma, j.tolist()))
        obj = {
            "p": p.tolist(),
            "j": aj
        }
        durations.append(time.time() - start)

        save_obj(obj, hash)
        return obj

def z(v):
    if v:
        return "1"
    else:
        return "0"


def un_hash_query(r):
    h = r.split("-")
    a = list(h[0])
    q = h[1].split("_")
    return {
        "cap": list(map(int, q)),
        'silk': bool(int(a[0])),
        'mongolian': bool(int(a[1])),
        'trans_sib': bool(int(a[2])),
        'northeast_passage': bool(int(a[3])),
    }


# def hash_query(r):
#     ar = (z(r['silk']), z(r['trans_sib']), z(r['northeast_passage']), z(r['mongolian']))
#     s = "".join(ar)
#     return s


def save_obj(obj, name):
    cache[name] = True
    with open('cache/' + name, 'wb') as f:
        pickle.dump(obj, f, pickle.HIGHEST_PROTOCOL)


def load_obj(name):
    with open('cache/' + name, 'rb') as f:
        return pickle.load(f)


for dirname, dirnames, filenames in os.walk('cache'):
    for filename in filenames:
        if filename != ".gitignore":
            cache[filename] = True
