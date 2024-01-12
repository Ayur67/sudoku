const fs = require('fs');
const { EOL } = require('os');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  return fs.readFileSync('./puzzles.txt', 'utf-8').split(EOL);
}

const firstStr = read()[0];

// console.log(firstStr);

function solve() {
  const res = firstStr.match(/.{1,9}/g).map((el) => el.split(''));
  for (const el of res) {
    for (let i = 0; i < el.length; i += 1) {
      const num = (Math.floor(Math.random() * 9) + 1);
      if (el[i] === '-') {
        el[i] = num.toString();
      }
    }
  }
  console.log(res);
}

solve();

function isSolved() {

  //  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
  //  * Возвращает булевое значение — решено это игровое поле или нет.

}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
