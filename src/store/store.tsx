import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Habit {
    id: string,
    name: string,
    frequency: "daily | weekly",
    completedDates: string[],
    createdAt: string
};

interface habitState {
    habits: Habit[],
    addHabit: (name:string, frequency: "daily" | "weekly") => void;
}

const useHabitStore = create<habitState>()(devtools((set) => {
    return {
        habits: [],
        addHabit: (name, frequency) => set((state) => {
            console.log('state', state);
            return {
                habits: [
                    ...state.habits,
                    {
                        id: Date.now().toString(),
                        name,
                        frequency,
                        completedDates: [],
                        createdAt: new Date().toISOString()
                    }
                ]
            }
        })
    }
}))

export default useHabitStore;