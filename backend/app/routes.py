from flask import Blueprint

# main is name of the blueprint
main = Blueprint('main', __name__)

@main.route('/api/hello', methods=['GET'])
def hello():
    return {'message': 'Hello from flask!'}

@main.route('/userlist', methods=['GET'])
def get_user_anime_completed():
    return {}