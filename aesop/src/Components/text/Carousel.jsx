import "../text/Carousel.css";
import React, { useState } from "react";

const items = [
  {
    text: {
      heading: "Welcome to Our Carousel",
      paragraph: "This is the first item with some text."
    }
  },
  {
    image:
      "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
    text: "Item 2"
  },
  {
    image:
      "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
    text: "Item 3"
  },
  {
    image:
      "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
    text: "Item 4"
  },
  {
    image:
      "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
    text: "Item 5"
  },
  {
    image:
      "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
    text: "Item 6"
  },
  {
    image:
      "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
    text: "Item 7"
  },
  {
    image:
      "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
    text: "Item 8"
  },
  // Add more items as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  const handlePrevClick = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = items.length - 1;
    }
    setCurrentIndex(newIndex);

    // Enable or disable the buttons based on the new index
    setIsPrevButtonDisabled(newIndex === 0);
    setIsNextButtonDisabled(false);
  };

  const handleNextClick = () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= items.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);

    // Enable or disable the buttons based on the new index
    setIsPrevButtonDisabled(false);
    setIsNextButtonDisabled(newIndex === items.length - 1);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${currentIndex * 20}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index >= currentIndex && index < currentIndex + 5 ? "active" : ""
            }`}
          >
            {index === 0 ? (
              <div className="carousel-text">
                <h2>{item.text.heading}</h2>
                <p>{item.text.paragraph}</p>
              </div>
            ) : (
              <>
                <img src={item.image} alt={`Carousel Item ${index + 1}`} />
                <p>{item.text}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <button
        className="prev-button"
        onClick={handlePrevClick}
        disabled={isPrevButtonDisabled}
      >
        &lt;
      </button>
      <button
        className="next-button"
        onClick={handleNextClick}
        disabled={isNextButtonDisabled}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
