import {
    BaseResult,
    ResultDetails_Gachi,
    ResultDetails_League,
    ResultDetails_Private,
    ResultDetails_Regular,
} from './result-details';

type ResultSummary = (
    | Omit<ResultDetails_Regular, keyof BaseResult>
    | Omit<ResultDetails_Gachi, keyof BaseResult>
    | Omit<ResultDetails_League, keyof BaseResult>
    | Omit<ResultDetails_Private, keyof BaseResult>
) &
    Omit<BaseResult, 'my_team_members' | 'other_team_members'>;

export interface Results_Summary {
    assist_count_average: number;
    count: number;
    death_count_average: number;
    defeat_count: number;
    kill_count_average: number;
    special_count_average: number;
    victory_count: number;
    victory_rate: number;
}

export interface Results {
    results: ResultSummary[];
    summary: Results_Summary;
    unique_id: string;
}
