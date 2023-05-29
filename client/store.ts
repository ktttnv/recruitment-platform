import RootStore from './stores/RootStore';
import {useMemo} from 'react'

export async function initializeStore() {
    const rootStore = new RootStore();

    await rootStore.init();

    return rootStore;
}

export async function useStore(initialState: any) {
    const store = useMemo(async () => await initializeStore(), [initialState]);
    return store;
  }
  