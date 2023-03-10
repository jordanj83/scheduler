import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";



export default function DayListItem(props) {
  const dayClass = classNames(
    'day-list__item',
    {
      'day-list__item--selected': props.selected,
      'day-list__item--full': !props.spots
    }

  );

  const formatSpots = () => {
    let output = `${props.spots} spots remaining`;
    if (props.spots === 1) {
      output = `${props.spots} spot remaining`;
    }
    if (props.spots === 0) {
      output = `no spots remaining`;
    }
    return output;
  };

  return (
    <li className={dayClass} onClick={props.setDay} selected={props.selected}
      data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}

