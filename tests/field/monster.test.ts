import { describe, expect, it } from "vitest";
import { Monster } from "#app/field/monster";
import type { MonsterSpecies } from "#app/data/monsters";

const mockSpecies: MonsterSpecies = {
  id: 1,
  name: "Flameling",
  types: ["fire"],
  baseStats: {
    hp: 45,
    attack: 49,
    defense: 49,
    spAtk: 65,
    spDef: 65,
    speed: 45,
  },
};

describe("Monster", () => {
  it("initializes with correct hp at level 5", () => {
    const monster = new Monster(mockSpecies, 5);
    expect(monster.hp).toBe(monster.maxHp);
    expect(monster.hp).toBeGreaterThan(0);
  });

  it("isAlive returns true when hp > 0", () => {
    const monster = new Monster(mockSpecies, 10);
    expect(monster.isAlive).toBe(true);
  });

  it("isAlive returns false when hp is 0", () => {
    const monster = new Monster(mockSpecies, 10);
    monster.hp = 0;
    expect(monster.isAlive).toBe(false);
  });
});
