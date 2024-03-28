from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://mongo:27017/userdb"
mongo = PyMongo(app)

@app.route('/api/user', methods=['POST'])
def add_user():
    user_data = request.get_json()
    mongo.db.users.insert_one(user_data)
    return jsonify({"message": "User added successfully"}), 201
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
