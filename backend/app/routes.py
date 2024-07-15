from flask import Blueprint
import requests

# main is name of the blueprint
main = Blueprint('main', __name__)

@main.route('/api/hello', methods=['GET'])
def hello():
    return {'message': 'Hello from flask!'}
