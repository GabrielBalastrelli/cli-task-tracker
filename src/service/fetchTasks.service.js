import fs from 'node:fs/promises';
import path from 'node:path';
import Error from '../utils/error.js';

export async function fetchAllTasks() {
  try {
    const dirname = import.meta.dirname;

    const dbPath = path.join(dirname, '..', 'db', 'db.json');
    const tasks = await fs.readFile(dbPath, 'utf-8');

    return JSON.parse(tasks);
  } catch (err) {
    throw new Error(err?.code || err?.name || 'UNKNOWN_ERROR', err?.message);
  }
}
