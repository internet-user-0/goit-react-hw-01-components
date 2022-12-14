import PropTypes from 'prop-types';



export const Statistics = ({stats, title}) => {
   return (
<section className="statistics">
   {title
         ? <h2 className="title">{title}</h2>
         : undefined
   }
   
   <ul className="stat-list">
{stats.map(stat => (
   <li className="item" key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage"> {stat.percentage}</span>
   </li>
   ))}
</ul>
</section>
   );};


   Statistics.propTypes = {
      title: PropTypes.string,
      stats: PropTypes.arrayOf(
         PropTypes.shape({
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired,
      })),
   };