import { useState } from "react";
import { getUserData } from "../services";

export const useGetUserData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const data = await getUserData();
      return data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchUserData };
};
