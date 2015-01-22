'use strict';


maCodingClub.controller('ListAllCourseCtrl',
	function ListAllCourses($scope, $resource, $route, $routeParams, coursesData){
	var id = $routeParams.id;
	if(id) {
		coursesData.getCoursesData(id)
			.$promise
				.then(getCourses)
		};
		function getCourses(data){
			var i;
			var arrCourses = [];
			for(i = 0; i < data.courses.length; i++){
				arrCourses[i].push(data.courses[i])
			}
			$scope.courses = arrCourses;
		}
});

