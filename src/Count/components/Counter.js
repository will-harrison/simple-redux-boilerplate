import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  render() {
        // <div className="counter-even-label">{this.props.count % 2 === 0 ? 'even' : 'odd'}</div>
    let { count } = this.props;
    return (
      <div className="counter-container">
        <div className="counter-num-label">{count}</div>
        {/* Below, the even or odd statement is simply used to demonstrate how one could
        easily use a ternary operator to conditionally show an 'even' or 'odd' string
        based on the counter's value on state. */}
        <br />
        <div className="counter-buttons">
          <button onClick={() => {this.handleDecrement();}}>-</button>
          <button onClick={() => {this.handleIncrement();}}>+</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
