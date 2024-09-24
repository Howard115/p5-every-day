from flask import Flask, render_template, jsonify
import requests
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/fetch-random-sketch')
def fetch_random_sketch():
    random_sketch_id = random.randint(1, 1000)
    url = f"https://openprocessing.org/api/sketch/{random_sketch_id}/code"
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        new_code = data[0]['code']
        with open('static/js/sketch.js', 'w') as file:
            file.write(new_code)
        return jsonify({"message": "Sketch updated successfully"})
    except requests.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)