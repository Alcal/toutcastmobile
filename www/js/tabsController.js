/**
 * Created by aquaboy on 6/26/16.
 */

angular.module('toutcast.controllers.tabs', [])
  .controller('TabsCtrl', function ($scope, $state)
    {
      $scope.resetFeed = function ()
      {
        $state.go('app.home.feed');
      };
    });
