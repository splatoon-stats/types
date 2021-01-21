import { KeyedValue, Rule, Stage } from './common';

interface ScheduleGameMode extends KeyedValue {
    key: 'regular' | 'gachi' | 'league';
}

export interface Schedule {
    end_time: number;
    game_mode: ScheduleGameMode;
    id: number;
    rule: Rule;
    stage_a: Stage;
    stage_b: Stage;
    start_time: number;
}

export type Schedules = Record<'regular' | 'gachi' | 'league', Schedule[]>;
