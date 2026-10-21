import AppError from '../utils/error.js';
import { askTaskInform } from './createTaskMenu.view.js';
import { storeTaskController } from '../controller/storeTask.controller.js';
import { fecthAllTasksController } from '../controller/fetchTasks.controller.js';
import { askQuestion } from '../utils/askQuestion.js';
import { fetchStatusTasksController } from '../controller/fetchStatusTasks.controller.js';
import { updateTaskController } from '../controller/updateTask.controller.js';
const menuOptions = `
        1 - Criar nova tarefa 
        2 - Marque uma tarefa como em andamento ou concluída
        3 - Listar todas as tarefas
        4 - Liste todas as tarefas que foram realizadas
        5 - Liste todas as tarefas que não foram concluídas
        6 - Liste todas as tarefas que estão em andamento
        0 - Sair
        `;

async function selectOptMainMenu() {
  try {
    const op = await askQuestion(menuOptions);

    switch (op) {
      case '1':
        const description = await askQuestion(askTaskInform);
        await storeTaskController(description);
        break;
      case '2':
        await updateTaskController();
        break;
      case '3':
        await fecthAllTasksController();
        break;
      case '4':
        await fetchStatusTasksController('done', false);
        break;
      case '5':
        await fetchStatusTasksController('in progress', true);
        break;
      case '6':
        await fetchStatusTasksController('in progress', false);
        break;
      case '0':
        console.log('Saindo da aplicação...');
        return false;
      default:
        throw new AppError(404, 'Opção Inválida!');
    }
  } catch (err) {
    throw new Error(err?.code || 'UNKNOWN_ERROR', err?.message);
  }

  return true;
}

export default async function mainMenu() {
  console.clear();
  let inContinue = true;

  while (inContinue) {
    inContinue = await selectOptMainMenu();
  }

  rl.close();
}
