angular.module('toutcast.controllers.map', [])

.controller('MainMapCtrl', function($scope, $stateParams, $cordovaGeolocation, $http, ionicMaterialInk) {
  var options = {timeout: 10000, enableHighAccuracy: true};
  $scope.lastInfoWindow = null;
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
  
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl:false,
      streetViewControl:false
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

     google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var markerIcon = 
        {
          size: new google.maps.Size(39, 41),
          scaledSize: new google.maps.Size(39, 41),
          url: 'img/map-marker.png',
          anchor: {x:15, y:41}
        };

      $http.get('js/json/touts.json')
       .then(function(res){
          $scope.touts = res.data; 

          for(var x=0; x < $scope.touts.length; x++)
          {
              $scope.touts[x].marker = new google.maps.Marker({
                  title:$scope.touts[x].title,
                  position: new google.maps.LatLng($scope.touts[x].location.lat, $scope.touts[x].location.lng),
                  map: $scope.map,
                  animation: google.maps.Animation.DROP,          
                  icon: markerIcon     
              }); 
              $scope.touts[x].marker.infowindow = new google.maps.InfoWindow({
                content: getInfoWindow($scope.touts[x])
              });
              $scope.touts[x].marker.addListener('click', function() {
                if($scope.lastInfoWindow)
                {
                    $scope.lastInfoWindow.close();
                };
                $scope.map.setZoom(15);
                $scope.map.setCenter(this.getPosition());
                this.infowindow.open($scope.map, this);
                $scope.lastInfoWindow = this.infowindow;
              }); 

              google.maps.event.addListener($scope.touts[x].marker.infowindow, 'domready', function() {

                // Reference to the DIV which receives the contents of the infowindow using jQuery
                var iwOuter = angular.element('.gm-style-iw');
                var iwBackground = iwOuter.prev();
                iwBackground.children(':nth-child(2)').css({'display' : 'none'});
                iwBackground.children(':nth-child(4)').css({'display' : 'none'});
                var iwCloseBtn = iwOuter.next();

                // Apply the desired effect to the close button
                iwCloseBtn.css({
                  height:'27px',
                  width:'27px',
                  opacity: '1', // by default the close button has an opacity of 0.7
                  right: '5px', top: '3px', // button repositioning
                  border: '7px solid #69a33f', // increasing button border and new color
                  'border-radius': '13px', // circular effect
                  'box-shadow': '0 0 5px #66a17b' // 3D effect to highlight the button
                });

                // The API automatically applies 0.7 opacity to the button after the mouseout event.
                // This function reverses this event to the desired value.
                iwCloseBtn.mouseout(function(){
                  $(this).css({opacity: '1'});
                });
              });
          }
          ionicMaterialInk.displayEffect({duration:600});                  
        });
      }, function(error){
      console.log("Could not get location");
    }); 
  }); 


  ionicMaterialInk.displayEffect({duration:600});

  var getInfoWindow = function (tout)
  {
    return '<div class=\"item item-avatar\"><img class=\"tc-img-circle\"></img><h3>'+tout.title+'</h3><p>'+tout.content+'</p></div>';
  };
})


