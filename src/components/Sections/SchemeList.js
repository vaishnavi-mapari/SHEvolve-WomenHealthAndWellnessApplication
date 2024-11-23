import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link if using React Router
import { Helmet } from "react-helmet"; // Import Helmet for managing the document head

// Import images with relative paths
import maternal_health_program from '../../assets/maternal_health_program.jpg';
import breast_cancer_awareness from '../../assets/breast_cancer_awareness_initiative.jpg';
import menstrual_hygiene from '../../assets/menstrual_hygiene_campaign.jpg';
import postpartum_depression from '../../assets/postpartum_depression_support.jpg';
import womens_wellness_checkups from '../../assets/womens_wellness_checkups.jpg';

// List of sample schemes related to women's health and wellness
const sampleSchemes = [
  {
    id: 1,
    scheme_title: "Maternal Health Program",
    scheme_description: "A comprehensive program focused on ensuring maternal health during and after pregnancy.",
    image_url: maternal_health_program,
    validity_date: "2024-12-31",
    scheme_link: "#",
  },
  {
    id: 2,
    scheme_title: "Breast Cancer Awareness Initiative",
    scheme_description: "This initiative provides free breast cancer screenings and educational resources.",
    image_url: breast_cancer_awareness,
    validity_date: "2025-06-30",
    scheme_link: "#",
  },
  {
    id: 3,
    scheme_title: "Menstrual Hygiene Campaign",
    scheme_description: "A campaign to promote menstrual hygiene awareness and distribute free sanitary products.",
    image_url: menstrual_hygiene,
    validity_date: "2023-11-15",
    scheme_link: "#",
  },
  {
    id: 4,
    scheme_title: "Postpartum Depression Support",
    scheme_description: "Providing mental health resources and support for women suffering from postpartum depression.",
    image_url: postpartum_depression,
    validity_date: "2025-03-10",
    scheme_link: "#",
  },
  {
    id: 5,
    scheme_title: "Women's Wellness Checkups",
    scheme_description: "Free wellness checkups focused on women’s reproductive and general health.",
    image_url: womens_wellness_checkups,
    validity_date: "2024-08-20",
    scheme_link: "#",
  },
];

const SchemeList = ({ currentUser }) => {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    // Randomly select 5 schemes to display
    const randomSchemes = sampleSchemes.sort(() => 0.5 - Math.random()).slice(0, 5);
    setSchemes(randomSchemes);
  }, []);

  return (
    <div className="scheme-list">
      {/* <Helmet>
        <title>{`SHEvolve | ${currentUser?.displayName} Dashboard`}</title>
      </Helmet>
      <a
        href="#"
        className="btn w-full btn-primary rounded-0 border-0 position-relative"
        style={{ zIndex: "1000", background: "#E52F8A", marginTop: "0px" }}
      >
        <strong>Hey! SHEvolve : : </strong> Supporting Women Through Every Cycle of Life
      </a> */}

      {/* Dashboard Layout */}
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {/* Vertical Navbar */}
        <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg">
          <div className="container-fluid">
            <div style={{ marginLeft: "10px" }}>
              <img
                width={70}
                height={70}
                style={{ borderRadius: "100%", margin: "auto" }}
                src={currentUser?.photoURL || "defaultImageUrl"} // Ensure a default image URL is provided
                alt="User Avatar"
              />
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  paddingLeft: "50px",
                  marginTop: "20px",
                  color: "#F65AA8",
                  textAlign: "center",
                }}
              >
                {currentUser?.displayName}
              </span>
            </div>

            <div className="collapse navbar-collapse" id="sidebarCollapse">
              <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/dashboard"><i className="bi bi-house"></i> Home</Link></li>
               
                <li className="nav-item">
                  <Link className="nav-link" to="/track">
                    <i className="bi bi-bookmarks"></i> Period Tracker
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/nearclinic">
                    <i className="bi bi-cart-plus"></i> Nearest Pharmacy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/nearhospital">
                    <i className="bi bi-file-medical"></i> Nearest Hospital
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/yoga">
                    <i className="bi bi-yoga"></i> Yoga
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/food">
                    <i className="bi bi-egg-fried"></i> Food
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gemini">
                    <i className="bi bi-robot"></i> Gemini AI
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mood-tracker">
                    <i className="bi bi-smile"></i> Mood Tracker
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    <i className="bi bi-cart"></i> Product Section
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/scheme">
                    <i className="bi bi-cart"></i> Scheme Section
                  </Link>
                </li>
              </ul>

              <hr className="navbar-divider my-5 opacity-20" />
              <ul className="navbar-nav">
                <li className="nav-item" style={{ cursor: "pointer" }} onClick={() => setLogoutConfirmation(true)}>
                  <a className="nav-link" href="#">
                    <i className="bi bi-box-arrow-left"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          <header className="bg-surface-primary border-bottom pt-6">
            <div className="container-fluid">
              <div className="mb-npx">
                <h1 className="h2 mb-0 ls-tight" style={{ color: "#5C60F5" }}>
                  Welcome to SHEvolve's
                </h1>
              </div>
            </div>
          </header>
          <h2 className="my-4">Health & Wellness Schemes for Women</h2>
          {schemes.length === 0 ? (
            <p>No schemes available.</p>
          ) : (
            <div className="row">
              {schemes.map((scheme) => (
                <div className="col-md-6 mb-4" key={scheme.id}>
                  <div className="card bg-light shadow-light-lg border-light rounded-2">
                    <img src={scheme.image_url} className="card-img-top" alt={scheme.scheme_title} />
                    <div className="card-body">
                      <h5 className="card-title">{scheme.scheme_title}</h5>
                      <p className="card-text">{scheme.scheme_description}</p>
                      <p className="card-text">
                        <small className="text-muted">Valid until: {scheme.validity_date || "N/A"}</small>
                      </p>
                      <a
                        href={scheme.scheme_link || "#"}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemeList;
