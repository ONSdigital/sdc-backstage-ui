function getPrettyStatus (state) {

	var statusTitleMap = {
		'scheduled': 'Scheduled',
		'sample_loaded': 'Sample Loaded',
		'published': 'Published',
		'live': 'Live'
	};

	return statusTitleMap[state]
}

module.exports = {
	getPrettyStatus: getPrettyStatus
};