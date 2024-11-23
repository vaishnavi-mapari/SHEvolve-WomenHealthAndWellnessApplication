// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet"; // For SEO
// import "./Food.css";

// // Import images from assets
// import leafyGreensImg from "../../assets/img/leafy_greens.jpg";
// import bananasImg from "../../assets/img/bananas_image.jpg";
// import darkChocolateImg from "../../assets/img/dark_chocolate.jpg";
// import gingerTeaImg from "../../assets/img/ginger_tea.jpg";
// import nutsSeedsImg from "../../assets/img/nuts_seeds.jpg";

// const Food = () => {
//   const [currentUser, setCurrentUser] = useState(null); // Assuming currentUser will be set appropriately
//   const [age, setAge] = useState("");
//   const [problem, setProblem] = useState("");
//   const [showRecommendations, setShowRecommendations] = useState(false);

//   const menstrualIssues = [
//     'Cramps (Dysmenorrhea)',
//     'Bloating',
//     'Headaches',
//     'Mood swings',
//     'Fatigue',
//     'Breast tenderness',
//     'Acne',
//     'Digestive issues (diarrhea or constipation)',
//     'Irregular periods',
//     'Heavy bleeding (Menorrhagia)',
//     'Light bleeding (Hypomenorrhea)',
//     'Nausea',
//     'Back pain',
//     'Joint or muscle pain',
//     'Hot flashes',
//     'Sleep disturbances',
//     'Anxiety',
//     'Depression',
//     'Food cravings',
//   ];

//   const foodRecommendations = [
//     {
//       name: "Leafy Greens",
//       description:
//         "Leafy greens like spinach and kale are rich in iron and magnesium, which help replenish the nutrients lost during menstruation.",
//       img: leafyGreensImg,
//       alt: "A plate of fresh leafy greens including spinach and kale.",
//       suitableFor: ["cramps", "bloating", "fatigue"],
//       quantity: "1-2 cups per day",
//       risks: {
//         deficiency: "Low intake may lead to anemia and increased fatigue due to iron deficiency.",
//         excess: "Overconsumption may cause digestive discomfort and, in rare cases, kidney stones due to high oxalate levels.",
//       },
//       remedySuggestion: "Iron supplements or multivitamins with iron can help manage deficiencies.",
//     },
//     {
//       name: "Bananas",
//       description:
//         "Bananas are high in potassium and vitamin B6, which can help reduce bloating and improve mood.",
//       img: bananasImg,
//       alt: "A bunch of ripe bananas.",
//       suitableFor: ["bloating", "mood", "fatigue"],
//       quantity: "1-2 bananas per day",
//       risks: {
//         deficiency: "Low potassium intake may lead to muscle cramps, mood swings, and increased fatigue.",
//         excess: "Overeating bananas can cause hyperkalemia (excess potassium), leading to nausea and irregular heartbeat.",
//       },
//       remedySuggestion: "Potassium supplements are available but should be taken under medical guidance.",
//     },
//     {
//       name: "Dark Chocolate",
//       description:
//         "Rich in magnesium, dark chocolate helps to soothe menstrual cramps and improve mood.",
//       img: darkChocolateImg,
//       alt: "A bar of dark chocolate with broken pieces.",
//       suitableFor: ["cramps", "mood"],
//       quantity: "1-2 ounces per day",
//       risks: {
//         deficiency: "Insufficient magnesium may lead to worsened cramps, anxiety, and poor mood.",
//         excess: "Excessive chocolate intake can lead to weight gain and blood sugar spikes.",
//       },
//       remedySuggestion: "Magnesium supplements or fortified snacks can help if magnesium levels are low.",
//     },
//     {
//       name: "Ginger Tea",
//       description:
//         "Ginger has anti-inflammatory properties that can help relieve cramps and reduce nausea.",
//       img: gingerTeaImg,
//       alt: "A steaming cup of ginger tea with fresh ginger slices.",
//       suitableFor: ["cramps", "nausea"],
//       quantity: "1-2 cups per day",
//       risks: {
//         deficiency: "Lack of ginger may result in persistent nausea and unrelieved cramps.",
//         excess: "Too much ginger may cause digestive upset, heartburn, and mouth irritation.",
//       },
//       remedySuggestion: "Over-the-counter ginger supplements can help manage nausea in moderation.",
//     },
//     {
//       name: "Nuts and Seeds",
//       description:
//         "Almonds and flaxseeds are rich in omega-3 fatty acids, which can help reduce inflammation and menstrual pain.",
//       img: nutsSeedsImg,
//       alt: "A mix of almonds and flaxseeds.",
//       suitableFor: ["pain", "inflammation"],
//       quantity: "1/4 cup per day",
//       risks: {
//         deficiency: "Inadequate intake may result in increased inflammation and prolonged pain.",
//         excess: "Overconsumption can lead to digestive issues and, in some cases, weight gain due to high fat content.",
//       },
//       remedySuggestion: "Omega-3 supplements, like fish oil or flaxseed oil, can help maintain anti-inflammatory benefits.",
//     },
//   ];
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowRecommendations(true);
//   };

//   const filteredRecommendations = foodRecommendations.filter((food) =>
//     food.suitableFor.some(suitable => problem.includes(suitable))
//   );

//   return (
//     <>
    

//       {/* Dashboard Layout */}
//       <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
//         {/* Vertical Navbar */}
//         <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg">
//           <div className="container-fluid">
//             <div style={{ marginLeft: "10px" }}>
//               <img
//                 width={70}
//                 height={70}
//                 style={{ borderRadius: "100%", margin: "auto" }}
//                 src={currentUser?.photoURL || "defaultImageUrl"}
//                 alt="User Avatar"
//               />
//               <span
//                 style={{
//                   fontSize: "1.2rem",
//                   fontWeight: "700",
//                   paddingLeft: "50px",
//                   marginTop: "20px",
//                   color: "#F65AA8",
//                   textAlign: "center",
//                 }}
//               >
//                 {currentUser?.displayName}
//               </span>
//             </div>

//             <div className="collapse navbar-collapse" id="sidebarCollapse">
//               <ul className="navbar-nav">
//               <li className="nav-item"><Link className="nav-link" to="/dashboard"><i className="bi bi-house"></i> Home</Link></li>
               
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/track">
//                     <i className="bi bi-bookmarks"></i> Period Tracker
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/nearclinic">
//                     <i className="bi bi-cart-plus"></i> Nearest Pharmacy
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/nearhospital">
//                     <i className="bi bi-file-medical"></i> Nearest Hospital
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/yoga">
//                     <i className="bi bi-yoga"></i> Yoga
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/food">
//                     <i className="bi bi-egg-fried"></i> Food
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/gemini">
//                     <i className="bi bi-robot"></i> Gemini AI
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/mood-tracker">
//                     <i className="bi bi-smile"></i> Mood Tracker
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/products">
//                     <i className="bi bi-cart"></i> Product Section
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/scheme">
//                     <i className="bi bi-cart"></i> Scheme Section
//                   </Link>
//                 </li>
//               </ul>

//               <hr className="navbar-divider my-5 opacity-20" />
//               <ul className="navbar-nav">
//                 <li className="nav-item" style={{ cursor: "pointer" }} onClick={() => setLogoutConfirmation(true)}>
//                   <a className="nav-link" href="#">
//                     <i className="bi bi-box-arrow-left"></i> Logout
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <div className="h-screen flex-grow-1 overflow-y-lg-auto">
//           <header className="bg-surface-primary border-bottom pt-6">
//             <div className="container-fluid">
//               <div className="mb-npx">
//                 <h1 className="h2 mb-0 ls-tight" style={{ color: "#5C60F5" }}>
//                   Welcome to SHEvolve's 
//                 </h1>
//               </div>
//             </div>
//           </header>

//           <main className="py-6 bg-surface-secondary">
//             <div className="container-fluid">
//               <h1 className="food-title">Food to Eat During Your Menstrual Cycle</h1>
//               <p className="food-intro">
//                 Here are some nutrient-rich foods that can help ease menstrual cramps and boost your energy levels.
//               </p>
//               {/* User Input Form */}
//               <form onSubmit={handleSubmit}>
               
//                 <div className="mb-3">
//                   <label htmlFor="problem" className="form-label">
//                     Any specific menstrual issues:
//                   </label>
//                   <select
//                     id="problem"
//                     className="form-control"
//                     value={problem}
//                     onChange={(e) => setProblem(e.target.value)}
//                     required
//                   >
//                     <option value="">Select an issue</option>
//                     {menstrualIssues.map((issue, index) => (
//                       <option key={index} value={issue.toLowerCase()}>
//                         {issue}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Get Recommendations
//                 </button>
//               </form>

//               {/* Recommendations Section */}
//               {showRecommendations && (
//                 <div className="food-list mt-4">
//                   {filteredRecommendations.length > 0 ? (
//                     filteredRecommendations.map((food, index) => (
//                       <div className="food-card" key={index}>
//                         <img
//                           src={food.img}
//                           alt={food.alt} // Descriptive alt tags for better accessibility
//                           className="food-img"
//                         />
//                         <h2 className="food-name">{food.name}</h2>
//                         <p className="food-description">{food.description}</p>
//                       </div>
//                     ))
//                   ) : (
//                     <p>No specific recommendations found for your issue.</p>
//                   )}
//                 </div>
//               )}
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Food;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // For SEO
import "./Food.css";

// Import images from assets
import leafyGreensImg from "../../assets/img/leafy_greens.jpg";
import bananasImg from "../../assets/img/bananas_image.jpg";
import darkChocolateImg from "../../assets/img/dark_chocolate.jpg";
import gingerTeaImg from "../../assets/img/ginger_tea.jpg";
import nutsSeedsImg from "../../assets/img/nuts_seeds.jpg";

const Food = () => {
  const [currentUser, setCurrentUser] = useState(null); // Assuming currentUser will be set appropriately
  const [problem, setProblem] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const menstrualIssues = [
    'Cramps (Dysmenorrhea)',
    'Bloating',
    'Headaches',
    'Mood swings',
    'Fatigue',
    'Breast tenderness',
    'Acne',
    'Digestive issues (diarrhea or constipation)',
    'Irregular periods',
    'Heavy bleeding (Menorrhagia)',
    'Light bleeding (Hypomenorrhea)',
    'Nausea',
    'Back pain',
    'Joint or muscle pain',
    'Hot flashes',
    'Sleep disturbances',
    'Anxiety',
    'Depression',
    'Food cravings',
  ];

  const foodRecommendations = [
    {
      name: "Leafy Greens",
      description:
        "Leafy greens like spinach and kale are rich in iron and magnesium, which help replenish the nutrients lost during menstruation.",
      img: leafyGreensImg,
      alt: "A plate of fresh leafy greens including spinach and kale.",
      suitableFor: ["cramps", "bloating", "fatigue"],
      quantity: "1-2 cups per day",
      risks: {
        deficiency: "Low intake may lead to anemia and increased fatigue due to iron deficiency.",
        excess: "Overconsumption may cause digestive discomfort and, in rare cases, kidney stones due to high oxalate levels.",
      },
      remedySuggestion: "Iron supplements or multivitamins with iron can help manage deficiencies.",
    },
    {
      name: "Bananas",
      description:
        "Bananas are high in potassium and vitamin B6, which can help reduce bloating and improve mood.",
      img: bananasImg,
      alt: "A bunch of ripe bananas.",
      suitableFor: ["bloating", "mood", "fatigue"],
      quantity: "1-2 bananas per day",
      risks: {
        deficiency: "Low potassium intake may lead to muscle cramps, mood swings, and increased fatigue.",
        excess: "Overeating bananas can cause hyperkalemia (excess potassium), leading to nausea and irregular heartbeat.",
      },
      remedySuggestion: "Potassium supplements are available but should be taken under medical guidance.",
    },
    {
      name: "Dark Chocolate",
      description:
        "Rich in magnesium, dark chocolate helps to soothe menstrual cramps and improve mood.",
      img: darkChocolateImg,
      alt: "A bar of dark chocolate with broken pieces.",
      suitableFor: ["cramps", "mood"],
      quantity: "1-2 ounces per day",
      risks: {
        deficiency: "Insufficient magnesium may lead to worsened cramps, anxiety, and poor mood.",
        excess: "Excessive chocolate intake can lead to weight gain and blood sugar spikes.",
      },
      remedySuggestion: "Magnesium supplements or fortified snacks can help if magnesium levels are low.",
    },
    {
      name: "Ginger Tea",
      description:
        "Ginger has anti-inflammatory properties that can help relieve cramps and reduce nausea.",
      img: gingerTeaImg,
      alt: "A steaming cup of ginger tea with fresh ginger slices.",
      suitableFor: ["cramps", "nausea"],
      quantity: "1-2 cups per day",
      risks: {
        deficiency: "Lack of ginger may result in persistent nausea and unrelieved cramps.",
        excess: "Too much ginger may cause digestive upset, heartburn, and mouth irritation.",
      },
      remedySuggestion: "Over-the-counter ginger supplements can help manage nausea in moderation.",
    },
    {
      name: "Nuts and Seeds",
      description:
        "Almonds and flaxseeds are rich in omega-3 fatty acids, which can help reduce inflammation and menstrual pain.",
      img: nutsSeedsImg,
      alt: "A mix of almonds and flaxseeds.",
      suitableFor: ["pain", "inflammation"],
      quantity: "1/4 cup per day",
      risks: {
        deficiency: "Inadequate intake may result in increased inflammation and prolonged pain.",
        excess: "Overconsumption can lead to digestive issues and, in some cases, weight gain due to high fat content.",
      },
      remedySuggestion: "Omega-3 supplements, like fish oil or flaxseed oil, can help maintain anti-inflammatory benefits.",
    },
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRecommendations(true);
  };

  const filteredRecommendations = foodRecommendations.filter((food) =>
    food.suitableFor.some(suitable => problem.toLowerCase().includes(suitable))
  );

  return (
    <>
      <Helmet>
        <title>{`SHEvolve | ${currentUser?.displayName || 'Dashboard'}`}</title>
      </Helmet>

      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <nav className="navbar navbar-vertical">
          <div className="container-fluid">
            <img width={70} height={70} style={{ borderRadius: "100%" }} src={currentUser?.photoURL || "defaultImageUrl"} alt="User Avatar" />
            <span style={{ fontSize: "1.2rem", fontWeight: "700", paddingLeft: "50px", color: "#F65AA8" }}>
              {currentUser?.displayName}
            </span>

            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/dashboard"><i className="bi bi-house"></i> Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/track"><i className="bi bi-bookmarks"></i> Period Tracker</Link></li>
              <li className="nav-item">
                 <Link className="nav-link" to="/nearclinic">
                     <i className="bi bi-cart-plus"></i> Nearest Pharmacy
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/nearhospital">
                     <i className="bi bi-file-medical"></i> Nearest Hospital
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/yoga">
                     <i className="bi bi-yoga"></i> Yoga
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/food">
                     <i className="bi bi-egg-fried"></i> Food
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/gemini">
                     <i className="bi bi-robot"></i> Gemini AI
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/mood-tracker">
                     <i className="bi bi-smile"></i> Mood Tracker
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/products">
                     <i className="bi bi-cart"></i> Product Section
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/scheme">
                     <i className="bi bi-cart"></i> Scheme Section
                   </Link>
                 </li>
            </ul>
          </div>
        </nav>

        <div className="content-area">
          {/* <header className="header-section">
            <h1 className="h2">Welcome to SHEvolve's Food Recommendations</h1>
          </header> */}

          <main className="main-section">
            <h1 className="food-title">Food to Eat During Your Menstrual Cycle</h1>
            <p className="food-intro">
              Here are some nutrient-rich foods that can help ease menstrual cramps and boost your energy levels.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="problem" className="form-label">Any specific menstrual issues:</label>
                <select id="problem" className="form-control" value={problem} onChange={(e) => setProblem(e.target.value)} required>
                  <option value="">Select an issue</option>
                  {menstrualIssues.map((issue, index) => (
                    <option key={index} value={issue.toLowerCase()}>{issue}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Get Recommendations</button>
            </form>

            {showRecommendations && (
              <div className="recommendations-section">
                {filteredRecommendations.length > 0 ? (
                  filteredRecommendations.map((food, index) => (
                    <div className="food-card" key={index}>
                      <img src={food.img} alt={food.alt} className="food-img" />
                      <h2 className="food-name">{food.name}</h2>
                      <p className="food-description">{food.description}</p>
                      <p className="food-quantity"><strong>Recommended Quantity:</strong> {food.quantity}</p>
                      <p className="food-risk"><strong>Deficiency Risk:</strong> {food.risks.deficiency}</p>
                      <p className="food-risk"><strong>Excess Risk:</strong> {food.risks.excess}</p>
                      <p className="food-remedy"><strong>Suggested Remedy:</strong> {food.remedySuggestion}</p>
                    </div>
                  ))
                ) : (
                  <p>No specific recommendations found for your issue.</p>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Food;
