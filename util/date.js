export function getFormattedDate(date) {
  // return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // works the same as below
  return date.toISOString().slice(0, 10); // US Style ISO Date
}

export function getDataMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
