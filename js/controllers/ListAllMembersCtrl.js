maCodingClub.controller('ListAllMembersCtrl', function ListAllMembersCtrl($scope, membersData) {

$scope.members = membersData.getMembersData();

});
