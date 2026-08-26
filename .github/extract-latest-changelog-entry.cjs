const { readFileSync } = process.getBuiltinModule('node:fs');
const { join } = process.getBuiltinModule('node:path');

const extractLatestChangelogEntry = () => {
	const contents = readFileSync(join(__dirname, '..', 'CHANGELOG.md'), { encoding: 'utf8' });
	return contents.match(/## .*?\n(.*?)## [\d[]/s)[1].trim();
};

module.exports = extractLatestChangelogEntry;
