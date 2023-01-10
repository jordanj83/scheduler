import React from "react";
import "components/DayListItem.scss"
import classNames from "classnames";

export default function DayListItem(props) {
  const dayClass = classNames(
    'day-list__item',
    {'day-list__item--selected': props.selected,
      'day-list__item--full': !props.spots}

  )

  const formatSpots = (input) => {
    let output = `${input} spots remaining`
    if (input === 1) {
      output = `${input} spot remaining`
    }
    if (input === 0) {
      output = `no spots remaining`
    }
    return output;
  }

  const spotsText = formatSpots(props.spots)

  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={dayClass}>{props.name}</h2>
      <h3 className={dayClass}>{spotsText}</h3>
    </li>
  );
}

