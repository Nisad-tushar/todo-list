import { createSlice } from '@reduxjs/toolkit';

const taskStored = JSON.parse(localStorage.getItem('recycle')) || [];
const addedTask = JSON.parse(localStorage.getItem('tasks')) || [];
const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: taskStored,

    addedTasks: addedTask,
  },

  reducers: {
    addTasks(state, action) {
      const task = action.payload;
      state.addedTasks.push({
        id: task.id,
        name: task.name,
      });
      localStorage.setItem('tasks', JSON.stringify(state.addedTasks));
    },

    addTasksToRecycle(state, action) {
      const task = action.payload;
      state.tasks.push({
        id: task.id,
        name: task.name,
      });
      state.addedTasks = state.addedTasks.filter(
        (taskAdded) => taskAdded.id !== task.id
      );
      localStorage.setItem('tasks', JSON.stringify(state.addedTasks));
      localStorage.setItem('recycle', JSON.stringify(state.tasks));
    },
    deleteTask(state, action) {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem('recycle', JSON.stringify(state.tasks));
    },
  },
});
export const taskActions = taskSlice.actions;

export default taskSlice.reducer;
