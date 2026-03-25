import Ajv, { type JSONSchemaType } from "ajv";

const ajv = new Ajv();

export interface SaveData {
  playTime: number;
  currentScene: string;
  gameVersion: string;
}

const saveDataSchema: JSONSchemaType<SaveData> = {
  type: "object",
  properties: {
    playTime: { type: "number" },
    currentScene: { type: "string" },
    gameVersion: { type: "string" },
  },
  required: ["playTime", "currentScene", "gameVersion"],
  additionalProperties: false,
};

const validateSaveData = ajv.compile(saveDataSchema);

export function loadSaveData(raw: unknown): SaveData | null {
  if (validateSaveData(raw)) {
    return raw;
  }
  console.error("Invalid save data:", validateSaveData.errors);
  return null;
}

export function serializeSaveData(data: SaveData): string {
  return JSON.stringify(data);
}
