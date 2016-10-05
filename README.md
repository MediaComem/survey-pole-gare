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

## Scroll page without blocking on maps
We have a very long page and people should scroll to navigate throug the questions or just to have a look of the form. We have multiple maps and they are taking all the page's width. Maps have native user behaviours with user's interactions, you can zoom it with the mouse's scroll (on desktop) or drag it with your fingers (on mobile). But these interactions are also used to scroll the page. So what happens when you are scrolling the page and your finger or your cursor hit the map? The map takes control of the scroll. Your smooth scroll is suddenly stopped and you are zooming on max level (desktop) or draging the map to the top of its bbox (mobile).

We would like to avoid it. When users are scrolling they sould not be stopped by maps. Our workaround is to detect window scroll event and disable map's default 

[Screencast!](docs/images/pole-gare-screencast1.gif)