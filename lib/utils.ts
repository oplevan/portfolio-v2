import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(inputDate: string): string {
  // Parse the input date string
  const parsedDate = new Date(inputDate);

  // Get the month in abbreviated format
  const monthAbbreviation = parsedDate.toLocaleString('default', { month: 'short' });

  // Extract the year
  const year = parsedDate.getFullYear();

  // Construct the formatted date string
  const formattedDate = `${monthAbbreviation}, ${year}`;

  return formattedDate;
}
