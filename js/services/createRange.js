maCodingClub.factory('createRange', function () {
	return {
		makeRangeByIndexes: function (arr, range) {
			var i = 0;
			var arrWithIndexes = [];
			for (i = 0; i < arr.length; i = i + range) {
				arrWithIndexes.push(i)
			}
			return arrWithIndexes;
		}
	}
});
