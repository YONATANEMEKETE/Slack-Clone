import { create } from 'zustand';

type dropdownStore = {
  dropdownPri: boolean;
  setDropPrice: () => void; // setSidebar: () => void;
};

const UseDropPrice = create<dropdownStore>((set) => ({
  dropdownPri: true,
  setDropPrice: () => set((state) => ({ dropdownPri: !state.dropdownPri })),
}));

export default UseDropPrice;
