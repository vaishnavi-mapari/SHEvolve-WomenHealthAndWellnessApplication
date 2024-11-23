import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { auth, db } from "../../firebase"; // Import Firebase auth and db
import "./Modal.css"; // Stylesheet

const Modal = ({ setOpenModel }) => {
  // State for user input
  const [user, setUser] = useState({
    title: "",
    desp: "",
    day: "",
    time: "",
  });

  // Function to upload reminder to the database
  const uploadRemind = async () => {
    try {
      await db.collection("blogs")
        .doc(auth.currentUser?.uid)
        .collection("reminders")
        .add({
          ...user,
          Date: new Date().toLocaleDateString(),
          Time: new Date().toLocaleTimeString(),
        });
      // Reset user input
      setUser({ title: "", desp: "", day: "", time: "" });
      toast.success("Reminder Setted!!!");
      setTimeout(() => {
        setOpenModel(false);
      }, 2000);
    } catch (err) {
      console.error("Error adding reminder: ", err);
      toast.error("Failed to set reminder. Please try again.");
    }
  };

  return (
    <div className="Model">
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
      <div className="Model_box" style={{ width: "40rem" }}>
        <div className="Model_box_heading">
          <p style={{ color: "#E52F8A" }}>Set a Reminder</p>
          <div
            className="Model_box_heading_img"
            onClick={() => setOpenModel(false)}
            style={{ cursor: "pointer" }}
          >
            <AiOutlineCloseSquare color="#E52F8A" size={50} />
          </div>
        </div>

        <div className="Model_box_wallet" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            type="text"
            style={inputStyle}
            value={user.title}
            onChange={(e) => setUser({ ...user, title: e.target.value })}
            className="inp"
            placeholder="Enter Reminder Name"
            required
          />
          <textarea
            style={inputStyle}
            value={user.desp}
            onChange={(e) => setUser({ ...user, desp: e.target.value })}
            className="inp"
            placeholder="Enter Description"
            required
          />
          <input
            type="date"
            style={inputStyle}
            value={user.day}
            onChange={(e) => setUser({ ...user, day: e.target.value })}
            className="inp"
            required
          />
          <input
            type="time"
            style={inputStyle}
            value={user.time}
            onChange={(e) => setUser({ ...user, time: e.target.value })}
            className="inp"
            required
          />
          <button
            style={{
              padding: "7px 20px",
              borderRadius: "7px",
              background: "#E52F8A",
              color: "white",
              cursor: "pointer",
            }}
            onClick={uploadRemind}
          >
            Submit
          </button>
        </div>

        <p className="Model_box_para" style={{ textAlign: "center" }}>
          By providing information, you agree to Shewin
          <br /> Terms of Service and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  );
};

// Styles for input fields
const inputStyle = {
  padding: "6px 20px",
  width: "70%",
  borderRadius: "10px",
  margin: "15px",
};

export default Modal;
