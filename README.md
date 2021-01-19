# @splatoon-stats/types

<a href="https://www.npmjs.com/package/@splatoon-stats/types"><img alt="Version" src="https://img.shields.io/npm/v/@splatoon-stats/types"></a>

> Comprehensive type definitions for Splatnet2 API

| File                                                                 | Description / Corresponding Splatnet2 endpoint             |
| -------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`bundle.d.ts`](./src/bundle.d.ts)                                   | Export-only bundle file                                    |
| [`common.d.ts`](./src/common.d.ts)                                   | Common types                                               |
| [`enum.ts`](./src/enum.ts)                                           | Enum-like types                                            |
| [`index.d.ts`](./src/index.d.ts)                                     | Utility types                                              |
| [`league-match-ranking.d.ts`](./src/league-match-ranking.d.ts)       | `/league_match_ranking/:league_id/:region`                 |
| [`nickname-and-icons.d.ts`](./src/nickname-and-icons.d.ts)           | `/nickname_and_icon?id=:ids`                               |
| [`result-details.d.ts`](./src/result-details.d.ts)                   | `/results/:id`                                             |
| [`results.d.ts`](./src/results.d.ts)                                 | `/results`                                                 |
| [`schedules.d.ts`](./src/schedules.d.ts)                             | `/schedules`                                               |
| [`x-power-ranking-summary.d.ts`](./src/x-power-ranking-summary.d.ts) | `/x_power_ranking/:x_power_ranking_season/:key?page=:page` |
| [`x-power-ranking.d.ts`](./src/x-power-ranking.d.ts)                 | `/x_power_ranking/:x_power_ranking_season/summary`         |

## TODOs

-   [ ] Add enum for
    -   [ ] Rank
    -   [ ] Gear skills

## Acknowledgements

Some of the code is based on work of [frozenpandaman/splatnet2statink](https://github.com/frozenpandaman/splatnet2statink).
