import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
import { Link } from "react-router-dom";

export default function Services() {
	return (
		<Wrapper id="services">
			<div className="whiteBg" style={{ padding: "60px 0" }}>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Our Helpful Services</h1>
						<p className="font13">
							We stand out as an integrated platform to provide healthcare
							solutions for deprived and helpless women around the world.
							<br />
							Our platform can impact the lives of many young girls.
						</p>
					</HeaderInfo>
					<ServiceBoxRow className="flex">
						<ServiceBoxWrapper>
							<ServiceBox
								icon="roller"
								title="Blogs on Health & Hygiene"
								subtitle="Menstrual hygiene is still not discussed openly. Learn about it from our blogs, and feel free to contribute your own."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="monitor"
								title="Mood and Cycle Tracker"
								subtitle="Predict your next cycle with our 3-month cycle tracker. Enjoy mood analysis and lighten your mood with memes and jokes."
							/>
						</ServiceBoxWrapper>
						{/* <ServiceBoxWrapper>
							<ServiceBox
								icon="browser"
								title="Get Notified"
								subtitle="Never skip meals, yoga classes, or forget to drink water again. Our notifier will keep you on track."
							/>
						</ServiceBoxWrapper> */}
						<ServiceBoxWrapper>
							<ServiceBox
								icon="printer"
								title="Easy Doctor's Appointment"
								subtitle="Use Google Maps to find the nearest gynecologist and book an appointment easily."
							/>
						</ServiceBoxWrapper>
					</ServiceBoxRow>
				</div>
				<Advertising className="lightBg">
					<div className="container">
						<AddLeft>
							<h4 className="font15 semiBold">
								Share your stories with the world
							</h4>
							<h2 className="font40 extraBold">Let's End Period Stigma</h2>
							<p className="font12">
								Sign up and contribute your first blog on health and hygiene.
								You can choose to remain anonymous or privately share your story with us.
							</p>
							<ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
								<Link to="/login">
									<FullButton title="Share with the World" />
								</Link>
								<Link to="/contact">
									<FullButton title="Share Only with Us" border />
								</Link>
							</ButtonsRow>
						</AddLeft>
						<AddRight>
							<AddRightInner>
								<ImageGroup>
									<AddImgWrapper>
										<img
											src="https://user-images.githubusercontent.com/73426684/211125718-db9bf865-19bc-48cf-ba4d-8ce4772f63ee.jpg"
											alt="Stop the Stigma"
										/>
									</AddImgWrapper>
									<AddImgWrapper>
										<img
											src="https://img.freepik.com/free-vector/girl-power-reproductive-system-concept_23-2148658188.jpg?w=1060&t=st=1673055245~exp=1673055845~hmac=db1b2a8914e263895b52c5e91dcadd63e91d589d2ef85a9f30061f9b310161a0"
											alt="Girl Power"
										/>
									</AddImgWrapper>
								</ImageGroup>
								<ImageGroup>
									<AddImgWrapper>
										<img
											src="https://i.pinimg.com/564x/84/27/2d/84272de2b92637a1508453cf97d82283.jpg"
											alt="Stop the Stigma"
										/>
									</AddImgWrapper>
									<AddImgWrapper>
										<img
											src="https://user-images.githubusercontent.com/73426684/211125598-97104550-8729-4b70-9eed-292edf632379.jpg"
											alt="Stop the Stigma"
										/>
									</AddImgWrapper>
								</ImageGroup>
							</AddRightInner>
						</AddRight>
					</div>
				</Advertising>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;

const ServiceBoxRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media (max-width: 860px) {
		flex-direction: column;
	}
`;

const ServiceBoxWrapper = styled.div`
	flex: 1 1 calc(25% - 10px);
	margin-right: 5%;
	padding: 80px 0;
	@media (max-width: 860px) {
		flex: 1 1 100%;
		text-align: center;
		padding: 40px 0;
	}
`;

const HeaderInfo = styled.div`
	text-align: center;
`;

const Advertising = styled.div`
	margin: 80px 0;
	padding: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 60px 0 40px;
	}
	@media (max-width: 860px) {
		flex-direction: column;
		padding: 0 0 30px;
		margin: 80px 0 0;
	}
`;

const ButtonsRow = styled.div`
	display: flex;
	justify-content: center;
	gap: 15px;
`;

const AddLeft = styled.div`
	width: 50%;
	p {
		max-width: 475px;
	}
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
		text-align: center;
		h2 {
			line-height: 3rem;
			margin: 15px 0;
		}
		p {
			margin: 0 auto;
		}
	}
`;

const AddRight = styled.div`
	width: 50%;
	position: absolute;
	top: -70px;
	right: 0;
	@media (max-width: 860px) {
		width: 80%;
		position: relative;
		order: 1;
		top: -40px;
	}
`;

const AddRightInner = styled.div`
	width: 100%;
`;

const ImageGroup = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
`;

const AddImgWrapper = styled.div`
	width: 48%;
	margin: 0 6%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;

