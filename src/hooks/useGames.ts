import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platforms {
    id: number;
    name: string;
    slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platforms} []
  metacritic: number;
}


interface FetchGameRes {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    
    apiClient
      .get<FetchGameRes>("/games",{signal: controller.signal})
      .then((res) =>  {
        setLoading(false)
        setGames(res.data.results)})
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false)
      })
      return () => controller.abort();
  }, []);

  return {games, error, isLoading};
}

export default useGames