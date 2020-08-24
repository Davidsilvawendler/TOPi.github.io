const Repo = require("./repo");

class PagedResult {
	constructor(info, items) {
		if (info.hasOwnProperty("total_count"))
			this.total_count = info["total_count"];

		if (info.hasOwnProperty("current")) this.current = info["current"];

		if (items) {
			this.items = items.map((x) => { 
                let el = new Repo(x)
                return el.to_json();
            });
			this.pages = parseInt(this.total_count / this.items.length);
		}
	}
}

module.exports = PagedResult;
