$.ajax({
    url: 'data/data.json',
    datatype: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
        console.log(data);
        $.map(data, function(value, i) {
            // $('#result').append('<h4>' + post.name +
            //     '</h4>' + '<span>' + post.category + '</span>' + '<br/>' +
            //     '<span>' + post.location.address + '</span>' +
            //     '');
            $('#result').append('<li class="list-group-item link-class"><img src="' + value.backgroundImageURL + '" height="140" width="140" class="img-thumbnail" /> ' +
                '<h2>' + value.name + '</h2>' + ' | <span class="text-muted">' + value.category + '</span>' + '<br/>' + '<label>' + value.location.address + '</label>' + '<br/>' + '<label>' + value.location.city + '</label>' + ', ' + '<label>' + value.location.state + '</label>' + '<br/>' + '<i class="glyphicon glyphicon-map-marker">' + '</i>' + '</li>');
        })
    }

});

//glyphicon glyphicon-map-marker

function initMap() {
    var options = {
        zoom: 10,
        center: {
            lat: 32.99908456526653,
            lng: -96.83018780592823
        }
    }

    // New map
    var map = new
    google.maps.Map(document.getElementById('map'), options);

    // Add marker

    addMarker({
        lat: 32.950787,
        lng: -96.821118
    });
    addMarker({
        lat: 32.99908456526653,
        lng: -96.83018780592823
    });
    addMarker({
        lat: 32.95061646,
        lng: -96.81974196
    });
    addMarker({
        lat: 32.95097877918451,
        lng: -96.82020769859702
    });
    addMarker({
        lat: 32.95097877918451,
        lng: -96.85424159312772
    });
    addMarker({
        lat: 32.95233983087431,
        lng: -96.8217200548765
    });
    addMarker({
        lat: 32.951435866666664,
        lng: -96.81982755661011
    });
    addMarker({
        lat: 32.95374271930925,
        lng: -96.83582486129093
    });
    addMarker({
        lat: 32.95293601457525,
        lng: -96.81884050369263
    });
    addMarker({
        lat: 32.95285141460555,
        lng: -96.8211496464768
    });
    addMarker({
        lat: 32.952423,
        lng: -96.83843538333333
    });
    addMarker({
        lat: 32.953633,
        lng: -96.81984901428223
    });
    addMarker({
        lat: 32.95027115867483,
        lng: -96.8406629562378
    });
    addMarker({
        lat: 32.95703457542545,
        lng: -96.82081996316793
    });
    addMarker({
        lat: 32.95347617827522,
        lng: -96.82554602622986
    });

    // add Marker Function
    function addMarker(coords) {
        var marker = new google.maps.Marker({
            position: coords,
            map: map,
        });
    }

}