import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, handleDeleteBtn, fetchTours }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour handleDeleteBtn={handleDeleteBtn} key={tours.id} {...tour} />
          );
        })}
        {tours.length == 0 ? (
          <button onClick={() => fetchTours()} className="btn">
            Refresh
          </button>
        ) : (
          tours.map((tour) => {
            return (
              <Tour
                handleDeleteBtn={handleDeleteBtn}
                key={tours.id}
                {...tour}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default Tours;
