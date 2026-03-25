import type { MonsterSpecies, BaseStats } from "#app/data/monsters";

export class Monster {
  species: MonsterSpecies;
  level: number;
  hp: number;
  maxHp: number;

  constructor(species: MonsterSpecies, level: number) {
    this.species = species;
    this.level = level;
    this.maxHp = this.calculateMaxHp(species.baseStats, level);
    this.hp = this.maxHp;
  }

  private calculateMaxHp(baseStats: BaseStats, level: number): number {
    return Math.floor(((2 * baseStats.hp * level) / 100) + level + 10);
  }

  get isAlive(): boolean {
    return this.hp > 0;
  }
}
