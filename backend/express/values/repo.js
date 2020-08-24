class Repo {
	constructor(item) {
		if (item.hasOwnProperty("full_name")) this.name = item["full_name"];

		if (item.hasOwnProperty("forks")) this.forks = item["forks"];

		if (item.hasOwnProperty("owner"))
			this.profile = item["owner"]["avatar_url"];

		if (item.hasOwnProperty("stargazers_count"))
            this.stars = item["stargazers_count"];
    }

	to_json() {
		return {
			name: this.name,
			forks: this.forks,
			profile: this.profile,
			starts: this.stars,
		};
	}
}

module.exports = Repo;
