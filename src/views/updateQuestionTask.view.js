import { askQuestion } from '../utils/askQuestion.js';

export async function updateQuestion() {
  const menu = `
1 - Marcar tarefa para em andamento
2 - Marcar tarefa como finalizada
0 - Voltar para o menu principal
`;
  return await askQuestion(menu);
}

export async function choiceIdTask() {
  const choiceTask = `Informe o Id da Task: `;

  return await askQuestion(choiceTask);
}
