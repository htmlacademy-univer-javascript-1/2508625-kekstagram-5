function isMeetingInHours(workStartTime, workEndTime, appStartTime, appDuration) {
  const parseTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const workStart = parseTime(workStartTime);
  const workEnd = parseTime(workEndTime);
  const appointmentStart = parseTime(appStartTime);
  const appointmentEnd = new Date(appointmentStart.getTime() + appDuration * 60000);

  return appointmentStart >= workStart && appointmentEnd <= workEnd;
}

isMeetingInHours();
