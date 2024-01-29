import { create } from "zustand";

type State = {
  hover: boolean;
  // selectedProject: null | Project
};

type Action = {
  setHover: (hover: boolean) => void;
};

// Create your store, which includes both state and (optionally) actions
const useHover = create<State & Action>((set) => ({
  hover: false,
  setHover: (hover) => set(() => ({ hover: hover })),
}));

export default useHover;
