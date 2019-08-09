import React, { Component, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Counters from "./components/Counters";


// Stateful Functional Component

function App() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 }])

  const handleReset = () => {
    const cnts = counters.map(c => {
      c.value = 0;
      return c;
    });
    setCounters(cnts);
  }
  const handleIncrement = counter => {
    const crs = [...counters];
    const index = crs.indexOf(counter);
    crs[index] = { ...counter };
    crs[index].value++;
    setCounters(crs);
  }

  const handleDelete = counterId => {
    const cers = counters.filter(c => c.id !== counterId);
    setCounters(cers)
  }

  return (
    <React.Fragment>
      <NavBar totalCounters={counters.filter(c => c.value > 0).length} />
      <main role="main" className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
        />
      </main>
    </React.Fragment>
  );
}

export default App;