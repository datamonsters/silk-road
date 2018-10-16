import binascii
import os
import uuid
from random import random

from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

import model.map_data as mapdata

DEBUG = True

vue = os.path.join(os.path.dirname(os.path.abspath(__file__)), "vue", "dist")

# app = Flask(__name__, static_url_path='', static_folder=vue)
# app.config.from_object(__name__)

app = Flask(__name__, static_folder="vue/dist", static_url_path='')
CORS(app)


@app.route('/')
def root():
    return app.send_static_file('index.html')


hash_var = str(binascii.hexlify(os.urandom(16)))


@app.route('/hash', methods=['GET'])
def hash():
    return jsonify(hash_var)


@app.route('/cities', methods=['GET'])
def cities():
    return jsonify(mapdata.cities)


print(mapdata.edges)


@app.route('/edges', methods=['GET'])
def edges():
    return jsonify(mapdata.edges)


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
