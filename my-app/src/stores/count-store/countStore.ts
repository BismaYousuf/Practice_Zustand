import { create } from 'zustand'
import { persist } from 'zustand/middleware';

type State = {
    count: number;
    increment: () => void;
    decrement: () => void 
}

export const useCount = create( persist<State>((set) => ({

//state/variable/prperty ki cheezen yahn rakh rai hon

    count : 0,

//Manipulator kry ga state ko

increment: () => set((state: {count: number}) => ( {count: state.count + 1} ) ),

decrement: () => set((state: {count: number}) => ( {count: state.count - 1} ) ),

}), { name: 'position-storage' }))