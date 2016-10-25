function getPrettyStatus (state) {

	var statusTitleMap = {
		'scheduled': 'Scheduled',
		'sample_loaded': 'Sample Loaded',
		'published': 'Published'
	};

	return statusTitleMap[state]
}

module.exports = {
	getPrettyStatus: getPrettyStatus
};