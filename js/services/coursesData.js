'use strict';

maCodingClub.factory('coursesData', function($resource) {
	var Courses = $resource('/data/courses/:id', {id: '@id'});
	return {
		getOneCourseData: function(id) {
			return Courses.get(
				{id: id}
			)
		},
		getCoursesData : function (){
			return Courses.query()
		}
	}
});


