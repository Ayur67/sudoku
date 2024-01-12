const fs = require("fs");
const { EOL } = require("os");

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  return fs.readFileSync("./puzzles.txt", "utf-8").split(EOL);
}

const firstStr = read()[0];

// console.log(firstStr);

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const res = firstStr.match(/.{1,9}/g).map((el) => el.split(""));
  const first = res[0];
  // console.log(first);
  for (let el of first) {
    for (let n of arrNums) {
      if (el === "-") {
        el = Math.floor(Math.random() * 8) + 9;
      }
    }
  }
  console.log(first);
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
