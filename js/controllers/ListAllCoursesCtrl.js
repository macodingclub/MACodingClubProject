'use strict';

maCodingClub.controller('ListAllCourseCtrl',
	function ListAllCourseCtrl($scope, $routeParams, coursesData) {
		$scope.$routeParams = $routeParams;
		if ($routeParams.id) {
			coursesData.getCoursesData($routeParams.id)
				.$promise
				.then(getCourses)
		};

		function getCourses(data) {

			$scope.courses = data;
		}
	});

