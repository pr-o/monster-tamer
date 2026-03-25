# Monster Tamer

Phaser 3 라이브러리 학습을 위한 포켓몬 스타일 미니 게임 프로젝트

> Scott Westover의 YouTube 강의 시리즈를 따라가며 만든 학습용 프로젝트다.
> 강의 채널: [https://www.youtube.com/@swestover](https://www.youtube.com/@swestover)

## 주요 모듈

- **Phaser 3** (게임 엔진)
- **TypeScript 5** (타입 안전성)
- **Vite 6** (빌드 도구 및 개발 서버)
- **i18next** (다국어 지원)
- **AJV 8** (저장 데이터 JSON 스키마 검증)
- **Biome** (린터 및 포매터)
- **Vitest** (테스트 러너)

## 씬 구성

씬 키는 `src/scenes/scene-keys.ts`의 `SCENE_KEYS` 상수로 관리된다.

| 씬 | 설명 |
|---|---|
| `PRELOAD_SCENE` | 에셋 로딩 |
| `TITLE_SCENE` | 타이틀 화면 |
| `WORLD_SCENE` | 월드 탐색 |
| `BATTLE_SCENE` | 전투 |
| `MONSTER_PARTY_SCENE` | 파티 관리 |
| `MONSTER_DETAILS_SCENE` | 몬스터 상세 정보 |
| `INVENTORY_SCENE` | 인벤토리 |
| `DIALOG_SCENE` | 대화 |
| `CUTSCENE_SCENE` | 컷씬 |
| `OPTIONS_SCENE` | 설정 |

## 개발

```bash
pnpm dev              # 개발 서버 실행 (localhost:3000)
pnpm build            # 프로덕션 빌드
pnpm test             # 테스트 (watch 모드)
pnpm test:run         # 테스트 1회 실행
pnpm check:fix        # 린트 + 포맷 자동 수정
```

---

# Monster Tamer

A Pokémon-style mini game built as a study project for the [Phaser 3](https://phaser.io/) library, following the lecture series by [Scott Westover](https://www.youtube.com/@swestover) on YouTube.

## Key Modules

- **Phaser 3** (game engine)
- **TypeScript 5** (type safety)
- **Vite 6** (build tool & dev server)
- **i18next** (internationalization)
- **AJV 8** (save data JSON schema validation)
- **Biome** (linter & formatter)
- **Vitest** (test runner)

## Scenes

Scene keys are managed via the `SCENE_KEYS` constant in `src/scenes/scene-keys.ts`.

| Scene | Description |
|---|---|
| `PRELOAD_SCENE` | Asset loading |
| `TITLE_SCENE` | Title screen |
| `WORLD_SCENE` | World exploration |
| `BATTLE_SCENE` | Battle |
| `MONSTER_PARTY_SCENE` | Party management |
| `MONSTER_DETAILS_SCENE` | Monster details |
| `INVENTORY_SCENE` | Inventory |
| `DIALOG_SCENE` | Dialogue |
| `CUTSCENE_SCENE` | Cutscene |
| `OPTIONS_SCENE` | Options |

## Development

```bash
pnpm dev              # Start dev server (localhost:3000)
pnpm build            # Production build
pnpm test             # Run tests in watch mode
pnpm test:run         # Run tests once
pnpm check:fix        # Auto-fix lint & format
```
