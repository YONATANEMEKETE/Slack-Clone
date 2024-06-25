import { create } from 'zustand';

type dropdownStore = {
  dropdown: boolean;
  setDropdown: () => void; // setSidebar: () => void;
};

const UseDropDown = create<dropdownStore>((set) => ({
  dropdown: true,
  setDropdown: () => set((state) => ({ dropdown: !state.dropdown })),
}));

export default UseDropDown;
