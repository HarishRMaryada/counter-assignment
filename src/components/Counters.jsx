import React, { Component } from "react";
import Counter from "./Counter";


// Stateless Functional Component
function Counters(props){
    const {counters, onReset, onDelete, onIncrement, onDecrement} = props;
    return(
        <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    )
}
export default Counters;