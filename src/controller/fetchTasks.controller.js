import { fetchAllTasks } from '../service/fetchTasks.service.js';
import { showTask } from '../views/showTask.view.js';

export async function fecthAllTasksController() {
  try {
    const tasks = await fetchAllTasks();

    tasks
      .map(function (task, index) {
        showTask(task, index);
      })
      .join('\n' + '-'.repeat(80) + '\n');
  } catch (err) {
    throw err;
  }
  return 0;
}
