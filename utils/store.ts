import create from 'zustand';

// Định nghĩa kiểu cho state
interface State {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Tạo store
const useStore = create<State>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
