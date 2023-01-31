import PropTypes from 'prop-types';

export const StatItem = ({ item: { label, percentage } }) => {
  <li>
    <span>{label}</span>
    <span>{percentage}%</span>
  </li>;
};

StatItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
