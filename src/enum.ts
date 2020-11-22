export const ruleKeys = ['turf_war', 'splat_zones', 'tower_control', 'rainmaker', 'clam_blitz'] as const;
export type RuleKey = typeof ruleKeys[number];

export const rankedRuleKeys = ['splat_zones', 'tower_control', 'rainmaker', 'clam_blitz'] as const;
export type RankedRuleKey = typeof rankedRuleKeys[number];

export const regionCodes = ['ALL', 'JP', 'US', 'EU'] as const;
export type RegionCode = typeof regionCodes[number];

// https://github.com/frozenpandaman/splatnet2statink/blob/199bc433ee606878ea1d0a1b9a78030b3b4592b4/splatnet2statink.py#L788-L811
export const gameModeKeys = ['regular', 'gachi', 'league_team', 'league_pair', 'private', 'fes_solo', 'fes_team'];
export type GameModeKey = typeof gameModeKeys[number];
