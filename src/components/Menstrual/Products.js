import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Container,
  Divider,
  CardMedia,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Import your images
import vitaminImage from '../../assets/img/vitamin.jpg';
import ironImage from '../../assets/img/iron.jpg';
import calciumImage from '../../assets/img/calcium.jpg';
import proteinImage from '../../assets/img/protein.jpg';
import omega3Image from '../../assets/img/omega-3.jpg';
import magnesiumImage from '../../assets/img/magnesium.jpg';

const Products = ({ currentUser }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [age, setAge] = useState('');
  const [problem, setProblem] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Vitamin D',
      price: 10,
      content: '1000 IU',
      image: vitaminImage,
    },
    {
      id: 2,
      name: 'Iron Supplement',
      price: 15,
      content: '65 mg',
      image: ironImage,
    },
    {
      id: 3,
      name: 'Calcium Supplement',
      price: 12,
      content: '600 mg',
      image: calciumImage,
    },
    {
      id: 4,
      name: 'Protein Powder',
      price: 25,
      content: '20g per serving',
      image: proteinImage,
    },
    {
      id: 5,
      name: 'Omega-3 Fish Oil',
      price: 20,
      content: '1000 mg',
      image: omega3Image,
    },
    {
      id: 6,
      name: 'Magnesium Supplement',
      price: 18,
      content: '300 mg',
      image: magnesiumImage,
    },
  ];

  const handleAgeSubmit = () => {
    const ageNumber = parseInt(age);
    let recommendations = [];

    // Suggest products based on age and common period-related problems
    if (ageNumber >= 12 && ageNumber <= 18) {
      recommendations = ['Iron Supplement', 'Calcium Supplement', 'Vitamin D'];
    } else if (ageNumber >= 19 && ageNumber <= 35) {
      recommendations = ['Protein Powder', 'Omega-3 Fish Oil', 'Iron Supplement'];
    } else if (ageNumber > 35) {
      recommendations = ['Calcium Supplement', 'Magnesium Supplement', 'Vitamin D'];
    }

    // Adjust recommendations based on common problems (e.g., cramps, fatigue)
    if (problem === 'Cramps') {
      recommendations.push('Magnesium Supplement');
    }
    if (problem === 'Fatigue') {
      recommendations.push('Iron Supplement', 'Protein Powder');
    }

    const suggested = products.filter((product) => recommendations.includes(product.name));
    setSuggestedProducts(suggested);
  };

  const addToCart = (id) => {
    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd) {
      setCart([...cart, productToAdd]);
    }
  };

  const addToWishlist = (id) => {
    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd) {
      setWishlist([...wishlist, productToAdd]);
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>{`SHEvolve | ${currentUser?.displayName} Dashboard`}</title>
      </Helmet>
      <a
        href="#"
        className="btn w-full btn-primary rounded-0 border-0 position-relative"
        style={{ zIndex: '1000', background: '#E52F8A', marginTop: '0px' }}
      >
        <strong>Hey! SHEvolve : : </strong> Supporting Women Through Every Cycle of Life
      </a> */}

      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {/* Navbar */}
        <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg">
          <div className="container-fluid">
            <div style={{ marginLeft: '10px' }}>
              <img
                width={70}
                height={70}
                style={{ borderRadius: '100%', margin: 'auto' }}
                src={currentUser?.photoURL || 'defaultImageUrl'}
                alt="User Avatar"
              />
              <span
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  paddingLeft: '50px',
                  marginTop: '20px',
                  color: '#F65AA8',
                  textAlign: 'center',
                }}
              >
                {currentUser?.displayName}
              </span>
            </div>

            <div className="collapse navbar-collapse" id="sidebarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/dashboard"><i className="bi bi-house"></i> Home</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/track">
                    <i className="bi bi-bookmarks"></i> Period Tracker
                  </Link>
                </li>
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
                {/* Additional navigation links */}
              </ul>
            </div>
          </div>
        </nav>

        <Container>
          <Typography variant="h2" gutterBottom>
            Products
          </Typography>

          {/* Ask for Age and Problem */}
          <TextField
            label="Enter your age"
            variant="outlined"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            fullWidth
            sx={{ marginBottom: '1rem' }}
          />
          
          <FormControl fullWidth variant="outlined" sx={{ marginBottom: '1rem' }}>
            <InputLabel>What problem are you facing?</InputLabel>
            <Select
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              label="What problem are you facing?"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Cramps">Cramps</MenuItem>
              <MenuItem value="Fatigue">Fatigue</MenuItem>
              <MenuItem value="Bloating">Bloating</MenuItem>
              <MenuItem value="Mood Swings">Mood Swings</MenuItem>
              <MenuItem value="Headaches">Headaches</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" color="primary" onClick={handleAgeSubmit}>
            Suggest Products
          </Button>

          <Divider sx={{ margin: '2rem 0' }} />

          {/* Suggested Products */}
          {suggestedProducts.length > 0 && (
            <>
              <Typography variant="h3" gutterBottom>
                Recommended Products for You
              </Typography>
              <Grid container spacing={4}>
                {suggestedProducts.map((product) => (
                  <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt={product.name}
                      />
                      <CardContent>
                        <Typography variant="h5">{product.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Price: ${product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Content: {product.content}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={() => addToCart(product.id)}
                        >
                          Add to Cart
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          color="secondary"
                          onClick={() => addToWishlist(product.id)}
                        >
                          Add to Wishlist
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Container>
      </div>
    </>
  );
};

export default Products;
