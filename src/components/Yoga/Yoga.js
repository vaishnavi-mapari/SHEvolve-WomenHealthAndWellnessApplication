import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // Make sure to import Helmet if it's used
import "./Yoga.css";

// Import images from assets
import childPose from "../../assets/img/child_pose.jpg";
import catCowPose from "../../assets/img/cat_cow_pose.jpg";
import cobraPose from "../../assets/img/cobra_pose.jpg";
import legsUpWallPose from "../../assets/img/legs_up_wall.jpg";
import supineTwistPose from "../../assets/img/supine_twist.jpg";

const Yoga = ({ currentUser }) => {
  const [problem, setProblem] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  // List of menstrual issues
  const menstrualIssues = [
    "Cramps (Dysmenorrhea)",
    "Bloating",
    "Headaches",
    "Mood swings",
    "Fatigue",
    "Back pain",
    "Sleep disturbances",
  ];

  // Define yoga poses and map them to specific issues
  const yogaPosesMapping = {
    "cramps": [
      {
        name: "Child's Pose (Balasana)",
        description: "Helps relieve tension and calm the nervous system.",
        img: childPose,
      },
      {
        name: "Cat-Cow Pose (Marjaryasana-Bitilasana)",
        description: "Stretches the spine and relieves cramps.",
        img: catCowPose,
      },
    ],
    "bloating": [
      {
        name: "Legs Up the Wall (Viparita Karani)",
        description: "Improves circulation and reduces bloating.",
        img: legsUpWallPose,
      },
    ],
    "headaches": [
      {
        name: "Cobra Pose (Bhujangasana)",
        description: "Opens the chest and shoulders, reducing stress.",
        img: cobraPose,
      },
    ],
    "mood swings": [
      {
        name: "Child's Pose (Balasana)",
        description: "Calms the mind and alleviates stress.",
        img: childPose,
      },
      {
        name: "Supine Twist (Supta Matsyendrasana)",
        description: "Relieves tension in the hips and spine.",
        img: supineTwistPose,
      },
    ],
    "fatigue": [
      {
        name: "Legs Up the Wall (Viparita Karani)",
        description: "Helps boost energy levels and reduce fatigue.",
        img: legsUpWallPose,
      },
    ],
    "back pain": [
      {
        name: "Cat-Cow Pose (Marjaryasana-Bitilasana)",
        description: "Stretches and strengthens the back.",
        img: catCowPose,
      },
    ],
    "sleep disturbances": [
      {
        name: "Supine Twist (Supta Matsyendrasana)",
        description: "Promotes relaxation and prepares the body for rest.",
        img: supineTwistPose,
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRecommendations(true);
  };

  const resetForm = () => {
    setProblem("");
    setShowRecommendations(false);
  };

  // Filter poses based on the selected issue
  const selectedPoses = yogaPosesMapping[problem.toLowerCase()] || [];

  return (
    <>
      <div className="yoga-section">
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
                  <li
                    className="nav-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => setLogoutConfirmation(true)}
                  >
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
                <h1 className="h2 mb-0 ls-tight" style={{ color: "#5C60F5" }}>
                  Yoga Poses for Menstrual Relief
                </h1>
              </div>
            </header>

            <main className="py-6 bg-surface-secondary">
              <div className="container-fluid">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="problem" className="form-label">
                      Specific menstrual issue:
                    </label>
                    <select
                      id="problem"
                      className="form-control"
                      value={problem}
                      onChange={(e) => setProblem(e.target.value)}
                      required
                    >
                      <option value="">Select an issue</option>
                      {menstrualIssues.map((issue, index) => (
                        <option key={index} value={issue.toLowerCase()}>
                          {issue}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Get Recommendations
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={resetForm}
                  >
                    Reset
                  </button>
                </form>

                {/* Yoga Recommendations */}
                {showRecommendations && (
                  <div className="yoga-list mt-4">
                    {selectedPoses.length > 0 ? (
                      selectedPoses.map((pose, index) => (
                        <div className="yoga-card" key={index}>
                          <img
                            src={pose.img}
                            alt={`${pose.name} yoga pose`}
                            className="yoga-img"
                          />
                          <h2 className="yoga-name">{pose.name}</h2>
                          <p className="yoga-description">{pose.description}</p>
                        </div>
                      ))
                    ) : (
                      <p>No recommendations available for this issue.</p>
                    )}
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yoga;
