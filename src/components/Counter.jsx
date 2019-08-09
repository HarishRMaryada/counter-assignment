import React, { Component } from "react";


// Stateless Functional Component
function Counter(props){

  const getBadgeClasses = () =>{
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  const formatCount = () => {
    const { value } = props.counter;
    return value === 0 ? "Zero" : value;
  }

    const { counter, onIncrement, onDecrement, onDelete } = props;
    return(
      <div className="row">
        <div className="col-1">
          <span className={getBadgeClasses()}>{formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-primary btn-sm"
          >
            Increment
          </button>
          
          <button
            onClick={() => onDelete(counter.id)}
            className="bnt btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
       </div>
)
}

export default Counter;