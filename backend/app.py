from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "message": "Digital Farmer Marketplace API is running"
    })


@app.route("/api/products")
def products():
    return jsonify([
        {
            "id": 1,
            "name": "Tomato",
            "price": 40,
            "unit": "kg"
        },
        {
            "id": 2,
            "name": "Rice",
            "price": 60,
            "unit": "kg"
        },
        {
            "id": 3,
            "name": "Onion",
            "price": 35,
            "unit": "kg"
        }
    ])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)