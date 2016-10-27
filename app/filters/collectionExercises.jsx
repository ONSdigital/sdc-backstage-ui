function getPrettyStatus (state) {

	var statusTitleMap = {
		'scheduled': 'Scheduled',
		'sample_loaded': 'Sample Loaded',
		'published': 'Published',
		'live': 'Live',
		'closed': 'Closed'
	};

	return statusTitleMap[state]
}

module.exports = {
	getPrettyStatus: getPrettyStatus
};