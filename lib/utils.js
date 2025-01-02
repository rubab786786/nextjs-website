import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getFormattedDate = (milliseconds) => {
  const formatOptions = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  };
  const date = new Date(milliseconds);
  return date.toLocaleDateString(undefined, formatOptions);
};

export function convertFirestoreTimestampToDate(firestoreTimestamp) {
  const jsDate = firestoreTimestamp.toDate();

  const year = jsDate.getFullYear();
  const month = (jsDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = jsDate.getDate().toString().padStart(2, '0');

  return `${month}/${day}/${year}`;
}

export function ValidateEmail(email) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}