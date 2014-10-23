var koa = require('koa'),
    serve = require('koa-static'),
    router = require('koa-router'),
    routes = require('./routes'),
    handlebars = require('koa-handlebars'),
    app = koa()
;

app.use(serve('public'));

app.use(handlebars({
  defaultLayout: "main"
}));

app.use(router(app));


app
  .get('/', routes.index)
  .get('/page/:page/:skip', routes.page);

app.listen(process.env.PORT || 3000);
