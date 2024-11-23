import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Toaster, toast } from "react-hot-toast";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";
import "./user.css";

const UserForm = () => {
	const [user, setUser] = useState({
		Name: "",
		Age: "",
		Email: "",
		Problems: "",
		Date: "",
		Time: "",
	});

	const handleUserDoc = async (e) => {
		e.preventDefault();
		try {
			await addDoc(collection(db, "Patient"), user);
			toast.success("Your appointment has been booked successfully!");  // Notify user of successful booking
			resetForm(); // Reset form after submission
			setTimeout(() => {
				window.location.href = "/"; // Redirect after 3 seconds
			}, 3000);
		} catch (error) {
			console.error("Error booking appointment:", error);
			toast.error("Failed to book appointment. Please try again."); // Notify user of error
		}
	};

	// Function to reset form fields
	const resetForm = () => {
		setUser({
			Name: "",
			Age: "",
			Email: "",
			Problems: "",
			Date: "",
			Time: "",
		});
	};

	return (
		<>
			<TopNavbar />
			<div className="main-user" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
				<Toaster
					position="top-center"
					reverseOrder={false}
					gutter={8}
					toastOptions={{
						duration: 5000,
						style: {
							background: "#FA4C86",
							color: "#fff",
						},
						success: {
							duration: 3000,
							theme: {
								primary: "#FA4C86",
								secondary: "black",
							},
						},
					}}
				/>
				<div className="container" style={{ background: "#FA4C86", padding: "20px", borderRadius: "15px" }}>
					<div className="card">
						<div className="card-image">
							<h2 className="card-heading">
								Book Your Appointment
								<small> We are here to support you</small>
							</h2>
						</div>
						<form className="card-form" onSubmit={handleUserDoc}>   
							<div className="input">
								<input
									type="text"
									className="input-field"
									value={user.Name}
									onChange={(e) => setUser({ ...user, Name: e.target.value })}
									required
								/>
								<label className="input-label">Full Name</label> 
							</div>
							<div className="input">
								<input
									type="number"
									min="10"
									max="60"
									className="input-field"
									value={user.Age}
									onChange={(e) => setUser({ ...user, Age: e.target.value })}
									required
								/>
								<label className="input-label">Age (in years)</label>
							</div>
							<div className="input">
								<input
									type="email"
									className="input-field"
									value={user.Email}
									onChange={(e) => setUser({ ...user, Email: e.target.value })}
									required
								/>
								<label className="input-label">Email Address</label>
							</div>
							<div className="input">
								<input
									type="text"
									className="input-field"
									value={user.Problems}
									onChange={(e) => setUser({ ...user, Problems: e.target.value })}
									required
								/>
								<label className="input-label">Describe Your Concerns</label>
							</div>
							<div className="input">
								<input
									type="date"
									className="input-field"
									value={user.Date}
									onChange={(e) => setUser({ ...user, Date: e.target.value })}
									required
								/>
								<label className="input-label">Preferred Date</label>
							</div>
							<div className="input">
								<input
									type="time"
									className="input-field"
									value={user.Time}
									onChange={(e) => setUser({ ...user, Time: e.target.value })}
									required
								/>
								<label className="input-label">Preferred Time</label>
							</div>
							<div className="action">
								<button className="action-button" type="submit">
									Book Your Slot
								</button>
							</div>
						</form>
						<div className="card-info">
							<p>
								By booking an appointment, you agree to our{" "}
								<a href="#">Terms and Conditions</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default UserForm;
