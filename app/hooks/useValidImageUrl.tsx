import { useState, useEffect } from "react";

export async function useValidImageUrl(url: string) {
  const [isValid, setIsValid] = useState<null | boolean>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(url);

        // Check for a successful response status code (200-299)
        if (!response.ok) {
          setIsValid(false);
          setError(
            `Image URL returned a non-successful status code: ${response.status}`,
          );
          return;
        }

        const blob = await response.blob();
        const image = new Image();

        image.onload = () => setIsValid(true);
        image.onerror = () => {
          setIsValid(false);
          setError("Failed to load image");
        };

        image.src = URL.createObjectURL(blob);
      } catch (error) {
        setIsValid(false);
        setError("Error fetching image");
      }
    };

    fetchImage();
  }, [url]);

  return { isValid, error };
}
