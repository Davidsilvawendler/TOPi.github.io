const axios = require("axios");
const { getPage, getCriteria } = require("../helpers");
const { models } = require("../../sequelize");
const PagedResult = require("../values/paged");

const endpoint = process.env.GITHUB_API;

async function getAll(req, res) {
	let page = getPage(req);
	let client = await axios.get(`${endpoint}sort=stars&page=${page}`);
	console.log(`${endpoint}sort=stars&page=${page}`)
	let repos = client.data;

	if (repos) {
		let model = new PagedResult(info= {
			current: page,
			total_count: repos["total_count"]
		}, items= repos["items"])
		
		res.status(200).json(model);
	} else {
		res.status(404).send("404 - Not found");
	}
}

async function getByName(req, res) {
	let page = getPage(req);
	let name = getCriteria(req);
	let client = await axios.get(`${endpoint}language:${name}&sort=stars&page=${page}`);
	let repos = client.data;
	console.log(`${endpoint}language:${name}&sort=stars&page=${page}`);

	if (repos) {
		// save
		// await models.history.create({criteria: name});

		// generate response
		let model = new PagedResult(info= {
			current: page,
			total_count: repos["total_count"]
		}, items= repos["items"])
		
		res.status(200).json(model);
	} else {
		res.status(404).send("404 - Not found");
	}
}

module.exports = {
	getAll,
	getByName,
};
