import { StatItem } from './StatItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>Upload stats</h2>}
      <ul>
        {stats.map(item => {
          return <StatItem key={item.id} item={item} />;
        })}
      </ul>
    </section>
  );
};
