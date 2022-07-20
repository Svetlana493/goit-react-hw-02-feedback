import PropTypes from 'prop-types';

import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>
        <p className={css.rating}>Good: {good}</p>
      </li>
      <li>
        <p className={css.rating}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css.rating}>Bad: {bad}</p>
      </li>
      <li>
        <p className={css.rating}>Total: {total}</p>
      </li>
      <li>
        <p className={css.rating}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
