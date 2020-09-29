const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

// Simple middleware example
// app.use(async ctx => (ctx.body = 'Hello World'));

router.get('/test', ctx => (ctx.body = 'Hello Test'))

// Router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3333, () => console.log('Server started...'));