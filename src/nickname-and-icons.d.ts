// https://app.splatoon2.nintendo.net/api/nickname_and_icon?id=:ids
export interface NicknameandIcon {
    nickname: string;
    nsa_id: string;
    thumbnail_url: string;
}

export interface NicknameandIcons {
    nickname_and_icons: NicknameandIcon[];
}
