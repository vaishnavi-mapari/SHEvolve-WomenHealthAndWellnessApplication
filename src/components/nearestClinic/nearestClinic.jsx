import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Firebase import
import { onAuthStateChanged } from "firebase/auth";
import Modal from "../Modal/Modal";
import "../dashboard/Dashboard.css";
import "../Sections/blogCard.css";

const NearClinic = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModel, setOpenModel] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // State to handle user info

  const navigate = useNavigate();

  useEffect(() => {
    const userActivity = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user); // Set the current user
        } else {
          navigate("/"); // Redirect to home if user is not authenticated
        }
      });
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    const showPosition = (position) => {
      setLocation(`${position.coords.latitude},${position.coords.longitude}`);
      setLoading(false);
    };

    const showError = (error) => {
      alert("Unable to retrieve your location: " + error.message);
      setLoading(false);
    };

    userActivity();
    getLocation();
  }, [navigate]);

  const renderMap = () => {
    if (loading) {
      return <p>Loading map...</p>;
    }

    if (location) {
      return (
        <iframe
          src={`https://maps.google.com/maps?ll=${location}&q=pharmacy&z=13&ie=UTF8&output=embed`}
          width="100%"
          height="900"
          allowFullScreen
          title="Google Map"
        ></iframe>
      );
    } else {
      return <p>Location not available.</p>;
    }
  };

  return (
    <div className="clinic">
      {/* <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="btn w-full btn-primary text-truncate rounded-0 border-0 position-relative"
        style={{ zIndex: "1000", background: "#E52F8A", marginTop: "0px" }}
      >
        <strong>Hey! SHEvolve : : </strong> Supporting Women Through Every Cycle of Life
      </a> */}

      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg">
          <div className="container-fluid">
            {/* Navbar Brand */}
            <div style={{ marginLeft: "10px" }}>
              <img
                width={70}
                height={70}
                style={{ borderRadius: "100%", margin: "auto" }}
                src={currentUser?.photoURL || "defaultImageUrl"}
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
                {currentUser?.displayName || "User"}
              </span>
            </div>

            {/* User menu (mobile) */}
            <div className="navbar-user d-lg-none">
              <div className="dropdown">
                <a
                  href="#"
                  id="sidebarAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    alt="User Avatar"
                    src={currentUser?.photoURL || "defaultImageUrl"}
                    className="avatar rounded-circle"
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                  <Link to="/dashboard" className="dropdown-item">Home</Link>
                  <Link to="/track" className="dropdown-item">Period Tracker</Link>
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                  <hr className="dropdown-divider" />
                  <a href="#" onClick={() => auth.signOut()} className="dropdown-item">Logout</a>
                </div>
              </div>
            </div>

            {/* Navbar Collapse */}
            <div className="collapse navbar-collapse" id="sidebarCollapse">
              {/* Navigation Links */}
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
    </li>      </ul>
              <hr className="navbar-divider my-5 opacity-20" />
              {/* User Logout */}
              <ul className="navbar-nav">
                <li className="nav-item" style={{ cursor: "pointer" }} onClick={() => auth.signOut()}>
                  <a className="nav-link" href="#"><i className="bi bi-box-arrow-left"></i> Logout</a>
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
                  {`Hello , ${currentUser?.displayName?.toLowerCase() || "User"}`}
                </h1>
                <div className="text-sm-end">
                  <button
                    onClick={() => setOpenModel(true)}
                    className="btn d-inline-flex btn-sm btn-primary mx-1"
                    style={{
                      background: "#F65AA8",
                      color: "white",
                      border: "none",
                    }}
                  >
                    <span className="pe-2">
                      <i className="bi bi-plus" style={{ fontSize: "15px" }}></i>
                    </span>
                    <span>Create Reminder</span>
                  </button>
                </div>
                {openModel && <Modal setOpenModel={setOpenModel} />}
              </div>
            </div>
          </header>

          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
              {renderMap()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NearClinic;
