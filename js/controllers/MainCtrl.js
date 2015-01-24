'use strict';

 maCodingClub.controller('MainCtrl', function MainCtrl($scope, $routeParams, coursesData){

	coursesData.getCoursesData(1)
		.$promise
		.then(getCourse);

	function getCourse(data){
		$scope.courses = data.courses

	}
 });