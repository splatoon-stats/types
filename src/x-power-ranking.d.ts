import { Rule, Weapon } from './common';
import { Nullable } from './index';

export type RankChange = Nullable<'remain' | 'up' | 'down'>;

export type XPowerRanking_WeaponRanking = Omit<XPowerRanking_TopRanking, 'rank' | 'rank_change'>;

export type XPowerRanking_MyRanking = {
    rank: Nullable<number>;
} & Omit<XPowerRanking_TopRanking, 'rank'>;

export interface XPowerRanking_TopRanking {
    cheater: boolean;
    name: string;
    principal_id: string;
    rank: number;
    rank_change: RankChange;
    unique_id: string;
    weapon: Weapon;
    x_power: number;
}

export interface XPowerRanking {
    end_time: number;
    my_ranking: Nullable<XPowerRanking_MyRanking>;
    rule: Rule;
    season_id: string;
    start_time: number;
    status: string | 'calculated' | 'ongoing'; // Unknown type may exist at timing between 'calculated' and 'ongoing'
    top_rankings: XPowerRanking_TopRanking[];
    top_rankings_count: number;
    weapon_ranking: Nullable<XPowerRanking_WeaponRanking>;
}
