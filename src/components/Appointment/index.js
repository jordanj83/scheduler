import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  const showOrHide = props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />;

  return (
    <article className="appointment">
      <Header time={props.time} />
      {showOrHide}
    </article>
  );
}
