export const generateToken = () => {
  return Math.random().toString(36).substring(2);
};

// Function to generate a random PIN
export const generatePin = () => {
  const MAX = 9999;
  const MIN = 1000;

  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
};
