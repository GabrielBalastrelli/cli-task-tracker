import { updateTask } from '../service/updateTask.service.js';
import { updateQuestion, choiceIdTask } from '../views/updateQuestionTask.view.js';
import { EnumStatus } from '../utils/enumStatus.js';
import { fetchAllTasks } from '../service/fetchTasks.service.js';
import { showTask } from '../views/showTask.view.js';

export async function updateTaskController() {
  let id;
  let tasksForStatus;
  try {
    const op = await updateQuestion();

    const tasks = await fetchAllTasks();
    switch (op) {
      case '1':
        tasksForStatus = tasks.filter(task => task?.status === 'todo');
        if (tasksForStatus.length === 0) {
          console.log('Não foram encontrados tarefas pendentes!');
          return;
        }
        tasksForStatus.map((task, index) => {
          showTask(task, index);
        });
        id = await choiceIdTask();
        await updateTask(id, EnumStatus.IN_PROGRESS);
        break;
      case '2':
        tasksForStatus = tasks.filter(task => task?.status !== 'done');
        if (tasksForStatus.length === 0) {
          console.log('Não foram encontrados tarefas pendentes ou em execução!');
          return;
        }
        tasksForStatus.map((task, index) => {
          showTask(task, index);
        });
        id = await choiceIdTask();
        await updateTask(id, EnumStatus.DONE);
        break;
      case '0':
        break;
      default:
        console.log('Opção Inválida');
        break;
    }
  } catch (err) {
    throw err;
  }
}
