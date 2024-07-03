import { createSlice } from "@reduxjs/toolkit";
import { ulid } from "ulid";


const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask(state, action) {
            const text = action.payload.trim(); // remove whitespace
            if (text !== '') { // check if input is not empty
              state.tasks.push({
                id: ulid(),
                text,
                completed: false,
              });
            }
        },
        removeTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        toggleTaskCompleted(state, action) {
            const toggledTask = state.tasks.find(task => task.id === action.payload);
            if (toggledTask) {
                toggledTask.completed =! toggledTask.completed;
            }
        },
        
        // Sorting task by completing status
        sortTasksByCompleted(state, action) {
            state.tasks.sort((a, b) => a.completed - b.completed);
        }
    }
});

export const { addTask, removeTask, toggleTaskCompleted } = taskSlice.actions;
export default taskSlice.reducer;