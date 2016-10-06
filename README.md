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
[Complete here]

## Scroll page without blocking on maps
We have a very long page and people should scroll to navigate throug the questions or just to have a look of the form. We have multiple maps and they are taking all the page's width. Maps have native user behaviours with user's interactions, you can zoom it with the mouse's scroll (on desktop) or drag it with your fingers (on mobile). But these interactions are also used to scroll the page. So what happens when you are scrolling the page and your finger or your cursor hit the map? The map takes control of the scroll. Your smooth scroll is suddenly stopped and you are zooming on max level (desktop) or draging the map to the top of its bbox (mobile).

![Screencast](docs/images/pole-gare-screencast1.gif)

We would like to avoid it. When users are scrolling they sould not be stopped by maps. Our **workaround** is to detect window scroll event and disable map's default behaviour. 

```javascript
var scrollStarted = false;
var timer = null; 
window.onscroll = function (e) { // 1
  if(!scrollStarted){
    scrollStarted = true
    var map = mapManager.getMap();
    map.getInteractions().forEach(function(e){ // 2 
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
  if(timer !== null) { // 3
    clearTimeout(timer);     
  }
  timer = setTimeout(function() { // 4
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

We have some geographical questions in our survey. Basically users can select area(s) where they usually go. A map can have until 20 areas to select so we choose to put a button to select or unselect all area with one click.

Here an exemple of our map with the 20 areas that we can select. Buttons above the map help to _re-center the map_, _select all areas_ and _unselect all areas_.

This is pretty cool. But it was pretty hard to achieve this because of the default behaviour of `ol.interaction.Select`.