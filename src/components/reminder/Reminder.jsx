import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./reminder.css";

// Reusable Alert component
const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Reminder() {
	const [open, setOpen] = useState(false);
	const history = useNavigate();

	// Check if user is authenticated and redirect to login if not
	useEffect(() => {
		const userActivity = () => {
			onAuthStateChanged(auth, (user) => {
				if (!user) {
					history("/");
				}
			});
		};
		userActivity();
	}, [history]);

	// Handle Snackbar visibility
	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") return;
		setOpen(false);
	};

	// Navigate to track page after delay
	const handleLink = () => {
		setTimeout(() => {
			history("/track");
		}, 2500);
	};

	// Reusable component for rendering a reminder row with switch
	const ReminderRow = ({ label }) => (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			sx={{ mb: 2 }}
		>
			<Typography variant="h6" sx={{ fontWeight: 400 }}>
				{label}
			</Typography>
			<Switch defaultChecked sx={{ color: "#ff4081" }} />
		</Stack>
	);

	return (
		<Box my={5}>
			<Container maxWidth="md">
				{/* Header with icon */}
				<Grid container justifyContent="center">
					<Grid item xs={12}>
						<Stack direction="row" alignItems="center" justifyContent="center">
							<Typography
								variant="h4"
								align="center"
								sx={{ fontWeight: 800 }}
							>
								Priyanka’s Reminders
							</Typography>
							<Box ml={2}>
								<img
									src="https://github.com/BioxMech/embrace/blob/master/src/asset/images/clock.png?raw=true"
									alt="clock icon"
									className="clock-img"
									style={{ width: "40px" }}
								/>
							</Box>
						</Stack>
					</Grid>
				</Grid>

				{/* Period & Fertility Section */}
				<Box mt={3}>
					<Typography variant="h4" align="center" sx={{ color: "#9867C5", mb: 2 }}>
						<b>PERIOD & FERTILITY</b>
					</Typography>
					<Container maxWidth="sm">
						<ReminderRow label="Period is coming" />
						<ReminderRow label="Fertility is coming" />
						<ReminderRow label="Ovulation day" />
						<ReminderRow label="Input your period" />
					</Container>
				</Box>

				{/* Lifestyle Section */}
				<Box mt={5}>
					<Typography variant="h4" align="center" sx={{ color: "#9867C5", mb: 2 }}>
						<b>LIFESTYLE</b>
					</Typography>
					<Container maxWidth="sm">
						<ReminderRow label="Meditation reminder" />
						<ReminderRow label="Sleep early reminder" />
						<ReminderRow label="Drink water reminder" />
					</Container>
				</Box>

				{/* Set Reminder Button */}
				<Container maxWidth="sm" sx={{ textAlign: "center", mt: 3 }}>
					<Button
						onClick={() => {
							handleClick();
							handleLink();
						}}
						variant="contained"
						sx={{ backgroundColor: "#9867C5", color: "white" }}
					>
						Set Reminder
					</Button>
				</Container>

				{/* Snackbar for success message */}
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				>
					<Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
						You will be reminded!
					</Alert>
				</Snackbar>
			</Container>
		</Box>
	);
}

export default Reminder;
