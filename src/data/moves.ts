export type MoveCategory = "physical" | "special" | "status";

export interface Move {
  id: number;
  name: string;
  type: string;
  category: MoveCategory;
  power: number | null;
  accuracy: number | null;
  pp: number;
}

export const allMoves: Move[] = [];
