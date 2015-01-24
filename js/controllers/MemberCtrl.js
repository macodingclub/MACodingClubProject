maCodingClub.controller('MemberCtrl', function MemberCtrl($scope, $routeParams, membersData){
	$scope.$routeParams = $routeParams;
	if($routeParams.id){
		membersData.getOneMemberData($routeParams.id)
			.$promise
			.then(getTheMember)
	}
	function getTheMember(data){
		$scope.member = data;
	}
});
