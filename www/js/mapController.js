angular.module('toutcast.controllers.map', [])

  .controller('MainMapCtrl', function ($scope, $stateParams, $state, $compile, $cordovaGeolocation, $http, ionicMaterialInk, ToutService)
  {
    var options = {timeout: 10000, enableHighAccuracy: false};
    $scope.lastInfoWindow = null;

    var defaultCenter = new google.maps.LatLng(31.859370, -116.610601);

    var mapOptions = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      disableAutoPan: true,
      center: defaultCenter
    };

    var markerIcon =
    {
      size: new google.maps.Size(39, 41),
      scaledSize: new google.maps.Size(39, 41),
      url: 'img/map-marker.png',
      anchor: {x: 8, y: 41}
    };
    var infoWindowStyle = {
      "display": "inline-block",
      "max-height": "465px",
      "width": "275px",
      "max-width": "275px"
    };

    var iconStyle = {   //.css
      position: 'absolute',
      left: '3px',       //-6px
      top: '0px',      //-674px
      width: '26px',     //118px
      height: '25px'     //984px
    };
    var closeBtnStyle = {
      height: '27px',
      width: '27px',
      opacity: '1', // by default the close button has an opacity of 0.7
      left: '265px', top: '3px', // button repositioning
      border: '4px solid #4aa636', // increasing button border and new color
      'border-radius': '13px', // circular effect
      'box-shadow': '0 0 5px #66a17b',
      'background-color': 'white' // 3D effect to highlight the button
    };

    $scope.loadMapElements = function ()
    {
      if ($scope.mapLoaded && $scope.locationLoaded)
      {
        $scope.map.setCenter($scope.latLng);
        ToutService.all.then(
          function (data)
          {
            $scope.touts = data;
            for (var x = 0; x < $scope.touts.length; x++)
            {
              $scope.touts[x].marker = createMarker(x);
              $scope.touts[x].marker.infowindow = new google.maps.InfoWindow({
                content: $compile(getInfoWindow($scope.touts[x]))($scope)[0],
                disableAutoPan: true
              });
              $scope.touts[x].marker.addListener('click', function ()
              {
                handleMarkerClick.call(this);
              });
              createInfoWindow(x);
            }
            ionicMaterialInk.displayEffect({duration: 600});
          },
          function (toutError)
          {
            console.error(JSON.stringify(toutError));
          })
      }
    };

    $cordovaGeolocation.getCurrentPosition(options).then(
      function (position)
      {
        $scope.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        $scope.locationLoaded = true;
        $scope.loadMapElements();

      },
      function (err)
      {
        console.error("Geolocation Error: " + JSON.stringify(err));
      });

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle',
      function ()
      {
        $scope.mapLoaded = true;
        $scope.loadMapElements();
      },
      function (err)
      {
        console.error("Maps Error: " + JSON.stringify(err));
      });


    ionicMaterialInk.displayEffect({duration: 600});

    var createMarker = function (index)
    {
      return new google.maps.Marker({
        title: $scope.touts[index].title,
        position: new google.maps.LatLng($scope.touts[index].location.lat, $scope.touts[index].location.lng),
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        icon: markerIcon
      });
    };

    var createInfoWindow = function (index)
    {
      google.maps.event.addListener($scope.touts[index].marker.infowindow, 'domready', function ()
      {

        // Reference to the DIV which receives the contents of the infowindow using jQuery
        var iwOuter = angular.element('.gm-style-iw');
        iwOuter.addClass('ink ink-dark');
        var iwBackground = iwOuter.prev();
        var iwInner = iwOuter.children(':nth-child(1)');

        iwInner.css(infoWindowStyle);
        iwBackground.children(':nth-child(2)').css({'display': 'none'});
        iwBackground.children(':nth-child(4)').css({'display': 'none'});
        var iwCloseBtn = iwOuter.next();

        // Apply the desired effect to the close button
        iwCloseBtn.css(closeBtnStyle);
        iwCloseBtn.children().remove();

        var elem = $("<i>");
        elem.attr('class', 'icon dark ion-close close-icon');
        elem.css(iconStyle);

        iwCloseBtn.append(elem);

        // The API automatically applies 0.7 opacity to the button after the mouseout event.
        // This function reverses this event to the desired value.
        iwCloseBtn.mouseout(function ()
        {
          $(this).css({opacity: '1'});
        });
        ionicMaterialInk.displayEffect({duration: 600});
      });
    };

    $scope.goToFeed = function (toutId)
    {
      $state.go('app.home.feed-detail', {'toutId': toutId});
    }

    var getInfoWindow = function (tout)
    {
      return '<div class=\"item item-icon-left map-item ink ink-dark\" ng-click=\"goToFeed(\''
        + tout.id
        + '\')\" >'
        + '<i class=\"icon positive ion-pricetags\"></i>'
        + '<h3>' + tout.title + '</h3>'
        + '<p>' + tout.content + '</p>'
        + getRedemptionsString(tout)
        + '</div>';
    };

    var getRedemptionsString = function (tout)
    {
      if (tout.maxRedemptions)
      {
        return '<p> Quedan ' + tout.remainingRedemptions
          + ' de ' + tout.maxRedemptions + '</p>';
      }
      return '';
    };
    
    var handleMarkerClick = function ()
    {
      if ($scope.lastInfoWindow)
      {
        $scope.lastInfoWindow.close();
      }
      $scope.map.setZoom(15);
      $scope.map.setCenter(this.getPosition());
      this.infowindow.open($scope.map, this);
      $scope.lastInfoWindow = this.infowindow;
    };
  });


