import { convertStatus } from '../utils/convertStatus.js';

export function showTask(task, index) {
  return `
    📌 Tarefa ${index + 1}
    👉 Código da Task: ${task?.id} 
    📜 Descrição: ${task?.description}
    🚀 Status: ${convertStatus(task?.status)}
    📅 Data de Criação: ${task?.createdAt}
    📅 Data de Atualização: ${task?.updateAt || 'Tarefa não foi atualizada.'}
    `;
}
