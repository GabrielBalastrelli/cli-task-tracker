import { updateTask } from '../service/updateTask.service.js';
import { updateQuestion } from '../views/updateQuestionTask.view.js';
import { EnumStatus } from '../utils/enumStatus.js';

export async function updateTaskController(id) {
  try {
    const op = await updateQuestion();
    switch (op) {
      case '1':
        await updateTask(id, EnumStatus.IN_PROGRESS);
        break;
      case '2':
        await updateTask(id, EnumStatus.DONE);
        break;
      case '0':
        break;
      default:
        console.log('Opção Inválida');
        break;
    }
  } catch (err) {
    console.log(
      `Ocorreu um erro ao atualizar a nova tarefa: ${err.code} - ${err.message} `,
    );
  }
}
