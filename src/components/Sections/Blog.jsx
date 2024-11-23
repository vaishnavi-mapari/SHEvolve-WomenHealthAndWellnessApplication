import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TestimonialSlider from "../Elements/TestimonialSlider";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Blog() {
	
	// Fetch blog data from Firestore
	const getData = async () => {
		try {
			const temp = [];
			const querySnapshot = await getDocs(collection(db, "AllBlogs"));
			querySnapshot.forEach((doc) => {
				temp.push({ id: doc.id, ...doc.data() });
			});
			setBlogs(temp.slice(0, 6)); // Limit to top 6 blogs
		} catch (error) {
			console.error("Error fetching blogs:", error);
		} finally {
			setLoading(false); // Set loading to false once data is fetched
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		 <Wrapper id="blog" style={{ marginTop: "50px" }}>
			{/* Testimonial Section */}
			<div className="lightBg" style={{ padding: "50px 0" }}>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Doctor Says</h1>
						<p className="font13">
							Periods are also stigmatized. <br />
							A 2002 study found that people reported greater negativity
							toward a woman if they knew she was menstruating.
						</p>
					</HeaderInfo>
					<TestimonialSlider />
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	padding-top: 20px;
`;

const HeaderInfo = styled.div`
	margin-bottom: 30px;
	@media (max-width: 860px) {
		text-align: center;
	}
`;
