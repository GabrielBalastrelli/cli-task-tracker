import { EnumStatus } from '../utils/enumStatus.js';
import formatDate from '../utils/formatDate.js';

export default class Task {
  #id;
  #description;
  #status;
  #createdAt;
  #updateAt;
  constructor(description) {
    this.#id = Date.now().toString(16);
    this.#description = description;
    this.#status = EnumStatus.TODO;
    this.#createdAt = formatDate(new Date());
  }

  get task() {
    return {
      id: this.#id,
      description: this.#description,
      status: this.#status,
      createdAt: this.#createdAt,
      updateAt: this.#updateAt,
    };
  }

  set status(status) {
    this.#status = status;
  }

  get status() {
    return this.#status;
  }

  set updateAt(date) {
    this.#updateAt = date;
  }
}
