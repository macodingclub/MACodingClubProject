'use strict';

maCodingClub.factory('membersData', function($resource){
	var resource = $resource('/data/members/:memberId', {id: '@memberId'});
	return {
		getMembersData: function (id) {
			return resource.query(
				{
					method:'GET',
					isArray : true
				}
			);
		}
	}
});
