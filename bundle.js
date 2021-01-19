const fs = require('fs');
const packageInfo = require('./package.json');

const exclude = ['index', 'bundle'];
const files = fs.readdirSync('src', { withFileTypes: true });

const bundled =
    files
        .filter(file => file.name.endsWith('.ts'))
        .map(file => file.name.replace(/(?:\.d)?\.ts/, ''))
        .filter(filename => !exclude.includes(filename))
        .map(filename => `export * from './${filename}';`)
        .join('\n') + '\n';

fs.writeFileSync(packageInfo.types, bundled);
