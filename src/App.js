import "./App.css";
import "./Card";
import data from "./data";
import Card from "./Card";
import { useState } from "react";

const App = () => {
  const [activeCategories, setActiveCategories] = useState("All");

  const changeCategoy = async (e) => {
    const response = await e.innerHTML;
    setActiveCategories(response);
  };

  return (
    <>
      <section className="header">
        <h1>Our Menu</h1>
        <div className="navbar">
          <button className="btn" onClick={(e) => changeCategoy(e.target)}>
            All
          </button>
          <button className="btn" onClick={(e) => changeCategoy(e.target)}>
            Breakfast
          </button>
          <button className="btn" onClick={(e) => changeCategoy(e.target)}>
            Lunch
          </button>
          <button className="btn" onClick={(e) => changeCategoy(e.target)}>
            Shakes
          </button>
        </div>
      </section>
      <section className="products">
        {data.map((data, count) => {
          if (activeCategories === "All") {
            return <Card id={data.id} key={data.id} data={data} />;
          } else if (data.categories[0] === activeCategories) {
            return <Card id={data.id} key={data.id} data={data} />;
          }

          return <></>;
        })}
      </section>
    </>
  );
};

export default App;
