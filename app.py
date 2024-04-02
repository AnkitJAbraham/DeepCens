from keras.models import load_model
from nltk.tokenize import RegexpTokenizer
from stop_words import get_stop_words
import numpy as np
from gensim import models

# Function to preprocess the input text
def preprocess_text(input_text):
    tokenizer = RegexpTokenizer(r'\w+')
    en_stop = get_stop_words('en')
    tokens = tokenizer.tokenize(input_text.lower())
    stopped_tokens = [token for token in tokens if token not in en_stop]
    return stopped_tokens

# Function to convert the preprocessed text to word vectors
def text_to_vectors(preprocessed_text):
    word_vectors = []
    for token in preprocessed_text:
       if token in model2.key_to_index:
            word_vectors.append(model2[token])
    return np.mean(word_vectors, axis=0)

# Load the trained textual model
model_textual = load_model('model_textual.h5')

# Example text input
input_text = "Ana, a college student, interviews an enigmatic billionaire entrepreneur, Christian, for her campus' periodical. A steamy sadomasochistic affair starts between the two, whose roots lie in his past."

# Preprocess the input text
preprocessed_text = preprocess_text(input_text)

# Convert the preprocessed text to word vectors
input_vectors = text_to_vectors(preprocessed_text)

# Reshape input_vectors to match the input shape expected by the model
input_vectors = input_vectors.reshape(1, -1)

# Make predictions
predicted_genres = model_textual.predict(input_vectors)

# Get the top 3 predicted genres
top_predicted_genres_indices = np.argsort(predicted_genres[0])[-3:]
predicted_genres_list = [Genre_ID_to_name[genre_list[index]] for index in top_predicted_genres_indices]

print("Predicted genres:", predicted_genres_list)
