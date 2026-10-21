import path from 'node:path';
import fs from 'node:fs/promises';
import AppError from '../utils/error';

export async function fetchCompletedTasks() {
  const dirname = import.meta.dirname;
  const dbPath = path.join(dirname, '..', 'db', 'db.json');

  try {
    const tasks = await fs.readFile(dbPath, 'utf-8');

    return await JSON.parse(tasks);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new AppError(
        err.code || 'UNKNOWN_ERROR',
        'O arquivo com as tarefas não foi encontrado',
      );
    }
    throw new AppError(
      err.code || 'UNKNOWN_ERROR',
      'Erro ao buscar as tarefas!',
    );
  }
}
