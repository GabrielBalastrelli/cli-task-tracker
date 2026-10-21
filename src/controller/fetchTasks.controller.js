import { fetchAllTasks } from '../service/fetchTasks.service.js';
import { showTask } from '../views/showTask.view.js';

export async function fecthAllTasksController() {
  const tasks = await fetchAllTasks();
  const viewTasks = tasks
    .map(function (task, index) {
      return showTask(task, index);
    })
    .join('\n' + '-'.repeat(80) + '\n');

  console.log(viewTasks);
}
