'use strict';


// Declare app level module which depends on filters, and services
var maCodingClub = angular
	.module('maCodingClub', ['ngRoute', 'ngResource', 'ui.bootstrap'])
	.config(['$routeProvider',
		function ($routeProvider) {

			$routeProvider

				.when('/', {
					templateUrl: '/templates/main.html',
					controller: 'MainCtrl'
				})
				//TODO: list-sll-course - template, ListAllCourseCtrl
				.when('/courses/', {
					templateUrl: '/templates/list-all-course.html',
					controller: 'ListAllCourseCtrl'
				})

				.when('/course/:id', {
					templateUrl: '/templates/course.html',
					controller: 'CourseCtrl'
				})

				.when('/members', {
					templateUrl: '/templates/list-all-members.html',
					controller: 'ListAllMembersCtrl'
				})

				.when('/member/:id', {
					templateUrl: '/templates/member.html',
					controller: 'MemberCtrl'
				})

				.otherwise('/', {
					redirectTo: '/templates/main.html',
					controller: 'MainCtrl'
				})
		}
	]
);


