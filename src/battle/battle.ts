import type { Monster } from "#app/field/monster";

export type BattleType = "wild" | "trainer";

export interface BattleParticipant {
  monster: Monster;
  isPlayer: boolean;
}

export class Battle {
  type: BattleType;
  playerMonster: Monster;
  enemyMonster: Monster;
  turn: number;

  constructor(type: BattleType, playerMonster: Monster, enemyMonster: Monster) {
    this.type = type;
    this.playerMonster = playerMonster;
    this.enemyMonster = enemyMonster;
    this.turn = 0;
  }
}
