import React from "react";
// import "components/Appointment/**STYLE**.scss"; <---- uncomment this if style needed

export default function Empty( props ) {

  return (
<main className="appointment__add">
  <img
    className="appointment__add-button"
    src="images/add.png"
    alt="Add"
    onClick={props.onAdd}
  />
</main>
  );
}