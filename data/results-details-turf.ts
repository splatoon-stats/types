import { ResultDetails_Regular } from '../src/result-details';

// https://app.splatoon2.nintendo.net/api/results/:id
const response: ResultDetails_Regular = {
    win_meter: 61,
    star_rank: 4,
    game_mode: { key: 'regular', name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1' },
    player_rank: 27,
    my_team_result: { key: 'victory', name: 'WIN!' },
    battle_number: '28632',
    other_team_percentage: 24.4,
    player_result: {
        death_count: 5,
        player: {
            shoes_skills: {
                subs: [
                    {
                        id: '9',
                        name: '\u30b9\u30fc\u30d1\u30fc\u30b8\u30e3\u30f3\u30d7\u6642\u9593\u77ed\u7e2e',
                        image: '/images/skill/daf6883039afa62da91eb93eb2a40b673f10b715.png',
                    },
                    {
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    },
                    {
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        id: '1',
                    },
                ],
                main: {
                    id: '110',
                    image: '/images/skill/47a74cd575b25a9de3e3592084ff3870db0cf4e0.png',
                    name: '\u5bfe\u7269\u653b\u6483\u529b\u30a2\u30c3\u30d7',
                },
            },
            weapon: {
                image: '/images/weapon/e5d361c200bb4793713fcc04770d9e78d7e5bc24.png',
                id: '61',
                special: {
                    image_a: '/images/special/e395a50d51459dcee4db62d8d1fbc4bb263bc326.png',
                    name: '\u30de\u30eb\u30c1\u30df\u30b5\u30a4\u30eb',
                    image_b: '/images/special/4819d9d318668bdd5dab248a23397ec351bc5c60.png',
                    id: '0',
                },
                name: 'N-ZAP89',
                sub: {
                    name: '\u30ed\u30dc\u30c3\u30c8\u30dc\u30e0',
                    image_b: '/images/sub/f0e4b4bad0e37031b8cb8ff397d4bb0ad9c86307.png',
                    image_a: '/images/sub/457de86fa079df54c7a3c96decca49a55a1686ae.png',
                    id: '4',
                },
                thumbnail: '/images/weapon/762846bf92742185c5507347aec26014afc7a43a.png',
            },
            star_rank: 4,
            head: {
                image: '/images/head/b4c708b8a5dc5d533ec4cb8ae723f61a0cf26b82.png',
                id: '1021',
                name: '\u30a6\u30fc\u30eb\u30a6\u30fc\u30cb\u30fc\u30ba\u30af\u30e9\u30b7\u30c3\u30af',
                kind: 'head',
                brand: {
                    id: '2',
                    image: '/images/brand/9ac5752790dd6dbdc7a427df95e1bfe89fe318e0.png',
                    name: '\u30af\u30e9\u30fc\u30b2\u30b9',
                    frequent_skill: {
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    },
                },
                thumbnail: '/images/head/c3cbe525151c591775b37fe10bb809da816b48a5.png',
                rarity: 1,
            },
            clothes: {
                rarity: 1,
                thumbnail: '/images/clothes/e6338098a660f7e97ee0740f088fe450d26cc19d.png',
                name: '\u30ac\u30c1\u30ac\u30b5\u30cd',
                kind: 'clothes',
                brand: {
                    id: '0',
                    image: '/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png',
                    frequent_skill: {
                        id: '11',
                        image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                    },
                    name: '\u30d0\u30c8\u30ed\u30a4\u30ab',
                },
                id: '3005',
                image: '/images/clothes/645493de112e6223df7e18ad15ed3dd6d9776dd6.png',
            },
            principal_id: '2cf69d9715b323b7',
            player_rank: 27,
            clothes_skills: {
                main: {
                    id: '3',
                    name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                },
                subs: [
                    {
                        id: '201',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                    },
                    {
                        id: '201',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                    },
                    {
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        id: '1',
                    },
                ],
            },
            shoes: {
                rarity: 1,
                thumbnail: '/images/shoes/639e4eda0a6b45501921e460a4c333162cdd1626.png',
                kind: 'shoes',
                brand: {
                    id: '98',
                    name: '\u30a2\u30bf\u30ea\u30e1\u30a4\u30c9',
                    image: '/images/brand/047cbc2f0674eeb4796efb3b6ec1b710b22d07e7.png',
                },
                name: '\u30bf\u30b3\u30be\u30cd\u30b9\u30d6\u30fc\u30c4\u30cd\u30aa',
                id: '27104',
                image: '/images/shoes/0e2f0cf2305ad60db12612990072674a0ee4f760.png',
            },
            head_skills: {
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
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    },
                ],
                main: {
                    image: '/images/skill/bdc5135874439cf3169d9a54b3f1fbdba3731b34.png',
                    name: '\u30ab\u30e0\u30d0\u30c3\u30af',
                    id: '103',
                },
            },
            player_type: { style: 'girl', species: 'inklings' },
            nickname: '.\u3086\u304d\u30ea\u30f3\u30b0',
        },
        sort_score: 0,
        assist_count: 2,
        kill_count: 9,
        special_count: 3,
        game_paint_point: 947,
    },
    other_team_members: [
        {
            death_count: 6,
            assist_count: 0,
            sort_score: 0,
            player: {
                shoes_skills: {
                    main: {
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        id: '4',
                    },
                    subs: [
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
                        {
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                        },
                    ],
                },
                clothes: {
                    name: '\u30ac\u30c1\u30db\u30ef\u30a4\u30c8',
                    kind: 'clothes',
                    brand: {
                        id: '0',
                        name: '\u30d0\u30c8\u30ed\u30a4\u30ab',
                        frequent_skill: {
                            id: '11',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        },
                        image: '/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png',
                    },
                    rarity: 1,
                    thumbnail: '/images/clothes/4df2bb1f1897cf3b8c89ac4ae1767b5993365fe9.png',
                    image: '/images/clothes/c450bc91c63446beca0a31c02796c7fea6d4ea8c.png',
                    id: '1022',
                },
                head: {
                    image: '/images/head/29a325171dc2c8df76d99502c58c42f9337aafb8.png',
                    id: '2011',
                    name: '\u30aa\u30b7\u30ce\u30d3\u30cb\u30c3\u30c8',
                    brand: {
                        frequent_skill: {
                            image: '/images/skill/84ab4ba1188849dff63a4314955a53ab103b47df.png',
                            name: '\u5fa9\u6d3b\u6642\u9593\u77ed\u7e2e',
                            id: '8',
                        },
                        name: '\u30db\u30bf\u30c3\u30af\u30b9',
                        image: '/images/brand/8175954b5a7e02b8097dbb484c808c8f39d31f41.png',
                        id: '7',
                    },
                    kind: 'head',
                    thumbnail: '/images/head/fab0df87794c055431e03d12543972a092840b5c.png',
                    rarity: 1,
                },
                principal_id: '4792db1bdc337826',
                star_rank: 1,
                weapon: {
                    image: '/images/weapon/03300b6db070d0cdf00f8f305b73f53738fe138d.png',
                    special: {
                        name: '\u30de\u30eb\u30c1\u30df\u30b5\u30a4\u30eb',
                        image_b: '/images/special/4819d9d318668bdd5dab248a23397ec351bc5c60.png',
                        image_a: '/images/special/e395a50d51459dcee4db62d8d1fbc4bb263bc326.png',
                        id: '0',
                    },
                    id: '231',
                    sub: {
                        id: '3',
                        image_a: '/images/sub/e398a9e0360f048b6a0c4c3c1e89211cca96577f.png',
                        name: '\u30ab\u30fc\u30ea\u30f3\u30b0\u30dc\u30e0',
                        image_b: '/images/sub/2b5797c0ad847a54b9bd8168e75050484919d373.png',
                    },
                    name: '\u30af\u30e9\u30c3\u30b7\u30e5\u30d6\u30e9\u30b9\u30bf\u30fc\u30cd\u30aa',
                    thumbnail: '/images/weapon/9176035499629be618544bb8313044f6bb3b1344.png',
                },
                clothes_skills: {
                    main: {
                        image: '/images/skill/f0a99d1ab1a765b992b79610ebdc25b69d88fae9.png',
                        name: '\u30a4\u30ab\u30cb\u30f3\u30b8\u30e3',
                        id: '104',
                    },
                    subs: [
                        {
                            id: '1',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        },
                        {
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                            id: '1',
                        },
                        {
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                        },
                    ],
                },
                player_rank: 93,
                shoes: {
                    brand: {
                        id: '10',
                        frequent_skill: {
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                            id: '2',
                        },
                        name: '\u30a2\u30ed\u30e1',
                        image: '/images/brand/02286fe17bb6bc3f5f13c6b251ddc0a55c44c756.png',
                    },
                    kind: 'shoes',
                    name: '\u30a4\u30ed\u30de\u30ad750 \u30d1\u30fc\u30d7\u30eb',
                    thumbnail: '/images/shoes/1032ccb8e56257f5dd06672b4a9388bd322450a2.png',
                    rarity: 0,
                    image: '/images/shoes/a1f22b2af19e32c2a1eba4519eb34105ac695508.png',
                    id: '2030',
                },
                nickname: '*p\u00f6m*\u03c5\u2019\u00a5\u201b\u03c5',
                head_skills: {
                    subs: [
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
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
                    main: {
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    },
                },
                player_type: { species: 'octolings', style: 'girl' },
            },
            game_paint_point: 603,
            special_count: 1,
            kill_count: 4,
        },
        {
            death_count: 7,
            player: {
                player_type: { species: 'inklings', style: 'girl' },
                head_skills: {
                    main: {
                        id: '4',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                    },
                    subs: [
                        {
                            id: '7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        {
                            id: '7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                    ],
                },
                nickname: '\u307e\u3093\u3081\u3093\u307f',
                shoes: {
                    id: '21002',
                    image: '/images/shoes/24bdb7a826ceb3eb3f0e58bf355fb8385736e406.png',
                    rarity: 2,
                    thumbnail: '/images/shoes/c92857604c794ff6125dd8f2ff6d5e5a979ba74e.png',
                    brand: {
                        id: '97',
                        name: '\u30af\u30de\u30b5\u30f3\u5546\u4f1a',
                        image: '/images/brand/ec85f17c315e0a1ea4dee55041fd30a88d6aba93.png',
                    },
                    kind: 'shoes',
                    name: '\u30ce\u30f3\u30b9\u30ea\u30c3\u30d7\u30bf\u30af\u30df',
                },
                weapon: {
                    special: {
                        image_a: '/images/special/324d41e9582d84101152849bc8c96d6595c9b0ff.png',
                        name: '\u30b9\u30fc\u30d1\u30fc\u30c1\u30e3\u30af\u30c1',
                        image_b: '/images/special/4eb81e00f5d707248879a7c7037d8475716a8045.png',
                        id: '9',
                    },
                    id: '1010',
                    image: '/images/weapon/1041dbdd11b3036671148d47c2e0798cecf3dba2.png',
                    thumbnail: '/images/weapon/626210255f99cb22bee1eded39457c51aa9622aa.png',
                    sub: {
                        id: '3',
                        name: '\u30ab\u30fc\u30ea\u30f3\u30b0\u30dc\u30e0',
                        image_b: '/images/sub/2b5797c0ad847a54b9bd8168e75050484919d373.png',
                        image_a: '/images/sub/e398a9e0360f048b6a0c4c3c1e89211cca96577f.png',
                    },
                    name: '\u30b9\u30d7\u30e9\u30ed\u30fc\u30e9\u30fc',
                },
                star_rank: 2,
                head: {
                    name: '\u30de\u30eb\u30b5\u30f3SV925',
                    brand: {
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                        frequent_skill: {
                            id: '3',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                        },
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                        id: '3',
                    },
                    kind: 'head',
                    thumbnail: '/images/head/25e3cc5c535868c3b351b73d864721090e546d0f.png',
                    rarity: 2,
                    image: '/images/head/807f7566c605fb305bbb8f023841cc3dab61b96d.png',
                    id: '3014',
                },
                clothes: {
                    id: '21002',
                    image: '/images/clothes/2d7eb10da0ed46d129988f25b70e545f69d9b8b1.png',
                    rarity: 2,
                    thumbnail: '/images/clothes/6670bd6eb4c2a0909804e63f4f23518dea9a897e.png',
                    name: '\u30d5\u30e5\u30fc\u30a8\u30eb\u30d6\u30eb\u30be\u30f3',
                    brand: {
                        id: '97',
                        name: '\u30af\u30de\u30b5\u30f3\u5546\u4f1a',
                        image: '/images/brand/ec85f17c315e0a1ea4dee55041fd30a88d6aba93.png',
                    },
                    kind: 'clothes',
                },
                principal_id: 'cef1abd3b519faa7',
                player_rank: 72,
                clothes_skills: {
                    main: {
                        id: '201',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                    },
                    subs: [
                        {
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            id: '201',
                        },
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                        },
                        {
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                            id: '0',
                        },
                    ],
                },
                shoes_skills: {
                    main: {
                        id: '4',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                    },
                    subs: [
                        {
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            id: '0',
                        },
                        {
                            id: '0',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        },
                        {
                            id: '0',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        },
                    ],
                },
            },
            assist_count: 0,
            sort_score: 0,
            game_paint_point: 527,
            special_count: 0,
            kill_count: 5,
        },
        {
            kill_count: 8,
            special_count: 1,
            game_paint_point: 656,
            death_count: 6,
            player: {
                shoes_skills: {
                    main: {
                        image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                        id: '0',
                    },
                    subs: [
                        {
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                            id: '0',
                        },
                        {
                            id: '0',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        },
                        {
                            id: '7',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                        },
                    ],
                },
                weapon: {
                    special: {
                        image_a: '/images/special/e395a50d51459dcee4db62d8d1fbc4bb263bc326.png',
                        image_b: '/images/special/4819d9d318668bdd5dab248a23397ec351bc5c60.png',
                        name: '\u30de\u30eb\u30c1\u30df\u30b5\u30a4\u30eb',
                        id: '0',
                    },
                    id: '231',
                    image: '/images/weapon/03300b6db070d0cdf00f8f305b73f53738fe138d.png',
                    thumbnail: '/images/weapon/9176035499629be618544bb8313044f6bb3b1344.png',
                    sub: {
                        id: '3',
                        image_b: '/images/sub/2b5797c0ad847a54b9bd8168e75050484919d373.png',
                        name: '\u30ab\u30fc\u30ea\u30f3\u30b0\u30dc\u30e0',
                        image_a: '/images/sub/e398a9e0360f048b6a0c4c3c1e89211cca96577f.png',
                    },
                    name: '\u30af\u30e9\u30c3\u30b7\u30e5\u30d6\u30e9\u30b9\u30bf\u30fc\u30cd\u30aa',
                },
                star_rank: 0,
                clothes: {
                    name: '\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30ba\u30ef\u30fc\u30af\u30a6\u30a8\u30a2',
                    kind: 'clothes',
                    brand: {
                        image: '/images/brand/ec85f17c315e0a1ea4dee55041fd30a88d6aba93.png',
                        name: '\u30af\u30de\u30b5\u30f3\u5546\u4f1a',
                        id: '97',
                    },
                    thumbnail: '/images/clothes/ed4e8315fa5a7464b6b8fd5011a337f308ce5711.png',
                    rarity: 2,
                    image: '/images/clothes/a4e9e3285e9412f9219e79b12733c1c4704506ab.png',
                    id: '21008',
                },
                principal_id: '1314ae715d7d3974',
                head: {
                    thumbnail: '/images/head/fab0df87794c055431e03d12543972a092840b5c.png',
                    rarity: 1,
                    name: '\u30aa\u30b7\u30ce\u30d3\u30cb\u30c3\u30c8',
                    kind: 'head',
                    brand: {
                        id: '7',
                        name: '\u30db\u30bf\u30c3\u30af\u30b9',
                        frequent_skill: {
                            id: '8',
                            name: '\u5fa9\u6d3b\u6642\u9593\u77ed\u7e2e',
                            image: '/images/skill/84ab4ba1188849dff63a4314955a53ab103b47df.png',
                        },
                        image: '/images/brand/8175954b5a7e02b8097dbb484c808c8f39d31f41.png',
                    },
                    id: '2011',
                    image: '/images/head/29a325171dc2c8df76d99502c58c42f9337aafb8.png',
                },
                clothes_skills: {
                    main: {
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                        id: '4',
                    },
                    subs: [
                        {
                            id: '1',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        },
                        {
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            id: '4',
                        },
                        {
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '7',
                        },
                    ],
                },
                player_rank: 80,
                shoes: {
                    thumbnail: '/images/shoes/48ef6280563706a400509bba33261d6ac8cc3b6d.png',
                    rarity: 1,
                    kind: 'shoes',
                    brand: {
                        id: '3',
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                        frequent_skill: {
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            id: '3',
                        },
                    },
                    name: '\u30cc\u30d0\u30c3\u30af\u30d6\u30fc\u30c4 \u30a4\u30a8\u30ed\u30fc',
                    id: '6001',
                    image: '/images/shoes/4d0ce2bbebf87c5c5670d5e148056a645ac335de.png',
                },
                head_skills: {
                    subs: [
                        {
                            id: '9',
                            name: '\u30b9\u30fc\u30d1\u30fc\u30b8\u30e3\u30f3\u30d7\u6642\u9593\u77ed\u7e2e',
                            image: '/images/skill/daf6883039afa62da91eb93eb2a40b673f10b715.png',
                        },
                        {
                            id: '5',
                            image: '/images/skill/1378f3963526d7216ec44da35b924b81a8ff6a37.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u5897\u52a0\u91cf\u30a2\u30c3\u30d7',
                        },
                        {
                            name: '\u5fa9\u6d3b\u6642\u9593\u77ed\u7e2e',
                            image: '/images/skill/84ab4ba1188849dff63a4314955a53ab103b47df.png',
                            id: '8',
                        },
                    ],
                    main: {
                        id: '4',
                        name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                    },
                },
                player_type: { species: 'inklings', style: 'girl' },
                nickname: '\u306f\u306a\u307d\u3093\u3000',
            },
            sort_score: 0,
            assist_count: 1,
        },
        {
            kill_count: 1,
            special_count: 1,
            game_paint_point: 0,
            death_count: 3,
            sort_score: 0,
            assist_count: 0,
            player: {
                shoes: {
                    name: '\u30ed\u30c3\u30ad\u30f3\u30af\u30e9\u30a6\u30f3',
                    kind: 'shoes',
                    brand: {
                        id: '3',
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                        frequent_skill: {
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            id: '3',
                        },
                    },
                    thumbnail: '/images/shoes/37b5f83c951d87a2e8c9377ca4f32a494bef9f3f.png',
                    rarity: 2,
                    image: '/images/shoes/c8733e7dd5245c6f645bfdb5a491261105bf27a6.png',
                    id: '23002',
                },
                head_skills: {
                    main: {
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        id: '201',
                    },
                    subs: [
                        {
                            id: '201',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                        },
                        {
                            id: '7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                    ],
                },
                player_type: { species: 'octolings', style: 'girl' },
                nickname: 'UIZ',
                shoes_skills: {
                    main: {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                    },
                    subs: [
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                        },
                        {
                            id: '3',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                        },
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                        },
                    ],
                },
                weapon: {
                    image: '/images/weapon/e3a04bc009779c7b8c67a38eca480d8490227bbb.png',
                    id: '1015',
                    special: {
                        name: '\u30b9\u30fc\u30d1\u30fc\u30c1\u30e3\u30af\u30c1',
                        image_b: '/images/special/4eb81e00f5d707248879a7c7037d8475716a8045.png',
                        image_a: '/images/special/324d41e9582d84101152849bc8c96d6595c9b0ff.png',
                        id: '9',
                    },
                    name: '\u30d2\u30fc\u30ed\u30fc\u30ed\u30fc\u30e9\u30fc \u30ec\u30d7\u30ea\u30ab',
                    sub: {
                        image_b: '/images/sub/2b5797c0ad847a54b9bd8168e75050484919d373.png',
                        name: '\u30ab\u30fc\u30ea\u30f3\u30b0\u30dc\u30e0',
                        image_a: '/images/sub/e398a9e0360f048b6a0c4c3c1e89211cca96577f.png',
                        id: '3',
                    },
                    thumbnail: '/images/weapon/d782fd218fe45d0f2b82a8a1f72fb3d824e7c759.png',
                },
                star_rank: 0,
                head: {
                    id: '24004',
                    image: '/images/head/9fcda9dce451e17590353fbe8e44a47098d5dd63.png',
                    thumbnail: '/images/head/65ff12da59b1fff2243923c21d79f4e11fd14efb.png',
                    rarity: 2,
                    name: '\u30d1\u30fc\u30c6\u30a3\u30fc\u30b3\u30fc\u30f3\u30c7\u30b3',
                    brand: {
                        image: '/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png',
                        name: '\u30d0\u30c8\u30ed\u30a4\u30ab',
                        frequent_skill: {
                            id: '11',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                        },
                        id: '0',
                    },
                    kind: 'head',
                },
                clothes: {
                    id: '1003',
                    image: '/images/clothes/cb29f781f0328232bba8d2997bf03795c552904e.png',
                    thumbnail: '/images/clothes/d67b79f8f71e13004a73f901da060a5a47b83009.png',
                    rarity: 0,
                    name: '\u30a4\u30ab\u30ce\u30e1\uff34 \u30e9\u30a4\u30c8\u30d6\u30eb\u30fc',
                    kind: 'clothes',
                    brand: {
                        id: '10',
                        image: '/images/brand/02286fe17bb6bc3f5f13c6b251ddc0a55c44c756.png',
                        frequent_skill: {
                            id: '2',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                        },
                        name: '\u30a2\u30ed\u30e1',
                    },
                },
                principal_id: '7b43e8c3491dc7fd',
                clothes_skills: {
                    subs: [
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                        },
                        {
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            id: '2',
                        },
                        {
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                    ],
                    main: {
                        id: '201',
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                    },
                },
                player_rank: 44,
            },
        },
    ],
    weapon_paint_point: 520035,
    start_time: 1606058326,
    stage: {
        id: '1',
        name: '\u30d5\u30b8\u30c4\u30dc\u30b9\u30dd\u30fc\u30c4\u30af\u30e9\u30d6',
        image: '/images/stage/83acec875a5bb19418d7b87d5df4ba1e38ceac66.png',
    },
    my_team_members: [
        {
            player: {
                shoes_skills: {
                    subs: [
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                        },
                        {
                            id: '3',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                        },
                        {
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            id: '0',
                        },
                    ],
                    main: {
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                        image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        id: '0',
                    },
                },
                clothes_skills: {
                    main: {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                    },
                    subs: [
                        {
                            name: '\u30a4\u30ab\u30c0\u30c3\u30b7\u30e5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/d138c293c8ddac42fadf0e6531100a88c79c81f6.png',
                            id: '4',
                        },
                        {
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            id: '7',
                        },
                        {
                            id: '2',
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                        },
                    ],
                },
                player_rank: 87,
                weapon: {
                    id: '4040',
                    special: {
                        id: '11',
                        image_b: '/images/special/caf32476e5010e27a4ef9923dbe323978b1d7510.png',
                        name: '\u30a4\u30ab\u30b9\u30d5\u30a3\u30a2',
                        image_a: '/images/special/3e9cd3e60367fbe82d6237a10fdc826d695b9fa0.png',
                    },
                    image: '/images/weapon/d79b99092aa03dc249b1f767197c1ecbda9d3cd7.png',
                    thumbnail: '/images/weapon/695cedb1ff72589173c85ce61ad4dbc9e025249a.png',
                    name: '\u30ce\u30fc\u30c1\u30e9\u30b947',
                    sub: {
                        id: '8',
                        image_a: '/images/sub/14b4d4ef62e915e87bd7caa8b99fb4e986caea26.png',
                        name: '\u30dd\u30a4\u30f3\u30c8\u30bb\u30f3\u30b5\u30fc',
                        image_b: '/images/sub/627ae0ea02ab649a7a482ee7ee7ace85ca307f44.png',
                    },
                },
                star_rank: 1,
                clothes: {
                    image: '/images/clothes/27dcc690e7fd311b7be3429001a4aac8a4e88ba3.png',
                    id: '1052',
                    brand: {
                        id: '0',
                        frequent_skill: {
                            image: '/images/skill/33087a476135074af856151a89a6fe4d1d3a996e.png',
                            name: '\u76f8\u624b\u30a4\u30f3\u30af\u5f71\u97ff\u8efd\u6e1b',
                            id: '11',
                        },
                        name: '\u30d0\u30c8\u30ed\u30a4\u30ab',
                        image: '/images/brand/5547e529d160b188d104e3b68ff4b7566eab9771.png',
                    },
                    kind: 'clothes',
                    name: '\u30ea\u30fc\u30b0T',
                    thumbnail: '/images/clothes/5e35ce167739ee4c2b144e9e66f8a27d5d45f2da.png',
                    rarity: 1,
                },
                principal_id: '3de5a71ec958e937',
                head: {
                    rarity: 0,
                    thumbnail: '/images/head/9840ed41f7c72290642b06f5e1e1c0d99c252a9e.png',
                    kind: 'head',
                    brand: {
                        id: '9',
                        frequent_skill: {
                            id: '200',
                            image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                            name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                        },
                        name: '\u30b7\u30b0\u30ec\u30cb',
                        image: '/images/brand/80648c6e427eae4d32677797fa1be7c0e253fda5.png',
                    },
                    name: '\u30e4\u30de\u30ae\u30ea\u30d3\u30fc\u30cb\u30fc',
                    id: '2010',
                    image: '/images/head/a6a8862a9f4437dc54f3329a153c693f3e42e1b7.png',
                },
                shoes: {
                    rarity: 2,
                    thumbnail: '/images/shoes/37b5f83c951d87a2e8c9377ca4f32a494bef9f3f.png',
                    name: '\u30ed\u30c3\u30ad\u30f3\u30af\u30e9\u30a6\u30f3',
                    kind: 'shoes',
                    brand: {
                        image: '/images/brand/451a2d0b5ceb7ea4ec4e47c3ff05eee362e9b722.png',
                        name: '\u30ed\u30c3\u30b1\u30f3\u30d9\u30eb\u30b0',
                        frequent_skill: {
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                            id: '3',
                        },
                        id: '3',
                    },
                    id: '23002',
                    image: '/images/shoes/c8733e7dd5245c6f645bfdb5a491261105bf27a6.png',
                },
                player_type: { species: 'octolings', style: 'girl' },
                head_skills: {
                    subs: [
                        {
                            id: '201',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        {
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '7',
                        },
                        {
                            id: '1',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                        },
                    ],
                    main: {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                    },
                },
                nickname: '\u00b0\u2234*\u307f\u3086\u3077\u30fc*\u2234\u00b0',
            },
            sort_score: 0,
            assist_count: 0,
            death_count: 5,
            kill_count: 7,
            special_count: 0,
            game_paint_point: 563,
        },
        {
            death_count: 4,
            player: {
                shoes: {
                    name: '\u30ed\u30c3\u30ad\u30f3\u30d6\u30e9\u30c3\u30af',
                    kind: 'shoes',
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
                    thumbnail: '/images/shoes/ad9782a30aab84c48d7ef769946a927bde30f9c2.png',
                    rarity: 2,
                    image: '/images/shoes/abd834644cc411521ab7239790b54968cebc3e78.png',
                    id: '6013',
                },
                nickname: '\u307d\u3053',
                player_type: { species: 'inklings', style: 'girl' },
                head_skills: {
                    subs: [
                        {
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                        {
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            id: '201',
                        },
                        {
                            id: '7',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/f20a3e85feeb6b4bb021d28059afd6265cee0b43.png',
                        },
                    ],
                    main: {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                    },
                },
                shoes_skills: {
                    subs: [
                        {
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                        },
                        {
                            id: '3',
                            name: '\u30d2\u30c8\u79fb\u52d5\u901f\u5ea6\u30a2\u30c3\u30d7',
                            image: '/images/skill/7de1bdfd875ef470b6066c17bed726b5b5113d48.png',
                        },
                    ],
                    main: {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                    },
                },
                player_rank: 53,
                clothes_skills: {
                    main: {
                        name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        id: '201',
                    },
                    subs: [
                        {
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            id: '201',
                        },
                        {
                            id: '201',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                        },
                        {
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                            id: '2',
                        },
                    ],
                },
                head: {
                    kind: 'head',
                    brand: {
                        frequent_skill: {
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                            image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                            id: '0',
                        },
                        name: '\u30b8\u30e2\u30f3',
                        image: '/images/brand/36bc10db0aa2640c87ad712fc0281515beedcca1.png',
                        id: '8',
                    },
                    name: '\u30dc\u30f3\u30dc\u30f3\u30cb\u30c3\u30c8',
                    rarity: 1,
                    thumbnail: '/images/head/45600b574c79c403db0661707238cf02517e832f.png',
                    image: '/images/head/c47b47d06e81b0bf65a9b1a6b17a5f41e5afd02a.png',
                    id: '2000',
                },
                clothes: {
                    thumbnail: '/images/clothes/d67b79f8f71e13004a73f901da060a5a47b83009.png',
                    rarity: 0,
                    brand: {
                        id: '10',
                        frequent_skill: {
                            image: '/images/skill/c14f4471b26e0f918c736b5c17e03212290f4541.png',
                            name: '\u30a4\u30f3\u30af\u56de\u5fa9\u529b\u30a2\u30c3\u30d7',
                            id: '2',
                        },
                        name: '\u30a2\u30ed\u30e1',
                        image: '/images/brand/02286fe17bb6bc3f5f13c6b251ddc0a55c44c756.png',
                    },
                    kind: 'clothes',
                    name: '\u30a4\u30ab\u30ce\u30e1\uff34 \u30e9\u30a4\u30c8\u30d6\u30eb\u30fc',
                    id: '1003',
                    image: '/images/clothes/cb29f781f0328232bba8d2997bf03795c552904e.png',
                },
                principal_id: '7e961c4ea61a3f5e',
                weapon: {
                    special: {
                        id: '11',
                        image_a: '/images/special/3e9cd3e60367fbe82d6237a10fdc826d695b9fa0.png',
                        name: '\u30a4\u30ab\u30b9\u30d5\u30a3\u30a2',
                        image_b: '/images/special/caf32476e5010e27a4ef9923dbe323978b1d7510.png',
                    },
                    id: '2001',
                    image: '/images/weapon/847feca4f43cf7cc56a952892d344836d706217c.png',
                    thumbnail: '/images/weapon/87383dc43ce9df6554d0731821badcb69cdbb79f.png',
                    sub: {
                        image_a: '/images/sub/457de86fa079df54c7a3c96decca49a55a1686ae.png',
                        image_b: '/images/sub/f0e4b4bad0e37031b8cb8ff397d4bb0ad9c86307.png',
                        name: '\u30ed\u30dc\u30c3\u30c8\u30dc\u30e0',
                        id: '4',
                    },
                    name: '\u30b9\u30af\u30a4\u30c3\u30af\u30ea\u30f3\u03b2',
                },
                star_rank: 1,
            },
            sort_score: 0,
            assist_count: 0,
            kill_count: 6,
            special_count: 1,
            game_paint_point: 458,
        },
        {
            game_paint_point: 845,
            special_count: 3,
            kill_count: 0,
            death_count: 4,
            player: {
                shoes_skills: {
                    subs: [
                        {
                            id: '255',
                            name: '\u306f\u3066\u306a',
                            image: '/images/skill/46f9b6fc3a2aafdc0c688dec8cadb54aa6f8ace6.png',
                        },
                        {
                            image: '/images/skill/46f9b6fc3a2aafdc0c688dec8cadb54aa6f8ace6.png',
                            name: '\u306f\u3066\u306a',
                            id: '255',
                        },
                        {
                            id: '255',
                            name: '\u306f\u3066\u306a',
                            image: '/images/skill/46f9b6fc3a2aafdc0c688dec8cadb54aa6f8ace6.png',
                        },
                    ],
                    main: {
                        image: '/images/skill/0a29f0ce326a81a5ddb3a7abab1816a25fefdc7c.png',
                        name: '\u7206\u98a8\u30c0\u30e1\u30fc\u30b8\u8efd\u6e1b\u30fb\u6539',
                        id: '200',
                    },
                },
                star_rank: 0,
                weapon: {
                    id: '32',
                    special: {
                        image_a: '/images/special/e6f33512755e462874f57d1f02b61bb1c41ad79f.png',
                        name: '\u30ca\u30a4\u30b9\u30c0\u30de',
                        image_b: '/images/special/714c00b84b54d68c5e0b6da4186d41831fb4a442.png',
                        id: '17',
                    },
                    image: '/images/weapon/682ee1a07c75652dc3dfc6e8edb153e85bcbd12c.png',
                    thumbnail: '/images/weapon/06c772d8a308136b401ef996414b76b14c28bc3c.png',
                    name: '\u30d7\u30ed\u30e2\u30c7\u30e9\u30fcPG',
                    sub: {
                        id: '2',
                        name: '\u30af\u30a4\u30c3\u30af\u30dc\u30e0',
                        image_b: '/images/sub/0c90dd7487c0c1179e0e6827b8928143cf04e336.png',
                        image_a: '/images/sub/5f978ddb4716f0d04fcc737755b0b3d212d5671c.png',
                    },
                },
                principal_id: '722adce549aa2740',
                clothes: {
                    id: '21000',
                    image: '/images/clothes/2a9c6ad510675cdb3d3b90d39ddc7ccdee069e9e.png',
                    rarity: 2,
                    thumbnail: '/images/clothes/4f1977f144a21da0a2ce3b03ee52d2a364cc815e.png',
                    name: '\u30a4\u30ab\u30c6\u30f3\u304f\u3093\u30dd\u30ed',
                    kind: 'clothes',
                    brand: {
                        id: '97',
                        name: '\u30af\u30de\u30b5\u30f3\u5546\u4f1a',
                        image: '/images/brand/ec85f17c315e0a1ea4dee55041fd30a88d6aba93.png',
                    },
                },
                head: {
                    id: '4001',
                    image: '/images/head/bef066fa7b68ec0ea340f501a4ef747ea864adc5.png',
                    thumbnail: '/images/head/de07c2cff166e990cfbdbd1e56ec337bfe60030a.png',
                    rarity: 2,
                    name: '\u30b5\u30d5\u30a1\u30ea\u30cf\u30c3\u30c8',
                    brand: {
                        image: '/images/brand/dee59c0797a6214114e527dfa51f0dd012085172.png',
                        frequent_skill: {
                            id: '1',
                            image: '/images/skill/da8ff08954fd5d890fc8bc4dd4cb761e2a33b703.png',
                            name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30b5\u30d6)',
                        },
                        name: '\u30db\u30c3\u30b3\u30ea\u30fc',
                        id: '6',
                    },
                    kind: 'head',
                },
                clothes_skills: {
                    subs: [
                        {
                            id: '5',
                            image: '/images/skill/1378f3963526d7216ec44da35b924b81a8ff6a37.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u5897\u52a0\u91cf\u30a2\u30c3\u30d7',
                        },
                        {
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u5897\u52a0\u91cf\u30a2\u30c3\u30d7',
                            image: '/images/skill/1378f3963526d7216ec44da35b924b81a8ff6a37.png',
                            id: '5',
                        },
                        {
                            id: '201',
                            name: '\u30e1\u30a4\u30f3\u6027\u80fd\u30a2\u30c3\u30d7',
                            image: '/images/skill/39f3e937b709d378c178ef2bf00d9a7295b8159d.png',
                        },
                    ],
                    main: {
                        id: '5',
                        image: '/images/skill/1378f3963526d7216ec44da35b924b81a8ff6a37.png',
                        name: '\u30b9\u30da\u30b7\u30e3\u30eb\u5897\u52a0\u91cf\u30a2\u30c3\u30d7',
                    },
                },
                player_rank: 57,
                shoes: {
                    name: '\u30e6\u30c7\u30b9\u30d1\u30a4\u30ab',
                    kind: 'shoes',
                    brand: {
                        frequent_skill: {
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u5897\u52a0\u91cf\u30a2\u30c3\u30d7',
                            image: '/images/skill/1378f3963526d7216ec44da35b924b81a8ff6a37.png',
                            id: '5',
                        },
                        name: '\u30e4\u30b3',
                        image: '/images/brand/eab05d2d502cf953b4ae034c87e52e8c999339d6.png',
                        id: '11',
                    },
                    thumbnail: '/images/shoes/8576b679e8635616c7fcaa8be365ab7090d9ef44.png',
                    rarity: 2,
                    image: '/images/shoes/26c80270bd77d2996e642bfca68c02114af5bb22.png',
                    id: '1010',
                },
                head_skills: {
                    subs: [
                        {
                            image: '/images/skill/d83b962b84fcea9d02c591c296234f5de77f9682.png',
                            name: '\u30b9\u30da\u30b7\u30e3\u30eb\u6e1b\u5c11\u91cf\u30c0\u30a6\u30f3',
                            id: '6',
                        },
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
                    ],
                    main: {
                        name: '\u30a4\u30f3\u30af\u52b9\u7387\u30a2\u30c3\u30d7(\u30e1\u30a4\u30f3)',
                        image: '/images/skill/04b1de71fba1f14197b9163503955c52fd74858b.png',
                        id: '0',
                    },
                },
                player_type: { species: 'inklings', style: 'girl' },
                nickname: '\u304a\u308c\u306e\u30bf\u30fc\u30fc\u30fc\u30f3\uff01*',
            },
            assist_count: 3,
            sort_score: 0,
        },
    ],
    other_team_result: { key: 'defeat', name: 'LOSE\u2026' },
    my_team_percentage: 66,
    type: 'regular',
    rule: {
        name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
        key: 'turf_war',
        multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
    },
};
