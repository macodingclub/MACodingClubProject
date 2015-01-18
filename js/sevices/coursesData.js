maCodingClub.factory('coursesData', function($resource){
	var resource = $resource('/data/courses/:id', {id:'@id'});
		return {
			getCourseData: function(id){
				return resource.get(
					{
						id:id
					}
				);
			}
		}
});
