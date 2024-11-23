// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Card,
//   CardContent,
//   Container,
//   Divider,
//   Grid,
//   Button,
// } from '@mui/material';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';

// const MoodTracker = ({ currentUser }) => {
//   const [mood, setMood] = useState('');
//   const [joke, setJoke] = useState('');
//   const [selectedHobby, setSelectedHobby] = useState('');
//   const [recommendation, setRecommendation] = useState('');
//   const [hobbyImage, setHobbyImage] = useState('');

//  // Resource lists structured by mood and hobby
//  const resources = {
//   Music: {
//     mood: 'Happy',
//     Music: {
//       mood: 'Happy',
//       suggestions: [
//         { title: 'Music Video 1', url: 'https://youtu.be/hN4f9POjgEk?si=wxuqFCDoU2_Sk3NB' },
//         { title: 'Music Video 2', url: 'https://www.youtube.com/live/ugeRr5HbsU4?si=ZgHXzzNfaVhWabjH' },
//         { title: 'Music Video 3', url: 'https://youtu.be/HCWvgoTfUjg?si=8WLNGpdFRNQICCv4' },
//         { title: 'Music Video 4', url: 'https://youtu.be/eLjmQ0aGC1U?si=vcf10jX8OFcWeoOr' },
//         { title: 'Music Video 5', url: 'https://youtu.be/Cus-6cnyt1s?si=XMq7a_8KJX6-BgR0' },
//         { title: 'Music Video 6', url: 'https://youtu.be/k3g_WjLCsXM?si=i55-x4i_gvtYGrH0' },
//       ],
//       image: 'https://images.unsplash.com/photo-1494562481101-3799f2e6d2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDB8fG11c2ljfGVufDB8fHx8MTY4MzU5MjM5Nw&ixlib=rb-4.0.3&q=80&w=400',
//     },
//   Drawing: {
//     mood: 'Creative',
//     suggestions: [
//       'Proko - Proko Drawing Tutorials: https://www.proko.com/',
//       'Drawabox: https://drawabox.com/',
//       'Skillshare Drawing Classes: https://www.skillshare.com/browse/drawing',
//     ],
//     image: 'https://images.unsplash.com/photo-1586346602259-7eb19c4ff02f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxkcmF3aW5nfGVufDB8fHx8MTY4MzU5MjQwMw&ixlib=rb-4.0.3&q=80&w=400', // Example image
//   },
//   Webseries: {
//     mood: 'Relaxed',
//     suggestions: [
//       'Stranger Things - Netflix',
//       'The Crown - Netflix',
//       'Breaking Bad - AMC/Netflix',
//     ],
//     image: 'https://images.unsplash.com/photo-1608392229171-7984f43a1184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHdlynNlc2V8ZW58MHx8fHwxNjgzNTkyNDA1&ixlib=rb-4.0.3&q=80&w=400', // Example image
//   },
//   Photography: {
//     mood: 'Inspiring',
//     suggestions: [
//       'Digital Photography School: https://digital-photography-school.com/',
//       'Photography Life: https://photographylife.com/',
//     ],
//     image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBvdG9ncmFwaHlfZGVtaXxlbnwwfHx8fDE2ODM1OTI0MDY&ixlib=rb-4.0.3&q=80&w=400', // Example image
//   },
//   Cooking: {
//     mood: 'Nurturing',
//     suggestions: [
//       'Binging with Babish - YouTube Channel',
//       'Tasty - YouTube Channel',
//       'New York Times Cooking - [Website](https://cooking.nytimes.com/)',
//     ],
//     image: 'https://images.unsplash.com/photo-1504622541148-64d5009eae4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGNvb2tpbmd8ZW58MHx8fHwxNjgzNTkyNDEw&ixlib=rb-4.0.3&q=80&w=400', // Example image
//   },
//   Gardening: {
//     mood: 'Grounded',
//     suggestions: [
//       'Garden Answer - YouTube Channel',
//       'The Garden Diaries - Blog',
//     ],
//     image: 'https://images.unsplash.com/photo-1491942103582-e5d7a0ff2551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGdhcmRlbmluZ3xlbnwwfHx8fDE2ODM1OTI0MjU&ixlib=rb-4.0.3&q=80&w=400', // Example image
//   },
//   Fitness: {
//     mood: 'Energized',
//     suggestions: [
//       'Yoga with Adriene - YouTube Channel',
//       'Fitness Blender - [Website](https://www.fitnessblender.com/)',
//     ],
//     image: 'https://images.unsplash.com/photo-1518003102020-28b9eb35a2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGZpdG5lc3N8ZW58MHx8fHwxNjgzNTkyNDI4&ixlib=rb-4.0.3&q=80&w=400', // Example image
//   },
//   Crafting: {
//     mood: 'Creative',
//     suggestions: [
//       'The Sorry Girls - YouTube Channel',
//       '5-Minute Crafts - YouTube Channel',
//     ],
//     image: 'https://images.unsplash.com/photo-1504607242860-39a4c64512f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNyYWZ0aW5nfGVufDB8fHx8MTY4MzU5MjQ4MQ&ixlib=rb-4.0.3&q=80&w=400', // Example image
//   },
//   Traveling: {
//     mood: 'Adventurous',
//     suggestions: [
//       'Kara and Nate - YouTube Channel',
//       'Drew Binsky - YouTube Channel',
//     ],
//     image: 'https://images.unsplash.com/photo-1463247312068-e6b7b2a9b20a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRyYXZlbGluZ3xlbnwwfHx8fDE2ODM1OTI1MTE&ixlib=rb-4.0.3&q=80&w=400', // Example image
//   },
//   Meditation: {
//     mood: 'Calm',
//     suggestions: [
//       'Headspace - App',
//       'Calm - App',
//     ],
//     image: 'https://images.unsplash.com/photo-1502793899730-1861e8960d22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1lZGl0YXRpb258ZW58MHx8fHwxNjgzNTkyNTQ5&ixlib=rb-4.0.3&q=80&w=400', // Example image
//   },
// };

//   const handleMoodChange = (event) => {
//     setMood(event.target.value);
//   };

//   const handleHobbySelect = (event) => {
//     setSelectedHobby(event.target.value);
//   };

//   const fetchJoke = async () => {
//     if (!mood) return;
//     try {
//       const response = await fetch('https://official-joke-api.appspot.com/random_joke');
//       const data = await response.json();
//       setJoke(`${data.setup} - ${data.punchline}`);
//     } catch (error) {
//       console.error('Error fetching the joke:', error);
//       setJoke('Could not fetch a joke at this time.');
//     }
//   };

//   const generateRecommendation = () => {
//     if (selectedHobby in resources) {
//       setRecommendation(resources[selectedHobby].suggestions);
//       setHobbyImage(resources[selectedHobby].image);
//     } else {
//       setRecommendation('Pick a hobby to get started!');
//       setHobbyImage('');
//     }
//   };
//   useEffect(() => {
//     if (mood) {
//       fetchJoke();
//     }
//   }, [mood]);

//   useEffect(() => {
//     if (selectedHobby) {
//       generateRecommendation();
//     }
//   }, [selectedHobby]);

//   return (
//     <>
      
//       <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
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
//                 {/* Navigation items */}
//                 <li className="nav-item"><Link className="nav-link" to="/dashboard"><i className="bi bi-house"></i> Home</Link></li>
               
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
//                 <li className="nav-item" style={{ cursor: "pointer" }}>
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

//           <Container>
//             <Typography variant="h2" gutterBottom style={{ marginTop: '1rem' }}>
//               Mood Tracker
//             </Typography>

//             <Grid container spacing={4}>
//               <Grid item xs={12} md={6}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h5">How do you feel today?</Typography>
//                     <select value={mood} onChange={handleMoodChange} className="mood-select">
//                       <option value="">Select your mood</option>
//                       <option value="Happy">Happy</option>
//             <option value="Sad">Sad</option>
//             <option value="Relaxed">Relaxed</option>
//             <option value="Creative">Creative</option>
//             <option value="Nurturing">Nurturing</option>
//             <option value="Grounded">Grounded</option>
//             <option value="Energized">Energized</option>
//             <option value="Calm">Calm</option>
//                     </select>
//                     {joke && (
//                       <Typography variant="body1" style={{ marginTop: '1rem' }}>
//                         {joke}
//                       </Typography>
//                     )}
//                   </CardContent>
//                 </Card>
//               </Grid>

//               <Grid item xs={12} md={6}>
//       <Card>
//         <CardContent>
//           <Typography variant="h5">What would you like to do?</Typography>
//           <select value={selectedHobby} onChange={handleHobbySelect} className="hobby-select">
//             <option value="">Select a hobby</option>
//             {Object.keys(resources).map((hobby) => (
//               <option key={hobby} value={hobby}>
//                 {hobby}
//               </option>
//             ))}
//           </select>
//           {recommendation && (
//             <Typography variant="body1" style={{ marginTop: '1rem' }}>
//               <strong>Recommendations:</strong>
//               <ul>
//                 {Array.isArray(recommendation) ? (
//                   recommendation.map((item, index) =>
//                     typeof item === 'object' && item.url ? (
//                       <li key={index}>
//                         <a href={item.url} target="_blank" rel="noopener noreferrer">
//                           {item.title}
//                         </a>
//                       </li>
//                     ) : (
//                       <li key={index}>{item}</li>
//                     )
//                   )
//                 ) : (
//                   <li>{recommendation}</li>
//                 )}
//               </ul>
//             </Typography>
//           )}
//           {hobbyImage && (
//             <img
//               src={hobbyImage}
//               alt={selectedHobby}
//               style={{ marginTop: '1rem', maxWidth: '100%', height: 'auto' }}
//             />
//           )}
//         </CardContent>
//       </Card>
//     </Grid>
//   </>
// );



          
// export default MoodTracker;
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Button,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const MoodTracker = ({ currentUser }) => {
  const [mood, setMood] = useState('');
  const [joke, setJoke] = useState('');
  const [selectedHobby, setSelectedHobby] = useState('');
  const [recommendation, setRecommendation] = useState([]);
  const [hobbyImage, setHobbyImage] = useState('');

  // Resource lists structured by mood and hobby with embedded video links
  const resources = {
    Music: {
      mood: 'Happy',
      suggestions: [
        { title: 'Music Video 1', embedUrl: 'https://www.youtube.com/embed/hN4f9POjgEk' },
        { title: 'Music Video 2', embedUrl: 'https://www.youtube.com/embed/ugeRr5HbsU4' },
        { title: 'Music Video 3', embedUrl: 'https://www.youtube.com/embed/HCWvgoTfUjg' },
      ],
      image: 'https://images.unsplash.com/photo-1494562481101-3799f2e6d2f0?w=400',
    },
    Drawing: {
      mood: 'Creative',
      suggestions: [
        'Proko - Proko Drawing Tutorials: https:www.proko.com/',
        'Drawabox: https:drawabox.com/',
      ],
      image: 'https://images.unsplash.com/photo-1586346602259-7eb19c4ff02f?w=400',
    },
    Webseries: {
           mood: 'Relaxed',
           suggestions: [
             'Stranger Things - Netflix',
             'The Crown - Netflix',
             'Breaking Bad - AMC/Netflix',
           ],
           image: 'https://images.unsplash.com/photo-1608392229171-7984f43a1184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHdlynNlc2V8ZW58MHx8fHwxNjgzNTkyNDA1&ixlib=rb-4.0.3&q=80&w=400', // Example image
      
           },
      
           
           Photography: {
             mood: 'Inspiring',
           suggestions: [
             'Digital Photography School: https://digital-photography-school.com/',
               'Photography Life: https://photographylife.com/',
             ],
             image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBvdG9ncmFwaHlfZGVtaXxlbnwwfHx8fDE2ODM1OTI0MDY&ixlib=rb-4.0.3&q=80&w=400', // Example image
           },
           Cooking: {
             mood: 'Nurturing',
             suggestions: [
               'Binging with Babish - YouTube Channel',
               'Tasty - YouTube Channel',
               'New York Times Cooking - [Website](https://cooking.nytimes.com/)',
             ],
             image: 'https://images.unsplash.com/photo-1504622541148-64d5009eae4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGNvb2tpbmd8ZW58MHx8fHwxNjgzNTkyNDEw&ixlib=rb-4.0.3&q=80&w=400', // Example image
           },
           Gardening: {
             mood: 'Grounded',
             suggestions: [
               'Garden Answer - YouTube Channel',
               'The Garden Diaries - Blog',
             ],
             image: 'https://images.unsplash.com/photo-1491942103582-e5d7a0ff2551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGdhcmRlbmluZ3xlbnwwfHx8fDE2ODM1OTI0MjU&ixlib=rb-4.0.3&q=80&w=400', // Example image
           },
           Fitness: {
             mood: 'Energized',
             suggestions: [
               'Yoga with Adriene - YouTube Channel',
               'Fitness Blender - [Website](https://www.fitnessblender.com/)',
             ],
             image: 'https://images.unsplash.com/photo-1518003102020-28b9eb35a2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGZpdG5lc3N8ZW58MHx8fHwxNjgzNTkyNDI4&ixlib=rb-4.0.3&q=80&w=400', // Example image
           },
           Crafting: {
             mood: 'Creative',
             suggestions: [
               'The Sorry Girls - YouTube Channel',
               '5-Minute Crafts - YouTube Channel',
             ],
             image: 'https://images.unsplash.com/photo-1504607242860-39a4c64512f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNyYWZ0aW5nfGVufDB8fHx8MTY4MzU5MjQ4MQ&ixlib=rb-4.0.3&q=80&w=400', // Example image
           },
           Traveling: {
             mood: 'Adventurous',
             suggestions: [
               'Kara and Nate - YouTube Channel',
               'Drew Binsky - YouTube Channel',
             ],
             image: 'https://images.unsplash.com/photo-1463247312068-e6b7b2a9b20a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRyYXZlbGluZ3xlbnwwfHx8fDE2ODM1OTI1MTE&ixlib=rb-4.0.3&q=80&w=400', // Example image
           },
           Meditation: {
             mood: 'Calm',
             suggestions: [
               'Headspace - App',
               'Calm - App',
             ],
             image: 'https://images.unsplash.com/photo-1502793899730-1861e8960d22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1lZGl0YXRpb258ZW58MHx8fHwxNjgzNTkyNTQ5&ixlib=rb-4.0.3&q=80&w=400', // Example image
       },
  
  };

  const handleMoodChange = (event) => setMood(event.target.value);
  const handleHobbySelect = (event) => setSelectedHobby(event.target.value);

  const fetchJoke = async () => {
    if (!mood) return;
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error('Error fetching the joke:', error);
      setJoke('Could not fetch a joke at this time.');
    }
  };

  const generateRecommendation = () => {
    if (selectedHobby in resources) {
      setRecommendation(resources[selectedHobby].suggestions);
      setHobbyImage(resources[selectedHobby].image);
    } else {
      setRecommendation([]);
      setHobbyImage('');
    }
  };

  useEffect(() => {
    if (mood) fetchJoke();
  }, [mood]);

  useEffect(() => {
    if (selectedHobby) generateRecommendation();
  }, [selectedHobby]);

  return (
    <>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg">
          <div className="container-fluid">
            <div style={{ marginLeft: "10px" }}>
              <img
                width={70}
                height={70}
                style={{ borderRadius: "100%", margin: "auto" }}
                src={currentUser?.photoURL || "defaultImageUrl"}
                alt="User Avatar"
              />
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  paddingLeft: "50px",
                  marginTop: "20px",
                  color: "#F65AA8",
                  textAlign: "center",
                }}
              >
                {currentUser?.displayName}
              </span>
            </div>
            <div className="collapse navbar-collapse" id="sidebarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/dashboard"><i className="bi bi-house"></i> Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/track"><i className="bi bi-bookmarks"></i> Period Tracker</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/nearclinic"><i className="bi bi-cart-plus"></i> Nearest Pharmacy</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/nearhospital"><i className="bi bi-file-medical"></i> Nearest Hospital</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/yoga"><i className="bi bi-yoga"></i> Yoga</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/food"><i className="bi bi-egg-fried"></i> Food</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/gemini"><i className="bi bi-robot"></i> Gemini AI</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/mood-tracker"><i className="bi bi-smile"></i> Mood Tracker</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/products"><i className="bi bi-cart"></i> Product Section</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/scheme"><i className="bi bi-cart"></i> Scheme Section</Link></li>
              </ul>
              <hr className="navbar-divider my-5 opacity-20" />
              <ul className="navbar-nav">
                <li className="nav-item" style={{ cursor: "pointer" }}>
                  <a className="nav-link" href="#"><i className="bi bi-box-arrow-left"></i> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          <header className="bg-surface-primary border-bottom pt-6">
            <div className="container-fluid">
              <div className="mb-npx">
                <h1 className="h2 mb-0 ls-tight" style={{ color: "#5C60F5" }}>Welcome to SHEvolve's</h1>
              </div>
            </div>
          </header>

          <Container>
            <Typography variant="h2" gutterBottom style={{ marginTop: '1rem' }}>Mood Tracker</Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">How do you feel today?</Typography>
                    <select value={mood} onChange={handleMoodChange} className="mood-select">
                      <option value="">Select your mood</option>
                      <option value="Happy">Happy</option>
                      <option value="Sad">Sad</option>
                      <option value="Relaxed">Relaxed</option>
                      <option value="Creative">Creative</option>
                    </select>
                    {joke && (
                      <Typography variant="body1" style={{ marginTop: '1rem' }}>
                        {joke}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">What would you like to do?</Typography>
                    <select value={selectedHobby} onChange={handleHobbySelect} className="hobby-select">
                      <option value="">Select a hobby</option>
                      {Object.keys(resources).map((hobby) => (
                        <option key={hobby} value={hobby}>{hobby}</option>
                      ))}
                    </select>
                    {recommendation.length > 0 && (
                      <Typography variant="body1" style={{ marginTop: '1rem' }}>
                        <strong>Recommendations:</strong>
                        <ul>
                          {recommendation.map((item, index) =>
                            item.embedUrl ? (
                              <li key={index}>
                                <Typography variant="h6">{item.title}</Typography>
                                <iframe
                                  width="100%"
                                  height="315"
                                  src={item.embedUrl}
                                  title={item.title}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </li>
                            ) : (
                              <li key={index}><a href={item.url} target="_blank" rel="noopener noreferrer">{item}</a></li>
                            )
                          )}
                        </ul>
                      </Typography>
                    )}
                    {hobbyImage && (
                      <img
                        src={hobbyImage}
                        alt={selectedHobby}
                        style={{ marginTop: '1rem', width: '100%', borderRadius: '8px' }}
                      />
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default MoodTracker;
