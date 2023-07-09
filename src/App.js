import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  /*   const handleDeleteBtn = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }; */

  const handleDeleteBtn = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <>
      {loading ? (
        <main>
          <Loading />
        </main>
      ) : (
        <main>
          <Tours
            fetchTours={fetchTours}
            handleDeleteBtn={handleDeleteBtn}
            tours={tours}
          />
        </main>
      )}
    </>
  );
}

export default App;
