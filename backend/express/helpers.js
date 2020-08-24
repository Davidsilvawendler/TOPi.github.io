// A helper function to assert the request ID param is valid
// and convert it to a number (since it comes as a string by default)
function getId(req) {
	const id = req.params.id;
	if (/^\d+$/.test(id)) {
		return Number.parseInt(id, 10);
	}
	throw new TypeError(`Invalid ':id' param: "${id}"`);
}

function getCriteria(req) {
	const name = req.params.name;
	if (/^\w+$/.test(name)) {
		return name;
	}
	throw new TypeError(`Invalid ':name' param: "${name}"`);
}

function getPage(req) {
	const page = req.params.page || req.query.page;
	if(!page){
		return 1;
	}

	if (/^\d+$/.test(page)) {
		return page;
	}

	throw new TypeError(`Invalid ':page' param: "${page}"`);
}


module.exports = {
	getId,
	getCriteria,
	getPage
};
