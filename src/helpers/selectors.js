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
