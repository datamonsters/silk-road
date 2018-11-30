import binascii
import os

import model.map_data as mapdata
import model.query as query

from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

import argparse

parser = argparse.ArgumentParser()
parser.add_argument('mode', nargs='?')
args = parser.parse_args()

if args.mode:
    DEBUG = False
else:
    DEBUG = True

vue = os.path.join(os.path.dirname(os.path.abspath(__file__)), "vue", "dist")

app = Flask(__name__, static_folder="vue/dist", static_url_path='')
CORS(app)


@app.route('/')
def root():
    return app.send_static_file('index.html')


sync_stamp = str(binascii.hexlify(os.urandom(16)))

hash = '1000-23_355_4346_61370_1449'

@app.route('/sync', methods=['GET'])
def sync():
    return jsonify({
        "syncStamp": sync_stamp,
        "dur": query.durations,
        "hash": hash
    })

@app.route('/traffic', methods=['GET'])
def traffic():
    global hash
    hash = request.args.get('hash')
    r = None
    if hash:
        r = query.calc_traffic(hash)

    return jsonify({
        "traffic": r['j'],
    })



@app.route('/graph', methods=['GET'])
def graph():
    return jsonify({
        "cities": mapdata.cities,
        "edges": mapdata.edges,
        # "capacity": query.capacity,
        # "roads": query.roads,
    })



@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


q = query.calc_traffic(hash)
if __name__ == '__main__':
    if DEBUG:
        app.run()
    else:
        app.run(host='0.0.0.0', port=80)
