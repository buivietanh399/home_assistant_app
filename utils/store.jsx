import { create } from 'zustand';

const useStore = create((set, get) => ({
  currentUser: null,
  setCurrentUser: user => set({ currentUser: user }),
  removeCurrentUser: () => set({ currentUser: null }),
  
  entityId: null,
  setEntityId: id => set({ entityId: id }),

  scenarioId: null,
  setScenarioId: id => set({ scenarioId: id }),

  toggleSmartPage: true,
  setToggleSmartPage: () => set({ toggleSmartPage: !get().toggleSmartPage }),
}));

export default useStore;