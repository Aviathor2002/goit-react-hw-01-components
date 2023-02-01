import { StatItem } from './StatItem';
import PropTypes from 'prop-types';
import { StatisticTitle, StatisticsList } from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <section>
      {title && <StatisticTitle>Upload stats</StatisticTitle>}
      <StatisticsList>
        {data.map(item => {
          return <StatItem key={item.id} item={item} />;
        })}
      </StatisticsList>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,

  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
