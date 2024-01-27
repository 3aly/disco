function generateRandomDate(): string {
  // Generate a random timestamp within the entire timeline
  const minDay = 1;
  const maxDay = 366; // Account for leap year

  // Generate random day within the year
  const randomDay = Math.floor(Math.random() * (maxDay - minDay + 1)) + minDay;

  // Generate random month number (1-12)
  const randomMonth = Math.floor(Math.random() * 12) + 1;

  // Pad the month and day with zeroes for formatting
  const formattedMonth = randomMonth.toString().padStart(2, '0');
  const formattedDay = randomDay.toString().padStart(2, '0');

  // Construct the date string in the desired format
  const randomDate = `2024/${formattedMonth}/${formattedDay}`;

  return randomDate;
}
export default generateRandomDate;
