import { createSlice } from '@reduxjs/toolkit';

const taskStored = JSON.parse(localStorage.getItem('recycle'));
const taskSlice = createSlice({
  name: 'task',
  initialState: taskStored
    ? { tasks: taskStored }
    : {
        tasks: [],
      },

  reducers: {
    addTasksToRecycle(state, action) {
      const task = action.payload;
      state.tasks.push({
        id: task.id,
        name: task.name,
      });
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
