import { Schedules } from '../src/schedules';

// https://app.splatoon2.nintendo.net/api/schedules
const response: Schedules = {
    gachi: [
        {
            end_time: 1606082400,
            start_time: 1606075200,
            game_mode: { key: 'gachi', name: '\u30ac\u30c1\u30de\u30c3\u30c1' },
            rule: {
                name: '\u30ac\u30c1\u30e4\u30b0\u30e9',
                multiline_name: '\u30ac\u30c1\n\u30e4\u30b0\u30e9',
                key: 'tower_control',
            },
            id: 4780952683924116892,
            stage_b: {
                id: '18',
                image: '/images/stage/8cab733d543efc9dd561bfcc9edac52594e62522.png',
                name: '\u30a2\u30b8\u30d5\u30e9\u30a4\u30b9\u30bf\u30b8\u30a2\u30e0',
            },
            stage_a: {
                name: '\u30de\u30f3\u30bf\u30de\u30ea\u30a2\u53f7',
                image: '/images/stage/070d7ee287fdf3c5df02411950c2a1ce5b238746.png',
                id: '6',
            },
        },
        {
            game_mode: { key: 'gachi', name: '\u30ac\u30c1\u30de\u30c3\u30c1' },
            start_time: 1606082400,
            end_time: 1606089600,
            id: 4780952683924116893,
            stage_b: {
                name: '\u6d77\u5973\u7f8e\u8853\u5927\u5b66',
                id: '4',
                image: '/images/stage/5c030a505ee57c889d3e5268a4b10c1f1f37880a.png',
            },
            stage_a: {
                name: '\u30a8\u30f3\u30ac\u30ef\u6cb3\u5ddd\u6577',
                image: '/images/stage/8c95053b3043e163cbfaaf1ec1e5f3eb770e5e07.png',
                id: '9',
            },
            rule: {
                name: '\u30ac\u30c1\u30a8\u30ea\u30a2',
                multiline_name: '\u30ac\u30c1\n\u30a8\u30ea\u30a2',
                key: 'splat_zones',
            },
        },
        {
            start_time: 1606089600,
            game_mode: { key: 'gachi', name: '\u30ac\u30c1\u30de\u30c3\u30c1' },
            end_time: 1606096800,
            stage_a: {
                id: '1',
                image: '/images/stage/83acec875a5bb19418d7b87d5df4ba1e38ceac66.png',
                name: '\u30d5\u30b8\u30c4\u30dc\u30b9\u30dd\u30fc\u30c4\u30af\u30e9\u30d6',
            },
            stage_b: {
                name: '\u30cf\u30b3\u30d5\u30b0\u5009\u5eab',
                id: '14',
                image: '/images/stage/65c99da154295109d6fe067005f194f681762f8c.png',
            },
            id: 4780952683924116894,
            rule: {
                multiline_name: '\u30ac\u30c1\n\u30e4\u30b0\u30e9',
                key: 'tower_control',
                name: '\u30ac\u30c1\u30e4\u30b0\u30e9',
            },
        },
        {
            rule: {
                key: 'rainmaker',
                multiline_name: '\u30ac\u30c1\u30db\u30b3\n\u30d0\u30c8\u30eb',
                name: '\u30ac\u30c1\u30db\u30b3\u30d0\u30c8\u30eb',
            },
            stage_b: {
                id: '8',
                image: '/images/stage/96fd8c0492331a30e60a217c94fd1d4c73a966cc.png',
                name: '\u30bf\u30c1\u30a6\u30aa\u30d1\u30fc\u30ad\u30f3\u30b0',
            },
            stage_a: {
                name: '\u30d0\u30c3\u30c6\u30e9\u30b9\u30c8\u30ea\u30fc\u30c8',
                id: '0',
                image: '/images/stage/98baf21c0366ce6e03299e2326fe6d27a7582dce.png',
            },
            id: 4780952683924116895,
            end_time: 1606104000,
            game_mode: { key: 'gachi', name: '\u30ac\u30c1\u30de\u30c3\u30c1' },
            start_time: 1606096800,
        },
        {
            game_mode: { name: '\u30ac\u30c1\u30de\u30c3\u30c1', key: 'gachi' },
            start_time: 1606104000,
            end_time: 1606111200,
            id: 4780952683924116897,
            stage_b: {
                name: '\u30b7\u30e7\u30c3\u30c4\u30eb\u9271\u5c71',
                image: '/images/stage/828e49a8414a4bbc0a5da3e61454ab148a9f4063.png',
                id: '17',
            },
            stage_a: {
                name: '\u30b6\u30c8\u30a6\u30de\u30fc\u30b1\u30c3\u30c8',
                id: '13',
                image: '/images/stage/d9f0f6c330aaa3b975e572637b00c4c0b6b89f7d.png',
            },
            rule: {
                multiline_name: '\u30ac\u30c1\n\u30a2\u30b5\u30ea',
                key: 'clam_blitz',
                name: '\u30ac\u30c1\u30a2\u30b5\u30ea',
            },
        },
        {
            stage_b: {
                name: '\uff22\u30d0\u30b9\u30d1\u30fc\u30af',
                image: '/images/stage/758338859615898a59e93b84f7e1ca670f75e865.png',
                id: '11',
            },
            id: 4780952683924116898,
            stage_a: {
                name: '\u30a2\u30ed\u30ef\u30ca\u30e2\u30fc\u30eb',
                image: '/images/stage/dcf332bdcc80f566f3ae59c1c3a29bc6312d0ba8.png',
                id: '15',
            },
            rule: {
                name: '\u30ac\u30c1\u30a8\u30ea\u30a2',
                multiline_name: '\u30ac\u30c1\n\u30a8\u30ea\u30a2',
                key: 'splat_zones',
            },
            game_mode: { key: 'gachi', name: '\u30ac\u30c1\u30de\u30c3\u30c1' },
            start_time: 1606111200,
            end_time: 1606118400,
        },
        {
            stage_a: {
                image: '/images/stage/132327c819abf2bd44d0adc0f4a21aad9cc84bb2.png',
                id: '22',
                name: '\u30e0\u30c4\u30b4\u697c',
            },
            stage_b: {
                id: '9',
                image: '/images/stage/8c95053b3043e163cbfaaf1ec1e5f3eb770e5e07.png',
                name: '\u30a8\u30f3\u30ac\u30ef\u6cb3\u5ddd\u6577',
            },
            id: 4780952683924116899,
            rule: {
                name: '\u30ac\u30c1\u30e4\u30b0\u30e9',
                multiline_name: '\u30ac\u30c1\n\u30e4\u30b0\u30e9',
                key: 'tower_control',
            },
            game_mode: { key: 'gachi', name: '\u30ac\u30c1\u30de\u30c3\u30c1' },
            start_time: 1606118400,
            end_time: 1606125600,
        },
        {
            stage_a: {
                id: '21',
                image: '/images/stage/1430e5ac7ae9396a126078eeab824a186b490b5a.png',
                name: '\u30a2\u30f3\u30c1\u30e7\u30d3\u30c3\u30c8\u30b2\u30fc\u30e0\u30ba',
            },
            stage_b: {
                name: '\u30ac\u30f3\u30ac\u30bc\u91ce\u5916\u97f3\u697d\u5802',
                id: '2',
                image: '/images/stage/187987856bf575c4155d021cb511034931d06d24.png',
            },
            id: 4780952683924116900,
            rule: {
                name: '\u30ac\u30c1\u30a2\u30b5\u30ea',
                key: 'clam_blitz',
                multiline_name: '\u30ac\u30c1\n\u30a2\u30b5\u30ea',
            },
            start_time: 1606125600,
            game_mode: { key: 'gachi', name: '\u30ac\u30c1\u30de\u30c3\u30c1' },
            end_time: 1606132800,
        },
        {
            end_time: 1606140000,
            game_mode: { name: '\u30ac\u30c1\u30de\u30c3\u30c1', key: 'gachi' },
            start_time: 1606132800,
            rule: {
                key: 'rainmaker',
                multiline_name: '\u30ac\u30c1\u30db\u30b3\n\u30d0\u30c8\u30eb',
                name: '\u30ac\u30c1\u30db\u30b3\u30d0\u30c8\u30eb',
            },
            stage_b: {
                image: '/images/stage/fc23fedca2dfbbd8707a14606d719a4004403d13.png',
                id: '5',
                name: '\u30b3\u30f3\u30d6\u30c8\u30e9\u30c3\u30af',
            },
            stage_a: {
                name: '\u30db\u30c3\u30b1\u3075\u982d',
                id: '7',
                image: '/images/stage/0907fc7dc325836a94d385919fe01dc13848612a.png',
            },
            id: 4780952683924116901,
        },
        {
            end_time: 1606147200,
            start_time: 1606140000,
            game_mode: { name: '\u30ac\u30c1\u30de\u30c3\u30c1', key: 'gachi' },
            rule: {
                name: '\u30ac\u30c1\u30e4\u30b0\u30e9',
                multiline_name: '\u30ac\u30c1\n\u30e4\u30b0\u30e9',
                key: 'tower_control',
            },
            id: 4780952683924116903,
            stage_b: {
                image: '/images/stage/5c030a505ee57c889d3e5268a4b10c1f1f37880a.png',
                id: '4',
                name: '\u6d77\u5973\u7f8e\u8853\u5927\u5b66',
            },
            stage_a: {
                image: '/images/stage/98a7d7a4009fae9fb7479554535425a5a604e88e.png',
                id: '19',
                name: '\u30db\u30c6\u30eb\u30cb\u30e5\u30fc\u30aa\u30fc\u30c8\u30ed',
            },
        },
        {
            end_time: 1606154400,
            start_time: 1606147200,
            game_mode: { name: '\u30ac\u30c1\u30de\u30c3\u30c1', key: 'gachi' },
            rule: {
                name: '\u30ac\u30c1\u30a8\u30ea\u30a2',
                key: 'splat_zones',
                multiline_name: '\u30ac\u30c1\n\u30a8\u30ea\u30a2',
            },
            stage_b: {
                name: '\u30c1\u30e7\u30a6\u30b6\u30e1\u9020\u8239',
                image: '/images/stage/bc794e337900afd763f8a88359f83df5679ddf12.png',
                id: '3',
            },
            id: 4780952683924116904,
            stage_a: {
                name: '\u30b9\u30e1\u30fc\u30b7\u30fc\u30ef\u30fc\u30eb\u30c9',
                id: '20',
                image: '/images/stage/555c356487ac3edb0088c416e8045576c6b37fcc.png',
            },
        },
        {
            game_mode: { key: 'gachi', name: '\u30ac\u30c1\u30de\u30c3\u30c1' },
            start_time: 1606154400,
            end_time: 1606161600,
            id: 4780952683924116905,
            stage_b: {
                image: '/images/stage/83acec875a5bb19418d7b87d5df4ba1e38ceac66.png',
                id: '1',
                name: '\u30d5\u30b8\u30c4\u30dc\u30b9\u30dd\u30fc\u30c4\u30af\u30e9\u30d6',
            },
            stage_a: {
                name: '\u30de\u30f3\u30bf\u30de\u30ea\u30a2\u53f7',
                id: '6',
                image: '/images/stage/070d7ee287fdf3c5df02411950c2a1ce5b238746.png',
            },
            rule: {
                multiline_name: '\u30ac\u30c1\n\u30e4\u30b0\u30e9',
                key: 'tower_control',
                name: '\u30ac\u30c1\u30e4\u30b0\u30e9',
            },
        },
    ],
    regular: [
        {
            stage_b: {
                id: '17',
                image: '/images/stage/828e49a8414a4bbc0a5da3e61454ab148a9f4063.png',
                name: '\u30b7\u30e7\u30c3\u30c4\u30eb\u9271\u5c71',
            },
            id: 4780952683924116892,
            stage_a: {
                name: '\u30b3\u30f3\u30d6\u30c8\u30e9\u30c3\u30af',
                image: '/images/stage/fc23fedca2dfbbd8707a14606d719a4004403d13.png',
                id: '5',
            },
            rule: {
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
                key: 'turf_war',
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
            },
            start_time: 1606075200,
            game_mode: { name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1', key: 'regular' },
            end_time: 1606082400,
        },
        {
            end_time: 1606089600,
            game_mode: { key: 'regular', name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1' },
            start_time: 1606082400,
            rule: {
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
                key: 'turf_war',
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
            },
            stage_b: {
                image: '/images/stage/98baf21c0366ce6e03299e2326fe6d27a7582dce.png',
                id: '0',
                name: '\u30d0\u30c3\u30c6\u30e9\u30b9\u30c8\u30ea\u30fc\u30c8',
            },
            id: 4780952683924116893,
            stage_a: {
                image: '/images/stage/e4c4800be9fff23112334b193abb0fdf36e05933.png',
                id: '16',
                name: '\u30e2\u30f3\u30ac\u30e9\u30ad\u30e3\u30f3\u30d7\u5834',
            },
        },
        {
            end_time: 1606096800,
            game_mode: { key: 'regular', name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1' },
            start_time: 1606089600,
            rule: {
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
                key: 'turf_war',
            },
            stage_b: {
                id: '22',
                image: '/images/stage/132327c819abf2bd44d0adc0f4a21aad9cc84bb2.png',
                name: '\u30e0\u30c4\u30b4\u697c',
            },
            stage_a: {
                id: '3',
                image: '/images/stage/bc794e337900afd763f8a88359f83df5679ddf12.png',
                name: '\u30c1\u30e7\u30a6\u30b6\u30e1\u9020\u8239',
            },
            id: 4780952683924116894,
        },
        {
            rule: {
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
                key: 'turf_war',
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
            },
            stage_a: {
                name: '\u6d77\u5973\u7f8e\u8853\u5927\u5b66',
                image: '/images/stage/5c030a505ee57c889d3e5268a4b10c1f1f37880a.png',
                id: '4',
            },
            stage_b: {
                name: '\u30b6\u30c8\u30a6\u30de\u30fc\u30b1\u30c3\u30c8',
                image: '/images/stage/d9f0f6c330aaa3b975e572637b00c4c0b6b89f7d.png',
                id: '13',
            },
            id: 4780952683924116895,
            end_time: 1606104000,
            start_time: 1606096800,
            game_mode: { name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1', key: 'regular' },
        },
        {
            stage_b: {
                name: '\u30a2\u30f3\u30c1\u30e7\u30d3\u30c3\u30c8\u30b2\u30fc\u30e0\u30ba',
                image: '/images/stage/1430e5ac7ae9396a126078eeab824a186b490b5a.png',
                id: '21',
            },
            stage_a: {
                name: '\u30cf\u30b3\u30d5\u30b0\u5009\u5eab',
                id: '14',
                image: '/images/stage/65c99da154295109d6fe067005f194f681762f8c.png',
            },
            id: 4780952683924116897,
            rule: {
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
                key: 'turf_war',
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
            },
            game_mode: { name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1', key: 'regular' },
            start_time: 1606104000,
            end_time: 1606111200,
        },
        {
            rule: {
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
                key: 'turf_war',
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
            },
            stage_b: {
                image: '/images/stage/187987856bf575c4155d021cb511034931d06d24.png',
                id: '2',
                name: '\u30ac\u30f3\u30ac\u30bc\u91ce\u5916\u97f3\u697d\u5802',
            },
            id: 4780952683924116898,
            stage_a: {
                name: '\u30de\u30f3\u30bf\u30de\u30ea\u30a2\u53f7',
                image: '/images/stage/070d7ee287fdf3c5df02411950c2a1ce5b238746.png',
                id: '6',
            },
            end_time: 1606118400,
            start_time: 1606111200,
            game_mode: { key: 'regular', name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1' },
        },
        {
            end_time: 1606125600,
            start_time: 1606118400,
            game_mode: { key: 'regular', name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1' },
            rule: {
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
                key: 'turf_war',
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
            },
            stage_b: {
                image: '/images/stage/758338859615898a59e93b84f7e1ca670f75e865.png',
                id: '11',
                name: '\uff22\u30d0\u30b9\u30d1\u30fc\u30af',
            },
            stage_a: {
                name: '\u30bf\u30c1\u30a6\u30aa\u30d1\u30fc\u30ad\u30f3\u30b0',
                id: '8',
                image: '/images/stage/96fd8c0492331a30e60a217c94fd1d4c73a966cc.png',
            },
            id: 4780952683924116899,
        },
        {
            end_time: 1606132800,
            start_time: 1606125600,
            game_mode: { name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1', key: 'regular' },
            rule: {
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
                key: 'turf_war',
            },
            stage_a: {
                image: '/images/stage/8cab733d543efc9dd561bfcc9edac52594e62522.png',
                id: '18',
                name: '\u30a2\u30b8\u30d5\u30e9\u30a4\u30b9\u30bf\u30b8\u30a2\u30e0',
            },
            stage_b: {
                name: '\u30e2\u30ba\u30af\u8fb2\u5712',
                image: '/images/stage/a12e4bf9f871677a5f3735d421317fbbf09e1a78.png',
                id: '10',
            },
            id: 4780952683924116900,
        },
        {
            end_time: 1606140000,
            game_mode: { name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1', key: 'regular' },
            start_time: 1606132800,
            rule: {
                key: 'turf_war',
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
            },
            stage_b: {
                name: '\u30a2\u30ed\u30ef\u30ca\u30e2\u30fc\u30eb',
                image: '/images/stage/dcf332bdcc80f566f3ae59c1c3a29bc6312d0ba8.png',
                id: '15',
            },
            stage_a: {
                name: '\u30a8\u30f3\u30ac\u30ef\u6cb3\u5ddd\u6577',
                id: '9',
                image: '/images/stage/8c95053b3043e163cbfaaf1ec1e5f3eb770e5e07.png',
            },
            id: 4780952683924116901,
        },
        {
            rule: {
                key: 'turf_war',
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
            },
            stage_b: {
                name: '\u30b3\u30f3\u30d6\u30c8\u30e9\u30c3\u30af',
                image: '/images/stage/fc23fedca2dfbbd8707a14606d719a4004403d13.png',
                id: '5',
            },
            id: 4780952683924116903,
            stage_a: {
                image: '/images/stage/23259c80272f45cea2d5c9e60bc0cedb6ce29e46.png',
                id: '12',
                name: '\u30c7\u30dc\u30f3\u6d77\u6d0b\u535a\u7269\u9928',
            },
            end_time: 1606147200,
            start_time: 1606140000,
            game_mode: { name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1', key: 'regular' },
        },
        {
            start_time: 1606147200,
            game_mode: { name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1', key: 'regular' },
            end_time: 1606154400,
            stage_b: {
                image: '/images/stage/828e49a8414a4bbc0a5da3e61454ab148a9f4063.png',
                id: '17',
                name: '\u30b7\u30e7\u30c3\u30c4\u30eb\u9271\u5c71',
            },
            stage_a: {
                image: '/images/stage/83acec875a5bb19418d7b87d5df4ba1e38ceac66.png',
                id: '1',
                name: '\u30d5\u30b8\u30c4\u30dc\u30b9\u30dd\u30fc\u30c4\u30af\u30e9\u30d6',
            },
            id: 4780952683924116904,
            rule: {
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
                key: 'turf_war',
            },
        },
        {
            game_mode: { key: 'regular', name: '\u30ec\u30ae\u30e5\u30e9\u30fc\u30de\u30c3\u30c1' },
            start_time: 1606154400,
            end_time: 1606161600,
            stage_a: {
                id: '7',
                image: '/images/stage/0907fc7dc325836a94d385919fe01dc13848612a.png',
                name: '\u30db\u30c3\u30b1\u3075\u982d',
            },
            stage_b: {
                name: '\u30d0\u30c3\u30c6\u30e9\u30b9\u30c8\u30ea\u30fc\u30c8',
                image: '/images/stage/98baf21c0366ce6e03299e2326fe6d27a7582dce.png',
                id: '0',
            },
            id: 4780952683924116905,
            rule: {
                key: 'turf_war',
                multiline_name: '\u30ca\u30ef\u30d0\u30ea\n\u30d0\u30c8\u30eb',
                name: '\u30ca\u30ef\u30d0\u30ea\u30d0\u30c8\u30eb',
            },
        },
    ],
    league: [
        {
            id: 4780952683924116892,
            stage_b: {
                id: '9',
                image: '/images/stage/8c95053b3043e163cbfaaf1ec1e5f3eb770e5e07.png',
                name: '\u30a8\u30f3\u30ac\u30ef\u6cb3\u5ddd\u6577',
            },
            stage_a: {
                image: '/images/stage/83acec875a5bb19418d7b87d5df4ba1e38ceac66.png',
                id: '1',
                name: '\u30d5\u30b8\u30c4\u30dc\u30b9\u30dd\u30fc\u30c4\u30af\u30e9\u30d6',
            },
            rule: {
                name: '\u30ac\u30c1\u30a2\u30b5\u30ea',
                key: 'clam_blitz',
                multiline_name: '\u30ac\u30c1\n\u30a2\u30b5\u30ea',
            },
            start_time: 1606075200,
            game_mode: { key: 'league', name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1' },
            end_time: 1606082400,
        },
        {
            game_mode: { name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1', key: 'league' },
            start_time: 1606082400,
            end_time: 1606089600,
            id: 4780952683924116893,
            stage_b: {
                id: '18',
                image: '/images/stage/8cab733d543efc9dd561bfcc9edac52594e62522.png',
                name: '\u30a2\u30b8\u30d5\u30e9\u30a4\u30b9\u30bf\u30b8\u30a2\u30e0',
            },
            stage_a: {
                image: '/images/stage/dcf332bdcc80f566f3ae59c1c3a29bc6312d0ba8.png',
                id: '15',
                name: '\u30a2\u30ed\u30ef\u30ca\u30e2\u30fc\u30eb',
            },
            rule: {
                name: '\u30ac\u30c1\u30db\u30b3\u30d0\u30c8\u30eb',
                key: 'rainmaker',
                multiline_name: '\u30ac\u30c1\u30db\u30b3\n\u30d0\u30c8\u30eb',
            },
        },
        {
            end_time: 1606096800,
            game_mode: { name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1', key: 'league' },
            start_time: 1606089600,
            rule: {
                key: 'splat_zones',
                multiline_name: '\u30ac\u30c1\n\u30a8\u30ea\u30a2',
                name: '\u30ac\u30c1\u30a8\u30ea\u30a2',
            },
            stage_b: {
                name: '\u6d77\u5973\u7f8e\u8853\u5927\u5b66',
                id: '4',
                image: '/images/stage/5c030a505ee57c889d3e5268a4b10c1f1f37880a.png',
            },
            stage_a: {
                name: '\u30de\u30f3\u30bf\u30de\u30ea\u30a2\u53f7',
                id: '6',
                image: '/images/stage/070d7ee287fdf3c5df02411950c2a1ce5b238746.png',
            },
            id: 4780952683924116894,
        },
        {
            stage_b: {
                name: '\u30c1\u30e7\u30a6\u30b6\u30e1\u9020\u8239',
                image: '/images/stage/bc794e337900afd763f8a88359f83df5679ddf12.png',
                id: '3',
            },
            id: 4780952683924116895,
            stage_a: {
                image: '/images/stage/132327c819abf2bd44d0adc0f4a21aad9cc84bb2.png',
                id: '22',
                name: '\u30e0\u30c4\u30b4\u697c',
            },
            rule: {
                name: '\u30ac\u30c1\u30a2\u30b5\u30ea',
                key: 'clam_blitz',
                multiline_name: '\u30ac\u30c1\n\u30a2\u30b5\u30ea',
            },
            start_time: 1606096800,
            game_mode: { key: 'league', name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1' },
            end_time: 1606104000,
        },
        {
            end_time: 1606111200,
            start_time: 1606104000,
            game_mode: { key: 'league', name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1' },
            rule: {
                name: '\u30ac\u30c1\u30e4\u30b0\u30e9',
                key: 'tower_control',
                multiline_name: '\u30ac\u30c1\n\u30e4\u30b0\u30e9',
            },
            stage_b: {
                name: '\u30b3\u30f3\u30d6\u30c8\u30e9\u30c3\u30af',
                id: '5',
                image: '/images/stage/fc23fedca2dfbbd8707a14606d719a4004403d13.png',
            },
            id: 4780952683924116897,
            stage_a: {
                name: '\u30d0\u30c3\u30c6\u30e9\u30b9\u30c8\u30ea\u30fc\u30c8',
                image: '/images/stage/98baf21c0366ce6e03299e2326fe6d27a7582dce.png',
                id: '0',
            },
        },
        {
            stage_b: {
                name: '\u30c7\u30dc\u30f3\u6d77\u6d0b\u535a\u7269\u9928',
                id: '12',
                image: '/images/stage/23259c80272f45cea2d5c9e60bc0cedb6ce29e46.png',
            },
            id: 4780952683924116898,
            stage_a: {
                name: '\u30cf\u30b3\u30d5\u30b0\u5009\u5eab',
                id: '14',
                image: '/images/stage/65c99da154295109d6fe067005f194f681762f8c.png',
            },
            rule: {
                name: '\u30ac\u30c1\u30db\u30b3\u30d0\u30c8\u30eb',
                key: 'rainmaker',
                multiline_name: '\u30ac\u30c1\u30db\u30b3\n\u30d0\u30c8\u30eb',
            },
            start_time: 1606111200,
            game_mode: { key: 'league', name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1' },
            end_time: 1606118400,
        },
        {
            end_time: 1606125600,
            start_time: 1606118400,
            game_mode: { name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1', key: 'league' },
            rule: {
                name: '\u30ac\u30c1\u30a2\u30b5\u30ea',
                key: 'clam_blitz',
                multiline_name: '\u30ac\u30c1\n\u30a2\u30b5\u30ea',
            },
            stage_b: {
                id: '17',
                image: '/images/stage/828e49a8414a4bbc0a5da3e61454ab148a9f4063.png',
                name: '\u30b7\u30e7\u30c3\u30c4\u30eb\u9271\u5c71',
            },
            stage_a: {
                name: '\u30e2\u30f3\u30ac\u30e9\u30ad\u30e3\u30f3\u30d7\u5834',
                image: '/images/stage/e4c4800be9fff23112334b193abb0fdf36e05933.png',
                id: '16',
            },
            id: 4780952683924116899,
        },
        {
            game_mode: { name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1', key: 'league' },
            start_time: 1606125600,
            end_time: 1606132800,
            stage_b: {
                image: '/images/stage/83acec875a5bb19418d7b87d5df4ba1e38ceac66.png',
                id: '1',
                name: '\u30d5\u30b8\u30c4\u30dc\u30b9\u30dd\u30fc\u30c4\u30af\u30e9\u30d6',
            },
            stage_a: {
                name: '\u30b9\u30e1\u30fc\u30b7\u30fc\u30ef\u30fc\u30eb\u30c9',
                image: '/images/stage/555c356487ac3edb0088c416e8045576c6b37fcc.png',
                id: '20',
            },
            id: 4780952683924116900,
            rule: {
                key: 'splat_zones',
                multiline_name: '\u30ac\u30c1\n\u30a8\u30ea\u30a2',
                name: '\u30ac\u30c1\u30a8\u30ea\u30a2',
            },
        },
        {
            stage_b: {
                name: '\u30e2\u30ba\u30af\u8fb2\u5712',
                id: '10',
                image: '/images/stage/a12e4bf9f871677a5f3735d421317fbbf09e1a78.png',
            },
            id: 4780952683924116901,
            stage_a: {
                name: '\u30a2\u30f3\u30c1\u30e7\u30d3\u30c3\u30c8\u30b2\u30fc\u30e0\u30ba',
                id: '21',
                image: '/images/stage/1430e5ac7ae9396a126078eeab824a186b490b5a.png',
            },
            rule: {
                multiline_name: '\u30ac\u30c1\n\u30e4\u30b0\u30e9',
                key: 'tower_control',
                name: '\u30ac\u30c1\u30e4\u30b0\u30e9',
            },
            game_mode: { name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1', key: 'league' },
            start_time: 1606132800,
            end_time: 1606140000,
        },
        {
            stage_b: {
                name: '\uff22\u30d0\u30b9\u30d1\u30fc\u30af',
                image: '/images/stage/758338859615898a59e93b84f7e1ca670f75e865.png',
                id: '11',
            },
            id: 4780952683924116903,
            stage_a: {
                id: '7',
                image: '/images/stage/0907fc7dc325836a94d385919fe01dc13848612a.png',
                name: '\u30db\u30c3\u30b1\u3075\u982d',
            },
            rule: {
                multiline_name: '\u30ac\u30c1\u30db\u30b3\n\u30d0\u30c8\u30eb',
                key: 'rainmaker',
                name: '\u30ac\u30c1\u30db\u30b3\u30d0\u30c8\u30eb',
            },
            start_time: 1606140000,
            game_mode: { name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1', key: 'league' },
            end_time: 1606147200,
        },
        {
            game_mode: { key: 'league', name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1' },
            start_time: 1606147200,
            end_time: 1606154400,
            stage_b: {
                name: '\u30bf\u30c1\u30a6\u30aa\u30d1\u30fc\u30ad\u30f3\u30b0',
                image: '/images/stage/96fd8c0492331a30e60a217c94fd1d4c73a966cc.png',
                id: '8',
            },
            stage_a: {
                image: '/images/stage/8cab733d543efc9dd561bfcc9edac52594e62522.png',
                id: '18',
                name: '\u30a2\u30b8\u30d5\u30e9\u30a4\u30b9\u30bf\u30b8\u30a2\u30e0',
            },
            id: 4780952683924116904,
            rule: {
                multiline_name: '\u30ac\u30c1\n\u30a2\u30b5\u30ea',
                key: 'clam_blitz',
                name: '\u30ac\u30c1\u30a2\u30b5\u30ea',
            },
        },
        {
            start_time: 1606154400,
            game_mode: { name: '\u30ea\u30fc\u30b0\u30de\u30c3\u30c1', key: 'league' },
            end_time: 1606161600,
            stage_b: {
                name: '\u30a8\u30f3\u30ac\u30ef\u6cb3\u5ddd\u6577',
                id: '9',
                image: '/images/stage/8c95053b3043e163cbfaaf1ec1e5f3eb770e5e07.png',
            },
            stage_a: {
                name: '\u30ac\u30f3\u30ac\u30bc\u91ce\u5916\u97f3\u697d\u5802',
                image: '/images/stage/187987856bf575c4155d021cb511034931d06d24.png',
                id: '2',
            },
            id: 4780952683924116905,
            rule: {
                name: '\u30ac\u30c1\u30a8\u30ea\u30a2',
                key: 'splat_zones',
                multiline_name: '\u30ac\u30c1\n\u30a8\u30ea\u30a2',
            },
        },
    ],
};
