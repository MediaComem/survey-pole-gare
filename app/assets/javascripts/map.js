var mapManager = {

  mapsObjects: [],

  initHomeMap: function(){

    var map = new ol.Map({
      view: mapManager.defaultView(),
      target: 'home-map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      controls: ol.control.defaults({ attribution: false }),
      interactions: mapManager.disableRotationInteraction()
    });

    
    // map.removeInteraction(ol.interaction.MouseWheelZoom)

    // map.setProperties({interactions: mapManager.disableRotationAndZoomInteractions()});
    // map.renderSync()
    var vectorSource = new ol.source.Vector();

    $.get( "/lausanne_maillle_reguliere.geojson", function( data ) {
      vectorSource.addFeatures(new ol.format.GeoJSON().readFeatures(data))
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: new ol.style.Style({
        fill: mapManager.defaultFill(),
        stroke: mapManager.defaultStroke()
      })
    });

    map.addLayer(vectorLayer)

    var selectSingleClick = new ol.interaction.Select({
      condition: ol.events.condition.click,
      style: new ol.style.Style({
        fill: mapManager.selectFill(),
        stroke: mapManager.selectStroke()
      })
    });

    map.addInteraction(selectSingleClick);

    mapManager.mapsObjects.push(map);

    selectSingleClick.on('select', function(e) {
    	console.log(e.target.getFeatures().item(0).get('id'))
      $('#home-map').siblings('.gm-city-autocomplete').find('input[name*=q26]').val(e.target.getFeatures().item(0).get('id'))
      $('#home-map').siblings('.mapPlaceId').attr('data-id',e.target.getFeatures().item(0).get('id'))
    });

  },
  initWorkMap: function(){
    
    var scrollStarted = false;
    var timer = null; 

    var map = new ol.Map({
      view: mapManager.defaultView(),
      target: 'work-map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      controls: ol.control.defaults({ attribution: false }),
      interactions: mapManager.disableRotationInteraction()
    })

    var vectorSource = new ol.source.Vector();

    $.get( "/lausanne_maillle_reguliere.geojson", function( data ) {
      vectorSource.addFeatures(new ol.format.GeoJSON().readFeatures(data))
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: new ol.style.Style({
        fill: mapManager.defaultFill(),
        stroke: mapManager.defaultStroke()
      })
    });

    map.addLayer(vectorLayer);

    var selectSingleClick = new ol.interaction.Select({
      condition: ol.events.condition.click,
      style: new ol.style.Style({
        fill: mapManager.selectFill(),
        stroke: mapManager.selectStroke()
      })
    });

    map.addInteraction(selectSingleClick);

    mapManager.mapsObjects.push(map);

    selectSingleClick.on('select', function(e) {
      console.log(e.target.getFeatures().item(0).get('id'))
      $('#work-map').siblings('.gm-city-autocomplete').find('input[name*=q27]').val(e.target.getFeatures().item(0).get('id'))
      $('#work-map').siblings('.mapPlaceId').attr('data-id',e.target.getFeatures().item(0).get('id'))
    });

  },
  initMapVisits: function(){
    console.log("test")
    var colorlayer = new ol.layer.Tile({
      opacity: 1,
      visible: true,
      source: new ol.source.WMTS({
        url: 'http://ows.asitvd.ch/wmts/',
        layer: 'asitvd.fond_gris',
        matrixSet: '21781',
        format: 'image/png',
        tileGrid: new ol.tilegrid.WMTS({
            origin: [420000.0, 350000.0],
            resolutions: [4000.0, 3750.0, 3500.0, 3250.0, 3000.0, 2750.0, 2500.0, 2250.0, 2000.0, 1750.0, 1500.0, 1250.0, 1000.0, 750.0, 650.0, 500.0, 250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.25, 0.1, 0.05],
            matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
        }),
        dimensions: ['DIM1', 'ELEVATION'],
        params: {
            'dim1': 'default',
            'elevation': '0'
        },
        style: 'default'
      })
    });

    var map = new ol.Map({
      view: mapManager.swissView(),
      target: 'map-visits',
      layers: [colorlayer]
    });

    // var map = new ol.Map({
    //   view: mapManager.zoomedView(),
    //   target: 'map-visits',
    //   layers: [
    //     new ol.layer.Tile({
    //       source: new ol.source.OSM()
    //     })
    //   ],
    //   controls: ol.control.defaults({ attribution: false }),
    //   interactions: mapManager.disableRotationInteraction()
    // })

    // var vectorSource = new ol.source.Vector();

    // $.get( "/vide.geojson", function( data ) {
    //   vectorSource.addFeatures(new ol.format.GeoJSON().readFeatures(data))
    // });

    // var vectorLayer = new ol.layer.Vector({
    //   source: vectorSource,
    //   style: new ol.style.Style({
    //     fill: mapManager.defaultFill(),
    //     stroke: mapManager.defaultStroke()
    //   })
    // });

    // map.addLayer(vectorLayer)

    // var selectSingleClick = new ol.interaction.Select({
    //   condition: ol.events.condition.click,
    //   toggleCondition: ol.events.condition.click,
    //   style: new ol.style.Style({
    //     fill: mapManager.selectFill(),
    //     stroke: mapManager.selectStroke()
    //   })
    // });

    // map.addInteraction(selectSingleClick);

    // mapManager.mapsObjects.push(map)

    // selectSingleClick.on('select', function(e) {
    //   console.log(map.getView().getCenter())
    //   $('#map-visits').siblings('.checkbox').find(':checked').prop('checked','')
    //   e.target.getFeatures().forEach(function(f){
    //     var checkbox = $('#map-visits').siblings('.checkbox').find('input[data-polygonid='+f.get('id')+']')
    //     checkbox.prop('checked', 'checked');
    //   })
    // });

  },
  initMapBusiness: function(){
    
    var scrollStarted = false
    var timer = null; 

    var map = new ol.Map({
      view: mapManager.zoomedView(),
      target: 'map-business',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      controls: ol.control.defaults({ attribution: false }),
      interactions: mapManager.disableRotationInteraction()
    })

    var vectorSource = new ol.source.Vector();

    $.get( "/vide.geojson", function( data ) {
      vectorSource.addFeatures(new ol.format.GeoJSON().readFeatures(data))
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: new ol.style.Style({
        fill: mapManager.defaultFill(),
        stroke: mapManager.defaultStroke()
      })
    });

    map.addLayer(vectorLayer);

    var selectSingleClick = new ol.interaction.Select({
      condition: ol.events.condition.click,
      toggleCondition: ol.events.condition.click,
      style: new ol.style.Style({
        fill: mapManager.selectFill(),
        stroke: mapManager.selectStroke()
      })
    });

    map.addInteraction(selectSingleClick);

    mapManager.mapsObjects.push(map);

    selectSingleClick.on('select', function(e) {
      $('#map-business').siblings('.checkbox').find(':checked').prop('checked','')
      e.target.getFeatures().forEach(function(f){
        console.log(f.get('id'))
        var checkbox = $('#map-business').siblings('.checkbox').find('input[data-polygonid='+f.get('id')+']')
        checkbox.prop('checked', 'checked');
      })
    });

  },
  defaultView: function(){
    return new ol.View({
      center:[738228, 5869064],
      zoom: 12,
      maxZoom: 19,
      minZoom: 12,
      extent: [731311, 5858530, 752636, 5869289]
    })
  },
  swissView: function(){
    return new ol.View({
      center:[537906.4772998566, 151908.44192396867],
      zoom: 18,
      minZoom: 13,
      extent: [488738.358855417, 114770.19797019214, 575876.5711005179, 158721.4892341685]
    })
  },
  zoomedView: function(){
    return new ol.View({
      center:[738004, 5863295],
      zoom: 16,
      maxZoom: 19,
      minZoom: 14,
      extent: [731311, 5858530, 752636, 5869289]
    })
  },
  blockedZoomView: function(){
    return new ol.View({
      center:[741974, 5863910],
      zoom: 12,
      maxZoom: 12,
      minZoom: 12,
      extent: [731311, 5858530, 752636, 5869289]
    })
  },
  disableRotationInteraction: function(){
    return ol.interaction.defaults({altShiftDragRotate:false, pinchRotate:false});
  },
  disableRotationAndZoomInteractions: function(){
    return ol.interaction.defaults({altShiftDragRotate:false, pinchRotate:false, mouseWheelZoom:false, pinchZoom:false});
  },
  defaultFill: function(){
    return new ol.style.Fill({
      color: 'rgba(255, 244, 0, 0.2)'
    })
  },
  defaultStroke: function(){
    return new ol.style.Stroke({
      color: 'rgba(255, 128, 0, 0.8)',
      width: 1
    })
  },
  selectFill: function(){
    return new ol.style.Fill({
      color: 'rgba(255, 0, 0, 0.6)'
    })
  },
  selectStroke: function(){
    return new ol.style.Stroke({
      color: 'rgba(255, 128, 0, 0.8)',
      width: 2
    })
  },
  disableZoomAndPanWhenScrolling: function(){
    var scrollStarted = false
    var timer = null; 
    window.onscroll = function (e) {
      console.log("scroll")
      
      if(!scrollStarted){
        scrollStarted = true
        for (var i = 0, l = mapManager.mapsObjects.length; i < l; i++) {
          var map = mapManager.mapsObjects[i];
          map.getInteractions().forEach(function(e){
            if(e instanceof ol.interaction.MouseWheelZoom){
              // map.removeInteraction(e)
              e.setActive(false)
            }
            if(e instanceof ol.interaction.DragPan){
              // map.removeInteraction(e)
              e.setActive(false)
            }
            if(e instanceof ol.interaction.PinchZoom){
              // map.removeInteraction(e)
              e.setActive(false)
            }    
          }) 
        }
      }
      if(timer !== null) {
        clearTimeout(timer);     
      }
      timer = setTimeout(function() {
        scrollStarted = false
        for (var i = 0, l = mapManager.mapsObjects.length; i < l; i++) {
          var map = mapManager.mapsObjects[i];
          map.getInteractions().forEach(function(e){
            if(e instanceof ol.interaction.MouseWheelZoom){
              // map.removeInteraction(e)
              e.setActive(true)
            }
            if(e instanceof ol.interaction.DragPan){
              // map.removeInteraction(e)
              e.setActive(true)
            }
            if(e instanceof ol.interaction.PinchZoom){
              // map.removeInteraction(e)
              e.setActive(true)
            }    
          }) 
        }
      }, 200);
    }
  } 
}

$(function() {
  mapManager.initHomeMap()
  mapManager.initWorkMap()
  mapManager.initMapVisits()
  mapManager.initMapBusiness()
  mapManager.disableZoomAndPanWhenScrolling()
})