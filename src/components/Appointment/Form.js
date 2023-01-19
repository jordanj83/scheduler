import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import { useState } from "react";

export default function Form(props) {
  const [studentName, setStudentName] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const reset = () => {
    setStudentName("");
    setInterviewer(null);
  };
  const [error, setError] = useState("");
  const cancel = () => {
    reset();
    setError("");
    props.onCancel();
  };
  function validate() {
    if (studentName === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
    setError("");
    return props.onSave(studentName, interviewer);
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={(e) => {
              setStudentName(e.target.value);
            }}
            data-testid="student-name-input"
          />

        </form>
        <section
          className="appointment__validation">{error}
        </section>

        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>
            Cancel
          </Button>
          <Button onClick={validate} confirm>
            Save
          </Button>

        </section>
      </section>
    </main>
  );
}
