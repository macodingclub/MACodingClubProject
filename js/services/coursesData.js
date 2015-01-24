'use strict';

maCodingClub.factory('coursesData', function ($resource) {
	var Courses = $resource('/data/courses/:id', {id: '@id'});
	return {
		getCoursesData: function (id) {
			return Courses.get(
				{id: id}
			)
		}
	}
});


