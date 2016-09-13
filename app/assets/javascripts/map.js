var mapManager = {
  initHomeMap: function(){
  	
    var scrollStarted = false
    var timer = null; 

    var map = new ol.Map({
      view: mapManager.defaultView(),
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      controls: ol.control.defaults({ attribution: false }),
      interactions: mapManager.disableRotationInteraction()
    })

    
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
      toggleCondition: ol.events.condition.click,
      style: new ol.style.Style({
        fill: mapManager.selectFill(),
        stroke: mapManager.selectStroke()
      })
    });

    map.addInteraction(selectSingleClick);

    selectSingleClick.on('select', function(e) {
    	$('#map').siblings('input').find(':checked').prop('checked','')
      console.log(map.getView().getCenter())
      // console.log(e.target.getFeatures().item(0).get('AlphaID'))
      // $('#pullyCenterMap').siblings('.checkbox').find(':checked').prop('checked','')
      e.target.getFeatures().forEach(function(f){
      	var checkbox = $('#map').siblings('input[data-polygonid='+f.get('AlphaID')+']')
        checkbox.prop('checked', 'checked');
        console.log(f.get('AlphaID'))
      })
    });

    window.onscroll = function (e) {
      console.log("called when the window is scrolled")
      if(!scrollStarted){
        scrollStarted = true
        map.getInteractions().forEach(function(e){
          if(e instanceof ol.interaction.MouseWheelZoom){
            console.log("ol.interaction.MouseWheelZoom")
            // map.removeInteraction(e)
            e.setActive(false)
          }
          if(e instanceof ol.interaction.DragPan){
            console.log("ol.interaction.DragPan")
            // map.removeInteraction(e)
            e.setActive(false)
          }
          if(e instanceof ol.interaction.PinchZoom){
            console.log("ol.interaction.PinchZoom")
            // map.removeInteraction(e)
            e.setActive(false)
          }    
        })
      }
      if(timer !== null) {
        clearTimeout(timer);     
      }
      timer = setTimeout(function() {
        scrollStarted = false
        map.getInteractions().forEach(function(e){
          if(e instanceof ol.interaction.MouseWheelZoom){
            console.log("ol.interaction.MouseWheelZoom")
            // map.removeInteraction(e)
            e.setActive(true)
          }
          if(e instanceof ol.interaction.DragPan){
            console.log("ol.interaction.DragPan")
            // map.removeInteraction(e)
            e.setActive(true)
          }
          if(e instanceof ol.interaction.PinchZoom){
            console.log("ol.interaction.PinchZoom")
            // map.removeInteraction(e)
            e.setActive(true)
          }    
        })
      }, 200);
    }

  },
  initHomeMapOld: function(){
    
    var scrollStarted = false
    var timer = null; 

    var map = new ol.Map({
      view: mapManager.defaultView(),
      target: 'mapOld',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      controls: ol.control.defaults({ attribution: false }),
      interactions: mapManager.disableRotationInteraction()
    })

    var vectorSource = new ol.source.Vector();

    $.get( "/quartiersPully.geojson", function( data ) {
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

    selectSingleClick.on('select', function(e) {
      $('#mapOld').siblings('input').find(':checked').prop('checked','')
      // console.log(e.target.getFeatures().item(0).get('AlphaID'))
      // $('#pullyCenterMap').siblings('.checkbox').find(':checked').prop('checked','')
      e.target.getFeatures().forEach(function(f){
        var checkbox = $('#mapOld').siblings('input[data-polygonid='+f.get('AlphaID')+']')
        checkbox.prop('checked', 'checked');
        console.log(f.get('AlphaID'))
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
  }
}

$(function() {
  mapManager.initHomeMap()
  mapManager.initHomeMapOld()
})