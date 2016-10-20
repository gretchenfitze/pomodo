import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Timer = ({ timer }) => (
  <div>
    Action: {timer.timerType} for {timer.min}:{timer.sec}
  </div>
);

Timer.propTypes = {
  timer: PropTypes.shape({
    timerType: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    sec: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  timer: state.timer,
});

export default connect(mapStateToProps)(Timer);
