var mapManager = {

  mapsObjects: [],

  initHomeMap: function(){

    var colorlayer = new ol.layer.Tile({
      opacity: 1,
      visible: true,
      source: new ol.source.WMTS({
        url: 'http://ows.asitvd.ch/wmts/',
        layer: 'asitvd.fond_couleur',
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
      view: mapManager.defaultView(),
      target: 'home-map',
      layers: [colorlayer]
    });

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

    var centerMapButton = document.getElementById('map-home-center');
    centerMapButton.addEventListener('click', function(event) {
      event.preventDefault();
      map.setView(mapManager.defaultView())
    }, false);

  },
  initWorkMap: function(){
    
    var colorlayer = new ol.layer.Tile({
      opacity: 1,
      visible: true,
      source: new ol.source.WMTS({
        url: 'http://ows.asitvd.ch/wmts/',
        layer: 'asitvd.fond_couleur',
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
      view: mapManager.defaultView(),
      target: 'work-map',
      layers: [colorlayer]
    });

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

    var centerMapButton = document.getElementById('map-work-center');
    centerMapButton.addEventListener('click', function(event) {
      event.preventDefault();
      map.setView(mapManager.defaultView())
    }, false);
  },
  initMapVisits: function(){
    
    var colorlayer = new ol.layer.Tile({
      opacity: 1,
      visible: true,
      source: new ol.source.WMTS({
        url: 'http://ows.asitvd.ch/wmts/',
        layer: 'asitvd.fond_couleur',
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
      view: mapManager.zoomedView(),
      target: 'map-visits',
      layers: [colorlayer]
    });

    var vectorSource = new ol.source.Vector();

    $.get( "/plein.geojson", function( data ) {
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
      toggleCondition: ol.events.condition.click,
      style: new ol.style.Style({
        fill: mapManager.selectFill(),
        stroke: mapManager.selectStroke()
      })
    });

    map.addInteraction(selectSingleClick);

    mapManager.mapsObjects.push(map)

    var centerMapButton = document.getElementById('map-visits-center');
    centerMapButton.addEventListener('click', function(event) {
      event.preventDefault();
      map.setView(mapManager.zoomedView())
    }, false);

    selectSingleClick.on('select', function(e) {
      $('#map-visits').siblings('.checkbox').find(':checked').prop('checked','')
      e.target.getFeatures().forEach(function(f){
        var checkbox = $('#map-visits').siblings('.checkbox').find('input[data-polygonid='+f.get('id')+']')
        checkbox.prop('checked', 'checked');
      })
    });

  },
  initMapBusiness: function(){
    
    var colorlayer = new ol.layer.Tile({
      opacity: 1,
      visible: true,
      source: new ol.source.WMTS({
        url: 'http://ows.asitvd.ch/wmts/',
        layer: 'asitvd.fond_couleur',
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
      view: mapManager.zoomedView(),
      target: 'map-business',
      layers: [colorlayer]
    });

    var vectorSource = new ol.source.Vector();

    var feats = []
    $.get( "/vide.geojson", function( data ) {
      vectorSource.addFeatures(new ol.format.GeoJSON().readFeatures(data))
      feats = new ol.format.GeoJSON().readFeatures(data)
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
      toggleCondition: ol.events.condition.click,
      multi: true,
      style: new ol.style.Style({
        fill: mapManager.selectFill(),
        stroke: mapManager.selectStroke()
      })
    });

    map.addInteraction(selectSingleClick);

    mapManager.mapsObjects.push(map);

    selectSingleClick.on('select', function(e) {
      $('#map-business').siblings('.checkbox').find(':checked').prop('checked','')
      $('#select-zones-business').prop('checked','')
      var tempFeatures = e.target.getFeatures().getArray()

      var valueArr = tempFeatures.map(function(item){ return item.get('id') });
      var isDuplicate = valueArr.some(function(item, idx){ 
          return valueArr.indexOf(item) != idx 
      });
      var duplicates = valueArr.filter(function(item, idx){ 
        return valueArr.indexOf(item) != idx 
      });

      tempFeaturesCol = e.target.getFeatures()

      if(isDuplicate){
        tempFeaturesCol.forEach(function (el,index) {
          if(el.get('id') == duplicates[0]){
            tempFeaturesCol.remove(el)
          }
        });
      }

      e.target.getFeatures().forEach(function(f){
        var checkbox = $('#map-business').siblings('.checkbox').find('input[data-polygonid='+f.get('id')+']')
        checkbox.prop('checked', 'checked');
      })
    });


    var centerMapButton = document.getElementById('map-business-center');
    centerMapButton.addEventListener('click', function(event) {
      event.preventDefault();
      map.setView(mapManager.zoomedView())
    }, false);


    $('#select-zones-business').change(function() {
      if(($(this).prop('checked'))){
        var selectableFeatures = selectSingleClick.getFeatures()
        selectableFeatures.clear()
        for (i = 0; i < feats.length; i++) { 
          selectableFeatures.push(feats[i])
          var checkbox = $('#map-business').siblings('.checkbox').find('input[data-polygonid='+feats[i].get('id')+']')
          checkbox.prop('checked', 'checked');
        }
      }else{
        var selectableFeatures = selectSingleClick.getFeatures()
        selectableFeatures.clear()
        for (i = 0; i < feats.length; i++) { 
          var checkbox = $('#map-business').siblings('.checkbox').find('input[data-polygonid]').prop('checked', '');
        }
      }
    });

  },
  defaultView: function(){
    return new ol.View({
      center:[539626.310436273, 156046.1932441873],
      zoom: 13,
      minZoom: 8,
      maxZoom: 18,
      extent: [488738.358855417, 114770.19797019214, 575876.5711005179, 158721.4892341685]
    })
  },
  zoomedView: function(){
    return new ol.View({
      center:[537906.4772998566, 151908.44192396867],
      zoom: 17,
      minZoom: 13,
      maxZoom: 18,
      extent: [488738.358855417, 114770.19797019214, 575876.5711005179, 158721.4892341685]
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