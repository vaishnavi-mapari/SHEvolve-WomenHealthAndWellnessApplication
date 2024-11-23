import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// Screens
import Landing from "./screens/Landing.jsx";
import Dashboard from "./components/dashboard/Dashboard.js";
import TrackPeriod from "./components/Period_Cycle/Tracker_Period.jsx";
import SignUp from "./components/login/signUp.jsx";
import Login from "./components/login/Login.jsx";
import UserForm from "./components/Appointment/UserForm.js";
import NearClinic from "./components/nearestClinic/nearestClinic.jsx";
import NearHospital from "./components/nearestHospital/nearestHospital.jsx";
import Yoga from "./components/Yoga/Yoga";
import Food from "./components/Food/Food";
import Products from './components/Menstrual/Products'; // Adjust the path according to your folder structure
import MoodTracker from './components/Menstrual/MoodTracker'; // Create this component or adjust the path
import SchemeList from "./components/Sections/SchemeList.js";
import GeminiChatbot from "./components/GeminiBot/GeminiBot.js";
// import Sidebar from './Sidebar'; // Your sidebar component


export default function App() {
  const { t } = useTranslation(); // t function for translating keys

  // Function to load the Google Translate script
  useEffect(() => {
    const addGoogleTranslate = () => {
      const googleTranslateScript = document.createElement('script');
      googleTranslateScript.type = 'text/javascript';
      googleTranslateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(googleTranslateScript);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en', // Default language
        includedLanguages: 'en,mr,hi,es,fr,de,zh-CN,ja,ko,ru,it,nl,pt,ar,af,am,bg,ta,th,uk', // Add 20 languages
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false, // Avoid auto-translation based on user preferences
      }, 'google_translate_element');
    };

    addGoogleTranslate();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        <title>{t('welcome')}</title>
      </Helmet>
      
      {/* Google Translate Dropdown */}
      <div id="google_translate_element" style={{ float: 'right', margin: '10px' }}></div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/track" element={<TrackPeriod />} />
          <Route path="/gemini" element={<GeminiChatbot />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointment" element={<UserForm />} />
          <Route path="/nearclinic" element={<NearClinic />} />
          <Route path="/nearhospital" element={<NearHospital />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/food" element={<Food />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/mood-tracker" element={<MoodTracker/>} />
          <Route path="/scheme" element={<SchemeList/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
