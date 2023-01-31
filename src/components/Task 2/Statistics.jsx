import { StatItem } from './StatItem';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  return (
    <section>
      {title && <h2>Upload stats</h2>}
      <ul>
        {data.map(item => {
          return <StatItem key={item.id} item={item} />;
        })}
      </ul>
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
