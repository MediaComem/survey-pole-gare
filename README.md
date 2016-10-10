# README


## .env
The `config/database.yml` `config/secrets.yml` files use environment variables for some config values. Each contributor must have a `.env` file in the app root with values for the following environment variables:

* `DB_USER`
* `DB_NAME_DEV`
* `DB_NAME_TEST`
* `ADMIN_LOGIN`
* `ADMIN_PWD`

Example
    
`.env` content
  `DB_USER=[your_db_username]`
  
## General infos about libs and stuffs we use

This project is a big survey with cartographic questions. User can select features on map to respond to some questions. This can be very useful but it brings some problems that we try to solve here.
For theses cartographic questions we choose OpenLayers 3 (v3.17.1). We will not argue here why we choose it, but it is free, open source and quite easy to use.

## Scroll page without blocking on maps
We have a very long page and people should scroll to navigate throug the questions or just to have a look of the form. We have multiple maps and they are taking all the page's width. Maps have native user behaviours with user's interactions, you can zoom it with the mouse's scroll (on desktop) or drag it with your fingers (on mobile). But these interactions are also used to scroll the page. So what happens when you are scrolling the page and your finger or your cursor hit the map? The map takes control of the scroll. Your smooth scroll is suddenly stopped and you are zooming on max level (desktop) or draging the map to the top of its bbox (mobile).

![Screencast](docs/images/pole-gare-screencast1.gif)

We would like to avoid it. When users are scrolling they sould not be stopped by maps. Our **workaround** is to detect window scroll event and disable map's default behaviour. 

```javascript
var scrollStarted = false;
var timer = null; 
window.onscroll = function (e) { // (1.)
  if(!scrollStarted){
    scrollStarted = true
    var map = mapManager.getMap();
    map.getInteractions().forEach(function(e){ // (2.) 
      if(e instanceof ol.interaction.MouseWheelZoom){
        e.setActive(false);
      }
      if(e instanceof ol.interaction.DragPan){
        e.setActive(false);
      }
      if(e instanceof ol.interaction.PinchZoom){
        e.setActive(false);
      }    
    }); 
  }
  if(timer !== null) { // (3.)
    clearTimeout(timer);     
  }
  timer = setTimeout(function() { // (4.)
    scrollStarted = false;
    var map = mapManager.getMap();
    map.getInteractions().forEach(function(e){
      if(e instanceof ol.interaction.MouseWheelZoom){
        e.setActive(true);
      }
      if(e instanceof ol.interaction.DragPan){
        e.setActive(true);
      }
      if(e instanceof ol.interaction.PinchZoom){
        e.setActive(true);
      }    
    }) 
  }, 200);
}
```

1. We detect when the screen starts to be scrolled.
2. We disable the map's default interactions (`MouseWheelZoom`,`DragPan`,`PinchZoom`)
3. If a timer is set, we cancel it
4. We choose to set a timer every time a scroll event is triggered. We think that when users are scrolling our page, the scroll can stop during a short time. The maps interactions should not bet active during this time. 200ms is an aribtrary time that we choose. We could investigate more time to choose the right time :-). After this _200ms_ timer is expires, the map's default interactions are enabled.

Now we can scroll our page as smoothly as it should be.
![Screencast](docs/images/pole-gare-screencast2.gif)

## ol3 Select all features then unselect them individually

We have some geographical questions in our survey. Basically users can select area(s) where they usually go. A map can have until 20 areas to select so we choose to put a button to select or unselect all areas with one click.

Here an exemple of our map with the 20 areas (in yellow) that we can select. Buttons above the map help to _re-center the map_, _select all areas_ and _unselect all areas_.

[put image here]

With openlayers this is pretty simple to do but pretty weird as well.

To begin we need to set our map with the features

```javascript
var vectorSource = new ol.source.Vector();
var feats = [];
$.get( "/plein.geojson", function( data ) {
  vectorSource.addFeatures(new ol.format.GeoJSON().readFeatures(data));
  feats = new ol.format.GeoJSON().readFeatures(data);
});
var vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  style: new ol.style.Style({
    fill: mapManager.defaultFill(),
    stroke: mapManager.defaultStroke()
  })
});
map.addLayer(vectorLayer);
```

Then we have to setup the `ol.interaction.Select`

```javascript
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
```
This will enable the map's _select_ and _unselect_ interactions. Whith these interactions we can select/unselect features individually. To select all features in the same time we need to setup a custom button (`#map-select-all`). On click, this button will trigger some code that will make the job: 
1. Get all the features already selected
2. Clear them all
3. Put all features (`feats`) inside the selected features array

```javascript
$('#q8 #map-select-all').on('click',function(e) {
  e.preventDefault();
  var selectableFeatures = selectSingleClick.getFeatures(); //
  selectableFeatures.clear();
  for (i = 0; i < feats.length; i++) { 
    selectableFeatures.push(feats[i]);
  }
});
```

To unselect all you just have to do the same without adding the features :-)

Now the problem is how to unselect features individually when you add features manually as we did. By default _ol3_ will not care about the features you add previously and will add them again in `selectSingleClick` features collection. Below an example of this.

![Screencast](docs/images/pole-gare-screencast3.gif)

You can see that if you select all features, you can not unselect them individually. It's like if you re select a selected feature.

To avoid it we have to override what happens when a select event is triggerd. 

```javascript
selectSingleClick.on('select', function(e) {
  var featuresArray = e.target.getFeatures().getArray() // (1.)
  var featuresIdArray = featuresArray.map(function(item){ return item.get('id') }); //(2.)
  var duplicates = featuresIdArray.filter(function(item, idx){ 
    return featuresIdArray.indexOf(item) != idx //(3.)
  });
  tempFeaturesCollection = e.target.getFeatures()
  var indexsToRemove = [] // Used to store duplicates features indexs
  if(duplicates.length > 0){ //(4.)
    tempFeaturesCollection.forEach(function (el,index) {
      if(el.get('id') == duplicates[0]){
        indexsToRemove.push(index)
      }
    });
    for (var i = indexsToRemove.length - 1; i >= 0; i--) {
      tempFeaturesCollection.removeAt(indexsToRemove[i]) // (5.)
    }
  }
});
```

As we said before, _ol3_ add the features you select in the `selectSingleClick` features collection. No matter if the feature is already present in the collection. We need to check the "manually" in the collection the existence of the feature selected. This is how we proceeded.

1. Get the features selected collection as an Array.
2. Map the array to get the features ids.
3. Check if the array contains duplicate.
4. If it contains duplicates, parse the collection to know where the duplicates features are.
5. We know the duplicates features index so we can remove them from the features collection.

Now it works

![Screencast](docs/images/pole-gare-screencast4.gif)


## Backup heroku database and import it to local database

First backup your database

`$ heroku pg:backups capture`

Then import it to your machine

`$ curl -o latest.dump 'heroku pg:backups public-url'`

Finally copy your data to your local database

`pg_restore --verbose --clean --no-acl --no-owner -d database_name latest.dump`