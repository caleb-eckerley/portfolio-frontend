/**
 *
 * @param {String} date
 * @returns String
 */
export function formatDate(date) {
  if (!date) return "";
  var formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const month = formattedDate.getMonth() + 1;
  const year = formattedDate.getFullYear();
  return `${month}/${day}/${year}`;
}
