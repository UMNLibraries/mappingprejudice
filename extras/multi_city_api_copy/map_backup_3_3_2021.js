
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwcmVmIiwiYSI6ImNrY3o1c3E2dzBnazQyem1ub2tycmx5bGMifQ.AvNyL7CdcKWJMnmdFFqUHQ';
var layer_list = []
var layer_list_points = []
var layer_list_county_poly = []
var layer_list_county_line_inner = []
var layer_list_county_line_outer = []
var timelapse_check = "inactive"
// Covenant layers
var DC = 'https://services.arcgis.com/8df8p0NlLFEShl0r/arcgis/rest/services/Covenants_Joined_4_2_2018/FeatureServer/0/query?where=1%3D1&outSR=4326&f=pgeojson'
var Hennepin = 'https://services.arcgis.com/8df8p0NlLFEShl0r/arcgis/rest/services/Hennepin_County_Racial_Covenants_12_2_2020/FeatureServer/0/query?where=1%3D1&outSR=4326&f=pgeojson'
var Ramsey = 'https://services.arcgis.com/8df8p0NlLFEShl0r/arcgis/rest/services/Ramsey_Joined_10_28_2020/FeatureServer/0/query?where=1%3D1&outSR=4326&f=pgeojson'

//Point layers
var Hennepin_Points = "https://services.arcgis.com/8df8p0NlLFEShl0r/ArcGIS/rest/services/centroids_8_26_2020_v2/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=year&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token="

//Erase layers
var hennepin_poly_erase = "https://services.arcgis.com/8df8p0NlLFEShl0r/ArcGIS/rest/services/ramsey_dissolved/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token="
//load timelpase map
var inset_map = new mapboxgl.Map({
  container: 'inset_map',
  style: 'mapbox://styles/mapref/ckcz2w2z105kv1ipudth9cj2i',
  center: [-98.028491, 29.703963],
  zoom: 7,
  attributionControl: false
});
//load interactive map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapref/ckcz2w2z105kv1ipudth9cj2i', // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});



inset_map.on('load', function(){
  fullscreen_btn = document.getElementById('toggle_fullscreen');
  slider_div = document.getElementById('slider_div');
  slider = document.getElementById('slider');
  screen_div = document.getElementById('screen');
  inset_element = document.getElementById("inset_map");

  fullscreen_btn.addEventListener("click", function(){
      if (fullscreen_btn.innerHTML == 'Fullscreen'){
            fullscreen_btn.innerHTML = 'Collapse';
            inset_element.style.width = "70%";
            inset_element.style.height = "70%";
            slider_div.style.width = "70%";
            slider_div.style.top = "68%";
            slider_div.style.right = "14px";
            screen_div.style.display = "block";
            inset_map.resize();

      } else {
            fullscreen_btn.innerHTML = 'Fullscreen';
            inset_element.style.width = "250px";
            inset_element.style.height = "250px";
            slider_div.style.width = "255px";
            slider_div.style.top = "225px";
            slider_div.style.right = "10px";
            screen_div.style.display = "none";
            inset_map.resize();
      }
    })


  slider.addEventListener("click", function(){
      console.log(slider.value);
      year_tag.innerHTML = slider.value;
      filterBy(parseInt(slider.value));
    })

})




map.on('load', function () {

//configure pop-ups
  map.on("click", "ramsey_poly", function(e) {
    map.getCanvas().style.cursor = 'pointer';
    console.log('click event');

    var features = map.queryRenderedFeatures(e.point);
    var Addition = e.features[0].properties.Addition;
    var Block = e.features[0].properties.Block;
    var Lot = e.features[0].properties.Lot;
    var Restriction = e.features[0].properties.Restrictio;
    var coordinates = e.lngLat;

    const ramsey_pop =
                    '<h3 class="popup_title"> Ramsey County </h3>' +
                    '<b> Restriction: </b>' +
                    Restriction +
                    '</br>' +
                    '<b> Addition: </b>' +
                    Addition +
                    '</br>' +
                    '<b> Block: </b>' +
                    Block +
                    '</br>' +
                    '<b> Lot: </b>' +
                    Lot +
                    '</br>';
    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(ramsey_pop)
        .addTo(map);


  });
  map.on("click", "hennepin_poly", function(e) {
    map.getCanvas().style.cursor = 'pointer';
    console.log('click event');

    var features = map.queryRenderedFeatures(e.point);
    var Addition = e.features[0].properties.Addition;
    var Block = e.features[0].properties.Block;
    var Lot = e.features[0].properties.Lot;
    var Restriction = e.features[0].properties.Racial_Res_1;
    var Year = e.features[0].properties.Ex_Year;
    var coordinates = e.lngLat;

    const hennepin_pop =
                    '<h3 class="popup_title"> Hennepin County </h3>' +
                    '<b> Restriction: </b>' +
                    Restriction +
                    '</br>' +
                    '<b> Addition: </b>' +
                    Addition +
                    '</br>' +
                    '<b> Block: </b>' +
                    Block +
                    '</br>' +
                    '<b> Lot: </b>' +
                    Lot +
                    '</br>';
    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(hennepin_pop)
        .addTo(map);
  });
  map.on("click", "dc_poly", function(e) {
    map.getCanvas().style.cursor = 'pointer';
    console.log('click event');

    var features = map.queryRenderedFeatures(e.point);
    var Square = e.features[0].properties.Square;
    var Lot = e.features[0].properties.Lot;
    var Addtional_Restrictions = e.features[0].properties.AlsoBarred;
    var Year = e.features[0].properties.Year;
    var coordinates = e.lngLat;

    const dc_pop =  '<h3 class="popup_title"> Washington DC </h3>' +
                    '<b> Additional Restrictions: </b>' +
                    Addtional_Restrictions +
                    '</br>' +
                    '<b> Square: </b>' +
                    Square +
                    '</br>' +
                    '<b> Lot: </b>' +
                    Lot +
                    '</br>' +
                    '<b> Year: </b>' +
                    Year +
                    '</br>';

    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(dc_pop)
        .addTo(map);
  });
// end pop-up config

// end map load function
})

//load and unload layers based on click event
function load_layer (name, url){
    var city_element = document.getElementById(name);
    var class_value = city_element.className;
    var id_value = name;
    change_highlight(class_value, id_value);
    change_metadata(name);
    timelapse_zoom(name);
    for (const i in layer_list){
      var drop_val = (layer_list[i])
      console.log(drop_val)
      console.log(drop_val + '_points')
      layer_list.splice(i, 1)
      map.removeLayer(drop_val);
      map.removeSource(drop_val);
      inset_map.removeLayer("hennepin_poly_points");
      inset_map.removeSource("hennepin_poly_points");
    }
    layer_list.push(name);
    map.addLayer({
          'id': id_value,
          "type": "fill",
          'source': {
              'type': 'geojson',
              'data': url
          },
          'paint': {
              'fill-color': '#9e5f5f',
              'fill-opacity': 1,
              'fill-outline-color': '#750909'
          }
      });

//note the erase layer stuff is hard-coded right now. Need to update this
        map.addLayer({
          'id': 'hennepin_poly_erase',
          "type": "fill",
          'source': {
              'type': 'geojson',
              'data': hennepin_poly_erase
          },
          'paint': {
              'fill-color': '#ffffff',
              'fill-opacity': .4,
              'fill-outline-color': '#ffffff'
          }
      });
        map.addLayer({
          'id': 'hennepin_poly_erase_line_outer',
          "type": "line",
          'source': {
              'type': 'geojson',
              'data': hennepin_poly_erase
          },
          'paint': {
              'line-opacity': .9,
              'line-color': '#000000',
              'line-width': 14,
              'line-blur': 15
          }
      });
        map.addLayer({
          'id': 'hennepin_poly_erase_line_inner',
          "type": "line",
          'source': {
              'type': 'geojson',
              'data': hennepin_poly_erase
          },
          'paint': {
              'line-opacity': .9,
              'line-color': '#000000',
              'line-width': 5,
              'line-blur': 5,
              'line-offset': 3
          },
      });







//note the inset stuff is hard-coded right now. Need to update this
     inset_map.addLayer({
          'id': "hennepin_poly_points",
          "type": "circle",
          'source': {
              'type': 'geojson',
              'data': Hennepin_Points
          },
          'paint': {
              'circle-radius': 3,
              'circle-color': '#223b53',
              'circle-stroke-color': 'blue',
              'circle-stroke-width': 1,
              'circle-opacity': 0.5
          }
     });


    year_tag = document.getElementById("year_tag");
    year_tag.innerHTML = 1910;
    filterBy(1910);
    loop_delay(200, 1910, 1910, 1956);

}


//filter function for timelapse data

function filterBy(year) {
    var filters = ["all",
                  ["<=",['get', 'year'], year]
              ]
    inset_map.setFilter('hennepin_poly_points', filters);
    }

//time-delay loop for timelapse data


function loop_delay(interval, max_low, rel_low, high_val){
  var cov_years_list = [];
  var maximum_low = max_low
  cov_years_list.splice(0, cov_years_list.length)
  var interval_val = interval; // how much time should the delay between two iterations be (in milliseconds)?
  for (var i = rel_low; i <= high_val; i++) {
          cov_years_list.push(i);
  };

  var counter = rel_low

  if (timelapse_check == 'active') {
    console.log('active');
    return;
  } else {
          var time_interval = setInterval(function(){
                button_id = document.getElementById("loop_button");
                slider_id = document.getElementById("slider");
                status = button_id.classList.value;
                counter++;
                 if (status == "button_active" && counter < high_val){
                    filterBy(counter);
                    year_tag = document.getElementById("year_tag");
                    year_tag.innerHTML = counter;
                    slider.value = counter;
                    timelapse_check = 'active';
                } else if  (counter == high_val) {
                    year_tag = document.getElementById("year_tag");
                    year_tag.innerHTML = maximum_low;
                    filterBy(maximum_low);
                    counter = max_low;
                    slider.value = counter;
                    timelapse_check = 'active';
                } else {
                    button_id == "button_inactive";
                    slider.value = counter;
                    clearInterval(time_interval);
                    timelapse_check = 'inactive';

                }

          }, interval)

    }
}







//start or stop timelapse based on button behavior

function loop_button(){
    button_id = document.getElementById("loop_button");
    status = button_id.classList.value;
    if (status == "button_active") {
      button_id.classList.remove("button_active");
      button_id.classList.add("button_inactive")
      button_id.innerHTML = "START"
    } else {
      button_id.classList.remove("button_inactive");
      button_id.classList.add("button_active");
      button_id.innerHTML = "STOP"
      year_tag = document.getElementById("year_tag").innerHTML;
      loop_delay(200, 1910, year_tag, 1955);

    }
}




//change highlight of clicked geog button
//called in load_layer function
function change_highlight(class_val, id_val){
  let elements = document.getElementsByClassName("geog_active");
  var element = document.getElementById(id_val);
  for ( i in elements){
        try {
         elements[i].classList.add("geog_inactive");
       } catch {
    }
  }
    element.classList.remove("geog_inactive");
    element.classList.add("geog_active")

  }

//display geog specific metadata
//called in load_layer function

function change_metadata(name) {
    geog_tag = document.getElementById("li_geog");
    partner_tag = document.getElementById("li_partners");
    website_tag = document.getElementById("li_website");
    data_tag = document.getElementById("li_data");
    switch(name){
      case "hennepin_poly":
          clear_metadata();
          geog_tag.innerHTML += "<h3>Hennepin County</h3>";
          partner_tag.innerHTML += "<h3>The Mapping Prejudice Projct</h3>";
          website_tag.innerHTML += "<a href='www.mappingprejudice.org' target=blank>Website</a>";
          data_tag.innerHTML += "<p> Download Data: <a href='https://conservancy.umn.edu/handle/11299/217209' target=blank>Hennepin County Covenants Data</a></p>";
      break;
      case "ramsey_poly":
          clear_metadata();
          geog_tag.innerHTML += "<h3>Ramsey County</h3>";
          partner_tag.innerHTML += "<h3>The Mapping Prejudice Project, St. Kate's University</h3>";
          website_tag.innerHTML += "<a href='https://welcomingthedearneighbor.org/' target=blank>Welcoming the Dear Neighbor</a>";
          data_tag.innerHTML += "<p> Download Data: <a href='#'> Ramsey County Covenants Data Not Yet Availible</a></p>";
      break;
      case "dc_poly":
          clear_metadata();
      break

      default:
        clear_metadata();
        console.log('no project loaded');
  }
}

//clears exisiting metadat on click
//dependent on change_metadata function
function clear_metadata(){
    geog_tag.innerHTML = "";
    partner_tag.innerHTML = "";
    website_tag.innerHTML = "";
    data_tag.innerHTML = "";
}

//sets zoom and extent in timelapse inset map
function timelapse_zoom(name){
  switch(name){
      case "hennepin_poly":
         inset_map.flyTo({center: [-93.264047, 44.962960], zoom: 9});
      break;
      case "ramsey_poly":
         inset_map.flyTo({center: [-93.0891, 44.9773], zoom: 10});
      break;
      case "dc_poly":
         inset_map.flyTo({center: [-77.02646, 38.91315], zoom: 10});
      break
      default:
        console.log('no layer loaded');
    }
}
