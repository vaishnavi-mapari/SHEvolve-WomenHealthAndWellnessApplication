// import React, { useState, useEffect } from "react";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import TrackPeriod from "./Tracker_Period"; // Assuming this component is for tracking periods
// import TopNavbar from "../Nav/TopNavbar"; // Add your top navigation bar component
// import Footer from "../Sections/Footer"; // Add your footer component
// import { auth } from "../../firebase"; // Import your firebase authentication for user handling
// import { onAuthStateChanged } from "firebase/auth";

// function Tracker() {
// 	const [userData, setUserData] = useState(null);
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		// Listen to authentication state changes
// 		const unsubscribe = onAuthStateChanged(auth, (user) => {
// 			if (user) {
// 				setUserData(user); // Set user data if logged in
// 			} else {
// 				setUserData(null); // No user is logged in
// 			}
// 			setLoading(false); // Stop loading once checked
// 		});

// 		return () => unsubscribe(); // Clean up subscription on unmount
// 	}, []);

// 	if (loading) {
// 		return (
// 			<Container maxWidth="lg" style={{ textAlign: "center", marginTop: "20px" }}>
// 				<Typography variant="h4" color="text.secondary">Loading...</Typography>
// 			</Container>
// 		);
// 	}

// 	const notLoggedInTracker = (
// 		<Box py={6}>
// 			<Container maxWidth="md">
// 				<Grid container spacing={5}>
// 					<Grid item xs={12}>
// 						<Box my={3}>
// 							<Typography
// 								variant="h3"
// 								align="center"
// 								gutterBottom
// 								style={{ color: "#9867C5" }}
// 							>
// 								Tracking Your Cycle
// 							</Typography>
// 							<Typography
// 								variant="body2"
// 								align="center"
// 								color="text.primary"
// 							>
// 								Thanks to modern technology, you can now know exactly when
// 								to throw extra pads in your schoolbag or handbag. Simply key
// 								your info into our period cycle tracker to see when you
// 								might be feeling PMS, and when you can expect your period.
// 								Now you can stay prepared - fuss free!
// 							</Typography>
// 						</Box>
// 					</Grid>
// 				</Grid>
// 			</Container>
// 			<Container maxWidth="lg">
// 				<TrackPeriod />
// 			</Container>
// 		</Box>
// 	);

// 	const loggedInTracker = (
// 		<Box py={6}>
// 			<Container maxWidth="md">
// 				<Grid container spacing={5}>
// 					<Grid item xs={12}>
// 						<Box my={3}>
// 							<Typography
// 								variant="h3"
// 								align="center"
// 								gutterBottom
// 								style={{ color: "#9867C5" }}
// 							>
// 								Welcome Back, {userData.displayName}!
// 							</Typography>
// 							<Typography
// 								variant="body2"
// 								align="center"
// 								color="text.primary"
// 							>
// 								You can now track your cycle with more personalized insights.
// 							</Typography>
// 						</Box>
// 					</Grid>
// 				</Grid>
// 			</Container>
// 			<Container maxWidth="lg">
// 				<TrackPeriod />
// 			</Container>
// 		</Box>
// 	);

// 	// Render content based on user authentication state
// 	return userData ? loggedInTracker : notLoggedInTracker;
// }

// export default Tracker;


import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore"; // For Firestore integration
import Modal from "../Modal/Modal";
import MenstrualDiseases from "../Sections/MenstrualDiseases";
import ErrorBoundary from "../ErrorBoundary"; // Assuming ErrorBoundary is in another file
import "./Dashboard.css";

const PeriodTracker = () => {
  const [cycleData, setCycleData] = useState({ startDate: "", endDate: "" });
  const [cycleHistory, setCycleHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        fetchCycleHistory(user);
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchCycleHistory = async (user) => {
    setLoading(true);
    const cycleRef = collection(db, "users", user.uid, "cycles");
    const snapshot = await getDocs(cycleRef);
    const cycles = snapshot.docs.map((doc) => doc.data());
    setCycleHistory(cycles);
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCycleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCycleSubmit = async () => {
    if (!cycleData.startDate || !cycleData.endDate) {
      alert("Please fill in all fields.");
      return;
    }

    const cycleDuration =
      new Date(cycleData.endDate) - new Date(cycleData.startDate);
    const days = cycleDuration / (1000 * 60 * 60 * 24);

    const cycleRef = collection(db, "users", currentUser.uid, "cycles");
    await addDoc(cycleRef, {
      startDate: cycleData.startDate,
      endDate: cycleData.endDate,
      duration: days,
    });

    setCycleData({ startDate: "", endDate: "" });
    fetchCycleHistory(currentUser); // Refresh cycle history after submission
  };

  return (
    <ErrorBoundary>
      <Helmet>
        <title>Period Tracker | SHEvolve</title>
      </Helmet>
      <div className="tracker-container">
        <h2 className="tracker-heading">Track Your Menstrual Cycle</h2>
        <form>
          <div className="form-group">
            <label htmlFor="startDate">Period Start Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={cycleData.startDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">Period End Date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={cycleData.endDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCycleSubmit}
          >
            Log Cycle
          </button>
        </form>

        <h3 className="tracker-history-heading">Cycle History</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {cycleHistory.map((cycle, index) => (
              <li key={index}>
                Start: {cycle.startDate}, End: {cycle.endDate}, Duration:{" "}
                {cycle.duration} days
              </li>
            ))}
          </ul>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default PeriodTracker;
