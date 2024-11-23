import base64
from io import BytesIO
import os
from dotenv import load_dotenv
import streamlit as st
from PIL import Image
import google.generativeai as genai

# Load environment variables
load_dotenv()
genai_api_key = os.getenv("GEMINI_API_KEY")  # Ensure your API key is in the .env file
genai.configure(api_key=genai_api_key)

# Define a function to interact with the Gemini API
def get_gemini_response(input_text, image=None):
    if not input_text:
        return "Please enter a prompt."
    
    # Prepare the messages payload for the Gemini model
    messages = [
        {
            "role": "user",
            "parts": [
                {"text": input_text}  # Updated to match expected structure
            ]
        }
    ]

    # If there's an image, handle it accordingly
    if image:
        buffered = BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()

        # Update the structure for image data
        messages.append({
            "role": "user",
            "parts": [
                {
                    "inline_data": {
                        "mime_type": "image/png",
                        "data": img_str
                    }
                }
            ]
        })
    
    try:
        # Generate the response using the `generate_content` method
        model = genai.GenerativeModel('gemini-1.5-flash-latest')
        response = model.generate_content(messages)
        return response.text  # Adjust based on response structure
    except Exception as e:
        return f"Error: {str(e)}"

# Streamlit App Layout
st.set_page_config(page_title="Gemini Chatbot Demo")
st.header("Gemini Chatbot Application")

# User input and image upload
input_text = st.text_input("Input Prompt: ", key="input")
uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])
image = None

# Display the uploaded image
if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption="Uploaded Image", use_column_width=True)

# Generate a response when the button is clicked
submit = st.button("Generate Response")

if submit:
    response = get_gemini_response(input_text, image)
    st.subheader("The Response is")
    st.write(response)


# from dotenv import load_dotenv
# import os
# import streamlit as st
# from PIL import Image
# import openai  # Ensure openai is installed and updated to the latest version

# # Load environment variables
# load_dotenv()
# openai.api_key = os.getenv("OPENAI_API_KEY")  # Add your API key to the .env file

# # Define a function to interact with the OpenAI API
# def get_openai_response(input_text, image=None):
#     if not input_text:
#         return "Please enter a prompt."
    
#     # Create a list with a message dictionary
#     messages = [{"role": "user", "content": input_text}]

#     try:
#         # Generate response using the new OpenAI API structure
#         response = openai.ChatCompletion.create(
#             model="gpt-3.5-turbo",  # Use "gpt-4" if you have access
#             messages=messages
#         )
#         return response.choices[0].message.content  # Extract the response content
#     except Exception as e:
#         return f"Error: {str(e)}"

# # Streamlit App Layout
# st.set_page_config(page_title="Gemini Image Demo")
# st.header("Gemini Application")

# # User input and image upload
# input_text = st.text_input("Input Prompt: ", key="input")
# uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])
# image = None

# # Display the uploaded image
# if uploaded_file is not None:
#     image = Image.open(uploaded_file)
#     st.image(image, caption="Uploaded Image", use_column_width=True)

# # Generate a response when the button is clicked
# submit = st.button("Generate Response")

# if submit:
#     response = get_openai_response(input_text, image)
#     st.subheader("The Response is")
#     st.write(response)
