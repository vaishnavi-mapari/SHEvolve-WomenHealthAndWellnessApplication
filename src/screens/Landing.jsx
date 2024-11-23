import React from 'react';
import { useTranslation } from 'react-i18next';
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  const { t } = useTranslation(); // Get translation function

  return (
    <>
      <TopNavbar />
      <Header />
     
      {/* <div>
        <h1>{t('welcome')}</h1> {/* Example translation for welcome */}
        {/* <p>{t('signup')}</p> Example translation for signup */}
      {/* </div> */} 
      <Services />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
