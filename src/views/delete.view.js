import { askQuestion } from '../utils/askQuestion.js';

export async function menuDeleteTask() {
  const menu = 'Informe o Id da tarefa a ser excluída: ';

  return await askQuestion(menu);
}
