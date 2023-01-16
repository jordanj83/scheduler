export function getAppointmentsForDay(state, day) {


const filteredDays = state.days.filter(dayName => dayName.name === day)

if (!filteredDays.length) {
  return []
}

const output = filteredDays[0].appointments.map(appointment => {
  return state.appointments[appointment]
})

return output
}

export function getInterviewersForDay(state, day) {

  const filteredDays = state.days.filter(dayName => dayName.name === day);

  if (!filteredDays.length) {
    return [];
  }

  return filteredDays[0].interviewers.map(id => state.interviewers[id]);
}

export function getInterview(state, interview) {

  const { interviewers } = state;

  if (!interview) {
    return null;
  }

  const interviewerId = interview.interviewer;
  const interviewer = interviewers[interviewerId];

  return {...interview, interviewer}

}
