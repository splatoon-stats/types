// https://app.splatoon2.nintendo.net/api/league_match_ranking/20010106T/ALL

import { RegionCode, Weapon } from './common';

export type LeagueTypeKey = 'team' | 'pair';

export interface LeagueType {
    key: LeagueTypeKey;
    name: string;
}

export interface LeagueMatchRanking_Region {
    code: RegionCode;
    id: 0 | 1 | 2 | 3;
}

export interface LeagueMatchRanking_TagMember {
    principal_id: string;
    unique_id: string;
    weapon: Weapon;
}

export interface LeagueMatchRanking_Entry {
    cheater: boolean;
    point: number;
    rank: number;
    tag_id: string;
    tag_members: LeagueMatchRanking_TagMember[];
}

export interface LeagueMatchRanking {
    league_id: string;
    league_ranking_region: LeagueMatchRanking_Region;
    league_type: LeagueType;
    rankings: LeagueMatchRanking_Entry[];
    start_time: number;
}
