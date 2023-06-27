import css from './Statistics.module.css'
import PropTypes  from 'prop-types'
export function Statistics ({ title, stats })  {
    return (
      <section className={css.statistics}>
        {title && <h2>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(stat => (
            <li key={stat.id} className={`${css.item} ${stat.percentage >= 10 && stat.percentage <= 20 ? css.gray : (stat.percentage <= 10 ? '' : css.yellow)}`}>
              <span className={css.percentage}>{Number(stat.percentage)}%</span>
              <span className={css.label}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };

  Statistics.propTypes = {
    title:PropTypes.string.isRequired,
    stats:PropTypes.array,
  }