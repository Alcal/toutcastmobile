angular.module('toutcast.services.tout', [])

  //Factory Restaurantes Start
  .factory('ToutService', function (localStorageService, Tout)
  {
    // Might use a resource here that returns a JSON array

    var touts = [];

    var allPromise = new Promise(function (fulfillPromise, rejectPromise)
    {
      if (touts && touts.lenght >0)
      {
        fulfillPromise(touts);
      }
      else if (localStorageService.get('Touts'))
      {
        touts = localStorageService.get('Touts');
        fulfillPromise(localStorageService.get('Touts'))
      }
      else
      {
        Tout.find({where: {live: true}},

          //The following function is executed if call was successful
          function (data)
          {
            //After a successful call, we store the data locally to reduce service calls
            touts = data;
            localStorageService.set('Touts', data);
            fulfillPromise(data);
          },
          //The following function is executed if call failed
          function (err)
          {
            //This is where we handle the 'err' object
            console.error(JSON.stringify(err));
            rejectPromise(err);
          });
      }
    });

    var getByIdPromise = function(toutId)
    {
      return new Promise(
      function (fulfillPromise, rejectPromise)
      {
        for (var i = 0; i <= touts.length; i++)
        {
          if (touts[i].id == toutId)
          {
            return fulfillPromise(touts[i]);
          }
        }
        Tout.findById(toutId,
          function (data)
          {
            fulfillPromise(data)
          },
          function (err)
          {
            console.error(err);
            rejectPromise(err);
          });
      })
    };

    var refreshPromise = function(){return new Promise(
      function (fulfillPromise, rejectPromise)
      {
        Tout.find({where: {live: true}},

          //The following function is executed if call was successful
          function (data)
          {
            touts = data;
            //After a successful call, we store the data locally to reduce service calls
            localStorageService.set('Touts', data);
            fulfillPromise(data);
          },
          //The following function is executed if call failed
          function (err)
          {
            //This is where we handle the 'err' object
            console.error(JSON.stringify(err));
            rejectPromise(err);
          });
      })
    };

    return {
      all: allPromise,
      get: getByIdPromise,
      refresh: refreshPromise
    };
  });
