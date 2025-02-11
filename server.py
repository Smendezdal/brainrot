from flask import Flask, request, send_file
from flask_cors import CORS
import pyttsx3
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "No file part", 400

    file = request.files['file']
    if file.filename == '':
        return "No selected file", 400

    file_path = os.path.join('uploads', file.filename)
    file.save(file_path)

    # Read the file content
    with open(file_path, 'r') as f:
        content = f.read()

    # Convert text to speech
    engine = pyttsx3.init()
    audio_path = 'output.mp3'
    engine.save_to_file(content, audio_path)
    engine.runAndWait()

    return send_file(audio_path, as_attachment=True)

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)