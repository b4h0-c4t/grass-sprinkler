const fs = require('fs');
const execSync = require('child_process').execSync;

const sleep = async (milli_sec) =>
	await new Promise(res => {
		setTimeout(() => {
			res();
		}, milli_sec)
	});

const growGrass = (path) => {
	const old_grasses = fs.readFileSync(path, 'utf-8');
	fs.writeFileSync(path, old_grasses + 'w');
	const add_result = execSync('git add .');
	const commit_result = execSync('git commit -m "auto sprinkle"');
	const push_result = execSync('git push');
};

const main = async (milli_sec, path) => {
	while(true) {
		growGrass(path);
		await sleep(milli_sec);
	}
};

const target_grasses_path = './grasses.txt';
const waiting_time = 24 * 60 * 60 * 1000

main(waiting_time, target_grasses_path);
