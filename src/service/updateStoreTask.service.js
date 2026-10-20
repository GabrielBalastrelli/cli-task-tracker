import path from 'node:path';
import AppError from '../utils/error.js';
import fs from 'node:fs/promises';

export async function updateStoreTask(...tasks) {
  const dirname = import.meta.dirname;
  const dbPath = path.join(dirname, '..', 'db', 'db.json');

  try {
    await fs.writeFile(
      dbPath,
      JSON.stringify(...tasks),
      'utf-8',
    );

    return;
  } catch (err) {
    throw new AppError(
      err.code || 404,
      err?.message ||
        'Erro ao atualizar o arquivo com as tarefas!',
    );
  }
}
