import React, { useEffect, useState, useLayoutEffect } from "react";
import "./blogCard.css";
import { auth, db } from "../../firebase";
import { toast, Toaster } from "react-hot-toast";

const DashboardBlogCard = ({ setSize }) => {
	const [blogs, setBlogs] = useState([]);

	const fetchBlogs = async () => {
		try {
			const response = db
				.collection("blogs")
				.doc(auth.currentUser?.uid)
				.collection("blog");
			const data = await response.get();
			const blogsData = data.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			setBlogs(blogsData);
			setSize(Math.ceil(blogsData.length / 3)); // Update size based on the number of blogs
		} catch (error) {
			console.error("Error fetching blogs:", error);
			toast.error("Failed to load blogs. Please try again.");
		}
	};

	useLayoutEffect(() => {
		const timer = setTimeout(() => {
			fetchBlogs();
		}, 2000);

		return () => clearTimeout(timer); // Clear the timeout on unmount
	}, []);

	const handleDelete = (id) => {
		// Functionality for deleting the blog can be implemented here
		// For now, just show a toast message
		toast.success("Blog Deleted!!");
		// Consider adding code to actually delete the blog from Firestore here
	};

	return (
		<div>
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				toastOptions={{
					className: "",
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
			<div className="courses-container">
				{blogs.map((item) => (
					<div key={item.id} className="course" style={{ width: "90%" }}>
						<div className="course-preview">
							<h6>{item.Date}</h6>
							<h2>{item.title}</h2>
						</div>
						<div className="course-info">
							<div className="progress-container"></div>
							<h6>{item.text.slice(0, 150)}...</h6>
							<button
								className="btnii"
								onClick={() => handleDelete(item.id)}
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DashboardBlogCard;
