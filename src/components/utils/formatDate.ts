const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatDate = (date: string) => {
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  return `${months[month]} ${day}, ${year} ${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${
    hours > 12 ? "PM" : "AM"
  }`;
};

export default formatDate;
