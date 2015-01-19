'use strict';

maCodingClub.factory('coursesData', function ($http, $resource) {
	var resource = $resource('/data/courses/:id', {id: '@id'});
	return {
		getCoursesData: function (id) {
			return resource.get(
				{id: id}
			)
		},

		getAllMembers: function () {
			return resource.query();
		}
	}
});
