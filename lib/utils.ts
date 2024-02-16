import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(inputDate: string): string {
  if (!inputDate || inputDate === '') {
    return 'Present';
  } else {
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
}

export function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  let end;

  if (!endDate || endDate.trim() === '') {
    end = new Date(); // Default to today's date if endDate is null or empty
  } else {
    end = new Date(endDate);
  }

  const yearsDiff = end.getFullYear() - start.getFullYear();
  const monthsDiff = end.getMonth() - start.getMonth();
  let years = yearsDiff;
  let months = monthsDiff;

  // Adjust for cases where end month is before start month
  if (monthsDiff < 0) {
    years--;
    months += 12;
  }

  return months === 0 ? `${years} ${years > 0 ? 'yrs' : 'yr'}` : `${years} ${years > 0 ? 'yrs' : 'yr'} ${months} ${months > 0 ? 'mos' : 'mo'}`;
}
