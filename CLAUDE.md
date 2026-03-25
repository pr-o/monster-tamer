# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server on port 3000
pnpm build            # Type-check + build to dist/
pnpm test             # Run tests in watch mode
pnpm test:run         # Run tests once
pnpm test:coverage    # Run tests with v8 coverage report
pnpm lint             # Lint src/ with Biome
pnpm lint:fix         # Auto-fix lint issues
pnpm format           # Format src/ with Biome
pnpm check            # Lint + format check
pnpm check:fix        # Auto-fix lint + format
```

Run a single test file:
```bash
pnpm vitest run tests/utils/utils.test.ts
```

Run tests matching a pattern:
```bash
pnpm vitest run -t "clamp"
```

## Architecture

This is a Phaser 3 turn-based monster battle game modeled after PokeRogue. The game runs as a single-page app loaded via `index.html` → `src/main.ts`.

### Path Alias

All imports under `src/` use the `#app/*` alias (configured in both `tsconfig.json` and `vite.config.ts` via `vite-tsconfig-paths`). Use `#app/` for all internal imports, never relative paths that escape `src/`.

### Scene Flow

Phaser scenes are registered in `src/main.ts` and follow this flow:
```
PreloadScene → TitleScene → GameScene
```
Each scene is a class extending `Phaser.Scene`. Add new scenes to `src/scenes/` and register them in `src/main.ts`.

### Key Modules

| Module | Purpose |
|---|---|
| `src/scenes/` | Phaser scene classes |
| `src/data/` | Static game data definitions (species, moves, type charts) |
| `src/field/` | Runtime game objects (Monster instances on the field) |
| `src/battle/` | Battle state and logic |
| `src/ui/` | UI handlers extending the abstract `UiHandler` base |
| `src/system/` | Persistence (save/load via AJV-validated JSON schemas) |
| `src/utils/` | Pure utility functions |
| `src/locales/` | i18next translation strings, organized by language |
| `src/i18n.ts` | i18next initialization — call `initI18n()` before game boot if needed |

### Save Data Validation

AJV is used exclusively for validating save data JSON at load time (`src/system/save-data.ts`). Define `JSONSchemaType<T>` schemas alongside data interfaces when adding new persisted structures.

### Testing

- Test environment: `jsdom` + `vitest-canvas-mock` (set up in `tests/setup.ts`)
- Canvas API is mocked globally — Phaser's renderer does not run in tests
- Test files live in `tests/` mirroring the `src/` directory structure
- Coverage is collected from `src/**/*.ts` (excluding `src/main.ts`)
