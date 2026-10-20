import { storeTask } from '../service/storeTask.service.js';
import Task from '../models/Task.js';
import AppError from '../utils/error.js';

export async function storeTaskController(description) {
  try {
    if (!description.trim()) {
      throw new AppError(
        400,
        `O descrição da tarefa parametro obrigatório.`,
      );
    }
    const task = new Task(description);
    await storeTask(task.task);
  } catch (err) {
    console.log(
      `Ocorreu um erro ao gravar a nova tarefa: ${err.code} - ${err.message} `,
    );
  }
}
