angular.module('toutcast.controllers.slide', ['ngAnimate'])

  .controller('SlideCtrl',
    function ($scope, $state, $stateParams, $ionicScrollDelegate, ionicMaterialInk, $timeout, Tout, ToutService)
    {
      $scope.$on('$ionicView.beforeEnter', function (event, viewData)
      {
        viewData.enableBack = true;
        ToutService.get($stateParams.toutId).then(
          function (tout)
          {
            $scope.tout = tout;
          },
          function (err)
          {
            console.error(JSON.stringify(err));
            $state.go('app.home.feed');
          });
      });

      $scope.slideTrack = $ionicScrollDelegate.$getByHandle('slide-track');
      $scope.status = {position: 0};
      $scope.grown = false;
      $scope.loadingTout = false;

      $scope.$watch('slideTrack.getScrollPosition().top', function (newValue)
      {
        $scope.crescentStyle.height = newValue * 2.1 + 'px';
        $scope.crescentStyle.width = newValue * 2.1 + 'px';
        if (newValue > 500)
        {
          $scope.promptPin();
        }
      });

      $scope.onSleighRelease = function ()
      {
        if ($scope.slideTrack.getScrollPosition().top < 200)
        {
          $scope.slideTrack.scrollTop(true);
          $scope.grown = false;
          $scope.loadingTout = false;
        }
        else
        {
          $scope.slideTrack.scrollBottom(true);
          $scope.grown = true;
        }
      };


      ionicMaterialInk.displayEffect({duration: 600});

      var redemptionFulfilled = function (data)
      {
        $scope.approved = true;
        $scope.failed = false;
        $scope.done = true;
        $scope.loadingTout = false;
        $scope.slideTrack.scrollTop(true);
      };
      var redemptionRejected = function (errorMessage)
      {
        console.log(errorMessage);
        $scope.errorMsg = getErrorMsg(errorMessage);
        $scope.approved = false;
        $scope.failed = true;
        $scope.done = true;
        $scope.loadingTout = false;
        $scope.slideTrack.scrollTop(true);
      };

      var getErrorMsg = function (errorMessage)
      {
        switch (errorMessage.status)
        {
          case 401:
            return "Registrate para canjear ofertas";
          case 403:
            switch (errorMessage.data.error.name)
            {
              case "PIN":
                return "PIN incorrecto";
              case "USED":
                return "Ya canjeaste esta oferta";
              case "MAX":
                return "Se alcanzó el límite de ofertas";
              default:
                return "Error en el canje, intenta de nuevo";
            }
          case 404:
            return "Oferta no encontrada";
          case 500:
          default:
            return "Error inesperado, intenta de nuevo";
        }
      };

      $scope.promptPin = function ()
      {
        $scope.pinPrompted = true;
      };

      $scope.sendPIN = function (pinInput)
      {
        $scope.pinPrompted = false;
        $scope.pin = pinInput;
        $scope.redeem();
      };

      $scope.redeem = function ()
      {
        if (!$scope.loadingTout)
        {
          $scope.loadingTout = true;
          Tout.redeem({toutId: $stateParams.toutId, pin: $scope.pin}, redemptionFulfilled, redemptionRejected);
        }
      };

      $scope.disableScrolling = function ()
      {
        $scope.slideTrack.getScrollView().freeze(true);
        $scope.slideTrack.freezeScroll(true);
        $scope.scrollFrozen = true;
      };

      $scope.enableScrolling = function ()
      {
        $scope.slideTrack.getScrollView().freeze(false);
        $scope.slideTrack.freezeScroll(false);
        $scope.scrollFrozen = false;
      };

      $scope.crescentStyle =
      {
        width: '0px',
        height: '0px'
      };
      $scope.crescentStyleB =
      {
        width: '0px',
        height: '0px'
      };


    });
