import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Link } from 'react-router-dom';

function GeminiInReact() {
  const [inputValue, setInputValue] = useState('');
  const [promptResponses, setPromptResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initialize Gemini AI client
  const genAI = new GoogleGenerativeAI("AIzaSyAPQkOSHg09HAGyHDXGQaaLC-CZculVspY"); // Replace with your actual API key

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSuggestedQuestion = (question) => {
    setInputValue(question);
  };

  const getResponseForGivenPrompt = async () => {
    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(inputValue);
      
      // Reset input field
      setInputValue('');

      // Extract response text and optional image
      const text = result.response.text();
      const image = result.response.image ? result.response.image.url : null;

      // Append new response to the state
      setPromptResponses([...promptResponses, { text, image }]);
    } catch (error) {
      console.error("Something went wrong:", error);
    } finally {
      setLoading(false);
    }
  };

  // Suggested questions for quick access
  const suggestedQuestions = [
    "What can I do to relieve menstrual cramps?",
    "How can I manage irregular periods?",
    "Are there any natural remedies for PMS symptoms?",
    "What foods are beneficial during my menstrual cycle?",
    "Is it normal to experience heavy flow during periods?",
    "How can I track my menstrual cycle?",
    "What exercises are good during menstruation?",
    "When should I consult a doctor about menstrual health?"
  ];

  return (
    <div className="container-fluid">
      {/* Main Content Section */}
      <div className="row">
        <div className="col-lg-3">
          {/* Sidebar Section */}
          <nav className="navbar navbar-vertical navbar-expand-lg bg-light p-3 shadow-sm">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/dashboard"><i className="bi bi-house"></i> Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/track"><i className="bi bi-bookmarks"></i> Period Tracker</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/nearclinic"><i className="bi bi-cart-plus"></i> Nearest Pharmacy</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/nearhospital"><i className="bi bi-file-medical"></i> Nearest Hospital</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/yoga"><i className="bi bi-yoga"></i> Yoga</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/food"><i className="bi bi-egg-fried"></i> Food</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/gemini"><i className="bi bi-robot"></i> Gemini AI</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/mood-tracker"><i className="bi bi-smile"></i> Mood Tracker</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products"><i className="bi bi-cart"></i> Product Section</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/scheme"><i className="bi bi-cart"></i> Scheme Section</Link></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => auth.signOut()}><i className="bi bi-box-arrow-left"></i> Logout</a></li>
            </ul>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="col-lg-9">
          <div className="container my-4" style={{ maxWidth: "750px", margin: "auto" }}>
            <h2 className="text-center mb-4" style={{ color: "#F65AA8" }}>Ask Gemini AI - Women's Health Chatbot</h2>

            <div className="input-group mb-3">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Ask a question about menstrual health..."
                className="form-control"
                style={{
                  borderRadius: "10px",
                  padding: "10px",
                  fontSize: "1rem",
                  border: "1px solid #ced4da",
                }}
              />
              <button
                onClick={getResponseForGivenPrompt}
                className="btn btn-primary"
                style={{
                  marginLeft: "10px",
                  padding: "10px 20px",
                  fontSize: "1rem",
                  borderRadius: "10px",
                  backgroundColor: "#F65AA8",
                  borderColor: "#F65AA8",
                }}
              >
                {loading ? 'Loading...' : 'Send'}
              </button>
            </div>

            <div className="mb-3">
              <label style={{ color: "#6c757d" }}>Suggested Questions:</label>
              <select
                onChange={(e) => handleSuggestedQuestion(e.target.value)}
                className="form-select"
                style={{
                  borderRadius: "10px",
                  fontSize: "1rem",
                  border: "1px solid #ced4da",
                }}
              >
                <option value="" disabled selected>Select a question...</option>
                {suggestedQuestions.map((question, index) => (
                  <option key={index} value={question}>
                    {question}
                  </option>
                ))}
              </select>
            </div>

            {loading && (
              <div className="text-center mt-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            <div className="response-container mt-4" style={{ maxHeight: "500px", overflowY: "auto" }}>
              {promptResponses.length === 0 ? (
                <p className="text-center" style={{ color: "#6c757d" }}>
                  Your responses will appear here. Ask any question to get started!
                </p>
              ) : (
                promptResponses.map((response, index) => (
                  <div key={index} className="response-item mb-4 p-3 rounded shadow-sm bg-light">
                    <p style={{ fontSize: "1rem", marginBottom: "0.5rem", fontWeight: "500" }}>{response.text}</p>
                    {response.image && (
                      <div className="text-center mt-2">
                        <img
                          src={response.image}
                          alt="Generated Response"
                          className="img-fluid rounded"
                          style={{ maxHeight: '250px' }}
                        />
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Footer navigation */}
            <footer className="text-center mt-5">
              <p style={{ color: "#6c757d" }}>
                Need more help? Visit our <Link to="/faq" style={{ color: "#F65AA8" }}>FAQ</Link> or <Link to="/support" style={{ color: "#F65AA8" }}>Support</Link> page.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeminiInReact;

