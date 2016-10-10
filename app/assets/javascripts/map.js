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
    	
      $('#home-map').siblings('.gm-city-autocomplete').find('input[name*=q26]').val(e.target.getFeatures().item(0).get('id'))
      $('#home-map').siblings('.mapPlaceId').attr('data-id',e.target.getFeatures().item(0).get('id'))
    });

    var centerMapButton = document.getElementById('map-home-center');
    centerMapButton.addEventListener('click', function(event) {
      event.preventDefault();
      map.setView(mapManager.defaultView())
    }, false);

    $('#home-map').data('map', map);

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
      $('#work-map').siblings('.gm-city-autocomplete').find('input[name*=q27]').val(e.target.getFeatures().item(0).get('id'))
      $('#work-map').siblings('.mapPlaceId').attr('data-id',e.target.getFeatures().item(0).get('id'))
    });

    var centerMapButton = document.getElementById('map-work-center');
    centerMapButton.addEventListener('click', function(event) {
      event.preventDefault();
      map.setView(mapManager.defaultView())
    }, false);

    $('#work-map').data('map', map);

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
      view: mapManager.businessAndVisitsMapsView(),
      target: 'map-visits',
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

    var target = map.getTarget(),
    jTarget = typeof target === "string" ? $("#" + target) : $(target);
    $(map.getViewport()).on('mousemove', function(e) {
      var pixel = map.getEventPixel(e.originalEvent);
      var hit = map.forEachFeatureAtPixel(pixel, function() {
        return true;
      });
      if (hit) {
        jTarget.css("cursor", "pointer");
      } else {
        jTarget.css("cursor", "");
      }
    });

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
      map.setView(mapManager.businessAndVisitsMapsView())
    }, false);

    selectSingleClick.on('select', function(e) {
      $('#map-visits').siblings('.checkbox').find(':checked').prop('checked','')
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
        var checkbox = $('#map-visits').siblings('.checkbox').find('input[data-polygonid='+f.get('id')+']')
        checkbox.prop('checked', 'checked');
      })
    });


    var centerMapButton = document.getElementById('map-visits-center');
    centerMapButton.addEventListener('click', function(event) {
      event.preventDefault();
      map.setView(mapManager.businessAndVisitsMapsView())
    }, false);


    $('#q10 #map-select-all').on('click',function(e) {
        e.preventDefault();
        var selectableFeatures = selectSingleClick.getFeatures()
        selectableFeatures.clear()
        for (i = 0; i < feats.length; i++) { 
          selectableFeatures.push(feats[i])
          var checkbox = $('#map-visits').siblings('.checkbox').find('input[data-polygonid='+feats[i].get('id')+']')
          checkbox.prop('checked', 'checked');
        }
    });

    $('#q10 #map-unselect-all').on('click',function(e) {
        e.preventDefault();
        var selectableFeatures = selectSingleClick.getFeatures()
        selectableFeatures.clear()
        for (i = 0; i < feats.length; i++) { 
          var checkbox = $('#map-visits').siblings('.checkbox').find('input[data-polygonid]').prop('checked', '');
        }
    });

    $('#map-visits').data('map', map);

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
      view: mapManager.businessAndVisitsMapsView(),
      target: 'map-business',
      layers: [colorlayer]
    });

    var vectorSource = new ol.source.Vector();

    var feats = []
    $.get( "/plein.geojson", function( data ) {
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

    var target = map.getTarget(),
    jTarget = typeof target === "string" ? $("#" + target) : $(target);
    $(map.getViewport()).on('mousemove', function(e) {
      var pixel = map.getEventPixel(e.originalEvent);
      var hit = map.forEachFeatureAtPixel(pixel, function() {
        return true;
      });
      if (hit) {
        jTarget.css("cursor", "pointer");
      } else {
        jTarget.css("cursor", "");
      }
    });

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
      var tempFeatures = e.target.getFeatures().getArray()
      var valueArr = tempFeatures.map(function(item){ return item.get('id') });
      var isDuplicate = valueArr.some(function(item, idx){ 
          return valueArr.indexOf(item) != idx 
      });
      var duplicates = valueArr.filter(function(item, idx){ 
        return valueArr.indexOf(item) != idx 
      });

      tempFeaturesCol = e.target.getFeatures()
      
      var indexsToRemove = []

      if(isDuplicate){
        console.log(duplicates)
        tempFeaturesCol.forEach(function (el,index) {
          if(el.get('id') == duplicates[0]){
            indexsToRemove.push(index)
          }
        });

        for (var i = indexsToRemove.length - 1; i >= 0; i--) {
          tempFeaturesCol.removeAt(indexsToRemove[i])
        }

      }

      e.target.getFeatures().forEach(function(f){
        var checkbox = $('#map-business').siblings('.checkbox').find('input[data-polygonid='+f.get('id')+']')
        checkbox.prop('checked', 'checked');
      })
    });

    var centerMapButton = document.getElementById('map-business-center');
    centerMapButton.addEventListener('click', function(event) {
      event.preventDefault();
      map.setView(mapManager.businessAndVisitsMapsView())
    }, false);


    $('#q8 #map-select-all').on('click',function(e) {
        e.preventDefault();
        var selectableFeatures = selectSingleClick.getFeatures()
        selectableFeatures.clear()
        for (i = 0; i < feats.length; i++) { 
          selectableFeatures.push(feats[i])
          var checkbox = $('#map-business').siblings('.checkbox').find('input[data-polygonid='+feats[i].get('id')+']')
          checkbox.prop('checked', 'checked');
        }
    });

    $('#q8 #map-unselect-all').on('click',function(e) {
        e.preventDefault();
        var selectableFeatures = selectSingleClick.getFeatures()
        selectableFeatures.clear()
        for (i = 0; i < feats.length; i++) { 
          var checkbox = $('#map-business').siblings('.checkbox').find('input[data-polygonid]').prop('checked', '');
        }
    });

  },
  defaultView: function(){
    return new ol.View({
      center:[539626.310436273, 156046.1932441873],
      zoom: 13,
      minZoom: 11,
      maxZoom: 18,
      extent: [496057.20431372256, 134070.54761219912, 583195.4165588234, 178021.8388761755]
    })
  },
  businessAndVisitsMapsView: function(){
    return new ol.View({
      center:[537906.4772998566, 151908.44192396867],
      zoom: 17,
      minZoom: 14,
      maxZoom: 18,
      extent: [532460.3390345378, 149161.48621997016, 543352.6155651754, 154655.39762796718]
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
  mapExist: function(id){
    
    for (var i = 0, l = mapManager.mapsObjects.length; i < l; i++) {
      var map = mapManager.mapsObjects[i];
      
      if(map.getTarget() == id){
        return true
      }else{
        
      }
    }
  },
  disableZoomAndPanWhenScrolling: function(){
    var scrollStarted = false
    var timer = null; 
    window.onscroll = function (e) {
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
  },
  resizeMapsForMobile: function(mq){
    if (mq.matches) {
      for (var i = 0, l = mapManager.mapsObjects.length; i < l; i++) {
        var map = mapManager.mapsObjects[i];
        if(map.getTarget() == "map-business" || map.getTarget() == "map-visits"){
          map.setView(mapManager.businessAndVisitsMapsView())
        }else{
          map.setView(mapManager.defaultView())
        }
      }
    } else {
      for (var i = 0, l = mapManager.mapsObjects.length; i < l; i++) {
        var map = mapManager.mapsObjects[i];
        if(map.getTarget() == "map-business" || map.getTarget() == "map-visits"){
          map.setView(new ol.View({
            center:[537906.4772998566, 151908.44192396867],
            zoom: 15,
            minZoom: 13,
            maxZoom: 18,
            extent: [536425.5098768313, 151116.00491979346, 539196.3521521689, 152549.1992001405]
          }));
        }else{
          map.setView(new ol.View({
            center:[539492.545636774, 155931.53770175955],
            zoom: 11,
            minZoom: 10,
            maxZoom: 18,
            extent: [514726.9484723769, 144465.98345898313, 559060.4248777791, 167397.09194453602]
          }));
        }
      }
    }
  }
}

/* Display Map or commune autocomplete for location */
var locationChoice = function(elem,radiogroup,qn){
  $(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+']').hide();
  $(elem).hide();
  
  $(elem).siblings('.map-tools').hide();
  
  $("input[name="+radiogroup+"]:radio").change(function(){
    
    $(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+']').val('');
    if($(this).val() == 'autre'){
      $(elem).hide();
      $(elem).siblings('.map-tools').hide();
      
      $(elem).siblings('.gm-city-autocomplete').find(".gm-city-autocomplete-input").typeahead('destroy');
      $(elem).siblings('.gm-city-autocomplete').find(".gm-city-autocomplete-input").attr("placeholder", "Précisez");
      
      
      $(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+']').show();
    }
    if($(this).val() == 'map'){
      $(elem).siblings('.map-tools').show();
      $(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+']').hide();
      $(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+']').val($(elem).siblings('.mapPlaceId').attr('data-id'));
      
      $(elem).siblings('.gm-city-autocomplete').find(".gm-city-autocomplete-input").typeahead('destroy');
      
      
      $(elem).show()
      mapManager.mapExist($(elem).attr('id'))
      if($(elem).attr('id') == "home-map" && !mapManager.mapExist($(elem).attr('id'))){
        mapManager.initHomeMap()
        checkScreenSize()
      }
      if($(elem).attr('id') == "work-map" && !mapManager.mapExist($(elem).attr('id'))){
        mapManager.initWorkMap()
        checkScreenSize()
      }
      
    }
    if($(this).val() == 'commune'){
      
      
      $(elem).siblings('.map-tools').hide();
      $(elem).hide();
      var engine = new Bloodhound({
        local: gmVilles,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        datumTokenizer: Bloodhound.tokenizers.whitespace
      });
      
      $(elem).siblings('.gm-city-autocomplete').find(".gm-city-autocomplete-input").typeahead({hint: true, highlight: true}, {source: engine});
      $(elem).siblings('.gm-city-autocomplete').find(".gm-city-autocomplete-input:nth-child(2)").attr("placeholder", "Indiquez le nom de la ville");
      $(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+' ]').show();
    }
  });
};

var checkScreenSize = function(){
  if (matchMedia) {
    var mq = window.matchMedia("(min-width: 650px)");
    mq.addListener(mapManager.resizeMapsForMobile);
    mapManager.resizeMapsForMobile(mq)
  }
}

$(function() {
  mapManager.initMapVisits()
  mapManager.initMapBusiness()
  mapManager.disableZoomAndPanWhenScrolling()
  locationChoice($('#home-map'),'location_choice',26);
  locationChoice($('#work-map'),'work_location_choice',27);
  checkScreenSize()
})