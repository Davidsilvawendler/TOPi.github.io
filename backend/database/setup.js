const sequelize = require('../sequelize');
const { pickRandom, randomDate } = require('./helpers/random');

async function reset() {
	console.log('generate database.');

	await sequelize.sync({ force: true });
	await sequelize.models.user.bulkCreate([
		{ username: 'bob' },
		{ username: 'ana' },
		{ username: 'mark' }	
	]);

	console.log('Done!');
}

reset();
