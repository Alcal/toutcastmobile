angular.module('toutcast.services.tout', [])

//Factory Restaurantes Start
.factory('ToutService', function(localStorageService, Tout) {
  // Might use a resource here that returns a JSON array

  var touts = touts || localStorageService.get('Touts') || Tout.find({}, 
      //The following function is executed if call was successful
      function(data)
      {
        //After a successful call, we store the data locally to reduce service calls
        localStorageService.set('Touts', data);
      }, 
      //The following function is executed if call failed
      function(err)
      {
        $scope.err = true;
        //This is where we handle the 'err' object
        console.log(err);
      });

  return {
    all: function(cb) {
      return cb(touts);
    },
    get: function(toutId) {
      for (var i = 0; i < touts.length; i++) {
        if (touts[i].id === parseInt(toutId)) {
          return touts[i];
        }
      }
      return null;
    }
  };
})//restaurantes end
