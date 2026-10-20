import { fetchAllTasks } from './fetchTasks.service.js';
import AppError from '../utils/error.js';
import { updateStoreTask } from '../service/updateStoreTask.service.js';
import formatDate from '../utils/formatDate.js';

export async function updateTask(id, status) {
  try {
    const tasks = await fetchAllTasks();
    const updateTasks = tasks.map(task => {
      return task?.id === id
        ? {
            ...task,
            status,
            updateAt: formatDate(new Date()),
          }
        : task;
    });
    await updateStoreTask(updateTasks);

    console.log('A tarefa foi atualizada com sucesso!');
  } catch (err) {
    throw new AppError(
      err?.code || 'UNKNOWN_ERROR',
      err?.message,
    );
  }
}
