app.factory("dataService",["$q","$http",function(e,r){var t=this,n=function(){var t=e.defer();return r({url:"jsons/base.json",method:"GET"}).success(function(e){t.resolve(e)}).error(function(e,r,n,o){t.resolve(!1)}),t.promise};return t.getMyData=n,t}]);