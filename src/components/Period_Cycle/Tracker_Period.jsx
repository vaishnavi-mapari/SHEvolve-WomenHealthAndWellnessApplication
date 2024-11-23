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

// function TrackPeriod() {
// 	const [date, setDate] = useState(moment());
// 	const [focusedInput, setFocusedInput] = useState(false);
// 	const [count, setCount] = useState(5);
// 	const [cycleCount, setCycleCount] = useState(28);
// 	const [padCount, setPadCount] = useState(10); // New state for pads used
// 	const [doReveal, setDoReveal] = useState(false);

// 	const handleDaysLast = (isMinus) => {
// 		setCount((prev) => (isMinus ? (prev > 1 ? prev - 1 : 10) : (prev >= 10 ? 1 : prev + 1)));
// 	};

// 	const handleMenstrualCycle = (isMinus) => {
// 		setCycleCount((prev) => (isMinus ? (prev > 18 ? prev - 1 : 40) : (prev >= 40 ? 18 : prev + 1)));
// 	};

// 	const handlePadCount = (isMinus) => {
// 		setPadCount((prev) => (isMinus ? (prev > 1 ? prev - 1 : 1) : prev + 1)); // Handle pad count change
// 	};

// 	const check = (momentDate) => {
// 		return !momentDate.isBetween(
// 			moment().subtract(1, "M").subtract(moment().date(), "days"),
// 			moment().add(3, "M").add(moment().date(), "days")
// 		);
// 	};

// 	const generatePDF = () => {
// 		const doc = new jsPDF("l", "pt", "A3");
// 		doc.html(document.querySelector("#Results"), {
// 			callback: function (pdf) {
// 				pdf.save("Shewin_Tracker_Results.pdf");
// 			},
// 		});
// 		toast.success("PDF Generated");
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
// 			<div
// 				style={{
// 					height: "100vh",
// 					display: "flex",
// 					justifyContent: "center",
// 					alignItems: "center",
// 				}}
// 			>
// 				<Box>
// 					{!doReveal && (
// 						<Grid
// 							container
// 							style={{
// 								backgroundColor: "#E8DEFF",
// 								textAlign: "center",
// 								borderRadius: "15px",
// 								padding: "10px",
// 							}}
// 						>
// 							{/* Last Period Start Date */}
// 							<Grid item xs={12} md={4}>
// 								<Box my={3}>
// 									<Typography variant="h6">When did your last period start?</Typography>
// 								</Box>
// 								<Box>
// 									<Grid container style={{ textAlign: "center", display: "flex" }}>
// 										<Grid item xs={6}>
// 											<SingleDatePicker
// 												date={date}
// 												onDateChange={(date) => setDate(date)}
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

// 							{/* Pads Used */}
// 							<Grid item xs={12} md={4}>
// 								<Box my={3}>
// 									<Typography variant="h6">How many pads did you use during your last period?</Typography>
// 								</Box>
// 								<Box sx={{ display: "flex", justifyContent: "center" }}>
// 									<Button color="inherit" variant="outlined" onClick={() => handlePadCount(true)}>
// 										<RemoveIcon />
// 									</Button>
// 									<Box className="days-count" mx={5}>{padCount}</Box>
// 									<Button color="inherit" variant="outlined" onClick={() => handlePadCount(false)}>
// 										<AddIcon />
// 									</Button>
// 								</Box>
// 							</Grid>

// 							{/* Track Now Button */}
// 							<Grid item xs={12} style={{ textAlign: "center" }}>
// 								<Box my={3}>
// 									<Button
// 										variant="contained"
// 										className="track-button"
// 										onClick={() => setDoReveal(true)}
// 									>
// 										Track Now
// 									</Button>
// 								</Box>
// 							</Grid>
// 						</Grid>
// 					)}

// 					{/* Results Section */}
// 					{doReveal && (
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
// 											<Button
// 												variant="contained"
// 												startIcon={<FileDownloadIcon />}
// 												className="track-button"
// 												onClick={generatePDF}
// 											>
// 												Download current month
// 											</Button>
// 										</Hidden>
// 										<Hidden smDown>
// 											<Button
// 												variant="contained"
// 												startIcon={<FileDownloadIcon />}
// 												className="track-button"
// 												onClick={generatePDF}
// 											>
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

// export default TrackPeriod;


import React, { useState } from "react";
import { jsPDF } from "jspdf";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Hidden from "@mui/material/Hidden";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import TextField from "@mui/material/TextField"; // Import for age input
import "./TrackPeriod.css";
import TrackResults from "./TrackResults";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";
import { toast, Toaster } from "react-hot-toast";

function TrackPeriod() {
    const [date, setDate] = useState(moment());
    const [focusedInput, setFocusedInput] = useState(false);
    const [count, setCount] = useState(5);
    const [cycleCount, setCycleCount] = useState(28);
    const [padCount, setPadCount] = useState(10);
    const [age, setAge] = useState(""); // New state for age
    const [doReveal, setDoReveal] = useState(false);

    const handleDaysLast = (isMinus) => {
        setCount((prev) => (isMinus ? (prev > 1 ? prev - 1 : 10) : (prev >= 10 ? 1 : prev + 1)));
    };

    const handleMenstrualCycle = (isMinus) => {
        setCycleCount((prev) => (isMinus ? (prev > 18 ? prev - 1 : 40) : (prev >= 40 ? 18 : prev + 1)));
    };

    const handlePadCount = (isMinus) => {
        setPadCount((prev) => (isMinus ? (prev > 1 ? prev - 1 : 1) : prev + 1));
    };

    const check = (momentDate) => {
        return !momentDate.isBetween(
            moment().subtract(1, "M").subtract(moment().date(), "days"),
            moment().add(3, "M").add(moment().date(), "days")
        );
    };

    const generateSuggestions = () => {
        let foodSuggestion = "";
        let yogaSuggestion = "";

        if (age < 18) {
            foodSuggestion = "Focus on iron-rich foods like spinach, lentils, and fortified cereals.";
            yogaSuggestion = "Try gentle yoga poses like Child's Pose and Cat-Cow.";
        } else if (age >= 18 && age <= 35) {
            foodSuggestion = "Include plenty of fruits, vegetables, and whole grains.";
            yogaSuggestion = "Try dynamic poses like Sun Salutations and Warrior Pose.";
        } else if (age > 35) {
            foodSuggestion = "Add calcium-rich foods like yogurt, almonds, and leafy greens.";
            yogaSuggestion = "Consider restorative yoga poses like Legs-Up-The-Wall and Corpse Pose.";
        }

        return { foodSuggestion, yogaSuggestion };
    };

    const generatePDF = () => {
        const { foodSuggestion, yogaSuggestion } = generateSuggestions();
        const doc = new jsPDF("l", "pt", "A3");

        doc.text(`Track Period Report`, 40, 50);
        doc.text(`Age: ${age}`, 40, 80);
        doc.text(`Last Period Start Date: ${date.format("MMMM Do YYYY")}`, 40, 110);
        doc.text(`Days Lasted: ${count}`, 40, 140);
        doc.text(`Cycle Duration: ${cycleCount} days`, 40, 170);
        doc.text(`Pads Used: ${padCount}`, 40, 200);
        doc.text(`Food Suggestion: ${foodSuggestion}`, 40, 240);
        doc.text(`Yoga Suggestion: ${yogaSuggestion}`, 40, 270);

        doc.save("Shewin_Tracker_Results.pdf");
        toast.success("PDF Generated");
    };

    return (
        <>
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
            <TopNavbar />
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box>
                    {!doReveal && (
                        <Grid
                            container
                            style={{
                                backgroundColor: "#E8DEFF",
                                textAlign: "center",
                                borderRadius: "15px",
                                padding: "10px",
                            }}
                        >
                            {/* Age Input */}
                            <Grid item xs={12} md={4}>
                                <Box my={3}>
                                    <Typography variant="h6">What is your age?</Typography>
                                </Box>
                                <TextField
                                    id="age-input"
                                    label="Enter your age"
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    fullWidth
                                />
                            </Grid>

                            {/* Last Period Start Date */}
                            <Grid item xs={12} md={4}>
                                <Box my={3}>
                                    <Typography variant="h6">When did your last period start?</Typography>
                                </Box>
                                <Box>
                                    <Grid container style={{ textAlign: "center", display: "flex" }}>
                                        <Grid item xs={6}>
                                            <SingleDatePicker
                                                date={date}
                                                onDateChange={(date) => setDate(date)}
                                                focused={focusedInput}
                                                onFocusChange={({ focused }) => setFocusedInput(focused)}
                                                id="your_unique_id"
                                                displayFormat={() => "D"}
                                                renderDayContents={(momentDate) => <Box>{momentDate.date()}</Box>}
                                                numberOfMonths={1}
                                                isOutsideRange={check}
                                                readOnly
                                                noBorder
                                                customInputIcon={<EventNoteIcon />}
                                            />
                                        </Grid>
                                        <Grid item xs={6} style={{ textAlign: "left" }}>
                                            <Box onClick={() => setFocusedInput(true)}>
                                                <Box className="date-day">{date.format("dddd")}</Box>
                                                <Box className="date-day">{date.format("MMMM")}</Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Days Lasted */}
                            <Grid item xs={12} md={4}>
                                <Box my={3}>
                                    <Typography variant="h6">How many days did it last?</Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Button color="inherit" variant="outlined" onClick={() => handleDaysLast(true)}>
                                        <RemoveIcon />
                                    </Button>
                                    <Box className="days-count" mx={5}>{count}</Box>
                                    <Button color="inherit" variant="outlined" onClick={() => handleDaysLast(false)}>
                                        <AddIcon />
                                    </Button>
                                </Box>
                            </Grid>

                            {/* Cycle Duration */}
                            <Grid item xs={12} md={4}>
                                <Box my={3}>
                                    <Typography variant="h6">Duration of menstrual cycle?</Typography>
                                </Box>
                                <Box mt={"auto"} sx={{ display: "flex", justifyContent: "center" }}>
                                    <Button color="inherit" variant="outlined" onClick={() => handleMenstrualCycle(true)}>
                                        <RemoveIcon />
                                    </Button>
                                    <Box className="days-count" mx={5}>{cycleCount}</Box>
                                    <Button color="inherit" variant="outlined" onClick={() => handleMenstrualCycle(false)}>
                                        <AddIcon />
                                    </Button>
                                </Box>
                            </Grid>

                            {/* Pads Used */}
                            <Grid item xs={12} md={4}>
                                <Box my={3}>
                                    <Typography variant="h6">How many pads did you use during your last period?</Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Button color="inherit" variant="outlined" onClick={() => handlePadCount(true)}>
                                        <RemoveIcon />
                                    </Button>
                                    <Box className="days-count" mx={5}>{padCount}</Box>
                                    <Button color="inherit" variant="outlined" onClick={() => handlePadCount(false)}>
                                        <AddIcon />
                                    </Button>
                                </Box>
                            </Grid>

                            {/* Track Now Button */}
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                <Box my={3}>
                                    <Button
                                        variant="contained"
                                        className="track-button"
                                        onClick={() => setDoReveal(true)}
                                    >
                                        Track Now
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    )}

                    {/* Results Section */}
                    {doReveal && (
                        <Box mt={10}>
                            <Grid container id="Results">
                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    <Box my={2} style={{ display: "flex", justifyContent: "center", columnGap: "20px" }}>
                                        <Button component="a" href="/track" className="track-button" style={{ color: "white", fontWeight: "500" }}>
                                            Back
                                        </Button>
                                        <Typography variant="h5">Menstruation estimation for the next 3 months</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box style={{ display: "flex", justifyContent: "center" }}>
                                        <TrackResults startPeriodDate={date} daysLast={count} cycleCount={cycleCount} />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    <Box mt={5}>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            Please note that this is only an estimation of your menstrual cycle.
                                        </Typography>
                                    </Box>
                                    <Box mt={3}>
                                        <Hidden smUp>
                                            <Button
                                                variant="contained"
                                                startIcon={<FileDownloadIcon />}
                                                className="track-button"
                                                onClick={generatePDF}
                                            >
                                                Download current month
                                            </Button>
                                        </Hidden>
                                        <Hidden smDown>
                                            <Button
                                                variant="contained"
                                                startIcon={<FileDownloadIcon />}
                                                className="track-button"
                                                onClick={generatePDF}
                                            >
                                                Download your calendar
                                            </Button>
                                        </Hidden>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                </Box>
            </div>
            <Footer />
        </>
    );
}

export default TrackPeriod;

