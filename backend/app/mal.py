import requests
from flask import Blueprint, jsonify, request
import os
from dotenv import load_dotenv

load_dotenv()

CLIENT_ID = os.getenv('CLIENT_ID')
print(CLIENT_ID)
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

api_bp = Blueprint('api', __name__)


@api_bp.route('/api/user_anime_list', methods=['GET'])
def user_anime_list():
    user_name = request.args.get('user_name')
    if not user_name:
        return jsonify({'error': 'Missing user name'}), 400

    status = request.args.get('status')
    sort = request.args.get('sort')
    limit = request.args.get('limit', 1000)
    offset = request.args.get('offset', 0)

    anime_list_url = f'https://api.myanimelist.net/v2/users/{user_name}/animelist'
    headers = {'X-MAL-CLIENT-ID': CLIENT_ID}
    params = {
        'status': status,
        'sort': sort,
        'limit': limit,
        'offset': offset
    }

    response = requests.get(anime_list_url, headers=headers, params=params)
    response.raise_for_status()
    anime_list = response.json()
    return jsonify({'anime_list': anime_list})