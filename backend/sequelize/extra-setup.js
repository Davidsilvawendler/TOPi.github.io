function applyExtraSetup(sequelize) {
	const { user, history } = sequelize.models;

	user.hasMany(history);
	history.belongsTo(user);
}

module.exports = { applyExtraSetup };
