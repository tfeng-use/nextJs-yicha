// import request from './utils/request';
// import gloablObj from './common/global';
// import { fetchList } from './services/news';
let axios = require('axios')

const Koa = require('koa');
const app = new Koa();
const chalk = require('chalk');
const Router = require('koa-router');
const router = new Router();
const cors = require('koa2-cors');
const port = 3001;

app.use(async (ctx, next) => {
  await next();
});

router.get('/getNews', async (ctx, next) => {
  ctx.type = 'application/json;charset=UTF-8';
  await fetchNewsList(ctx.query).then(res => {
    ctx.status = 200; 
    ctx.body = {
      ...res.data
    }
  }).catch(err => {
    throw new Error(err);
  })
});

router.get('/getIdeals', async (ctx, next) => {
  ctx.type = 'application/json;charset=UTF-8';
  await fetchIdealsList(ctx.query).then(res => {
    ctx.status = 200; 
    ctx.body = {
      ...res.data
    }
  }).catch(err => {
    throw new Error(err);
  })
});

router.get('/getBusiness', async (ctx, next) => {
  ctx.type = 'application/json;charset=UTF-8';
  await fetchBusinessList(ctx.query).then(res => {
    ctx.status = 200; 
    ctx.body = {
      ...res.data
    }
  }).catch(err => {
    throw new Error(err);
  })
});

app.use(cors()).use(router.routes()).use(router.allowedMethods());

app.listen(port);
console.log(chalk.green(`server at http://localhost:${port}`));

function fetchNewsList(obj) {
  return axios.get('https://www.yichaapp.com/api/1ec08564dcc344018d6aaa910068f0f0/app/appNews/page', {
    params: obj,
    headers: {
      'x-tenant-flag': 1
    } 
  })
}

function fetchIdealsList(obj) {
  return axios.get('https://www.yichaapp.com/api/1ec08564dcc344018d6aaa910068f0f0/app/appNews/page', {
    params: obj,
    headers: {
      'x-tenant-flag': 1
    } 
  })
}

function fetchBusinessList(obj) {
  return axios.get('https://www.yichaapp.com/api/1ec08564dcc344018d6aaa910068f0f0/app/appBusinessOpportunity/page', {
    params: obj,
    headers: {
      'x-tenant-flag': 1
    } 
  })
}