import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./user.css";

const BlogForm = () => {
	const navigate = useNavigate();

	// Check user authentication
	const userActivity = () => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				navigate("/");
			}
		});
	};

	useEffect(() => {
		userActivity();
	}, []);

	const [user, setUser] = useState({
		title: "",
		text: "",
		tag: "",
		Date: new Date().toLocaleDateString(),
		Time: new Date().toLocaleTimeString(),
	});

	// Handle blog submission
	const handleUserDoc = async (e) => {
		e.preventDefault();
		try {
			await addDoc(collection(db, "AllBlogs"), {
				...user,
				name: auth.currentUser?.displayName,
			});
			toast.success("Blog published successfully!");
			setUser({
				title: "",
				text: "",
				tag: "",
				Date: new Date().toLocaleDateString(),
				Time: new Date().toLocaleTimeString(),
			});
			navigate("/dashboard");
		} catch (error) {
			console.error("Error publishing blog:", error);
			toast.error("Failed to publish blog.");
		}
	};

	return (
		<>
			<div className="main-user" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
				<Toaster position="top-center" reverseOrder={false} gutter={8} toastOptions={{
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
				}} />

				<div className="container" style={{ background: "#FA4C86", padding: "20px", borderRadius: "15px" }}>
					<Link to="/dashboard">
						<button
							style={{
								padding: "7px 20px",
								background: "white",
								color: "#E52F8A",
								fontWeight: "600",
								borderRadius: "10px",
								cursor: "pointer",
							}}
						>
							<KeyboardBackspaceIcon /> 
							<span style={{ marginLeft: "4px" }}>Back</span>
						</button>
					</Link>

					<div className="card" style={{ width: "45rem" }}>
						<div className="card-image1">
							<h2 className="card-heading">
								Get Started with
								<small> Write Your First SHEvolve Blog!</small>
							</h2>
						</div>
						<form className="card-form" onSubmit={handleUserDoc}>
							<div className="input">
								<input
									type="text"
									className="input-field"
									placeholder="Enter blog title"
									onChange={(e) => setUser({ ...user, title: e.target.value })}
									required
								/>
								<label className="input-label">Title</label>
							</div>
							<div className="input">
								<textarea
									rows={4}
									className="input-field"
									placeholder="Write your blog content"
									onChange={(e) => setUser({ ...user, text: e.target.value })}
									required
								/>
								<label className="input-label">Write your blog</label>
							</div>
							<div className="input">
								<input
									type="text"
									placeholder="Enter appropriate tags"
									onChange={(e) => setUser({ ...user, tag: e.target.value })}
									className="input-field"
									required
								/>
								<label className="input-label">Tags</label>
							</div>
							<div className="action">
								<button className="action-button" type="submit">
									Publish
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogForm;
