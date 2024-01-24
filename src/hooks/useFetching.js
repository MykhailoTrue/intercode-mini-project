import { useState } from "react";

export function useFetching(callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const fetching = (...args) => {
    try {
      setIsLoading(true);
      callback(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
}
