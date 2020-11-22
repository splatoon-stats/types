import { XPowerRankingSummary } from '../src/x-power-ranking-summary';

// https://app.splatoon2.nintendo.net/api/x_power_ranking/200101T00_200201T00/summary
const response: XPowerRankingSummary = {
    rainmaker: {
        my_ranking: null,
        status: 'calculated',
        top_rankings_count: 500,
        season_id: '200101T00_200201T00_04',
        top_rankings: [
            {
                x_power: 2901.5,
                cheater: false,
                weapon: {
                    image: '/images/weapon/62cec5368a7858761cf3b2379c48acf1dec881ef.png',
                    id: '46',
                    thumbnail: '/images/weapon/c83b40e0bc5c913354bfd8b60c72904eab45d7e6.png',
                    special: {
                        name: '\u30b8\u30a7\u30c3\u30c8\u30d1\u30c3\u30af',
                        id: '8',
                        image_a: '/images/special/9871c82952ed0141be0310ace1942c9f5f66d655.png',
                        image_b: '/images/special/26e8117808ce17dadb0f23943359e5909fef4085.png',
                    },
                    name: '\u30aa\u30af\u30bf\u30b7\u30e5\u30fc\u30bf\u30fc \u30ec\u30d7\u30ea\u30ab',
                    sub: {
                        image_a: '/images/sub/d2eaeec524d28ef315a13f8a9e11dd1039cb78aa.png',
                        id: '0',
                        image_b: '/images/sub/b13bf755b279af83904892fae01cd98c866dfec7.png',
                        name: '\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30dc\u30e0',
                    },
                },
                rank: 1,
                rank_change: 'up',
                principal_id: 'b6179b8af33019ae',
                name: '\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u308f',
                unique_id: '10835379232772291728',
            },
        ],
        start_time: 1577836800,
        rule: {
            key: 'rainmaker',
            multiline_name: '\u30ac\u30c1\u30db\u30b3\n\u30d0\u30c8\u30eb',
            name: '\u30ac\u30c1\u30db\u30b3\u30d0\u30c8\u30eb',
        },
        weapon_ranking: null,
        end_time: 1580515200,
    },
    splat_zones: {
        weapon_ranking: null,
        end_time: 1580515200,
        season_id: '200101T00_200201T00_02',
        top_rankings: [
            {
                rank: 1,
                principal_id: '6287d2c051192a39',
                rank_change: 'up',
                name: 'Bad_\u308a\u3093\u3066\u3083\u3093*',
                unique_id: '11736662108202087828',
                x_power: 2911.1,
                cheater: false,
                weapon: {
                    thumbnail: '/images/weapon/0948019a40074c92affe00fd0d9d003101b6fd9d.png',
                    special: {
                        id: '10',
                        image_a: '/images/special/b07cb8cd5b8afbf509b98a9cbb768ed0f2e34898.png',
                        image_b: '/images/special/b2ffd060612d3ed4cfa7bee583cb28d22307064a.png',
                        name: '\u30a2\u30e1\u30d5\u30e9\u30b7',
                    },
                    id: '4031',
                    image: '/images/weapon/34fd511c4ac8a10a66fe8a5f54375a14a523cfe9.png',
                    sub: {
                        image_b: '/images/sub/9c61e8fb4acef3d926be099603a74a02b0976431.png',
                        id: '10',
                        image_a: '/images/sub/5a31dff440e88eb711c6e810c25b8ae3ce8e64b8.png',
                        name: '\u30b8\u30e3\u30f3\u30d7\u30d3\u30fc\u30b3\u30f3',
                    },
                    name: '\u30af\u30fc\u30b2\u30eb\u30b7\u30e5\u30e9\u30a4\u30d0\u30fc\u30fb\u30d2\u30e5\u30fc',
                },
            },
        ],
        rule: {
            key: 'splat_zones',
            multiline_name: '\u30ac\u30c1\n\u30a8\u30ea\u30a2',
            name: '\u30ac\u30c1\u30a8\u30ea\u30a2',
        },
        start_time: 1577836800,
        top_rankings_count: 500,
        my_ranking: null,
        status: 'calculated',
    },
    clam_blitz: {
        top_rankings_count: 500,
        my_ranking: {
            rank: null,
            rank_change: 'down',
            name: '.graydawn',
            principal_id: '2cf69d9715b323b7',
            unique_id: '5796695674674451293',
            x_power: 2352.1,
            cheater: false,
            weapon: {
                image: '/images/weapon/1f2b1db5917ef7a4e62f0e15b8805275e33f2179.png',
                id: '60',
                special: {
                    name: '\u30a4\u30f3\u30af\u30a2\u30fc\u30de\u30fc',
                    id: '1',
                    image_a: '/images/special/abe458a7d13d855f1b27135ccf3e96f46f1f3d10.png',
                    image_b: '/images/special/415bf85acb0b0dcc478316332fe86efb1fe4f203.png',
                },
                thumbnail: '/images/weapon/fdcd7cbe806eb84df374ea8f7e074ac9637d4762.png',
                name: 'N-ZAP85',
                sub: {
                    image_b: '/images/sub/9d6336b855940f6c8fc82979a972f9f3381c0e65.png',
                    image_a: '/images/sub/79ec06c8afca6af0e14da4d9941706bb15f9927e.png',
                    id: '1',
                    name: '\u30ad\u30e5\u30fc\u30d0\u30f3\u30dc\u30e0',
                },
            },
        },
        status: 'calculated',
        weapon_ranking: {
            weapon: {
                sub: {
                    name: '\u30ad\u30e5\u30fc\u30d0\u30f3\u30dc\u30e0',
                    image_a: '/images/sub/79ec06c8afca6af0e14da4d9941706bb15f9927e.png',
                    id: '1',
                    image_b: '/images/sub/9d6336b855940f6c8fc82979a972f9f3381c0e65.png',
                },
                name: 'N-ZAP85',
                special: {
                    name: '\u30a4\u30f3\u30af\u30a2\u30fc\u30de\u30fc',
                    image_b: '/images/special/415bf85acb0b0dcc478316332fe86efb1fe4f203.png',
                    id: '1',
                    image_a: '/images/special/abe458a7d13d855f1b27135ccf3e96f46f1f3d10.png',
                },
                thumbnail: '/images/weapon/fdcd7cbe806eb84df374ea8f7e074ac9637d4762.png',
                image: '/images/weapon/1f2b1db5917ef7a4e62f0e15b8805275e33f2179.png',
                id: '60',
            },
            x_power: 2671.7,
            cheater: false,
            principal_id: 'c7923b79c64044d4',
            name: 't',
            unique_id: '16216054887573719058',
        },
        end_time: 1580515200,
        top_rankings: [
            {
                rank: 1,
                name: '\u3075\u3047\u3044\u03b4',
                rank_change: 'up',
                principal_id: '76bb14aea742beb9',
                unique_id: '1969480416342672826',
                x_power: 2844.5,
                cheater: false,
                weapon: {
                    thumbnail: '/images/weapon/bbabdf1a9ad9fc2217c21cc35993c04ee9bc58b5.png',
                    special: {
                        name: '\u30de\u30eb\u30c1\u30df\u30b5\u30a4\u30eb',
                        id: '0',
                        image_a: '/images/special/e395a50d51459dcee4db62d8d1fbc4bb263bc326.png',
                        image_b: '/images/special/4819d9d318668bdd5dab248a23397ec351bc5c60.png',
                    },
                    image: '/images/weapon/6ecbbb897d6c59a5c03097216ef4f803366ea6fa.png',
                    id: '2050',
                    sub: {
                        image_b: '/images/sub/2b5797c0ad847a54b9bd8168e75050484919d373.png',
                        image_a: '/images/sub/e398a9e0360f048b6a0c4c3c1e89211cca96577f.png',
                        id: '3',
                        name: '\u30ab\u30fc\u30ea\u30f3\u30b0\u30dc\u30e0',
                    },
                    name: '14\u5f0f\u7af9\u7b52\u9283\u30fb\u7532',
                },
            },
        ],
        season_id: '200101T00_200201T00_05',
        rule: {
            name: '\u30ac\u30c1\u30a2\u30b5\u30ea',
            multiline_name: '\u30ac\u30c1\n\u30a2\u30b5\u30ea',
            key: 'clam_blitz',
        },
        start_time: 1577836800,
    },
    tower_control: {
        start_time: 1577836800,
        rule: {
            key: 'tower_control',
            multiline_name: '\u30ac\u30c1\n\u30e4\u30b0\u30e9',
            name: '\u30ac\u30c1\u30e4\u30b0\u30e9',
        },
        top_rankings: [
            {
                cheater: false,
                x_power: 2853.6,
                weapon: {
                    special: {
                        name: '\u30d0\u30d6\u30eb\u30e9\u30f3\u30c1\u30e3\u30fc',
                        image_b: '/images/special/7cebdb0c336b64b829a1cfae2d40c0c4cb24a897.png',
                        image_a: '/images/special/f49b0c33e1e25853a15dfc6a6c95705e8d290741.png',
                        id: '12',
                    },
                    thumbnail: '/images/weapon/f4701d24ced7d59622385fb0b8471c38c8869739.png',
                    image: '/images/weapon/092e69d405c430dd0b9aa24800429f364369da57.png',
                    id: '401',
                    sub: {
                        name: '\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30dc\u30e0',
                        image_a: '/images/sub/d2eaeec524d28ef315a13f8a9e11dd1039cb78aa.png',
                        id: '0',
                        image_b: '/images/sub/b13bf755b279af83904892fae01cd98c866dfec7.png',
                    },
                    name: '\u30dc\u30c8\u30eb\u30ac\u30a4\u30b6\u30fc\u30d5\u30a9\u30a4\u30eb',
                },
                rank: 1,
                unique_id: '17878446100029176935',
                rank_change: 'up',
                principal_id: '9b941a6e757c55c3',
                name: 'GZG\u266a\u308d\u30fc\u30b4\u30b8\u30e9',
            },
        ],
        season_id: '200101T00_200201T00_03',
        end_time: 1580515200,
        weapon_ranking: null,
        status: 'calculated',
        my_ranking: null,
        top_rankings_count: 500,
    },
};