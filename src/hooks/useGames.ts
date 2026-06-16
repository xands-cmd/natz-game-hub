import useData from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";

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


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
    return useData<Games>('/games', {params:
        {
            genres:selectedGenre?.id, 
            platforms: selectedPlatform?.id
        }
    }, 
        [selectedGenre?.id, selectedPlatform?.id]);
}

export default useGames