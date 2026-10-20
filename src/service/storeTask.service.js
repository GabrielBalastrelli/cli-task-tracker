import fs from 'node:fs/promises';
import path from 'node:path';
import { fetchAllTasks } from './fetchTasks.service.js';
import AppError from '../utils/error.js';

export async function storeTask(data) {
  const dirname = import.meta.dirname;
  const dbPath = path.join(dirname, '..', 'db', 'db.json');
  let tasks = [];
  try {
    tasks = await fetchAllTasks();
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(
        'O arquivo de tasks ainda não existe, será criado abaixo!',
      );
      tasks = [];
    }
  }

  tasks.push(data);

  try {
    await fs.writeFile(dbPath, JSON.stringify(tasks));
  } catch (err) {
    throw new AppError(
      err?.code || 'UNKNOWN_ERROR',
      err.message,
    );
  }
}
