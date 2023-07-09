import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, handleDeleteBtn }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name}></img>
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <p>{readMore ? `${info.substring(0, 200)} Readmore...` : info}</p>
          <button onClick={() => setReadMore(!readMore)}>
            {" "}
            {readMore ? "show more" : "show less"}
          </button>
          <button onClick={() => handleDeleteBtn(id)} className="delete-btn">
            Not interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
