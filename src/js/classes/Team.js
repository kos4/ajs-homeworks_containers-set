export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character, showError = true) {
    let isAdded = false;
    this.members.forEach((char) => {
      if (char.type === character.type) {
        isAdded = true;
        if (showError) {
          throw new Error(`Персонаж с классом ${character.type} уже состоит в группе`);
        }
      }
    });

    if (!isAdded) {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((char) => {
      this.add(char, false);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}

const team = new Team();
team.addAll(
  {
    name: 'Vasya',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  },
  {
    name: 'Sveta',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Petya',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  },
);
