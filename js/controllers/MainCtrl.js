'use strict';

 maCodingClub.controller('MainCtrl', function MainCtrl($scope, coursesData){

	 $scope.courses = coursesData.getCoursesData();

	 $scope.courses.makeRangeByIndexes = makeRangeByIndexes;

	 function makeRangeByIndexes(arr, range){
	 		 var i = 0;
	 		 var arrWithIndexes = [];
	 		 for(i = 0; i < arr.length; i = i + range){
	 			 arrWithIndexes.push(i)
	 		 }
		 return arrWithIndexes;
	 	 };
 });
