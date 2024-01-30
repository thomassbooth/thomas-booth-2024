import { create } from "zustand";

type State = {
  hover: any;
  // selectedProject: null | Project
};

type Action = {
  setHover: (hover: any) => void;
};

// Create your store, which includes both state and (optionally) actions
const useHover = create<State & Action>((set) => ({
  hover: false,
  setHover: (hover) => set(() => ({ hover: hover })),
}));

export default useHover;
