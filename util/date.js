export function getFormattedDate(date) {
  // return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // works the same as below
  return date.toISOString().slice(0, 10).split("-").reverse().join("/"); // US Style ISO Date
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
export function getNewDateFormatted(date) {
  return new Date(date)
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
}

export function getDate() {
  return new Date().toISOString().slice(0, 10);
}
