import pyttsx3
import sys

def read_script(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
            return content
    except FileNotFoundError:
        print(f"Error: The file {file_path} was not found.")
        sys.exit(1)

def speak_text(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <path_to_script>")
        sys.exit(1)

    script_path = sys.argv[1]
    script_content = read_script(script_path)
    speak_text(script_content)