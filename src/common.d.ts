// Enum-like types
export type RegionCode = 'ALL' | 'JP' | 'US' | 'EU';

export type RankedRuleKeys = 'clam_blitz' | 'rainmaker' | 'splat_zones' | 'tower_control';

// Miscellaneous types
export interface KeyedValue {
    key: string;
    name: string;
}

export interface Rule extends KeyedValue {
    key: RankedRuleKeys;
    multiline_name: string;
}

// Weapon types
export interface Weapon {
    id: string;
    image: string;
    name: string;
    special: SpecialWeapon;
    sub: SubWeapon;
    thumbnail: string;
}

export interface SpecialWeapon {
    id: string;
    image_a: string;
    image_b: string;
    name: string;
}

export interface SubWeapon {
    id: string;
    image_a: string;
    image_b: string;
    name: string;
}
