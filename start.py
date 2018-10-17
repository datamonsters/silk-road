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


hash_var = str(binascii.hexlify(os.urandom(16)))


@app.route('/hash', methods=['GET'])
def hash():
    return jsonify({
        "hash": hash_var,
        "dur": query.durations,
    })


@app.route('/traffic', methods=['GET'])
def traffic():
    hash = request.args.get('hash')
    r = None
    if hash:
        r = query.calc_traffic(hash)

    return jsonify({
        "traffic": r['j'],
    })




@app.route('/base', methods=['GET'])
def base():
    hash = query.hash_query(query.roads)
    r = query.calc_traffic(hash)
    return jsonify({
        "traffic": r['j'],
        "roads": query.roads,
        "settings": query.settings
    })


@app.route('/cities', methods=['GET'])
def cities():
    return jsonify(mapdata.cities)


@app.route('/edges', methods=['GET'])
def edges():
    return jsonify(mapdata.edges)


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


q = query.calc_traffic(query.hash_query(query.roads))
if __name__ == '__main__':
    if DEBUG:
        app.run()
    else:
        app.run(host='0.0.0.0', port=80)
