/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapLocationDot, faMapMarker, faDollarSign, faRoad, faUserGroup, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Form } from 'reactstrap';
import { useParams, Link } from 'react-router-dom'; // Import useParams and Link
import './MenuCard.css'
import { food_list } from '../../assets/assets';
import calculateAvgRating from '../../assets/avgRating';
import axios from 'axios';

const MenuCard = () => {
  // form states
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');

  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const food = food_list.find((food) => food._id === id); // Correct variable name
  const { name, image, price, description, category, reviews, address, city, distance, maxGroupSize } = food;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const submitHandler = (e) => {
    e.preventDefault();

    // Handle review submission logic here (e.g., display success message)
    console.log('Review submitted:', reviewName, reviewText);

    // Clear review input fields after submission
    setReviewName('');
    setReviewText('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Name: reviewName,
      Review: reviewText,
    };

    try {
      const response = await axios.post('https://sheet.best/api/sheets/0622e325-311f-421e-bfa4-1cef44087728', data);
      console.log('Review sent to Google Sheets:', response);

      // Clear review input fields after successful submission
      setReviewName('');
      setReviewText('');
    } catch (error) {
      console.error('Error sending review to Google Sheets:', error);
      // Handle errors appropriately (e.g., display error message)
    }
  };

  return (
    <div>
      <section>
        <Container>
          <Row>
            {/* Back button */}
      <div className="back-button">
        <Link to="/item"> {/* Replace '/' with the path to the previous page */}
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </Link>
      </div>
      <br></br>
            <Col lg="8">
              <div className="tour_content">
                <img src={image} alt="" />

                <div className="tour_info">
                  <h2>{name}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour_rating d-flex align-items-center gap-1">
                      <FontAwesomeIcon icon={faStar} style={{ color: 'black' }} />
                      {avgRating === 0 ? "Not Rated" : avgRating}
                      {totalRating === 0 ? "" : ""}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faMapLocationDot} /> {address}
                    </span>
                  </div>
                  <div className="tour_extra-details">
                    <span><FontAwesomeIcon icon={faMapMarker} /> {city}</span>
                    <span><FontAwesomeIcon icon={faDollarSign} />{price} /per person</span>
                    <span><FontAwesomeIcon icon={faRoad} />{distance} k/m </span>
                    <span><FontAwesomeIcon icon={faUserGroup} />{maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{description}</p>
                </div>
                {/* review section */}
                <div className="tour_reviews mt-4">
                  <h5>Reviews ({reviews?.length} review)</h5>

                  <Form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      <span onClick={() => setTourRating(1)}>
                        1 <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <FontAwesomeIcon icon={faStar} />
                      </span>
                    </div>
                    <div className="review_input">
                      <input 
                        type="text" 
                        placeholder="Your Name"
                        value={reviewName}
                        onChange={(e) => setReviewName(e.target.value)}
                        required
                      />
                      <textarea 
                      className='txt1'
                        placeholder="Share your thoughts" 
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                      />
                      <button type="submit" className="btn bg-primary text-black">
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
    </div>
  );
};

export default MenuCard;
