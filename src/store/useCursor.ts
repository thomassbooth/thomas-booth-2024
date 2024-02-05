import { create } from "zustand";

interface cursorProps {
  size: number,
  type: string,
  className?: string,
  colour?: string,
  content?: any,
}


type State = {
  cursor: cursorProps;
  // selectedProject: null | Project
  
};

type Action = {
  setCursor: (hover: cursorProps) => void;
};

// Create your store, which includes both state and (optionally) actions
const useHover = create<State & Action>((set) => ({
  cursor: {type: 'none', size: 16},
  setCursor: (cursor) => set(() => ({ cursor: cursor })),
}));

export default useHover;
