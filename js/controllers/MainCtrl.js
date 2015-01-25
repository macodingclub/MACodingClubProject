'use strict';

 maCodingClub.controller('MainCtrl', function MainCtrl($scope, coursesData, createRange){

	 $scope.courses = coursesData.getCoursesData();

	 $scope.courses.makeRangeByIndexes = createRange.makeRangeByIndexes;

 });
