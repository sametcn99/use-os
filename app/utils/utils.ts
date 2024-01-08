// Function to generate a random color in hexadecimal format
export const getRandomColor = () => {
  // Hexadecimal characters used for color representation
  const letters = "0123456789ABCDEF";

  // Initialize the color variable with the '#' symbol
  let color = "#";

  // Loop to generate a random 6-digit hexadecimal color code
  for (let i = 0; i < 6; i++) {
    // Append a random hexadecimal character to the color code
    color += letters[Math.floor(Math.random() * 16)];
  }

  // Return the randomly generated color code
  return color;
};

/**
 * Checks the validity of an image URL by sending a HEAD request to the specified URL.
 * @param {string} url - The URL of the image to be checked.
 * @returns {Promise<boolean>} - A Promise that resolves to true if the image URL is valid, false otherwise.
 */
export async function isImageUrlValid(url: string) {
  try {
    // Send a HEAD request to the specified URL to check if the image exists.
    const response = await fetch(url, { method: "HEAD" });

    // Check if the response status is ok (2xx status code) to determine the validity of the image URL.
    return response.ok;
  } catch (error) {
    // Log an error message if there is an issue with the request.
    console.error("Error checking image URL:", error);

    // Return false to indicate that the image URL is not valid.
    return false;
  }
}
