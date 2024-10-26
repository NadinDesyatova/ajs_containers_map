import ErrorRepository from "../errorRepository";


test.each([
  [1, 'invalid username'],
  [2, 'Некорректный тип персонажа'], 
  [3, 'В имени персонажа должно быть от 2 до 10 символов'], 
  [4, 'Такой объект уже существует в команде'],
  [8, 'Unknown error']
])(
  ('should translate error with code %i to %s'), 
  (code, expected) => {
    const errorsRepo = new ErrorRepository();
    const result = errorsRepo.translate(code);
 
    expect(result).toBe(expected);
  }
);
