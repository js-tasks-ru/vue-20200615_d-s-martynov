export function addDay(date, dayCount) {
  return date ? new Date(date.getFullYear(), date.getMonth(), date.getDate() + dayCount) : null;
};

export function addMonth(date, monthCount) {
    return date ? new Date(date.getFullYear(), date.getMonth() + monthCount, date.getDate()) : null;
};

export function getDaysInMonth(date) {
  return date ? new Date(date.getFullYear(), date.getMonth(), 0).getDate() : 0;
};

export function compareDates(date1, date2) {
  const d1 = date1 !== undefined ? new Date(date1).setHours(0, 0, 0, 0) : null;
  const d2 = date2 !== undefined ? new Date(date2).setHours(0, 0, 0, 0) :  null;
  return d1 === d2;
};

