import { GameQuery } from "../App";
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


const useGames = (gameQuery: GameQuery) => {
    return useData<Games>('/games', {params:
        {
            genres:gameQuery.genre?.id, 
            platforms: gameQuery.platform?.id
        }
    }, [gameQuery]);
}

export default useGames