'use strict';

maCodingClub.controller('CourseCtrl',
	function CourseCtrl($scope, $routeParams, coursesData) {
		$scope.$routeParams = $routeParams;
		if ($routeParams.id) {
			$scope.course = coursesData.getOneCourseData($routeParams.id)
				.$promise
				.then(getCourses)
		};
		function getCourses(data) {
			$scope.course = data;
		}
		$scope.courses = coursesData.getCoursesData();
	});

