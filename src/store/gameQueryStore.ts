import { create } from "zustand";
import type { Genre } from "../services/genreServices";
import type { Platform } from "../services/platformServices";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genre: Genre | null) => void;
  setPlatform: (platform: Platform | null) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: ""
  },
  setGenre: (genre: Genre | null) => {
    console.log("setGenre called with:", genre)
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        genre: genre,
      },
    }))
  },
  setPlatform: (platform: Platform | null) => {
    console.log("setPlatform called with:", platform)
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        platform: platform,
      },
    }))
  },
  setSortOrder: (sortOrder: string) => {
    console.log("setSortOrder called with:", sortOrder)
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } }))
  },
  setSearchText: (searchText: string) => {
    console.log("setSearchText called with:", searchText)
    set((state) => ({ gameQuery: { ...state.gameQuery, searchText } }))
  },
}));

export default useGameQueryStore;