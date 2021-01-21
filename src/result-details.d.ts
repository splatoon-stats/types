import { Gear, GearSkills, KeyedValue, Rule, Stage, Weapon } from './common';
import { GameModeKey } from './enum';
import { Nullable } from './index';

interface TeamResult extends KeyedValue {
    key: 'defeat' | 'victory';
    name: string;
}

export interface PlayerType {
    species: 'inklings' | 'octolings';
    style: 'girl' | 'boy';
}

export interface Udemae {
    is_number_reached?: boolean; // Does not exist for other player
    is_x: boolean;
    name: string;
    number?: number; // Does not exist for other player
    s_plus_number: Nullable<number>;
}

export interface Player {
    clothes: Gear;
    clothes_skills: GearSkills;
    head: Gear;
    head_skills: GearSkills;
    nickname: string;
    player_rank: number;
    player_type: PlayerType;
    principal_id: string;
    shoes: Gear;
    shoes_skills: GearSkills;
    star_rank: number;
    udemae?: Udemae; // undefined for players never played ranked
    weapon: Weapon;
}

export interface PlayerResult {
    assist_count: number;
    death_count: number;
    game_paint_point: number;
    kill_count: number;
    player: Player;
    sort_score: number;
    special_count: number;
}

export interface TeamMember {
    assist_count: number;
    death_count: number;
    game_paint_point: number;
    kill_count: number;
    player: Player;
    sort_score: number;
    special_count: number;
}

export interface GameMode extends KeyedValue {
    key: GameModeKey;
}

export interface BaseResult {
    battle_number: string;
    game_mode: GameMode;
    my_team_members: TeamMember[];
    my_team_result: TeamResult;
    other_team_members: TeamMember[];
    other_team_result: TeamResult;
    player_rank: number;
    player_result: PlayerResult;
    rule: Rule;
    stage: Stage;
    star_rank: number;
    start_time: number;
    type: 'regular' | 'gachi' | 'league';
    weapon_paint_point: number;
}

interface BaseGachiResultDetails extends Required<BaseResult> {
    elapsed_time?: number; // Does not exist for turf
    my_team_count: number;
    other_team_count: number;
    udemae: Udemae;
}

export interface ResultDetails_Regular extends BaseResult {
    my_team_percentage: number;
    other_team_percentage: number;
    win_meter: number;
}
export interface ResultDetails_Gachi extends BaseGachiResultDetails {
    crown_players: null;
    estimate_gachi_power: null;
    estimate_x_power: null;
    rank: null;
    x_power: null;
}

export interface ResultDetails_League extends BaseGachiResultDetails {
    estimate_gachi_power: Nullable<number>;
    league_point: Nullable<number>;
    max_league_point: number;
    my_estimate_league_point: number;
    other_estimate_league_point: number;
    tag_id: string;
}

// TODO: Not sure if its correct for turf war
export type ResultDetails_Private =
    | ({
          crown_players?: null;
          estimate_gachi_power?: null;
          estimate_x_power?: null;
          rank?: null;
          x_power?: null;
      } & ResultDetails_Gachi)
    | ResultDetails_Regular;
