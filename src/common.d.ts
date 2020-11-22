import { RuleKey } from './enum';

// Miscellaneous types
export interface Stage {
    id: string;
    image: string;
    name: string;
}

export interface KeyedValue {
    key: string;
    name: string;
}

export interface Rule extends KeyedValue {
    key: RuleKey;
    multiline_name: string;
}

// Gear related types
export interface Gear {
    brand: GearBrand;
    id: string;
    image: string;
    kind: 'head' | 'clothes' | 'shoes';
    name: string;
    rarity: 0 | 1 | 2;
    thumbnail: string;
}

export interface GearSkill {
    id: string;
    image: string;
    name: string;
}
export interface GearSkills {
    main: GearSkill;
    subs: [GearSkill, GearSkill | null, GearSkill | null];
}

export interface GearBrand {
    frequent_skill?: GearSkill;
    id: string;
    image: string;
    name: string;
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
