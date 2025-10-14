function formatDate(dateString) {
  const array = dateString.split("-");
  return String(`${array[2]}/${array[1]}/${array[0]}`);
}
export default formatDate;
