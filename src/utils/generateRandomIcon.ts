function generateRandomIcon(): string {
  const options = ['Home', 'Retail', 'Profile', 'Favorite', 'Note'];

  // Get a random index within the options array
  const randomIndex = Math.floor(Math.random() * options.length);

  // Return the string at the randomly selected index
  return options[randomIndex];
}

export default generateRandomIcon;
