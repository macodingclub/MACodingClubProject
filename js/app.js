'use strict';


// Declare app level module which depends on filters, and services
var maCodingClub = angular
	.module('maCodingClub', ['ngRoute', 'ngResource'])
	.config(['$routeProvider',
		function ($routeProvider) {

			$routeProvider
				.when('/', {
					templateUrl: '/templates/main.html',
					controller: 'MainCtrl'
				})

				.when('/courses/:id', {
					templateUrl: '/templates/list-all-courses.html',
					controller: 'ListAllCourseCtrl'
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


