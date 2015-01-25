maCodingClub.controller('MembersCtrl', function MembersCtrl($scope, $routeParams, membersData, createRange){
	$scope.$routeParams = $routeParams;
	if($routeParams.id){
		membersData.getOneMemberData($routeParams.id)
			.$promise
			.then(getTheMember)
	}

	$scope.members = membersData.getMembersData();

	$scope.members.makeRangeByIndexes = createRange.makeRangeByIndexes;

	$scope.inProgress = inProgress;

	function getTheMember(data){
		$scope.member = data;
	}

	function inProgress(){
		alert('Still in progress')
	}
});
