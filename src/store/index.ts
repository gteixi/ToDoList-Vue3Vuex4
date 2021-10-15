import { createStore } from 'vuex';
import { DateTime } from 'luxon';

export default createStore({
  state: {
    tasks: [
    {
      id: 1,
      title: "Finish MVP",
      completed: true
    },
    {
      id: 2,
      title: "100% coverage",
      completed: false
    },
    {
      id: 3,
      title: "Review code",
      completed: false
    }],

    dates: DateTime.now().toLocaleString(DateTime.DATE_FULL)
  },

  getters: {
    allTasks: (state) => state.tasks,
    getDate: (state) => state.dates
  },

  actions: {
    addTask({commit}, task) {
      commit('add_task', task);
    },
    deleteTask({commit}, id) {
      commit('delete_task', id);
    },
    updateTask({commit}, task){
      commit('update_task', task);
    },
    changeCompletedTask({commit}, task){
      commit('change_completedTask', task);
    }
  },

  mutations: {
      add_task(state, task) {
        state.tasks.push(task);
      },
      delete_task(state, id) {
        state.tasks = state.tasks.filter((task) => task.id != id);
      },
      update_task(state, task) {
        const index = state.tasks.findIndex(x => x.id == task.id);
        if (index != -1) {
          state.tasks[index] = task;
        }
      },
      change_completedTask(state, task) {
        const index = state.tasks.findIndex(x => x.id == task.id);
        if (index != -1) {
          state.tasks[index].completed = !state.tasks[index].completed
        }
      }
}}
);