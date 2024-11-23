import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import DashboardBlogCard from "../Sections/DashboardBlogCard";
import Modal from "../Modal/Modal";
import "../Sections/blogCard.css";
import MenstrualDiseases from "../Sections/MenstrualDiseases"; // Import your MenstrualDiseases component

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const useBlogs = (currentUser) => {
  const [blogs, setBlogs] = useState([]);
  const [blogIds, setBlogIds] = useState([]);
  const [blogCount, setBlogCount] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (!currentUser) return;

    const blogRef = collection(db, "blogs", currentUser.uid, "blog");
    const unsubscribe = onSnapshot(blogRef, (snapshot) => {
      const blogData = [];
      const ids = [];
      snapshot.docs.forEach((doc) => {
        ids.push(doc.id);
        blogData.push(doc.data());
      });
      setBlogs(blogData);
      setBlogIds(ids);
      setBlogCount(blogData.length);
      setLoading(false); // Set loading to false when data is fetched
    });

    return () => unsubscribe(); // Clean up subscription
  }, [currentUser]);

  return { blogs, blogIds, blogCount, loading };
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [logoutConfirmation, setLogoutConfirmation] = useState(false);

  // Handle user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe(); // Clean up subscription
  }, [navigate]);

  const { blogs, blogIds, blogCount, loading } = useBlogs(currentUser);

  const handleLogout = () => {
    setLogoutConfirmation(false);
    auth.signOut();
  };

  return (
    <ErrorBoundary>
      <Helmet>
        <title>{`SHEvolve | ${currentUser?.displayName} Dashboard`}</title>
      </Helmet>
      <a
        href="#"
        className="btn w-full btn-primary rounded-0 border-0 position-relative"
        style={{ zIndex: "1000", background: "#E52F8A", marginTop: "0px" }}
      >
        <strong>Hey! SHEvolve : : </strong> Supporting Women Through Every Cycle of Life
      </a>

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
                <li className="nav-item" style={{ cursor: "pointer" }} onClick={() => setLogoutConfirmation(true)}>
                  <a className="nav-link" href="#">
                    <i className="bi bi-box-arrow-left"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          <header className="bg-surface-primary border-bottom pt-6">
            <div className="container-fluid">
              <div className="mb-npx">
                <div className="row align-items-center">
                  <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                    <h1 className="h2 mb-0 ls-tight" style={{ color: "#5C60F5" }}>{`Hello , ${currentUser?.displayName?.toLowerCase()}`}</h1>
                  </div>
                  <div className="col-sm-6 col-12 text-sm-end">
                    <button
                      onClick={() => setOpenModal(true)}
                      className="btn d-inline-flex btn-sm btn-primary mx-1"
                      style={{ background: "#F65AA8", color: "white", border: "none" }}
                    >
                      <span className="pe-2"><i className="bi bi-plus" style={{ fontSize: "15px" }}></i></span>
                      <span>Create Reminder</span>
                    </button>
                  </div>
                </div>
                <ul className="nav nav-tabs mt-4 overflow-x border-0">
                  <li className="nav-item"><a href="#" className="nav-link active">All Stats</a></li>
                </ul>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
              <div className="row g-6 mb-6">
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card bg-light shadow-light-lg border-light rounded-2">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h6 className="text-sm text-muted mb-0">Blogs</h6>
                          <span className="h3 mb-0">{loading ? 'Loading...' : blogCount}</span>
                        </div>
                        <div className="col-auto">
                          <span className="badge badge-circle bg-primary">
                            <i className="bi bi-chat"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Cards */}
              <div className="row g-6 mb-6">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  blogs.map((blog, index) => (
                    <DashboardBlogCard
                      key={blogIds[index]}
                      blog={blog}
                      blogId={blogIds[index]}
                    />
                  ))
                )}
              </div>

              {/* Menstrual Health Videos Section */}
              <div className="container-fluid">
  <h2 className="my-4">Menstrual Health Videos</h2>
  <div className="row">
    {/* Video 1 */}
    <div className="col-md-6 mb-4">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/QYBdqiZPHhA"
        title="Understanding the Menstrual Cycle"
        allowFullScreen
      ></iframe>
      <a href="https://example.com/article1" target="_blank" rel="noopener noreferrer">
        Read Article: Understanding the Menstrual Cycle
      </a>
    </div>

    {/* Video 2 */}
    <div className="col-md-6 mb-4">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/cCBLm9f1Zd8"
        title="Menstrual Hygiene Tips"
        allowFullScreen
      ></iframe>
      <a href="https://example.com/article2" target="_blank" rel="noopener noreferrer">
        Read Article: Menstrual Hygiene Tips
      </a>
    </div>

    {/* Video 3 */}
    <div className="col-md-6 mb-4">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/zBznCvr8SJY"
        title="Common Menstrual Problems"
        allowFullScreen
      ></iframe>
      <a href="https://example.com/article3" target="_blank" rel="noopener noreferrer">
        Read Article: Common Menstrual Problems
      </a>
    </div>

    {/* Video 4 */}
    <div className="col-md-6 mb-4">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/vXrQ_FhZmos"
        title="Menstrual Cycle Phases Explained"
        allowFullScreen
      ></iframe>
      <a href="https://example.com/article4" target="_blank" rel="noopener noreferrer">
        Read Article: Menstrual Cycle Phases Explained
      </a>
    </div>

    {/* Video 5 */}
    <div className="col-md-6 mb-4">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/AEe1d7Dw_IA"
        title="How to Maintain Menstrual Hygiene"
        allowFullScreen
      ></iframe>
      <a href="https://example.com/article5" target="_blank" rel="noopener noreferrer">
        Read Article: How to Maintain Menstrual Hygiene
      </a>
    </div>
  </div>
</div>
              {/* Menstrual Diseases Section */}
              <MenstrualDiseases />
            </div>
          </main>
        </div>
      </div>

      {openModal && (
        <Modal onClose={() => setOpenModal(false)} />
      )}

      {logoutConfirmation && (
        <Modal onClose={() => setLogoutConfirmation(false)}>
          <div className="text-center">
            <h2>Are you sure you want to logout?</h2>
            <div className="mt-4">
              <button className="btn btn-danger" onClick={handleLogout}>Yes</button>
              <button className="btn btn-secondary" onClick={() => setLogoutConfirmation(false)}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </ErrorBoundary>
  );
};

export default Dashboard;
