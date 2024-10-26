export default class ErrorRepository {
  constructor() {
    this.errors = new Map(
      [
        [1, 'invalid username'],
        [2, 'Некорректный тип персонажа'], 
        [3, 'В имени персонажа должно быть от 2 до 10 символов'], 
        [4, 'Такой объект уже существует в команде']
      ]
    );
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
