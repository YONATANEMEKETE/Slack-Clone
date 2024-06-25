import { create } from 'zustand';

type dropdownStore = {
  dropdownSol: boolean;
  setDropSol: () => void; // setSidebar: () => void;
};

const UseDropSolution = create<dropdownStore>((set) => ({
  dropdownSol: true,
  setDropSol: () => set((state) => ({ dropdownSol: !state.dropdownSol })),
}));

export default UseDropSolution;
