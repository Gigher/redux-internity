import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ulid } from "ulid";

type Task = {
    id: string;
    text: string;
    completed: boolean;
}

type TaskState = {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<string>) {
            const text = action.payload.trim();
            if (text !== '') {
              state.tasks.push({
                id: ulid(),
                text,
                completed: false,
              });
            }
        },
        removeTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        toggleTaskCompleted(state, action: PayloadAction<string>) {
            const toggledTask = state.tasks.find(task => task.id === action.payload);
            if (toggledTask) {
                toggledTask.completed =! toggledTask.completed;
            }
        },
        
        // Sorting task by completing status
        sortTasksByCompleted(state, action) {
            state.tasks.sort((a, b) => (a.completed === b.completed)? 0 : (a.completed? 1 : -1));
        }
    }
});

export const { addTask, removeTask, toggleTaskCompleted } = taskSlice.actions;
export default taskSlice.reducer;