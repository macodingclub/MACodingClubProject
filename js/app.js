'use strict';


// Declare app level module which depends on filters, and services
var maCodingClub = angular
	.module('maCodingClub',['ngRoute', 'ngResource'])
	.config(['$routeProvider',
			function($routeProvider){

				//TODO: course.html -list the concrete course and main.html - list all courses and members

				$routeProvider
					.when('/ListAllCourses/:id',{
						templateUrl:'/templates/list-all-courses.html',
						controller:'ListAllCoursesCtrl'
					})
					.when('/Courses/:id', {
						templateUrl: '/templates/course.html',
						controller:'CourseCtrl'
					})
					.when('/ListAllMembers',{
						templateUrl:'/templates/list-all-members.html',
						controller:'ListAllMembersCtrl'
					})
					.otherwise('/:id', {
						templateUrl:'/templates/main.html',
						controller:'MainCtrl'
					})
			}]);


