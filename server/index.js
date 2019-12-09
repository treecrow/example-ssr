const Koa = require('koa')
const app = new Koa();

// 记录请求时间
app.use(async (ctx, next) => {
    const {
        method,
        path,
    } = ctx.request
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${method} ${path} - ${ms}`);
});

// use-1
app.use(async (ctx, next) => {
    console.log('use-1')
    const {
        path,
    } = ctx.request
    await next();
    ctx.body += ` path:${path}`
});

// use-2
app.use(async (ctx, next) => {
    console.log('use-2')
    const {
        method,
    } = ctx.request
    await next();
    ctx.body = `method:${method}`
});

app.on('error', (err, ctx) => {
    console.log('koa-err', err)
})

app.listen(3001);
console.log('server listening in http://localhost:3001/')