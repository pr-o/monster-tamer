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
pnpm vitest run tests/path/to/file.test.ts
```

Run tests matching a pattern:

```bash
pnpm vitest run -t "test name"
```

## Architecture

This is a Phaser 3 turn-based monster battle game modeled after PokeRogue. The game runs as a single-page app loaded via `index.html` → `src/main.ts`.

### Path Aliases

Aliases follow PokeRogue's convention: granular `#`-prefixed aliases per subdirectory, plus a general `@app/*` catch-all for `src/`. All are defined in `tsconfig.json` and resolved at build time by `vite-tsconfig-paths`.

| Alias          | Resolves to                |
| -------------- | -------------------------- |
| `@app/*`       | `src/*` (general fallback) |
| `#constants/*` | `src/constants/*`          |
| `#locales/*`   | `src/locales/*`            |
| `#scenes/*`    | `src/scenes/*`             |
| `#system/*`    | `src/system/*`             |
| `#ui/*`        | `src/ui/*`                 |
| `#utils/*`     | `src/utils/*`              |

Prefer the specific `#`-prefixed alias over `@app/*`. When adding a new `src/` subdirectory, add a matching entry to both `tsconfig.json` `paths` and `vite.config.ts` `resolve.alias`.

### Scene Flow

Phaser scenes are registered in `src/main.ts` and follow this flow:

```
PreloadScene → TitleScene → GameScene
```

Each scene is a class extending `Phaser.Scene`. Add new scenes to `src/scenes/` and register them in `src/main.ts`.

### Key Modules

| Module           | Purpose                                                               |
| ---------------- | --------------------------------------------------------------------- |
| `src/scenes/`    | Phaser scene classes; `scene-keys.ts` holds the `SCENE_KEYS` enum     |
| `src/constants/` | Shared string-keyed enums for asset keys used across scenes           |
| `src/ui/`        | UI handlers extending the abstract `UiHandler` base                   |
| `src/system/`    | Persistence (save/load via AJV-validated JSON schemas)                |
| `src/utils/`     | Pure utility functions                                                |
| `src/locales/`   | i18next translation strings, organized by language                    |
| `src/i18n.ts`    | i18next initialization — call `initI18n()` before game boot if needed |

### Save Data Validation

AJV is used exclusively for validating save data JSON at load time (`src/system/save-data.ts`). Define `JSONSchemaType<T>` schemas alongside data interfaces when adding new persisted structures.

### Testing

- Test environment: `jsdom` + `vitest-canvas-mock` (set up in `tests/setup.ts`)
- Canvas API is mocked globally — Phaser's renderer does not run in tests
- Coverage is collected from `src/**/*.ts` (excluding `src/main.ts`)
