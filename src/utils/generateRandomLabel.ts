function generateRandomLabel() {
  const options = ['Personal', 'Work']; // Define options inclusively
  const randomIndex = Math.floor(Math.random() * options.length); // Generate random index
  return options[randomIndex]; // Return randomly selected option
}
export default generateRandomLabel;
