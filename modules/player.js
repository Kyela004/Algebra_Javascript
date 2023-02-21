export default class Player {
  constructor(name, surname, lotteryNumbers) {
    this.name = name;
    this.surname = surname;
    this.lotteryNumbers = lotteryNumbers;
  }
  getPlayerDetails() {
    return `${this.name} ${this.surname} [${this.lotteryNumbers}]`;
  }
  get MaxNumber() {
    return Math.max(...this.lotteryNumbers);
  }

  get MinNumber() {
    return Math.min(...this.lotteryNumbers);
  }
}
