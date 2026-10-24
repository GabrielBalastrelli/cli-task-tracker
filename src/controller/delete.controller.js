import { deleteTask } from '../service/delete.service.js';
import { fetchAllTasks } from '../service/fetchTasks.service.js';
import { showTask } from '../views/showTask.view.js';
import { menuDeleteTask } from '../views/delete.view.js';

export async function deleteTaskController() {
  try {
    const tasks = await fetchAllTasks();

    tasks.map((task, index) => {
      showTask(task, index);
    });

    const idTask = await menuDeleteTask();

    const taskDesc = await deleteTask(idTask);

    console.log(`A task ${taskDesc} foi apagada com sucesso!`);
  } catch (err) {
    throw err;
  }
}
