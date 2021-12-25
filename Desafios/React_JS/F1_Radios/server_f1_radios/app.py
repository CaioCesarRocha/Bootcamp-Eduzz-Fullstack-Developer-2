import random
from flask import jsonify,request,Flask
from flask_cors import CORS, cross_origin
import pandas as pd

F1RadiosApi = Flask(__name__)
cors = CORS(F1RadiosApi)
F1RadiosApi.config['CORS_HEADERS'] = 'Content-Type'

df = pd.read_csv('finalQuotes.csv', names=['Pilots', 'Quotes'])

def get_random_quote():
    rq = random.randint(0, len(df))
    piloting = df.values[rq][0]
    quote = df.values[rq][1]
    print(piloting, quote)
    quote_obj = {"pilot": piloting, "quote": quote}
    return quote_obj

@cross_origin()
@F1RadiosApi.route('/', methods=['GET'])
def dashboard():
    return jsonify(get_random_quote())

if __name__ == '__main__':
    F1RadiosApi.run(host= '127.0.0.1',port=5000)
