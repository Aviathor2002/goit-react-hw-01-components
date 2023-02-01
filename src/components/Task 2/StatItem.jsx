import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatItem.styled';

export const StatItem = ({ item: { label, percentage } }) => {
  return (
    <StatisticBox>
      <StatisticText>{label}</StatisticText>
      <StatisticCounter>{percentage}%</StatisticCounter>
    </StatisticBox>
  );
};

StatItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
