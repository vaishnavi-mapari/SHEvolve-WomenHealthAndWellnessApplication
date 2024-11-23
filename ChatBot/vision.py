# Q&A Chatbot

from dotenv import load_dotenv
load_dotenv()  # Load all environment variables

import streamlit as st
import os
import textwrap
from PIL import Image
import openai  # Import OpenAI library

# Set the OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")  # Ensure this is in your .env file

# Function to get responses from OpenAI's ChatCompletion model
def get_openai_response(input_text, image):
    # Convert the image to bytes
    image_bytes = image.tobytes() if image is not None else None

    # Create the messages for the API
    messages = [{"role": "user", "content": input_text}] if input_text else []

    # If an image is provided, include it in the API call
    if image_bytes:
        # Note: OpenAI's API does not currently support image input directly.
        # You might need a different approach for image input.
        # For example, you could use a service to analyze the image first
        # and then provide the result here as part of the conversation.
        # Placeholder for the image analysis:
        image_description = "This is an image analysis description."  # Replace with actual image analysis logic
        messages.append({"role": "system", "content": image_description})

    # Call OpenAI API
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # or "gpt-4" based on your subscription
        messages=messages
    )
    
    return response['choices'][0]['message']['content']

# Initialize Streamlit app
st.set_page_config(page_title="Gemini Image Demo")
st.header("Gemini Application")

# User input
input_text = st.text_input("Input Prompt: ", key="input")
uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])
image = None

if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption="Uploaded Image.", use_column_width=True)

submit = st.button("Tell me about the image")

# If the ask button is clicked
if submit:
    response = get_openai_response(input_text, image)
    st.subheader("The Response is")
    st.write(response)
