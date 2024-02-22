from flask import Flask, request, jsonify
from joblib import load
import re
import numpy as np
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow CORS for all routes

# Load the trained model
nb_classifier = load('nb_classifier.joblib')
cv = CountVectorizer(max_features=10000, ngram_range=(1,2))

@app.route('/predict', methods=['POST'])
def predict_genre():
    data = request.json
    script = data['script']
    prediction = genre_prediction(script)
    return jsonify({'prediction': list(genre_mapper.keys())[prediction]})

def genre_prediction(sample_script):
    sample_script = re.sub(pattern='[^a-zA-Z]',repl=' ', string=sample_script)
    sample_script = sample_script.lower()
    sample_script_words = sample_script.split()
    sample_script_words = [word for word in sample_script_words if not word in set(stopwords.words('english'))]
    ps = PorterStemmer()
    final_script = [ps.stem(word) for word in sample_script_words]
    final_script = ' '.join(final_script)
    temp = cv.transform([final_script]).toarray()
    return nb_classifier.predict(temp)[0]

if __name__ == '__main__':
    app.run(debug=True, port=5000)
