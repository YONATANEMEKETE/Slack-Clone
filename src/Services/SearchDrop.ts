import { create } from 'zustand';

type dropdownStore = {
  searchDrop: boolean;
  setSearchDrop: () => void; // setSidebar: () => void;
};

const useSearchDrop = create<dropdownStore>((set) => ({
  searchDrop: true,
  setSearchDrop: () => set((state) => ({ searchDrop: !state.searchDrop })),
}));

export default useSearchDrop;
