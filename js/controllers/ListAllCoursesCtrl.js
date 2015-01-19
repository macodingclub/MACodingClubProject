'use strict';

maCodingClub.controller('ListAllCourseCtrl',
	function ListAllCourses($scope, $route, $routeParams, coursesData){

		if($routeParams.id){
			coursesData.getCoursesData($routeParams.id)
				.$promise()
				.then(getCoursesData)
		}

		function getCoursesData(id){
			$scope.courses = courses;
		}
});