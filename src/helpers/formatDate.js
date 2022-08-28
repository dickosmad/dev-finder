const formatDateInToString = (date) => {
  const dateToString = new Date(date).toString();
  const arrDate = dateToString.split(" ");
  return [arrDate[1], arrDate[2], arrDate[3]].join(" ");
};

export default formatDateInToString;
