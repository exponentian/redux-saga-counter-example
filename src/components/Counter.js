import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ childProps }) => {
  const { counter, onIncrement, onDecrement, onIncrementAsync } = childProps;
  
  return (
    <div>
      <div>
        <button onClick={() => onIncrement()}>Increment</button>
        <button onClick={() => onDecrement()}>Decrement</button>
        <button onClick={() => onIncrementAsync()}>IncrementAsync</button>
      </div>

      <br />
      <div>Count: { counter.value }</div>
    </div>
  )
}

Counter.propTypes = {
  childProps: PropTypes.shape({
    counter: PropTypes.object.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired
  }).isRequired
};

export default Counter;