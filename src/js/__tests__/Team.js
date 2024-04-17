import Team from '../classes/Team';

test('add a character to the group', () => {
  const team = new Team();
  team.add({
    name: 'Vasya',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
  expect(() => {
    team.add({
      name: 'Vasya',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  }).toThrow();
});

test('add all characters to the group', () => {
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
    {
      name: 'Vasya',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
  expect(team.members).toEqual(new Set([{
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
  }]));
});

test('convert container Set to array', () => {
  const team = new Team();
  team.add({
    name: 'Vasya',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
  expect(Array.isArray(team.toArray())).toBe(true);
});
