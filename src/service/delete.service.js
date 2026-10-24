import path from 'node:path';
import fs from 'node:fs/promises';
import AppError from '../utils/error.js';
import { fetchAllTasks } from './fetchTasks.service.js';

export async function deleteTask(idTask) {
  const dirname = import.meta.dirname;
  const dbPath = path.join(dirname, '..', 'db', 'db.json');

  try {
    const tasks = await fetchAllTasks();

    const task = tasks.filter(task => task?.id === idTask);

    const newTasks = tasks.filter(task => task?.id !== idTask);

    await fs.writeFile(dbPath, JSON.stringify(newTasks));

    return task[0]?.description;
  } catch (err) {
    throw new AppError(
      err?.code || 'UNKNOWN_ERROR',
      err?.message || 'Erro ao excluira a tarefa!',
    );
  }
}
