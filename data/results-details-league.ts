import { ResultDetails_League } from '../src/result-details';

// https://app.splatoon2.nintendo.net/api/results/:id
const response: ResultDetails_League = {
    league_point: 2585.9,
    other_team_result: { name: 'LOSE\u2026', key: 'defeat' },
    my_estimate_league_point: 2400,
    my_team_count: 100,
    tag_id: 'dL2khmjdJuj',
    my_team_result: { name: 'WIN!', key: 'victory' },
    player_result: {
        special_count: 3,
        player: {
            head: {
                brand: {
                    id: '2',
                    image: '/images/brand/9ac5752790dd6dbdc7a427df95e1bfe89fe318e0.png',
                    frequent_skill: {
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                    },
                    name: '\u30af\u30e9\u30fc\u30b2\u30b9',
                },
                kind: 'head',
                name: '\u30a6\u30fc\u30eb\u30a6\u30fc\u30cb\u30fc\u30ba\u30af\u30e9\u30b7\u30c3\u30af',
                rarity: 1,
                id: '1021',
                image: '/images/head/b4c708b8a5dc5d533ec4cb8ae723f61a0cf26b82.png',
                thumbnail: '/images/head/c3cbe525151c591775b37fe10bb809da816b48a5.png',
            },
            star_rank: 4,
            shoes: {
                id: '27104',
                image: '/images/shoes/0e2f0cf2305ad60db12612990072674a0ee4f760.png',
                thumbnail: '/images/shoes/639e4eda0a6b45501921e460a4c333162cdd1626.png',
                rarity: 1,
                name: '\u30bf\u30b3\u30be\u30cd\u30b9\u30d6\u30fc\u30c4\u30cd\u30aa',
                kind: 'shoes',
                brand: {
                    id: '98',
                    image: '/images/brand/047cbc2f0674eeb4796efb3b6ec1b710b22d07e7.png',
                    name: '\u30a2\u30bf\u30ea\u30e1\u30a4\u30c9',
                },
            },
            player_type: { style: 'girl', species: 'inklings' },
            player_rank: 26,
            shoes_skills: {
                subs: [
                    {
                        image: '/images/skill/daf6883039afa62da91eb93eb2a40b673f10b715.png',
                        id: '9',
                        name: '\u30b9\u30fc\u30d1\u30fc\u30b8\u30e3\u30f3\u30d7\u6642\u9593\u77ed\u7e2e',
                    },
                    {
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                    },
                    {
                        id: '1',
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                    },
                ],
                main: {
                    name: '\u5bfe\u7269\u653b\u6483\u529b\u30a2\u30c3\u30d7',
                    image: '/images/skill/47a74cd575b25a9de3e3592084ff3870db0cf4e0.png',
                    id: '110',
                },
            },
            head_skills: {
                subs: [
                    {
                        name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                        id: '11',
                        image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                    },
                    {
                        name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                        id: '200',
                        image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                    },
                    {
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        id: '4',
                    },
                ],
                main: {
                    image: '/images/skill/bdc5135874439cf3169d9a54b3f1fbdba3731b34.png',
                    id: '103',
                    name: '\u30ab\u30e0\u30d0\u30c3\u30af',
                },
            },
            weapon: {
                name: 'N-ZAP85',
                sub: {
                    image_b: '/images/sub/9d6336b855940f6c8fc82979a972f9f3381c0e65.png',
                    image_a: '/images/sub/79ec06c8afca6af0e14da4d9941706bb15f9927e.png',
                    id: '1',
                    name: '\u30ad\u30e5\u30fc\u30d0\u30f3\u30dc\u30e0',
                },
                image: '/images/weapon/1f2b1db5917ef7a4e62f0e15b8805275e33f2179.png',
                id: '60',
                special: {
                    name: '\u30a4\u30f3\u30af\u30a2\u30fc\u30de\u30fc',
                    image_b: '/images/special/415bf85acb0b0dcc478316332fe86efb1fe4f203.png',
                    id: '1',
                    image_a: '/images/special/abe458a7d13d855f1b27135ccf3e96f46f1f3d10.png',
                },
                thumbnail: '/images/weapon/fdcd7cbe806eb84df374ea8f7e074ac9637d4762.png',
            },
            udemae: { number: 128, is_x: true, s_plus_number: null, is_number_reached: true, name: 'X' },
            clothes_skills: {
                main: {
                    id: '3',
                    image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                    name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                },
                subs: [
                    {
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                    },
                    {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                    },
                    {
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        id: '1',
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                    },
                ],
            },
            principal_id: '2cf69d9715b323b7',
            clothes: {
                rarity: 1,
                name: '\u30ac\u30c1\u30ac\u30b5\u30cd',
                image: '/images/clothes/645493de112e6223df7e18ad15ed3dd6d9776dd6.png',
                id: '3005',
                thumbnail: '/images/clothes/e6338098a660f7e97ee0740f088fe450d26cc19d.png',
                brand: {
                    frequent_skill: {
                        id: '11',
                        image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                    },
                    id: '0',
                    image: '/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png',
                    name: '\u30d0\u30c8\u30ed\u30a4\u30ab',
                },
                kind: 'clothes',
            },
            nickname: '.\u3086\u304d\u30ea\u30f3\u30b0',
        },
        kill_count: 8,
        death_count: 4,
        assist_count: 4,
        game_paint_point: 1017,
        sort_score: 0,
    },
    start_time: 1605974160,
    udemae: { is_x: true, number: 128, is_number_reached: true, s_plus_number: null, name: 'X' },
    player_rank: 26,
    my_team_members: [
        {
            kill_count: 6,
            special_count: 2,
            player: {
                shoes_skills: {
                    main: {
                        name: '\u30b9\u30c6\u30eb\u30b9\u30b8\u30e3\u30f3\u30d7',
                        id: '109',
                        image: '/images/skill/8a3f06a972689b094f762626ff36b3db8ee545b5.png',
                    },
                    subs: [
                        {
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            id: '201',
                        },
                        {
                            name: '\u30b9\u30fc\u30d1\u30fc\u30b8\u30e3\u30f3\u30d7\u6642\u9593\u77ed\u7e2e',
                            id: '9',
                            image: '/images/skill/daf6883039afa62da91eb93eb2a40b673f10b715.png',
                        },
                        {
                            id: '7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                    ],
                },
                shoes: {
                    brand: {
                        frequent_skill: {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                        image: '/images/brand/9ac5752790dd6dbdc7a427df95e1bfe89fe318e0.png',
                        id: '2',
                        name: '\u30af\u30e9\u30fc\u30b2\u30b9',
                    },
                    kind: 'shoes',
                    rarity: 0,
                    name: '\u30ad\u30e3\u30f3\u30d0\u30b9Hi \u30c8\u30ea\u30e5\u30d5',
                    thumbnail: '/images/shoes/eadcf374f85ac60f3283ea121914f6c4a95282ae.png',
                    image: '/images/shoes/979934a12e8d59f98288dd2b85642af731c41916.png',
                    id: '2040',
                },
                player_rank: 40,
                player_type: { style: 'girl', species: 'inklings' },
                head: {
                    brand: {
                        name: '\u30a2\u30bf\u30ea\u30e1\u30a4\u30c9',
                        image: '/images/brand/047cbc2f0674eeb4796efb3b6ec1b710b22d07e7.png',
                        id: '98',
                    },
                    kind: 'head',
                    name: '\u30b0\u30e9\u30f3\u30d1\u306a\u30a2\u30bf\u30de',
                    rarity: 1,
                    id: '27106',
                    image: '/images/head/fb4324a76a864904c89f63d2860193ef03fdfa22.png',
                    thumbnail: '/images/head/77f1673b278905c70e499ac8c1b5f70ce5846678.png',
                },
                star_rank: 4,
                principal_id: 'e74f5fd8d37b9416',
                clothes_skills: {
                    subs: [
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            id: '7',
                        },
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                        },
                    ],
                    main: {
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                    },
                },
                nickname: '.\u30dd\u30f3\u3060\u308b\u307e',
                clothes: {
                    name: '\u304a\u3046\u3048\u3093\u30d1\u30fc\u30ab\u30fc(\u30bf\u30b3ver.)',
                    rarity: 2,
                    image: '/images/clothes/458fb67223669d9b88ea1e6be15d37961033d469.png',
                    id: '10011',
                    thumbnail: '/images/clothes/afd3f7db4745b870084e29aafb7bad154124c9f2.png',
                    brand: {
                        name: '\u30d0\u30c8\u30ed\u30a4\u30ab',
                        image: '/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png',
                        id: '0',
                        frequent_skill: {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            id: '11',
                        },
                    },
                    kind: 'clothes',
                },
                weapon: {
                    thumbnail: '/images/weapon/5f519a8b3f436c854dc81ee14bfc3a26aef09ebc.png',
                    special: {
                        id: '8',
                        image_a: '/images/special/9871c82952ed0141be0310ace1942c9f5f66d655.png',
                        image_b: '/images/special/26e8117808ce17dadb0f23943359e5909fef4085.png',
                        name: '\u30b8\u30a7\u30c3\u30c8\u30d1\u30c3\u30af',
                    },
                    image: '/images/weapon/331d889d8113b794131080c8943e05a3d2c4547d.png',
                    id: '41',
                    sub: {
                        name: '\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30dc\u30e0',
                        id: '0',
                        image_a: '/images/sub/d2eaeec524d28ef315a13f8a9e11dd1039cb78aa.png',
                        image_b: '/images/sub/b13bf755b279af83904892fae01cd98c866dfec7.png',
                    },
                    name: '\u30b9\u30d7\u30e9\u30b7\u30e5\u30fc\u30bf\u30fc\u30b3\u30e9\u30dc',
                },
                udemae: { s_plus_number: null, is_x: true, name: 'X' },
                head_skills: {
                    main: {
                        name: '\u30ab\u30e0\u30d0\u30c3\u30af',
                        image: '/images/skill/bdc5135874439cf3169d9a54b3f1fbdba3731b34.png',
                        id: '103',
                    },
                    subs: [
                        {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            id: '11',
                        },
                        {
                            id: '200',
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                        },
                        {
                            image: '/images/skill/d83b962b84fcea9d02c591c296234f5de77f9682.png',
                            id: '6',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6e1b\u5c11\u91cf\u30c0\u30a6\u30f3',
                        },
                    ],
                },
            },
            game_paint_point: 767,
            sort_score: 0,
            death_count: 4,
            assist_count: 0,
        },
        {
            death_count: 3,
            assist_count: 3,
            game_paint_point: 765,
            sort_score: 0,
            special_count: 2,
            player: {
                shoes_skills: {
                    main: {
                        image: '/images/skill/8a3f06a972689b094f762626ff36b3db8ee545b5.png',
                        id: '109',
                        name: '\u30b9\u30c6\u30eb\u30b9\u30b8\u30e3\u30f3\u30d7',
                    },
                    subs: [
                        {
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                            id: '200',
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                        },
                        {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            id: '11',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        },
                        {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            id: '11',
                        },
                    ],
                },
                player_rank: 71,
                player_type: { style: 'boy', species: 'inklings' },
                shoes: {
                    thumbnail: '/images/shoes/f8cda5d53bd629b263c3f24c2e271bac8105eb92.png',
                    id: '6007',
                    image: '/images/shoes/f1af818020fb5912b304a997c39b8c72a7258c1e.png',
                    rarity: 2,
                    name: '\u30ed\u30c3\u30ad\u30f3\u30c1\u30a7\u30ea\u30fc',
                    kind: 'shoes',
                    brand: {
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                        id: '3',
                        frequent_skill: {
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            id: '3',
                        },
                    },
                },
                head: {
                    brand: {
                        name: '\u30a2\u30ed\u30e1',
                        frequent_skill: {
                            id: '2',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                        },
                        image: '/images/brand/02286fe17bb6bc3f5f13c6b251ddc0a55c44c756.png',
                        id: '10',
                    },
                    kind: 'head',
                    rarity: 1,
                    name: '\u30b5\u30f3\u30b5\u30f3\u30b5\u30f3\u30d0\u30a4\u30b6\u30fc',
                    id: '6002',
                    image: '/images/head/6f0967b86eb06eb39edcd0bcb630ae3bb9cf7646.png',
                    thumbnail: '/images/head/b09778454366a842730c3436a07cd40631c031ff.png',
                },
                star_rank: 3,
                nickname: '\u304b\u3057\u307e\u308a',
                clothes: {
                    brand: {
                        name: '\u30af\u30e9\u30fc\u30b2\u30b9',
                        frequent_skill: {
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        image: '/images/brand/9ac5752790dd6dbdc7a427df95e1bfe89fe318e0.png',
                        id: '2',
                    },
                    kind: 'clothes',
                    name: '\u30bf\u30b3\u30dc\u30a6\u30e9\u30fc\u30b7\u30e3\u30c4',
                    rarity: 1,
                    thumbnail: '/images/clothes/b47996adb2291e1a8750b527046f3b33b243f047.png',
                    image: '/images/clothes/f7e0b134df34ae746aec9b19d1daa4147f2e2448.png',
                    id: '8018',
                },
                clothes_skills: {
                    main: {
                        image: '/images/skill/f0a99d1ab1a765b992b79610ebdc25b69d88fae9.png',
                        id: '104',
                        name: '\u30a4\u30ab\u30cb\u30f3\u30b8\u30e3',
                    },
                    subs: [
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                    ],
                },
                principal_id: '368fc922c36e36cc',
                udemae: { is_x: true, s_plus_number: null, name: 'X' },
                weapon: {
                    sub: {
                        id: '2',
                        image_a: '/images/sub/5f978ddb4716f0d04fcc737755b0b3d212d5671c.png',
                        image_b: '/images/sub/0c90dd7487c0c1179e0e6827b8928143cf04e336.png',
                        name: '\u30af\u30a4\u30c3\u30af\u30dc\u30e0',
                    },
                    name: '\u30d2\u30c3\u30bb\u30f3',
                    special: {
                        name: '\u30a4\u30f3\u30af\u30a2\u30fc\u30de\u30fc',
                        id: '1',
                        image_a: '/images/special/abe458a7d13d855f1b27135ccf3e96f46f1f3d10.png',
                        image_b: '/images/special/415bf85acb0b0dcc478316332fe86efb1fe4f203.png',
                    },
                    thumbnail: '/images/weapon/c1befd17d09a527b66f9d2c8a70849a4969642e4.png',
                    id: '3010',
                    image: '/images/weapon/ad921a57ab1b7721c50873c082bb34591b61021c.png',
                },
                head_skills: {
                    main: {
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    },
                    subs: [
                        {
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                            id: '2',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                        },
                        {
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            id: '2',
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                        },
                        {
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                            id: '200',
                        },
                    ],
                },
            },
            kill_count: 6,
        },
        {
            kill_count: 3,
            player: {
                player_type: { species: 'inklings', style: 'boy' },
                player_rank: 32,
                shoes: {
                    brand: {
                        frequent_skill: {
                            name: '\u30b5\u30d6\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/34e114a50a001778a574f7061039d43e632137b7.png',
                            id: '10',
                        },
                        image: '/images/brand/de96243d58e41e928d30290162a6f496033da868.png',
                        id: '16',
                        name: '\u30a8\u30f3\u30da\u30ea\u30fc',
                    },
                    kind: 'shoes',
                    name: '\u30a8\u30ae\u30f3\u30b04 \u30ad\u30a4\u30b3\u30f3',
                    rarity: 2,
                    thumbnail: '/images/shoes/6ad2962598f7853ab456120a3c2ccd2493c81575.png',
                    image: '/images/shoes/d7dbb90a4820ed0bfcc8fdc400a72cc63241ccad.png',
                    id: '2027',
                },
                shoes_skills: {
                    subs: [
                        {
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            id: '201',
                        },
                        {
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            id: '0',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        },
                        {
                            id: '0',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                        },
                    ],
                    main: {
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                    },
                },
                head: {
                    kind: 'head',
                    brand: {
                        name: '\u30db\u30c3\u30b3\u30ea\u30fc',
                        id: '6',
                        image: '/images/brand/dee59c0797a6214114e527dfa51f0dd012085172.png',
                        frequent_skill: {
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                            id: '1',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        },
                    },
                    thumbnail: '/images/head/29b1791122c88a60fc6a976ea2714f6ef00bc860.png',
                    image: '/images/head/67d18ee356eda4a85de1f6a03aebcbc3ab192f47.png',
                    id: '3010',
                    rarity: 2,
                    name: '\u30aa\u30af\u30bf\u30b0\u30e9\u30b9',
                },
                star_rank: 1,
                clothes: {
                    thumbnail: '/images/clothes/86dea0d5896016d197c38e92b660c7d921eaa066.png',
                    id: '7006',
                    image: '/images/clothes/f20333e080b1bef3e15347ff183e1ac44b3139f1.png',
                    rarity: 1,
                    name: '\u30a4\u30ab\u30ea\u30b9\u30a6\u30a7\u30c3\u30c8',
                    kind: 'clothes',
                    brand: {
                        image: '/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png',
                        id: '0',
                        frequent_skill: {
                            id: '11',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                        },
                        name: '\u30d0\u30c8\u30ed\u30a4\u30ab',
                    },
                },
                nickname: '\u30b5\u30af\u30ca\u30d2\u308d\u307e\u308a',
                principal_id: 'eae0aca15d93a6f3',
                clothes_skills: {
                    main: {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                    },
                    subs: [
                        {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            id: '11',
                        },
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        {
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            id: '11',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                        },
                    ],
                },
                head_skills: {
                    subs: [
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        {
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                            id: '200',
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                        },
                        {
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                    ],
                    main: {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        id: '201',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                    },
                },
                udemae: { s_plus_number: null, is_x: true, name: 'X' },
                weapon: {
                    name: '14\u5f0f\u7af9\u7b52\u9283\u30fb\u7532',
                    sub: {
                        id: '3',
                        image_a: '/images/sub/e398a9e0360f048b6a0c4c3c1e89211cca96577f.png',
                        image_b: '/images/sub/2b5797c0ad847a54b9bd8168e75050484919d373.png',
                        name: '\u30ab\u30fc\u30ea\u30f3\u30b0\u30dc\u30e0',
                    },
                    image: '/images/weapon/6ecbbb897d6c59a5c03097216ef4f803366ea6fa.png',
                    id: '2050',
                    thumbnail: '/images/weapon/bbabdf1a9ad9fc2217c21cc35993c04ee9bc58b5.png',
                    special: {
                        name: '\u30de\u30eb\u30c1\u30df\u30b5\u30a4\u30eb',
                        image_b: '/images/special/4819d9d318668bdd5dab248a23397ec351bc5c60.png',
                        image_a: '/images/special/e395a50d51459dcee4db62d8d1fbc4bb263bc326.png',
                        id: '0',
                    },
                },
            },
            special_count: 2,
            sort_score: 0,
            game_paint_point: 814,
            assist_count: 0,
            death_count: 4,
        },
    ],
    other_estimate_league_point: 2250,
    max_league_point: 2585.9,
    type: 'league',
    elapsed_time: 169,
    estimate_gachi_power: 2320,
    other_team_members: [
        {
            special_count: 2,
            player: {
                head_skills: {
                    main: {
                        image: '/images/skill/bdc5135874439cf3169d9a54b3f1fbdba3731b34.png',
                        id: '103',
                        name: '\u30ab\u30e0\u30d0\u30c3\u30af',
                    },
                    subs: [
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                        },
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                    ],
                },
                weapon: {
                    sub: {
                        name: '\u30ad\u30e5\u30fc\u30d0\u30f3\u30dc\u30e0',
                        id: '1',
                        image_a: '/images/sub/79ec06c8afca6af0e14da4d9941706bb15f9927e.png',
                        image_b: '/images/sub/9d6336b855940f6c8fc82979a972f9f3381c0e65.png',
                    },
                    name: '\u30b9\u30d7\u30e9\u30b7\u30e5\u30fc\u30bf\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc',
                    thumbnail: '/images/weapon/fe42a0e502228e086d6cb7c90d74592e1f1c2d36.png',
                    special: {
                        image_b: '/images/special/4819d9d318668bdd5dab248a23397ec351bc5c60.png',
                        image_a: '/images/special/e395a50d51459dcee4db62d8d1fbc4bb263bc326.png',
                        id: '0',
                        name: '\u30de\u30eb\u30c1\u30df\u30b5\u30a4\u30eb',
                    },
                    image: '/images/weapon/6108e83b27959e8c2f6e577c4e9cd4b01de5f353.png',
                    id: '42',
                },
                udemae: { is_x: true, s_plus_number: null, name: 'X' },
                principal_id: '7f9e03e90d23ad61',
                clothes_skills: {
                    subs: [
                        {
                            image: '/images/skill/84ab4ba1188849dff63a4314955a53ab103b47df.png',
                            id: '8',
                            name: '\u5fa9\u6d3b\u6642\u9593\u77ed\u7e2e',
                        },
                        {
                            id: '8',
                            image: '/images/skill/84ab4ba1188849dff63a4314955a53ab103b47df.png',
                            name: '\u5fa9\u6d3b\u6642\u9593\u77ed\u7e2e',
                        },
                        {
                            name: '\u5fa9\u6d3b\u6642\u9593\u77ed\u7e2e',
                            image: '/images/skill/84ab4ba1188849dff63a4314955a53ab103b47df.png',
                            id: '8',
                        },
                    ],
                    main: {
                        name: '\u5fa9\u6d3b\u6642\u9593\u77ed\u7e2e',
                        id: '8',
                        image: '/images/skill/84ab4ba1188849dff63a4314955a53ab103b47df.png',
                    },
                },
                nickname: '\u304b\u3068\u308a\u3057\u3093\u3054',
                clothes: {
                    kind: 'clothes',
                    brand: {
                        name: 'amiibo',
                        id: '99',
                        image: '/images/brand/154440ecbfb65a22cdb224fac843b02cccbcad03.png',
                    },
                    thumbnail: '/images/clothes/c47b31e790f37d6aee8548481561ab5d7d2e3898.png',
                    id: '25002',
                    image: '/images/clothes/f590eec17e939fb8935605dbe950c483680f0e0f.png',
                    name: '\u30d1\u30ef\u30fc\u30c9\u30b9\u30fc\u30c4',
                    rarity: 1,
                },
                head: {
                    name: '\u30d5\u30a7\u30a4\u30b9\u30b4\u30fc\u30b0\u30eb',
                    rarity: 2,
                    thumbnail: '/images/head/31949e3c310f3beeb3a29fc89277a8426ac40f52.png',
                    id: '8001',
                    image: '/images/head/7036d2da8b408b061dc9f5cc87e63d020833299e.png',
                    brand: {
                        frequent_skill: {
                            id: '7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        id: '5',
                        image: '/images/brand/b38b99b3358f587efd1613b72a72c9ca9f81f406.png',
                        name: '\u30d5\u30a9\u30fc\u30ea\u30de',
                    },
                    kind: 'head',
                },
                star_rank: 3,
                shoes: {
                    kind: 'shoes',
                    brand: {
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                        id: '3',
                        frequent_skill: {
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '3',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                        },
                    },
                    thumbnail: '/images/shoes/c4c33941d77345df4d5dcb138bc208348ca2e5e3.png',
                    image: '/images/shoes/cb85e6602af6f1592f0775d757b530767bf07896.png',
                    id: '8012',
                    rarity: 2,
                    name: '\u30bb\u30f3\u30cb\u30e5\u30fc\u30c1\u30c3\u30d7 \u30b9\u30df\u30bd\u30fc\u30eb',
                },
                player_type: { style: 'girl', species: 'octolings' },
                player_rank: 4,
                shoes_skills: {
                    subs: [
                        {
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            id: '201',
                        },
                        {
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                        {
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            id: '201',
                        },
                    ],
                    main: {
                        name: '\u30b9\u30c6\u30eb\u30b9\u30b8\u30e3\u30f3\u30d7',
                        image: '/images/skill/8a3f06a972689b094f762626ff36b3db8ee545b5.png',
                        id: '109',
                    },
                },
            },
            kill_count: 6,
            death_count: 5,
            assist_count: 3,
            sort_score: 0,
            game_paint_point: 852,
        },
        {
            death_count: 6,
            assist_count: 2,
            sort_score: 0,
            game_paint_point: 627,
            special_count: 1,
            player: {
                head: {
                    id: '3014',
                    image: '/images/head/807f7566c605fb305bbb8f023841cc3dab61b96d.png',
                    thumbnail: '/images/head/25e3cc5c535868c3b351b73d864721090e546d0f.png',
                    name: '\u30de\u30eb\u30b5\u30f3SV925',
                    rarity: 2,
                    kind: 'head',
                    brand: {
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                        frequent_skill: {
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            id: '3',
                        },
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                        id: '3',
                    },
                },
                star_rank: 2,
                shoes_skills: {
                    main: {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        id: '201',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                    },
                    subs: [
                        {
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                        {
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                            id: '200',
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                        },
                        {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            id: '11',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        },
                    ],
                },
                shoes: {
                    thumbnail: '/images/shoes/ad9782a30aab84c48d7ef769946a927bde30f9c2.png',
                    id: '6013',
                    image: '/images/shoes/abd834644cc411521ab7239790b54968cebc3e78.png',
                    name: '\u30ed\u30c3\u30ad\u30f3\u30d6\u30e9\u30c3\u30af',
                    rarity: 2,
                    kind: 'shoes',
                    brand: {
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                        frequent_skill: {
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            id: '3',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        id: '3',
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                    },
                },
                player_type: { style: 'boy', species: 'inklings' },
                player_rank: 14,
                weapon: {
                    thumbnail: '/images/weapon/d278baf341686f935c7516e6a6e1616833f18e4b.png',
                    special: {
                        image_a: '/images/special/9871c82952ed0141be0310ace1942c9f5f66d655.png',
                        id: '8',
                        image_b: '/images/special/26e8117808ce17dadb0f23943359e5909fef4085.png',
                        name: '\u30b8\u30a7\u30c3\u30c8\u30d1\u30c3\u30af',
                    },
                    id: '4041',
                    image: '/images/weapon/eb2f56a84d871c9aa8d0f5e79ad776f8ade82360.png',
                    sub: {
                        name: '\u30ad\u30e5\u30fc\u30d0\u30f3\u30dc\u30e0',
                        image_b: '/images/sub/9d6336b855940f6c8fc82979a972f9f3381c0e65.png',
                        id: '1',
                        image_a: '/images/sub/79ec06c8afca6af0e14da4d9941706bb15f9927e.png',
                    },
                    name: '\u30ce\u30fc\u30c1\u30e9\u30b979',
                },
                udemae: { is_x: false, s_plus_number: null, name: 'S+' },
                head_skills: {
                    main: {
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        id: '4',
                    },
                    subs: [
                        {
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '3',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                        },
                        {
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '3',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                        },
                        {
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            id: '7',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                    ],
                },
                principal_id: '26d1f5f962e3f6cc',
                clothes_skills: {
                    subs: [
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                        },
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                        {
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            id: '0',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        },
                    ],
                    main: {
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    },
                },
                clothes: {
                    id: '3010',
                    image: '/images/clothes/644380bd48583f1fa317869f7e901209b9f1a1ac.png',
                    thumbnail: '/images/clothes/d49144c96f4415b3a4dc89379fb29ace13d57969.png',
                    rarity: 1,
                    name: '\u30a2\u30ed\u30e1\u30c6\u30c3\u30afT \u30ec\u30c3\u30c9',
                    kind: 'clothes',
                    brand: {
                        frequent_skill: {
                            id: '2',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                        },
                        image: '/images/brand/02286fe17bb6bc3f5f13c6b251ddc0a55c44c756.png',
                        id: '10',
                        name: '\u30a2\u30ed\u30e1',
                    },
                },
                nickname: '\u3066\u308a\u304a\u3059',
            },
            kill_count: 0,
        },
        {
            game_paint_point: 691,
            sort_score: 0,
            death_count: 6,
            assist_count: 0,
            kill_count: 6,
            special_count: 3,
            player: {
                udemae: { name: 'X', s_plus_number: null, is_x: true },
                weapon: {
                    image: '/images/weapon/ff16174e92430f653aa0f2b4c9b42d9ea5399d39.png',
                    id: '1115',
                    special: {
                        name: '\u30b8\u30a7\u30c3\u30c8\u30d1\u30c3\u30af',
                        id: '8',
                        image_a: '/images/special/9871c82952ed0141be0310ace1942c9f5f66d655.png',
                        image_b: '/images/special/26e8117808ce17dadb0f23943359e5909fef4085.png',
                    },
                    thumbnail: '/images/weapon/9d255e4abc48ac0b67f7a6b7c8e7199a741aced8.png',
                    name: '\u30d2\u30fc\u30ed\u30fc\u30d6\u30e9\u30b7 \u30ec\u30d7\u30ea\u30ab',
                    sub: {
                        image_b: '/images/sub/f0e4b4bad0e37031b8cb8ff397d4bb0ad9c86307.png',
                        id: '4',
                        image_a: '/images/sub/457de86fa079df54c7a3c96decca49a55a1686ae.png',
                        name: '\u30ed\u30dc\u30c3\u30c8\u30dc\u30e0',
                    },
                },
                head_skills: {
                    main: {
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                    },
                    subs: [
                        {
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                            id: '200',
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                        },
                        {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            id: '11',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        },
                        {
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                            id: '0',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                        },
                    ],
                },
                clothes: {
                    name: 'F-3 \u30da\u30a4\u30f3\u30c8\u30ab\u30b9\u30bf\u30e0',
                    rarity: 2,
                    id: '5035',
                    image: '/images/clothes/18eba8b15f888ae7463ea87f78eb99b30ba65135.png',
                    thumbnail: '/images/clothes/d88cbd4323333b3c254e31a01de802180e2c1916.png',
                    brand: {
                        name: '\u30d5\u30a9\u30fc\u30ea\u30de',
                        image: '/images/brand/b38b99b3358f587efd1613b72a72c9ca9f81f406.png',
                        id: '5',
                        frequent_skill: {
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                        },
                    },
                    kind: 'clothes',
                },
                nickname: '\u3068\u3089\u304a',
                clothes_skills: {
                    subs: [
                        {
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                        },
                        {
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                            id: '200',
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                        },
                    ],
                    main: {
                        id: '11',
                        image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                    },
                },
                principal_id: 'ec3432c3359c7463',
                star_rank: 3,
                head: {
                    id: '21007',
                    image: '/images/head/2fca5b8d3eb770cfbcecc26e984bad311185f8bc.png',
                    thumbnail: '/images/head/15a95dc80491aa813f4fbcf0911adb06d3d49187.png',
                    rarity: 2,
                    name: '\u30a2\u30bb\u30b9\u30c8\u30c3\u30d7\u30bd\u30b7\u30ca',
                    kind: 'head',
                    brand: {
                        image: '/images/brand/ec85f17c315e0a1ea4dee55041fd30a88d6aba93.png',
                        id: '97',
                        name: '\u30af\u30de\u30b5\u30f3\u5546\u4f1a',
                    },
                },
                shoes_skills: {
                    subs: [
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                    ],
                    main: {
                        id: '111',
                        image: '/images/skill/d0de52e89947803e5b24165335855f39f9e8a6bd.png',
                        name: '\u53d7\u3051\u8eab\u8853',
                    },
                },
                player_rank: 4,
                player_type: { style: 'boy', species: 'octolings' },
                shoes: {
                    brand: {
                        name: '\u30bf\u30bf\u30ad\u30b1\u30f3\u30b5\u30ad',
                        id: '17',
                        image: '/images/brand/4b05e494bf9a547b4d625fd52dcdd930a6c4defc.png',
                        frequent_skill: {
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                    },
                    kind: 'shoes',
                    name: '\u30a2\u30ed\u30fc\u30ba \u30bf\u30bf\u30ad\u30d9\u30c3\u30c1\u30e5\u30fc',
                    rarity: 2,
                    thumbnail: '/images/shoes/9366357216019ac4cb395b1ad88138a731d165cc.png',
                    id: '3013',
                    image: '/images/shoes/dda93e3d3783ef11c7dbdd88b664c3ed3c8f9a89.png',
                },
            },
        },
        {
            special_count: 1,
            player: {
                head_skills: {
                    subs: [
                        {
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            id: '2',
                        },
                        {
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            id: '2',
                        },
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                    ],
                    main: {
                        id: '0',
                        image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                    },
                },
                udemae: { is_x: false, s_plus_number: null, name: 'S+' },
                weapon: {
                    special: {
                        image_b: '/images/special/714c00b84b54d68c5e0b6da4186d41831fb4a442.png',
                        id: '17',
                        image_a: '/images/special/e6f33512755e462874f57d1f02b61bb1c41ad79f.png',
                        name: '\u30ca\u30a4\u30b9\u30c0\u30de',
                    },
                    thumbnail: '/images/weapon/9354e96a72e0396db6121d78d75e63bbd9bf69fc.png',
                    image: '/images/weapon/4f011b881d26bd6c9d8c5c17f54e35fedc012bb0.png',
                    id: '1022',
                    sub: {
                        name: '\u30b9\u30d7\u30ea\u30f3\u30af\u30e9\u30fc',
                        image_a: '/images/sub/46f5b9fe851d4ac8df9eb959e7270ff72526dffe.png',
                        id: '6',
                        image_b: '/images/sub/47b6c31e712634bd793d5b920288fe7b1fb3c2bd.png',
                    },
                    name: '\u30c0\u30a4\u30ca\u30e2\u30ed\u30fc\u30e9\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc',
                },
                clothes: {
                    brand: {
                        id: '17',
                        image: '/images/brand/4b05e494bf9a547b4d625fd52dcdd930a6c4defc.png',
                        frequent_skill: {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        name: '\u30bf\u30bf\u30ad\u30b1\u30f3\u30b5\u30ad',
                    },
                    kind: 'clothes',
                    name: '\u30c9\u30ed\u30c3\u30d7\u30b9\u30a6\u30a7\u30c3\u30c8 \u30dd\u30b8',
                    rarity: 2,
                    image: '/images/clothes/9e2ed26da468aa39f194e996f21e6a75c534c148.png',
                    id: '7009',
                    thumbnail: '/images/clothes/5bdb11527bcdfb1722540dd306abe64319f4f113.png',
                },
                nickname: '\u30af\u30eb\u30e9',
                clothes_skills: {
                    main: {
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        id: '4',
                    },
                    subs: [
                        {
                            id: '201',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                    ],
                },
                principal_id: 'ee10c7a7c491c2c0',
                head: {
                    rarity: 2,
                    name: '\u30ab\u30a4\u30b6\u30fc\u30ab\u30d5',
                    thumbnail: '/images/head/c7d3f7fd6fc223336609596f09d1555f5bf8d659.png',
                    id: '10000',
                    image: '/images/head/e90982c117960a68385e693b36dd3128517dba37.png',
                    brand: {
                        name: '\u30a8\u30f3\u30da\u30ea\u30fc',
                        image: '/images/brand/de96243d58e41e928d30290162a6f496033da868.png',
                        id: '16',
                        frequent_skill: {
                            name: '\u30b5\u30d6\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/34e114a50a001778a574f7061039d43e632137b7.png',
                            id: '10',
                        },
                    },
                    kind: 'head',
                },
                star_rank: 1,
                player_rank: 54,
                player_type: { species: 'inklings', style: 'boy' },
                shoes: {
                    id: '2027',
                    image: '/images/shoes/d7dbb90a4820ed0bfcc8fdc400a72cc63241ccad.png',
                    thumbnail: '/images/shoes/6ad2962598f7853ab456120a3c2ccd2493c81575.png',
                    name: '\u30a8\u30ae\u30f3\u30b04 \u30ad\u30a4\u30b3\u30f3',
                    rarity: 2,
                    kind: 'shoes',
                    brand: {
                        image: '/images/brand/de96243d58e41e928d30290162a6f496033da868.png',
                        id: '16',
                        frequent_skill: {
                            image: '/images/skill/34e114a50a001778a574f7061039d43e632137b7.png',
                            id: '10',
                            name: '\u30b5\u30d6\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        name: '\u30a8\u30f3\u30da\u30ea\u30fc',
                    },
                },
                shoes_skills: {
                    main: {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                    },
                    subs: [
                        {
                            name: '\u30b9\u30fc\u30d1\u30fc\u30b8\u30e3\u30f3\u30d7\u6642\u9593\u77ed\u7e2e',
                            image: '/images/skill/daf6883039afa62da91eb93eb2a40b673f10b715.png',
                            id: '9',
                        },
                        {
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                            id: '200',
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                        },
                        {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            id: '11',
                        },
                    ],
                },
            },
            kill_count: 3,
            death_count: 6,
            assist_count: 0,
            game_paint_point: 798,
            sort_score: 0,
        },
    ],
    star_rank: 4,
    other_team_count: 0,
    game_mode: { key: 'league_pair', name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1' },
    battle_number: '28594',
    stage: {
        image: '/images/stage/fc23fedca2dfbbd8707a14606d719a4004403d13.png',
        id: '5',
        name: '\u30b3\u30f3\u30d6\u30c8\u30e9\u30c3\u30af',
    },
    weapon_paint_point: 9999999,
    rule: {
        key: 'clam_blitz',
        multiline_name: '\u30ac\u30c1\n\u30a2\u30b5\u30ea',
        name: '\u30ac\u30c1\u30a2\u30b5\u30ea',
    },
};

const response_preDetermined: ResultDetails_League = {
    other_team_count: 0,
    other_estimate_league_point: 1980,
    stage: {
        image: '/images/stage/0907fc7dc325836a94d385919fe01dc13848612a.png',
        name: '\u30db\u30c3\u30b1\u3075\u982d',
        id: '7',
    },
    my_team_count: 100,
    start_time: 1606046575,
    my_estimate_league_point: 2130,
    udemae: { name: 'X', is_number_reached: true, s_plus_number: null, is_x: true, number: 128 },
    player_result: {
        player: {
            player_rank: 26,
            player_type: { species: 'inklings', style: 'girl' },
            head: {
                name: '\u30a6\u30fc\u30eb\u30a6\u30fc\u30cb\u30fc\u30ba\u30af\u30e9\u30b7\u30c3\u30af',
                image: '/images/head/b4c708b8a5dc5d533ec4cb8ae723f61a0cf26b82.png',
                brand: {
                    id: '2',
                    frequent_skill: {
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        id: '4',
                    },
                    image: '/images/brand/9ac5752790dd6dbdc7a427df95e1bfe89fe318e0.png',
                    name: '\u30af\u30e9\u30fc\u30b2\u30b9',
                },
                rarity: 1,
                thumbnail: '/images/head/c3cbe525151c591775b37fe10bb809da816b48a5.png',
                id: '1021',
                kind: 'head',
            },
            clothes_skills: {
                subs: [
                    {
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        id: '201',
                    },
                    {
                        id: '201',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                    },
                    {
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        id: '1',
                    },
                ],
                main: {
                    name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                    id: '3',
                },
            },
            udemae: { name: 'X', is_number_reached: true, s_plus_number: null, is_x: true, number: 128 },
            principal_id: '2cf69d9715b323b7',
            clothes: {
                brand: {
                    frequent_skill: {
                        image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                        id: '11',
                    },
                    name: '\u30d0\u30c8\u30ed\u30a4\u30ab',
                    image: '/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png',
                    id: '0',
                },
                rarity: 1,
                thumbnail: '/images/clothes/e6338098a660f7e97ee0740f088fe450d26cc19d.png',
                id: '3005',
                kind: 'clothes',
                name: '\u30ac\u30c1\u30ac\u30b5\u30cd',
                image: '/images/clothes/645493de112e6223df7e18ad15ed3dd6d9776dd6.png',
            },
            star_rank: 4,
            nickname: '.\u3086\u304d\u30ea\u30f3\u30b0',
            shoes: {
                image: '/images/shoes/0e2f0cf2305ad60db12612990072674a0ee4f760.png',
                name: '\u30bf\u30b3\u30be\u30cd\u30b9\u30d6\u30fc\u30c4\u30cd\u30aa',
                id: '27104',
                kind: 'shoes',
                thumbnail: '/images/shoes/639e4eda0a6b45501921e460a4c333162cdd1626.png',
                brand: {
                    id: '98',
                    name: '\u30a2\u30bf\u30ea\u30e1\u30a4\u30c9',
                    image: '/images/brand/047cbc2f0674eeb4796efb3b6ec1b710b22d07e7.png',
                },
                rarity: 1,
            },
            weapon: {
                thumbnail: '/images/weapon/fdcd7cbe806eb84df374ea8f7e074ac9637d4762.png',
                id: '60',
                name: 'N-ZAP85',
                special: {
                    id: '1',
                    image_b: '/images/special/415bf85acb0b0dcc478316332fe86efb1fe4f203.png',
                    name: '\u30a4\u30f3\u30af\u30a2\u30fc\u30de\u30fc',
                    image_a: '/images/special/abe458a7d13d855f1b27135ccf3e96f46f1f3d10.png',
                },
                sub: {
                    image_a: '/images/sub/79ec06c8afca6af0e14da4d9941706bb15f9927e.png',
                    name: '\u30ad\u30e5\u30fc\u30d0\u30f3\u30dc\u30e0',
                    image_b: '/images/sub/9d6336b855940f6c8fc82979a972f9f3381c0e65.png',
                    id: '1',
                },
                image: '/images/weapon/1f2b1db5917ef7a4e62f0e15b8805275e33f2179.png',
            },
            shoes_skills: {
                main: {
                    id: '110',
                    image: '/images/skill/47a74cd575b25a9de3e3592084ff3870db0cf4e0.png',
                    name: '\u5bfe\u7269\u653b\u6483\u529b\u30a2\u30c3\u30d7',
                },
                subs: [
                    {
                        image: '/images/skill/daf6883039afa62da91eb93eb2a40b673f10b715.png',
                        name: '\u30b9\u30fc\u30d1\u30fc\u30b8\u30e3\u30f3\u30d7\u6642\u9593\u77ed\u7e2e',
                        id: '9',
                    },
                    {
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        id: '4',
                    },
                    {
                        id: '1',
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                    },
                ],
            },
            head_skills: {
                subs: [
                    {
                        image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                        id: '11',
                    },
                    {
                        image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                        name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                        id: '200',
                    },
                    {
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    },
                ],
                main: {
                    name: '\u30ab\u30e0\u30d0\u30c3\u30af',
                    image: '/images/skill/bdc5135874439cf3169d9a54b3f1fbdba3731b34.png',
                    id: '103',
                },
            },
        },
        assist_count: 4,
        kill_count: 8,
        special_count: 5,
        death_count: 4,
        sort_score: 0,
        game_paint_point: 1292,
    },
    battle_number: '28597',
    player_rank: 26,
    league_point: null,
    estimate_gachi_power: 2200,
    other_team_members: [
        {
            sort_score: 0,
            game_paint_point: 876,
            player: {
                head_skills: {
                    main: {
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        id: '1',
                    },
                    subs: [
                        {
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                            id: '1',
                        },
                        {
                            id: '1',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        },
                        {
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                            id: '1',
                        },
                    ],
                },
                shoes_skills: {
                    main: {
                        id: '1',
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                    },
                    subs: [
                        {
                            id: '5',
                            image: '/images/skill/1378f3963526d7216ec44da35b924b81a8ff6a37.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u5897\u52a0\u91cf\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '1',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        },
                        {
                            id: '6',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6e1b\u5c11\u91cf\u30c0\u30a6\u30f3',
                            image: '/images/skill/d83b962b84fcea9d02c591c296234f5de77f9682.png',
                        },
                    ],
                },
                shoes: {
                    rarity: 2,
                    brand: {
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                        frequent_skill: {
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '3',
                        },
                        id: '3',
                    },
                    id: '6014',
                    kind: 'shoes',
                    thumbnail: '/images/shoes/b3522adb875fb3113f87f86efe71febe205bb058.png',
                    image: '/images/shoes/e5bee0fd4ae116a0c1c0070bec85b50106f27792.png',
                    name: '\u30b7\u30f3\u30ab\u30a4\u30ec\u30b6\u30fc\u30d6\u30fc\u30c4',
                },
                nickname: '\u3055\u304f\u3063\u3068\u30dd\u30c6\u30c8',
                weapon: {
                    id: '10',
                    thumbnail: '/images/weapon/f1419d88f30dfacdb94a8122ccdd8c14bbadc7c4.png',
                    special: {
                        image_a: '/images/special/abe458a7d13d855f1b27135ccf3e96f46f1f3d10.png',
                        name: '\u30a4\u30f3\u30af\u30a2\u30fc\u30de\u30fc',
                        image_b: '/images/special/415bf85acb0b0dcc478316332fe86efb1fe4f203.png',
                        id: '1',
                    },
                    name: '\u308f\u304b\u3070\u30b7\u30e5\u30fc\u30bf\u30fc',
                    image: '/images/weapon/91b6666bcbfccc204d86f21222a8db22a27d08d0.png',
                    sub: {
                        image_a: '/images/sub/d2eaeec524d28ef315a13f8a9e11dd1039cb78aa.png',
                        name: '\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30dc\u30e0',
                        image_b: '/images/sub/b13bf755b279af83904892fae01cd98c866dfec7.png',
                        id: '0',
                    },
                },
                principal_id: 'fefef71b170084e3',
                udemae: { s_plus_number: null, is_x: true, name: 'X' },
                clothes_skills: {
                    main: {
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        id: '4',
                    },
                    subs: [
                        {
                            image: '/images/skill/46f9b6fc3a2aafdc0c688dec8cadb54aa6f8ace6.png',
                            name: '\u306f\u3066\u306a',
                            id: '255',
                        },
                        {
                            name: '\u306f\u3066\u306a',
                            image: '/images/skill/46f9b6fc3a2aafdc0c688dec8cadb54aa6f8ace6.png',
                            id: '255',
                        },
                        {
                            name: '\u306f\u3066\u306a',
                            image: '/images/skill/46f9b6fc3a2aafdc0c688dec8cadb54aa6f8ace6.png',
                            id: '255',
                        },
                    ],
                },
                head: {
                    image: '/images/head/9845bc34e78c8d8bced49d240e3ab66e4ce74e2b.png',
                    name: '\u30af\u30e9\u30b2\u30fc\u30c0\u30fc\u30ad\u30e3\u30c3\u30d7',
                    kind: 'head',
                    id: '1023',
                    thumbnail: '/images/head/b247ff650828d5ec5286eacdbd1cc11b4000b482.png',
                    brand: {
                        id: '7',
                        image: '/images/brand/8175954b5a7e02b8097dbb484c808c8f39d31f41.png',
                        name: '\u30db\u30bf\u30c3\u30af\u30b9',
                        frequent_skill: {
                            name: '\u5fa9\u6d3b\u6642\u9593\u77ed\u7e2e',
                            image: '/images/skill/84ab4ba1188849dff63a4314955a53ab103b47df.png',
                            id: '8',
                        },
                    },
                    rarity: 2,
                },
                clothes: {
                    name: '\u30e4\u30ad\u30d5\u30b016bit \u30d6\u30eb\u30fc',
                    image: '/images/clothes/42b1f5096214c24da6a20be2c0996b759b06fce1.png',
                    thumbnail: '/images/clothes/ca39ab54dc2323e77ff8b3f1918f972c81858073.png',
                    kind: 'clothes',
                    id: '2024',
                    rarity: 1,
                    brand: {
                        id: '6',
                        frequent_skill: {
                            id: '1',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        },
                        image: '/images/brand/dee59c0797a6214114e527dfa51f0dd012085172.png',
                        name: '\u30db\u30c3\u30b3\u30ea\u30fc',
                    },
                },
                star_rank: 2,
                player_rank: 24,
                player_type: { species: 'inklings', style: 'boy' },
            },
            kill_count: 3,
            assist_count: 2,
            special_count: 3,
            death_count: 8,
        },
        {
            death_count: 8,
            special_count: 3,
            player: {
                head_skills: {
                    main: {
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        id: '1',
                    },
                    subs: [
                        {
                            id: '11',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        },
                        {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            id: '11',
                        },
                        {
                            id: '11',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        },
                    ],
                },
                shoes_skills: {
                    main: {
                        id: '5',
                        image: '/images/skill/1378f3963526d7216ec44da35b924b81a8ff6a37.png',
                        name: '\u30b9\u30da\u30b7\u30e3\u30eb\u5897\u52a0\u91cf\u30a2\u30c3\u30d7',
                    },
                    subs: [
                        {
                            id: '3',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '3',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                        },
                        {
                            id: '3',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                        },
                    ],
                },
                shoes: {
                    id: '8002',
                    kind: 'shoes',
                    thumbnail: '/images/shoes/0428af74f2a5091948a0dfdc5528f6c8401806d7.png',
                    brand: {
                        frequent_skill: {
                            id: '3',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                        id: '3',
                    },
                    rarity: 1,
                    image: '/images/shoes/a690f23c43ebdd48d413ac4dd907b0bf6b83f408.png',
                    name: '\u30e9\u30d0\u30fc\u30bd\u30fc\u30eb \u30bf\u30fc\u30b3\u30a4\u30ba',
                },
                nickname: '\u30af\u30e9\u30d5',
                weapon: {
                    image: '/images/weapon/e5d361c200bb4793713fcc04770d9e78d7e5bc24.png',
                    sub: {
                        name: '\u30ed\u30dc\u30c3\u30c8\u30dc\u30e0',
                        image_a: '/images/sub/457de86fa079df54c7a3c96decca49a55a1686ae.png',
                        id: '4',
                        image_b: '/images/sub/f0e4b4bad0e37031b8cb8ff397d4bb0ad9c86307.png',
                    },
                    special: {
                        id: '0',
                        image_b: '/images/special/4819d9d318668bdd5dab248a23397ec351bc5c60.png',
                        name: '\u30de\u30eb\u30c1\u30df\u30b5\u30a4\u30eb',
                        image_a: '/images/special/e395a50d51459dcee4db62d8d1fbc4bb263bc326.png',
                    },
                    name: 'N-ZAP89',
                    id: '61',
                    thumbnail: '/images/weapon/762846bf92742185c5507347aec26014afc7a43a.png',
                },
                udemae: { s_plus_number: null, is_x: false, name: 'S' },
                clothes_skills: {
                    main: {
                        name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                        image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        id: '11',
                    },
                    subs: [
                        {
                            id: '4',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                        {
                            id: '4',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                        },
                    ],
                },
                head: {
                    name: '\u30a6\u30df\u30a6\u30b7\u30ab\u30c1\u30e5\u30fc\u30b7\u30e3',
                    image: '/images/head/ad09d4c98439b5e95e0c9a7b35ceb90521ee1a42.png',
                    brand: {
                        id: '0',
                        frequent_skill: {
                            id: '11',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        },
                        name: '\u30d0\u30c8\u30ed\u30a4\u30ab',
                        image: '/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png',
                    },
                    rarity: 2,
                    thumbnail: '/images/head/99cf7ace4d443cbe223101caaa1105fe75dd97d3.png',
                    kind: 'head',
                    id: '24001',
                },
                principal_id: '60148bae9c7262b9',
                star_rank: 0,
                clothes: {
                    brand: {
                        frequent_skill: {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                        },
                        image: '/images/brand/9ac5752790dd6dbdc7a427df95e1bfe89fe318e0.png',
                        name: '\u30af\u30e9\u30fc\u30b2\u30b9',
                        id: '2',
                    },
                    rarity: 2,
                    thumbnail: '/images/clothes/e42404c7b8d90514e6adcc3e2f936b7352a838f7.png',
                    kind: 'clothes',
                    id: '1041',
                    name: '\u30df\u30b9\u30bf\u30fc\u30b7\u30e5\u30e9\u30c3\u30b0T',
                    image: '/images/clothes/d8c64bfc4292e297ac4630f6e6eaa1963ce4e608.png',
                },
                player_type: { species: 'inklings', style: 'girl' },
                player_rank: 94,
            },
            kill_count: 3,
            assist_count: 3,
            game_paint_point: 882,
            sort_score: 0,
        },
        {
            game_paint_point: 1120,
            sort_score: 0,
            death_count: 5,
            special_count: 4,
            kill_count: 5,
            assist_count: 0,
            player: {
                weapon: {
                    sub: {
                        image_a: '/images/sub/d2eaeec524d28ef315a13f8a9e11dd1039cb78aa.png',
                        name: '\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30dc\u30e0',
                        image_b: '/images/sub/b13bf755b279af83904892fae01cd98c866dfec7.png',
                        id: '0',
                    },
                    image: '/images/weapon/ed1aa6f4edecafba6c8d028e475a9219281f7bb4.png',
                    name: '\u30b9\u30d1\u30a4\u30ac\u30b8\u30a7\u30c3\u30c8\u30bd\u30ec\u30fc\u30e9',
                    special: {
                        name: '\u30a4\u30ab\u30b9\u30d5\u30a3\u30a2',
                        image_a: '/images/special/3e9cd3e60367fbe82d6237a10fdc826d695b9fa0.png',
                        id: '11',
                        image_b: '/images/special/caf32476e5010e27a4ef9923dbe323978b1d7510.png',
                    },
                    thumbnail: '/images/weapon/907517e291eb3c1d5e8b1e40a73ffa67eae104b4.png',
                    id: '6021',
                },
                nickname: '\u30a2\u30b7\u30e1',
                shoes: {
                    thumbnail: '/images/shoes/824d10ec463333bfa4a495bb70adb30110136913.png',
                    id: '2005',
                    kind: 'shoes',
                    rarity: 1,
                    brand: {
                        name: '\u30af\u30e9\u30fc\u30b2\u30b9',
                        image: '/images/brand/9ac5752790dd6dbdc7a427df95e1bfe89fe318e0.png',
                        frequent_skill: {
                            id: '4',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                        id: '2',
                    },
                    name: '\u30ad\u30e3\u30f3\u30d0\u30b9Hi \u30c8\u30de\u30c8',
                    image: '/images/shoes/ff7cec267fe1d92dad171a3bd6f9a03bc7f9ad5c.png',
                },
                shoes_skills: {
                    subs: [
                        {
                            id: '200',
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                        },
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '4',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                    ],
                    main: {
                        id: '11',
                        image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                    },
                },
                head_skills: {
                    main: {
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                        image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        id: '0',
                    },
                    subs: [
                        {
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                            id: '0',
                        },
                        {
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '3',
                        },
                        {
                            id: '1',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        },
                    ],
                },
                player_type: { style: 'boy', species: 'octolings' },
                player_rank: 9,
                star_rank: 2,
                clothes: {
                    id: '5003',
                    kind: 'clothes',
                    thumbnail: '/images/clothes/3545122469be41d9085581deebc95d2d90e0bf3a.png',
                    brand: {
                        id: '4',
                        frequent_skill: {
                            image: '/images/skill/d83b962b84fcea9d02c591c296234f5de77f9682.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6e1b\u5c11\u91cf\u30c0\u30a6\u30f3',
                            id: '6',
                        },
                        name: '\u30a8\u30be\u30c3\u30b3',
                        image: '/images/brand/f3d01187fd633e7d48d9e4e16ef31da73279293c.png',
                    },
                    rarity: 2,
                    image: '/images/clothes/a67383a013b04b7483e4e1efbaa8321fab49563e.png',
                    name: '\u30b9\u30bf\u30b8\u30e3\u30f3\u30ed\u30b4\u30de\u30b7',
                },
                head: {
                    thumbnail: '/images/head/3d450c95f9f2ede2667dacc270ec03b83240fe7c.png',
                    kind: 'head',
                    id: '1002',
                    rarity: 0,
                    brand: {
                        id: '11',
                        name: '\u30e4\u30b3',
                        image: '/images/brand/eab05d2d502cf953b4ae034c87e52e8c999339d6.png',
                        frequent_skill: {
                            id: '5',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u5897\u52a0\u91cf\u30a2\u30c3\u30d7',
                            image: '/images/skill/1378f3963526d7216ec44da35b924b81a8ff6a37.png',
                        },
                    },
                    name: '\u30e4\u30b3\u30e1\u30c3\u30b7\u30e5',
                    image: '/images/head/9cb8a9bc4429649031a4e52472da9d40217b5696.png',
                },
                clothes_skills: {
                    subs: [
                        {
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '3',
                        },
                        {
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            id: '0',
                        },
                        {
                            id: '200',
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                        },
                    ],
                    main: {
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        id: '1',
                    },
                },
                udemae: { s_plus_number: null, is_x: true, name: 'X' },
                principal_id: '0f624c81a9553123',
            },
        },
        {
            death_count: 9,
            special_count: 0,
            player: {
                principal_id: 'f875156c342c1edb',
                clothes_skills: {
                    main: {
                        image: '/images/skill/f0a99d1ab1a765b992b79610ebdc25b69d88fae9.png',
                        name: '\u30a4\u30ab\u30cb\u30f3\u30b8\u30e3',
                        id: '104',
                    },
                    subs: [
                        {
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                        },
                        {
                            id: '4',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                        {
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                        },
                    ],
                },
                head: {
                    image: '/images/head/8bef8c00276961268b36af9114ba029d645eed5b.png',
                    name: '\u30ab\u30e2\u30e1\u30c3\u30b7\u30e5',
                    kind: 'head',
                    id: '1006',
                    thumbnail: '/images/head/68e836d2dd363501547375e3756348e22dd887b6.png',
                    rarity: 0,
                    brand: {
                        frequent_skill: {
                            id: '1',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        },
                        name: '\u30db\u30c3\u30b3\u30ea\u30fc',
                        image: '/images/brand/dee59c0797a6214114e527dfa51f0dd012085172.png',
                        id: '6',
                    },
                },
                udemae: { is_x: false, s_plus_number: null, name: 'A' },
                star_rank: 0,
                clothes: {
                    image: '/images/clothes/08ecbcd0f741b3eed1d21e117b1c4b1d299c7e54.png',
                    name: '\u30e4\u30b3\u30ca\u30a4\u30ed\u30f3\u30ec\u30c8\u30ed',
                    kind: 'clothes',
                    id: '5018',
                    thumbnail: '/images/clothes/eccdc640e010a6b11490114255240ba1472e2bec.png',
                    rarity: 2,
                    brand: {
                        frequent_skill: {
                            id: '5',
                            image: '/images/skill/1378f3963526d7216ec44da35b924b81a8ff6a37.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u5897\u52a0\u91cf\u30a2\u30c3\u30d7',
                        },
                        image: '/images/brand/eab05d2d502cf953b4ae034c87e52e8c999339d6.png',
                        name: '\u30e4\u30b3',
                        id: '11',
                    },
                },
                player_rank: 99,
                player_type: { species: 'inklings', style: 'girl' },
                shoes_skills: {
                    main: {
                        id: '5',
                        image: '/images/skill/1378f3963526d7216ec44da35b924b81a8ff6a37.png',
                        name: '\u30b9\u30da\u30b7\u30e3\u30eb\u5897\u52a0\u91cf\u30a2\u30c3\u30d7',
                    },
                    subs: [
                        {
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            id: '11',
                        },
                        {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            id: '11',
                        },
                        {
                            name: '\u306f\u3066\u306a',
                            image: '/images/skill/46f9b6fc3a2aafdc0c688dec8cadb54aa6f8ace6.png',
                            id: '255',
                        },
                    ],
                },
                head_skills: {
                    main: {
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        id: '4',
                    },
                    subs: [
                        {
                            id: '0',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        },
                        {
                            id: '8',
                            image: '/images/skill/84ab4ba1188849dff63a4314955a53ab103b47df.png',
                            name: '\u5fa9\u6d3b\u6642\u9593\u77ed\u7e2e',
                        },
                        {
                            id: '1',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        },
                    ],
                },
                shoes: {
                    name: '\u30ce\u30ea\u30de\u30ad750 \u30d6\u30e9\u30c3\u30af',
                    image: '/images/shoes/0f1ef711bc32cf7189602e0a11b9a2f63b87f3da.png',
                    rarity: 2,
                    brand: {
                        id: '10',
                        name: '\u30a2\u30ed\u30e1',
                        image: '/images/brand/02286fe17bb6bc3f5f13c6b251ddc0a55c44c756.png',
                        frequent_skill: {
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            id: '2',
                        },
                    },
                    thumbnail: '/images/shoes/d912ee07772db7aa302703b3506217221803a083.png',
                    kind: 'shoes',
                    id: '2015',
                },
                nickname: '\u3059\u3045(*\u00b4~`*)\u00b0',
                weapon: {
                    image: '/images/weapon/3f840ce3cc5ac0b8cbf7451079b57e807d8b95f1.png',
                    sub: {
                        id: '0',
                        image_b: '/images/sub/b13bf755b279af83904892fae01cd98c866dfec7.png',
                        name: '\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30dc\u30e0',
                        image_a: '/images/sub/d2eaeec524d28ef315a13f8a9e11dd1039cb78aa.png',
                    },
                    id: '200',
                    thumbnail: '/images/weapon/2764365e99414ebb3f8b62548beb4dd5f65b70b2.png',
                    special: {
                        image_a: '/images/special/3e9cd3e60367fbe82d6237a10fdc826d695b9fa0.png',
                        name: '\u30a4\u30ab\u30b9\u30d5\u30a3\u30a2',
                        image_b: '/images/special/caf32476e5010e27a4ef9923dbe323978b1d7510.png',
                        id: '11',
                    },
                    name: '\u30ce\u30f4\u30a1\u30d6\u30e9\u30b9\u30bf\u30fc',
                },
            },
            assist_count: 1,
            kill_count: 6,
            game_paint_point: 563,
            sort_score: 0,
        },
    ],
    max_league_point: -0.1,
    tag_id: 'dL2khmjdJuj',
    my_team_members: [
        {
            game_paint_point: 765,
            sort_score: 0,
            kill_count: 8,
            assist_count: 3,
            player: {
                player_type: { species: 'inklings', style: 'girl' },
                player_rank: 40,
                clothes: {
                    rarity: 2,
                    brand: {
                        image: '/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png',
                        name: '\u30d0\u30c8\u30ed\u30a4\u30ab',
                        frequent_skill: {
                            id: '11',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                        },
                        id: '0',
                    },
                    thumbnail: '/images/clothes/afd3f7db4745b870084e29aafb7bad154124c9f2.png',
                    id: '10011',
                    kind: 'clothes',
                    name: '\u304a\u3046\u3048\u3093\u30d1\u30fc\u30ab\u30fc(\u30bf\u30b3ver.)',
                    image: '/images/clothes/458fb67223669d9b88ea1e6be15d37961033d469.png',
                },
                star_rank: 4,
                principal_id: 'e74f5fd8d37b9416',
                udemae: { is_x: true, s_plus_number: null, name: 'X' },
                head: {
                    brand: {
                        id: '98',
                        image: '/images/brand/047cbc2f0674eeb4796efb3b6ec1b710b22d07e7.png',
                        name: '\u30a2\u30bf\u30ea\u30e1\u30a4\u30c9',
                    },
                    rarity: 1,
                    thumbnail: '/images/head/77f1673b278905c70e499ac8c1b5f70ce5846678.png',
                    id: '27106',
                    kind: 'head',
                    name: '\u30b0\u30e9\u30f3\u30d1\u306a\u30a2\u30bf\u30de',
                    image: '/images/head/fb4324a76a864904c89f63d2860193ef03fdfa22.png',
                },
                clothes_skills: {
                    subs: [
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '7',
                        },
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                        },
                    ],
                    main: {
                        id: '201',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                    },
                },
                weapon: {
                    sub: {
                        id: '0',
                        image_b: '/images/sub/b13bf755b279af83904892fae01cd98c866dfec7.png',
                        name: '\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30dc\u30e0',
                        image_a: '/images/sub/d2eaeec524d28ef315a13f8a9e11dd1039cb78aa.png',
                    },
                    image: '/images/weapon/331d889d8113b794131080c8943e05a3d2c4547d.png',
                    thumbnail: '/images/weapon/5f519a8b3f436c854dc81ee14bfc3a26aef09ebc.png',
                    id: '41',
                    name: '\u30b9\u30d7\u30e9\u30b7\u30e5\u30fc\u30bf\u30fc\u30b3\u30e9\u30dc',
                    special: {
                        image_a: '/images/special/9871c82952ed0141be0310ace1942c9f5f66d655.png',
                        name: '\u30b8\u30a7\u30c3\u30c8\u30d1\u30c3\u30af',
                        image_b: '/images/special/26e8117808ce17dadb0f23943359e5909fef4085.png',
                        id: '8',
                    },
                },
                shoes: {
                    brand: {
                        id: '2',
                        frequent_skill: {
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                        },
                        image: '/images/brand/9ac5752790dd6dbdc7a427df95e1bfe89fe318e0.png',
                        name: '\u30af\u30e9\u30fc\u30b2\u30b9',
                    },
                    rarity: 0,
                    kind: 'shoes',
                    id: '2040',
                    thumbnail: '/images/shoes/eadcf374f85ac60f3283ea121914f6c4a95282ae.png',
                    image: '/images/shoes/979934a12e8d59f98288dd2b85642af731c41916.png',
                    name: '\u30ad\u30e3\u30f3\u30d0\u30b9Hi \u30c8\u30ea\u30e5\u30d5',
                },
                nickname: '.\u30dd\u30f3\u3060\u308b\u307e',
                head_skills: {
                    subs: [
                        {
                            id: '11',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        },
                        {
                            id: '200',
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                        },
                        {
                            image: '/images/skill/d83b962b84fcea9d02c591c296234f5de77f9682.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6e1b\u5c11\u91cf\u30c0\u30a6\u30f3',
                            id: '6',
                        },
                    ],
                    main: {
                        id: '103',
                        image: '/images/skill/bdc5135874439cf3169d9a54b3f1fbdba3731b34.png',
                        name: '\u30ab\u30e0\u30d0\u30c3\u30af',
                    },
                },
                shoes_skills: {
                    main: {
                        id: '109',
                        image: '/images/skill/8a3f06a972689b094f762626ff36b3db8ee545b5.png',
                        name: '\u30b9\u30c6\u30eb\u30b9\u30b8\u30e3\u30f3\u30d7',
                    },
                    subs: [
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                        },
                        {
                            id: '9',
                            image: '/images/skill/daf6883039afa62da91eb93eb2a40b673f10b715.png',
                            name: '\u30b9\u30fc\u30d1\u30fc\u30b8\u30e3\u30f3\u30d7\u6642\u9593\u77ed\u7e2e',
                        },
                        {
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            id: '7',
                        },
                    ],
                },
            },
            special_count: 2,
            death_count: 6,
        },
        {
            special_count: 2,
            death_count: 3,
            kill_count: 11,
            assist_count: 5,
            player: {
                shoes: {
                    name: '\u30a2\u30ed\u30fc\u30ba \u30bf\u30bf\u30ad\u30d9\u30c3\u30c1\u30e5\u30fc',
                    image: '/images/shoes/dda93e3d3783ef11c7dbdd88b664c3ed3c8f9a89.png',
                    thumbnail: '/images/shoes/9366357216019ac4cb395b1ad88138a731d165cc.png',
                    id: '3013',
                    kind: 'shoes',
                    brand: {
                        name: '\u30bf\u30bf\u30ad\u30b1\u30f3\u30b5\u30ad',
                        image: '/images/brand/4b05e494bf9a547b4d625fd52dcdd930a6c4defc.png',
                        frequent_skill: {
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                        id: '17',
                    },
                    rarity: 2,
                },
                nickname: '\u3086\u3086\u305f\u3083',
                weapon: {
                    sub: {
                        id: '12',
                        image_b: '/images/sub/88f5dd0c10a851227ef618e770b2934a39d7078e.png',
                        name: '\u30c8\u30fc\u30d4\u30fc\u30c9',
                        image_a: '/images/sub/e9df0dfef8af0a69f0f0d0a08de90b3314ed82da.png',
                    },
                    image: '/images/weapon/d03d1c4d89e4ad9e19e2f9519efac423408c8008.png',
                    thumbnail: '/images/weapon/42f6471ad13905ec61336ad28635b0a4bf4768e7.png',
                    id: '242',
                    name: '\u30e9\u30d4\u30c3\u30c9\u30d6\u30e9\u30b9\u30bf\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc',
                    special: {
                        image_b: '/images/special/caf32476e5010e27a4ef9923dbe323978b1d7510.png',
                        id: '11',
                        image_a: '/images/special/3e9cd3e60367fbe82d6237a10fdc826d695b9fa0.png',
                        name: '\u30a4\u30ab\u30b9\u30d5\u30a3\u30a2',
                    },
                },
                head_skills: {
                    subs: [
                        {
                            id: '200',
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                        },
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                        },
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                    ],
                    main: {
                        id: '201',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                    },
                },
                shoes_skills: {
                    subs: [
                        {
                            id: '1',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        },
                        {
                            id: '11',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        },
                        {
                            id: '11',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                        },
                    ],
                    main: {
                        id: '1',
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                    },
                },
                player_type: { style: 'girl', species: 'inklings' },
                player_rank: 8,
                udemae: { s_plus_number: null, is_x: false, name: 'B-' },
                clothes_skills: {
                    subs: [
                        {
                            id: '4',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '2',
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                        },
                        {
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            id: '2',
                        },
                    ],
                    main: {
                        id: '4',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                    },
                },
                head: {
                    brand: {
                        id: '6',
                        name: '\u30db\u30c3\u30b3\u30ea\u30fc',
                        image: '/images/brand/dee59c0797a6214114e527dfa51f0dd012085172.png',
                        frequent_skill: {
                            id: '1',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        },
                    },
                    rarity: 0,
                    kind: 'head',
                    id: '1006',
                    thumbnail: '/images/head/68e836d2dd363501547375e3756348e22dd887b6.png',
                    image: '/images/head/8bef8c00276961268b36af9114ba029d645eed5b.png',
                    name: '\u30ab\u30e2\u30e1\u30c3\u30b7\u30e5',
                },
                principal_id: 'cf7fb9708eb1e447',
                star_rank: 3,
                clothes: {
                    image: '/images/clothes/d90943886f74892fb113a25aa1295b9e97efe27d.png',
                    name: '\u30b1\u30f3\u30b5\u30ad\u30b3\u30fc\u30c1',
                    brand: {
                        name: '\u30bf\u30bf\u30ad\u30b1\u30f3\u30b5\u30ad',
                        image: '/images/brand/4b05e494bf9a547b4d625fd52dcdd930a6c4defc.png',
                        frequent_skill: {
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                        id: '17',
                    },
                    rarity: 2,
                    id: '5023',
                    kind: 'clothes',
                    thumbnail: '/images/clothes/78fbdcaf99edcb986f416c1e84d6cabd24a84191.png',
                },
            },
            game_paint_point: 913,
            sort_score: 0,
        },
        {
            sort_score: 0,
            game_paint_point: 733,
            player: {
                star_rank: 1,
                clothes: {
                    image: '/images/clothes/7e807c7692360f7d21c7c2f40fedee3828451ebc.png',
                    name: '\u30bf\u30b3\u30ed\u30f3T \u9ed2',
                    brand: {
                        name: '\u30a2\u30bf\u30ea\u30e1\u30a4\u30c9',
                        image: '/images/brand/047cbc2f0674eeb4796efb3b6ec1b710b22d07e7.png',
                        id: '98',
                    },
                    rarity: 1,
                    id: '2020',
                    kind: 'clothes',
                    thumbnail: '/images/clothes/7c89a0e5b1337443ea42c05e24da8e7f91489e0f.png',
                },
                principal_id: 'd343f7b0f8bd0182',
                udemae: { s_plus_number: null, is_x: false, name: 'B' },
                clothes_skills: {
                    main: {
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    },
                    subs: [
                        {
                            id: '201',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                        {
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            id: '11',
                        },
                    ],
                },
                head: {
                    thumbnail: '/images/head/d02f7e646d6ffff8787c2e2249b75534e8813e83.png',
                    kind: 'head',
                    id: '9004',
                    rarity: 0,
                    brand: {
                        frequent_skill: {
                            image: '/images/skill/d83b962b84fcea9d02c591c296234f5de77f9682.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6e1b\u5c11\u91cf\u30c0\u30a6\u30f3',
                            id: '6',
                        },
                        image: '/images/brand/f3d01187fd633e7d48d9e4e16ef31da73279293c.png',
                        name: '\u30a8\u30be\u30c3\u30b3',
                        id: '4',
                    },
                    name: '\u30e9\u30f3\u30cb\u30f3\u30b0\u30d0\u30f3\u30c9',
                    image: '/images/head/f7e09d0637895752483c273b4d414e7327e51c35.png',
                },
                player_type: { species: 'inklings', style: 'boy' },
                player_rank: 1,
                head_skills: {
                    subs: [
                        {
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                        },
                        {
                            id: '201',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '4',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        },
                    ],
                    main: {
                        id: '1',
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                    },
                },
                shoes_skills: {
                    main: {
                        image: '/images/skill/d0de52e89947803e5b24165335855f39f9e8a6bd.png',
                        name: '\u53d7\u3051\u8eab\u8853',
                        id: '111',
                    },
                    subs: [
                        {
                            id: '255',
                            name: '\u306f\u3066\u306a',
                            image: '/images/skill/46f9b6fc3a2aafdc0c688dec8cadb54aa6f8ace6.png',
                        },
                        {
                            id: '255',
                            name: '\u306f\u3066\u306a',
                            image: '/images/skill/46f9b6fc3a2aafdc0c688dec8cadb54aa6f8ace6.png',
                        },
                        {
                            id: '255',
                            name: '\u306f\u3066\u306a',
                            image: '/images/skill/46f9b6fc3a2aafdc0c688dec8cadb54aa6f8ace6.png',
                        },
                    ],
                },
                weapon: {
                    name: '\u30e9\u30d4\u30c3\u30c9\u30d6\u30e9\u30b9\u30bf\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc',
                    special: {
                        id: '11',
                        image_b: '/images/special/caf32476e5010e27a4ef9923dbe323978b1d7510.png',
                        name: '\u30a4\u30ab\u30b9\u30d5\u30a3\u30a2',
                        image_a: '/images/special/3e9cd3e60367fbe82d6237a10fdc826d695b9fa0.png',
                    },
                    thumbnail: '/images/weapon/42f6471ad13905ec61336ad28635b0a4bf4768e7.png',
                    id: '242',
                    sub: {
                        image_b: '/images/sub/88f5dd0c10a851227ef618e770b2934a39d7078e.png',
                        id: '12',
                        image_a: '/images/sub/e9df0dfef8af0a69f0f0d0a08de90b3314ed82da.png',
                        name: '\u30c8\u30fc\u30d4\u30fc\u30c9',
                    },
                    image: '/images/weapon/d03d1c4d89e4ad9e19e2f9519efac423408c8008.png',
                },
                nickname: '\u308b\u304d\u305f\u3083',
                shoes: {
                    id: '6007',
                    kind: 'shoes',
                    thumbnail: '/images/shoes/f8cda5d53bd629b263c3f24c2e271bac8105eb92.png',
                    rarity: 2,
                    brand: {
                        id: '3',
                        frequent_skill: {
                            id: '3',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                    },
                    image: '/images/shoes/f1af818020fb5912b304a997c39b8c72a7258c1e.png',
                    name: '\u30ed\u30c3\u30ad\u30f3\u30c1\u30a7\u30ea\u30fc',
                },
            },
            kill_count: 3,
            assist_count: 7,
            special_count: 1,
            death_count: 4,
        },
    ],
    type: 'league',
    my_team_result: { name: 'WIN!', key: 'victory' },
    rule: {
        multiline_name: '\u30ac\u30c1\n\u30a2\u30b5\u30ea',
        name: '\u30ac\u30c1\u30a2\u30b5\u30ea',
        key: 'clam_blitz',
    },
    game_mode: { key: 'league_pair', name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1' },
    star_rank: 4,
    other_team_result: { key: 'defeat', name: 'LOSE\u2026' },
    elapsed_time: 236,
    weapon_paint_point: 9999999,
};
