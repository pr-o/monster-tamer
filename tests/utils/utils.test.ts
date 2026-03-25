import { describe, expect, it } from "vitest";
import { capitalize, clamp, randFloat, randInt } from "#app/utils/utils";

describe("clamp", () => {
  it("returns value when within range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("clamps to min", () => {
    expect(clamp(-1, 0, 10)).toBe(0);
  });

  it("clamps to max", () => {
    expect(clamp(11, 0, 10)).toBe(10);
  });
});

describe("randInt", () => {
  it("returns integer within range", () => {
    for (let i = 0; i < 100; i++) {
      const result = randInt(0, 10);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(10);
      expect(Number.isInteger(result)).toBe(true);
    }
  });
});

describe("randFloat", () => {
  it("returns float within range", () => {
    for (let i = 0; i < 100; i++) {
      const result = randFloat(0, 1);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(1);
    }
  });
});

describe("capitalize", () => {
  it("capitalizes first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("handles already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });
});
