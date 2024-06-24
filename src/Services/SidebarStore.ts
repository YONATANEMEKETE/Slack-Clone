import { create } from 'zustand';

type SideStore = {
  sidebar: boolean;
  setSidebar: () => void;
};

const UseSidebar = create<SideStore>((set) => ({
  sidebar: false,
  setSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}));

export default UseSidebar;
