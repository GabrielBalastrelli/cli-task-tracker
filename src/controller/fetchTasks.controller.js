import { fetchAllTasks } from '../service/fetchTasks.service.js';
import { convertStatus } from '../utils/convertStatus.js';

export async function fecthAllTasksController() {
  const tasks = await fetchAllTasks();
  const viewTasks = tasks
    .map(function (task, index) {
      return `
    📌 Tarefa ${index + 1}
    👉 Código da Task: ${task?.id} 
    📜 Descrição: ${task?.description}
    🚀 Status: ${convertStatus(task?.status)}
    📅 Data de Criação: ${task?.createdAt}
    📅 Data de Atualização: ${task?.updateAt || 'Tarefa não foi atualizada.'}
    `;
    })
    .join('\n' + '-'.repeat(80) + '\n');

  console.log(viewTasks);
}
