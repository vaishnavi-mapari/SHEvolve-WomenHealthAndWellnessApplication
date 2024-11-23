// import React, { useState } from "react";
// import { jsPDF } from "jspdf";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import moment from "moment";
// import "react-dates/initialize";
// import { SingleDatePicker } from "react-dates";
// import "react-dates/lib/css/_datepicker.css";
// import EventNoteIcon from "@mui/icons-material/EventNote";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import Hidden from "@mui/material/Hidden";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import "./TrackPeriod.css";
// import TrackResults from "./TrackResults";
// import TopNavbar from "../Nav/TopNavbar";
// import Footer from "../Sections/Footer";
// import { toast, Toaster } from "react-hot-toast";

// function TrackPeriod2() {
// 	const [date, setDate] = useState(moment());
// 	const [focusedInput, setFocusedInput] = useState(false);
// 	const [count, setCount] = useState(5);
// 	const [cycleCount, setCycleCount] = useState(28);
// 	const [doReveal, setDoReveal] = useState(false);

// 	// Handle changes in the days lasted
// 	const handleDaysLast = (isMinus) => {
// 		setCount((prevCount) => (isMinus ? (prevCount > 1 ? prevCount - 1 : 10) : (prevCount >= 10 ? 1 : prevCount + 1)));
// 	};

// 	// Handle changes in menstrual cycle duration
// 	const handleMenstrualCycle = (isMinus) => {
// 		setCycleCount((prevCycleCount) => (isMinus ? (prevCycleCount > 18 ? prevCycleCount - 1 : 40) : (prevCycleCount >= 40 ? 18 : prevCycleCount + 1)));
// 	};

// 	// Check if the selected date is within a valid range
// 	const check = (momentDate) => {
// 		return !momentDate.isBetween(
// 			moment().subtract(1, "M").subtract(moment().date(), "days"),
// 			moment().add(3, "M").add(moment().date(), "days")
// 		);
// 	};

// 	// Generate PDF from the results
// 	const generatePDF = () => {
// 		const doc = new jsPDF("l", "pt", "A3");
// 		doc.html(document.querySelector("#Results"), {
// 			callback: (pdf) => {
// 				pdf.save("Shewin_Tracker_Results.pdf");
// 				toast.success("PDF Generated");
// 			},
// 		});
// 	};

// 	return (
// 		<>
// 			<Toaster
// 				position="top-center"
// 				reverseOrder={false}
// 				gutter={8}
// 				toastOptions={{
// 					className: "",
// 					duration: 5000,
// 					style: {
// 						background: "#FA4C86",
// 						color: "#fff",
// 					},
// 					success: {
// 						duration: 3000,
// 						theme: {
// 							primary: "#FA4C86",
// 							secondary: "black",
// 						},
// 					},
// 				}}
// 			/>
// 			<TopNavbar />
// 			<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
// 				<Box>
// 					{!doReveal ? (
// 						<Grid container style={{ backgroundColor: "#E8DEFF", textAlign: "center", borderRadius: "15px", padding: "10px" }}>
// 							{/* Last Period Start Date */}
// 							<Grid item xs={12} md={4}>
// 								<Box my={3}>
// 									<Typography variant="h6">When did your last period start?</Typography>
// 								</Box>
// 								<Box>
// 									<Grid container style={{ textAlign: "center" }}>
// 										<Grid item xs={6}>
// 											<SingleDatePicker
// 												date={date}
// 												onDateChange={(newDate) => setDate(newDate)}
// 												focused={focusedInput}
// 												onFocusChange={({ focused }) => setFocusedInput(focused)}
// 												id="your_unique_id"
// 												displayFormat={() => "D"}
// 												renderDayContents={(momentDate) => <Box>{momentDate.date()}</Box>}
// 												numberOfMonths={1}
// 												isOutsideRange={check}
// 												readOnly
// 												noBorder
// 												customInputIcon={<EventNoteIcon />}
// 											/>
// 										</Grid>
// 										<Grid item xs={6} style={{ textAlign: "left" }}>
// 											<Box onClick={() => setFocusedInput(true)}>
// 												<Box className="date-day">{date.format("dddd")}</Box>
// 												<Box className="date-day">{date.format("MMMM")}</Box>
// 											</Box>
// 										</Grid>
// 									</Grid>
// 								</Box>
// 							</Grid>

// 							{/* Days Lasted */}
// 							<Grid item xs={12} md={4}>
// 								<Box my={3}>
// 									<Typography variant="h6">How many days did it last?</Typography>
// 								</Box>
// 								<Box sx={{ display: "flex", justifyContent: "center" }}>
// 									<Button color="inherit" variant="outlined" onClick={() => handleDaysLast(true)}>
// 										<RemoveIcon />
// 									</Button>
// 									<Box className="days-count" mx={5}>{count}</Box>
// 									<Button color="inherit" variant="outlined" onClick={() => handleDaysLast(false)}>
// 										<AddIcon />
// 									</Button>
// 								</Box>
// 							</Grid>

// 							{/* Cycle Duration */}
// 							<Grid item xs={12} md={4}>
// 								<Box my={3}>
// 									<Typography variant="h6">Duration of menstrual cycle?</Typography>
// 								</Box>
// 								<Box mt={"auto"} sx={{ display: "flex", justifyContent: "center" }}>
// 									<Button color="inherit" variant="outlined" onClick={() => handleMenstrualCycle(true)}>
// 										<RemoveIcon />
// 									</Button>
// 									<Box className="days-count" mx={5}>{cycleCount}</Box>
// 									<Button color="inherit" variant="outlined" onClick={() => handleMenstrualCycle(false)}>
// 										<AddIcon />
// 									</Button>
// 								</Box>
// 							</Grid>

// 							{/* Track Now Button */}
// 							<Grid item xs={12} style={{ textAlign: "center" }}>
// 								<Box my={3}>
// 									<Button variant="contained" className="track-button" onClick={() => setDoReveal(true)}>
// 										Track Now
// 									</Button>
// 								</Box>
// 							</Grid>
// 						</Grid>
// 					) : (
// 						<Box mt={10}>
// 							<Grid container id="Results">
// 								<Grid item xs={12} style={{ textAlign: "center" }}>
// 									<Box my={2} style={{ display: "flex", justifyContent: "center", columnGap: "20px" }}>
// 										<Button component="a" href="/track" className="track-button" style={{ color: "white", fontWeight: "500" }}>
// 											Back
// 										</Button>
// 										<Typography variant="h5">Menstruation estimation for the next 3 months</Typography>
// 									</Box>
// 								</Grid>
// 								<Grid item xs={12}>
// 									<Box style={{ display: "flex", justifyContent: "center" }}>
// 										<TrackResults startPeriodDate={date} daysLast={count} cycleCount={cycleCount} />
// 									</Box>
// 								</Grid>
// 							</Grid>
// 							<Grid container>
// 								<Grid item xs={12} style={{ textAlign: "center" }}>
// 									<Box mt={5}>
// 										<Typography variant="subtitle1" color="text.secondary">
// 											Please note that this is only an estimation of your menstrual cycle.
// 										</Typography>
// 									</Box>
// 									<Box mt={3}>
// 										<Hidden smUp>
// 											<Button variant="contained" startIcon={<FileDownloadIcon />} className="track-button" onClick={generatePDF}>
// 												Download current month
// 											</Button>
// 										</Hidden>
// 										<Hidden smDown>
// 											<Button variant="contained" startIcon={<FileDownloadIcon />} className="track-button" onClick={generatePDF}>
// 												Download your calendar
// 											</Button>
// 										</Hidden>
// 									</Box>
// 								</Grid>
// 							</Grid>
// 						</Box>
// 					)}
// 				</Box>
// 			</div>
// 			<Footer />
// 		</>
// 	);
// }

// export default TrackPeriod2;
