export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
    this.isPowerModeOn = false;
    this.powerModeSteps = 0;
  }

  get attack() {
    if (this.isPowerModeOn) {
      return `Атака героя находится в powerMode и составляет ${this.attack * 2}pt`;
    }
    return `Атака героя составляет ${this.attack}pt`;
  }

  get defence() {
    if (this.isPowerModeOn) {
      return `Защита героя находится в powerMode и составляет ${this.defence * 2}pt`;
    }
    return `Защита героя составляет ${this.defence}pt`;
  }

  get health() {
    if (this.isPowerModeOn) {
      return `Здоровье героя находится в powerMode и составляет ${this.health * 2}pt`;
    }
    return `Здоровье героя составляет ${this.health}pt`;
  }

  set health(param) {
    this.health = param;
  }

  set powerMode(param) {
    if (this.isPowerModeOn) {
      throw new Error('powerMode уже активирован');
    }
    this.isPowerModeOn = true;
    this.powerModeSteps = 3;
  }

  get powerMode() {
    return `powerMode активирован. Осталось ${this.powerModeSteps}`;
  }
}
