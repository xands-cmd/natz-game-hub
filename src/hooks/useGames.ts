import useData from "./useData";

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


const useGames = () => {
    return useData<Games>('/games');
}

export default useGames