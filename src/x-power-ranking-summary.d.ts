import { RankedRuleKey } from './enum';
import { XPowerRanking, XPowerRanking_TopRanking } from './x-power-ranking';

export interface XPowerRankingSummary_Rule extends XPowerRanking {
    top_rankings: [XPowerRanking_TopRanking];
}

export type XPowerRankingSummary = Record<RankedRuleKey, XPowerRankingSummary_Rule>;
