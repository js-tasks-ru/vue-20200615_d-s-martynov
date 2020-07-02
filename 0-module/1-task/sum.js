/**
 * Функция, возвращающая сумму двух чисел
 *
 * @param {Number} a - первое число
 * @param {Number} b - второе целое
 * @return {Number} сумма чисел a и b
 */
export function sum(a, b) {
  if (a !== null && a !== undefined && b != null && b !== undefined) {
      return Number(a) + Number(b);
  } else {
      return undefined;
  }
}
