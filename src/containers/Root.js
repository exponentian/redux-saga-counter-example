import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Counter from '../components/Counter';
import { increment, decrement, incrementAsync } from '../actions/counter';

const Root = ({ counter, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <h2>Redux-saga Counter Example</h2>

    <Counter childProps={{ counter, onIncrement, onDecrement, onIncrementAsync }} />
  </div>
);

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch( increment() ),
  onDecrement: () => dispatch( decrement() ),
  onIncrementAsync: () => dispatch( incrementAsync() )
});


Root.propTypes = {
  counter: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);