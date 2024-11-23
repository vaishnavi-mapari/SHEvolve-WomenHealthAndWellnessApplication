import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [buttonColor, setButtonColor] = useState("#007bff"); // Initial blue color

	const sendMail = (e) => {
		e.preventDefault(); // Prevent default form submission

		emailjs
			.send(
				"service_hesknwi",
				"template_kfsp0h8",
				{ name, email, subject, message },
				"gP8sKnDLte9gp24k2"
			)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				toast.success("Query Registered :) ");
				// Reset form fields after successful submission
				setName("");
				setEmail("");
				setSubject("");
				setMessage("");
				setButtonColor("#28a745"); // Change to green on success
				setTimeout(() => {
					setButtonColor("#007bff"); // Change back to blue after 2 seconds
				}, 2000);
			})
			.catch(() => {
				toast.error("Invalid Email or Server Error");
				setButtonColor("#dc3545"); // Change to red on error
				setTimeout(() => {
					setButtonColor("#007bff"); // Change back to blue after 2 seconds
				}, 2000);
			});
	};

	return (
		<Wrapper id="contact">
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
			<div className="lightBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Let's get in touch</h1>
						<p className="font13">We are happy to hear doubts and suggestions</p>
					</HeaderInfo>
					<div className="row" style={{ paddingBottom: "30px" }}>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<Form onSubmit={sendMail}>
								<label className="font13">First Name:</label>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="font20 extraBold"
									required
								/>
								<label className="font13">Email:</label>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="font20 extraBold"
									required
								/>
								<label className="font13">Subject:</label>
								<input
									type="text"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									className="font20 extraBold"
								/>
								<label className="font13">Message:</label>
								<textarea
									rows="4"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									className="font20 extraBold"
									required
								/>
								<SubmitWrapper>
									<ButtonInput
										type="submit"
										value="Send Message"
										className="pointer animate radius8"
										style={{ backgroundColor: buttonColor }} // Apply dynamic background color
									/>
								</SubmitWrapper>
							</Form>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
							<img
								width={400}
								height={400}
								src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1662890544~exp=1662891144~hmac=3e16c076295cf3cb34003badb796e6c4faa9b559b8aeadf3e10037c644ffd10a"
								alt="Customer Support Illustration"
								className="radius6"
							/>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;

const HeaderInfo = styled.div`
	padding: 70px 0 30px 0;
	text-align: center; // Center align the header
`;

const Form = styled.form`
	padding: 70px 0 30px 0;

	input,
	textarea {
		width: 100%;
		background-color: transparent;
		border: none;
		border-bottom: 1px solid #707070;
		height: 40px;
		margin-bottom: 30px;
		font-size: 1rem; // Increased font size for better readability
	}

	textarea {
		min-height: 100px;
	}

	@media (max-width: 860px) {
		padding: 30px 0;
	}
`;

const ButtonInput = styled.input`
	border: none;
	width: 100%;
	padding: 15px;
	color: #fff;
	cursor: pointer;
	transition: background-color 0.3s, border-color 0.3s;

	:hover {
		opacity: 0.9; // Slight opacity change on hover
	}
`;

const SubmitWrapper = styled.div`
	margin-top: 20px; // Added margin for better spacing

	@media (max-width: 991px) {
		width: 100%;
		margin-bottom: 50px;
	}
`;
