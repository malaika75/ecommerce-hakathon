import React, { useState } from 'react';

type Review = {
  name: string;
  rating: number;
  reviewText: string;
};

type ReviewsProps = {
  reviews: Review[];
};

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    reviewText: '',
  });
  const [showForm, setShowForm] = useState(false);

  // Handle changes in the input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle rating selection
  const handleRatingClick = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }));
    document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review Submitted:', newReview);
    setNewReview({ name: '', rating: 0, reviewText: '' }); // Reset form
    setShowForm(false); // Hide form after submission
  };

  return (
    <div id="reviews-section" className="mt-8">
      <h2 className="text-2xl font-semibold">Customer Reviews</h2>

      {/* Show existing reviews */}
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="font-semibold">{review.name}</div>
            <div className="text-yellow-500">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <p>{review.reviewText}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to review!</p>
      )}

      {/* Button to show review form */}
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        {showForm ? 'Cancel' : 'Add a Review'}
      </button>

      {/* Review form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4">
          <div>
            <label htmlFor="name" className="block">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border"
            />
          </div>
          <div className="mt-4">
            <label className="block">Rating:</label>
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  onClick={() => handleRatingClick(i + 1)}
                  className={`cursor-pointer ${newReview.rating > i ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="reviewText" className="block">Review:</label>
            <textarea
              id="reviewText"
              name="reviewText"
              value={newReview.reviewText}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border"
            />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

export default Reviews;
