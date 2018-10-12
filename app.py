import os
import uuid

from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

DEBUG = True

vue = os.path.join(os.path.dirname(os.path.abspath(__file__)), "vue", "dist")

app = Flask(__name__, static_url_path='', static_folder=vue)
app.config.from_object(__name__)

CORS(app)

app = Flask(__name__, static_folder="vue/dist", static_url_path='')

@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


if __name__ == '__main__':
    app.run()

