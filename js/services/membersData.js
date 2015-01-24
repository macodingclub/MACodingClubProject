'use strict';

maCodingClub.factory('membersData', function ($resource){
var Member = $resource('/data/members/:id', {id:'@id'});
	return {
		getMembersData: function () {
			return Member.query();
		},
		getOneMemberData:function(id){
			return Member.get(
				{ id:id }
			)
		}
	}
});

