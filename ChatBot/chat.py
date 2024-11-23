# Q&A Chatbot
import os
import textwrap
import streamlit as st
from dotenv import load_dotenv
import openai  # Import the OpenAI library

# Load environment variables from .env
load_dotenv()

# Set the OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")  # Ensure this is in your .env file

def to_markdown(text):
    text = text.replace('•', '  *')
    return textwrap.indent(text, '> ', predicate=lambda _: True)

# Function to get response from OpenAI model
def get_openai_response(question):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # or "gpt-4" based on your subscription
        messages=[
            {"role": "user", "content": question}
        ]
    )
    return response['choices'][0]['message']['content']

# Initialize Streamlit app
st.set_page_config(page_title="Q&A Demo")
st.header("Gemini Application")

# User input
user_input = st.text_input("Input: ", key="input")
submit = st.button("Ask the question")

# If the ask button is clicked
if submit:
    if user_input:  # Check if user input is not empty
        response = get_openai_response(user_input)
        st.subheader("The Response is")
        st.write(response)
    else:
        st.warning("Please enter a question.")
