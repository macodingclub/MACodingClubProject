'use strict';

 maCodingClub.controller('MainCtrl', function MainCtrl($scope, $routeParams, coursesData ){

var id = $routeParams.id;
	coursesData.getCoursesData(id)
		.$promise
		.then(getCourse);

	function getCourse(data){
		$scope.data = data
	}
	 $scope.testCode = 'The Main Ctrl is working'
 });