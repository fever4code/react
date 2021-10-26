import React from "react";
import "./Statistic.css";
import PropTypes from "prop-types";

function Statistics({ title, stats }) {
  const randomColor = () => {
    let color = Math.floor(Math.random() * 16777216).toString(16);
    return "#000000".slice(0, -color.length) + color;
  };

  return (
    <section className="stats__container">
      {title !== undefined && <h2 className="stats__title">{title}</h2>}
      <ul className="stats__list">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="stats__item"
            style={{ backgroundColor: randomColor() }}
          >
            <span className="stats__label">{label}</span>
            <span className="stats__percentage">{`${percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
