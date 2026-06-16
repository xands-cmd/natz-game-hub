import useData from "./useData";
import { Genre } from "./useGenre";

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


const useGames = (selectedGenre: Genre | null) => {
    return useData<Games>('/games', {params:{genres:selectedGenre?.id}}, [selectedGenre?.id]);
}

export default useGames