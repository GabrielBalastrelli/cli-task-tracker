import { fetchAllTasks } from '../service/fetchTasks.service.js';
import { showTask } from '../views/showTask.view.js';

export async function fetchStatusTasksController(status, inIncompleteTask) {
  try {
    const tasks = await fetchAllTasks();

    let tasksForStatus = [];

    if (inIncompleteTask) {
      tasksForStatus = tasks.filter(task => task?.status !== 'done');
    } else {
      tasksForStatus = tasks.filter(task => task?.status === status);
    }

    tasksForStatus.map((task, index) => {
      showTask(task, index);
    });
  } catch (err) {
    throw err;
  }
}
