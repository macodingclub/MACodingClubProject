maCodingClub.controller('ListAllMembers', function ListAllMembers($scope, $routeParams, membersData){
	var id = $routeParams.memberId;
	membersData.getMembersData(id)
		.$promise
		.then(getMember)
});

function getMember(data){
	var i;
	var arrMembers = [];
	for(i = 0; i < data.length; i++){
		arrMembers.push(data[i])
	}
	$scope.members = arrMembers;
}