function initMap() {
             let map = new google.maps.Map(document.getElementById("map"), {
                 zoom: 3,
                 center: {
                     lat: 46.619261,
                     lng: -33.134766
                 }
             });
         
             let labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
         
             let locations = [{
                 lat: 53.3497645,
                 lng: -6.2602732,
                 location: "Dublin",
             }, {
                 lat: 51.898627,
                 lng: -8.4705942,
                 location: "Cork",
             }, {
                 lat: 51.5073219,
                 lng: -0.1276474,
                 location: "London",
             }, {
                 lat: 48.8566969,
                 lng: 2.3514616,
                 location: "Paris",
             }, {
                 lat: 52.3727598,
                 lng: 4.8936041,
                 location: "Amsterdam",
             }, {
                 lat: 52.5170365,
                 lng: 13.3888599,
                 location: "Berlin",
             }, {
                 lat: 40.7127281,
                 lng: -74.0060152,
                 location: "New York",
             }, {
                 lat: 22.350627,
                 lng: 114.1849161,
                 location: 'Hong Kong',
             }, {
                 lat: -33.865143,
                 lng: 151.209900,
                 location: 'Sydney',
             }, {
                 lat: 19.076090,
                 lng: 72.877426,
                 location: "Mumbai",
             }, {
                 lat: -33.918861,
                 lng: 18.423300,
                 location: "Cape Town",
             }, {
                 lat: 55.751244,
                 lng: 37.618423,
                 location: "Moscow",
             },
             ];
         
             let markers = locations.map(function(location, i) {
                 let marker = new google.maps.Marker({
                     position: location,
                     label: labels[i % labels.length]
                 });
                 const infowindow = new google.maps.InfoWindow({
                    content: location.location,
                });
                
                marker.addListener("click", () => {
                    infowindow.open(map, marker);
                });
                 return marker;
             });
         
             let markerCluster = new MarkerClusterer(map, markers, {
                 imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
             });
         }
