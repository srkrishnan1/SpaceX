//used to convert date in utc format to DD-MM-YYYY

export const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) {
    return "Invalid date";
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};
