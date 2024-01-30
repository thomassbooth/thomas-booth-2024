import { create } from "zustand";

type State = {
  cursor: any;
  // selectedProject: null | Project
};

type Action = {
  setCursor: (hover: any) => void;
};

// Create your store, which includes both state and (optionally) actions
const useHover = create<State & Action>((set) => ({
  cursor: {type: 'none', size: 16},
  setCursor: (cursor) => set(() => ({ cursor: cursor })),
}));

export default useHover;
