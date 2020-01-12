/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dbe9f3ba60c46b3b8c7374ccc53470b9"
  },
  {
    "url": "about/index.html",
    "revision": "845ff257cbe64aa706597a2d0bb7200e"
  },
  {
    "url": "assets/css/0.styles.1dc100a6.css",
    "revision": "87d963c0cb8f898a7b58fc6c816bb74c"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.4eb47e78.js",
    "revision": "0373d28224158d10aafbcc9796e880bd"
  },
  {
    "url": "assets/js/10.7cfee673.js",
    "revision": "f6f5fee9821db174cf624d1167842e34"
  },
  {
    "url": "assets/js/11.5aa95f6b.js",
    "revision": "99e2e00a6f70975b81790d89fb73de1a"
  },
  {
    "url": "assets/js/12.66f1503f.js",
    "revision": "bc8b1142771994510c637256cdcbd273"
  },
  {
    "url": "assets/js/13.543d3083.js",
    "revision": "35eda39559102b874b776381735975f7"
  },
  {
    "url": "assets/js/14.44dd941a.js",
    "revision": "683e768818e01e511273a5da810ebc18"
  },
  {
    "url": "assets/js/15.0a0a3a2c.js",
    "revision": "c7399d0faa6fcf9b970a18e74cbe3060"
  },
  {
    "url": "assets/js/16.f553955a.js",
    "revision": "0f4f8bdb3b1cc68186b3a007d5136b1f"
  },
  {
    "url": "assets/js/17.4dd6651d.js",
    "revision": "440699571475dcc7bbd04ce1800d9957"
  },
  {
    "url": "assets/js/18.3c012ab6.js",
    "revision": "c26c4d48ca6997a28cefe3d8d966655e"
  },
  {
    "url": "assets/js/19.a8b7a7f2.js",
    "revision": "6685ee7ee66a6b7c57dec9d40504d9b6"
  },
  {
    "url": "assets/js/20.8250cb33.js",
    "revision": "d662a905188ae9996847acddd67290e9"
  },
  {
    "url": "assets/js/21.08c59b4b.js",
    "revision": "ff92d084b7d1eb7e5c76816b1ef24d11"
  },
  {
    "url": "assets/js/22.014b18fb.js",
    "revision": "cefc7c896e42b8ab27e6839c0a2e541c"
  },
  {
    "url": "assets/js/23.80d13d63.js",
    "revision": "48b422ac7c75283cc94d23ee67ff91ce"
  },
  {
    "url": "assets/js/24.468ca6b9.js",
    "revision": "9af8445133e6aba86f39ce0bb27ebfba"
  },
  {
    "url": "assets/js/25.6aa3fa8b.js",
    "revision": "a2c86a09eded88836052c5caab20622a"
  },
  {
    "url": "assets/js/26.cb3c26a6.js",
    "revision": "aeba6125885320ca94f5e4e20dbbbdb1"
  },
  {
    "url": "assets/js/27.ccebff92.js",
    "revision": "f2af585f6ebf7bed3548057db645b720"
  },
  {
    "url": "assets/js/28.4d26003d.js",
    "revision": "0b2a3d075f903357f3fd60691558ccee"
  },
  {
    "url": "assets/js/29.aa627f6f.js",
    "revision": "ebb675918b429c7d4a1b1ddda8e2b294"
  },
  {
    "url": "assets/js/30.f6a198b7.js",
    "revision": "edd8c572bc50f4cca15444a3416e7d79"
  },
  {
    "url": "assets/js/31.c9ae8d35.js",
    "revision": "377edf08f835f9aab29163d805851672"
  },
  {
    "url": "assets/js/32.0c757b4d.js",
    "revision": "50fc81b0f2a6456634e6a8a10381a78f"
  },
  {
    "url": "assets/js/33.48bc585b.js",
    "revision": "8610cb95a365dfc99b110b3b009edee1"
  },
  {
    "url": "assets/js/34.ea2484c4.js",
    "revision": "7e3236215df7007ca053867feab6e572"
  },
  {
    "url": "assets/js/35.03bc56c3.js",
    "revision": "47b3ce80fb815f2ea2eeba177f395f63"
  },
  {
    "url": "assets/js/36.94be0859.js",
    "revision": "60ac6adbab2aa78070ef90298391510f"
  },
  {
    "url": "assets/js/37.82b7f934.js",
    "revision": "6425eb881c862388f5e0b8e8f18b5d96"
  },
  {
    "url": "assets/js/38.e6f47327.js",
    "revision": "2e3069407112821df431c826a64814f2"
  },
  {
    "url": "assets/js/39.e24b09ed.js",
    "revision": "144c6b10fb6bb38a6bd041aa813d007d"
  },
  {
    "url": "assets/js/4.3f265776.js",
    "revision": "4e3e3fdfa1fdc9a2a76761df6d199f3f"
  },
  {
    "url": "assets/js/40.837b2a7e.js",
    "revision": "270bfe6a8a1bc859cc9c99d677e7f284"
  },
  {
    "url": "assets/js/5.d3ca2254.js",
    "revision": "bee620c553065961ddc90ca23bca5fd2"
  },
  {
    "url": "assets/js/6.86137d22.js",
    "revision": "f49a3972f892dbb9b8721da3d79fa4cb"
  },
  {
    "url": "assets/js/7.be40df08.js",
    "revision": "fc7b3497a9d4d00ce74a9df1d51b81dc"
  },
  {
    "url": "assets/js/8.358d0c28.js",
    "revision": "056336b611752824e7bbf4437c038c03"
  },
  {
    "url": "assets/js/9.8b6b9a93.js",
    "revision": "5318df89587f62b486ffe67c5810ef49"
  },
  {
    "url": "assets/js/app.fbf5d3b2.js",
    "revision": "05f6159153268d2cb2485e67d2404b23"
  },
  {
    "url": "assets/js/vendors~flowchart.c17ab29e.js",
    "revision": "815e2a2d3ec95ac5b27c420854595cb8"
  },
  {
    "url": "categories/index.html",
    "revision": "d85b4c18d23b0cc3f4c4eb23369531de"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "c83a86cba4c3f02f93c519c3e0eab5c5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c060d0c3216e7da56584c7022c80600b"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "c9152a09b30631081a0693a2d10b7387"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "568e936ff1164d0b0d04d26c7e3da928"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "be56ec6d5369b571081eaab7104bac55"
  },
  {
    "url": "img/ali/app_layout.png",
    "revision": "014d0cfed63df7dee08863aad495507d"
  },
  {
    "url": "img/docker/搜狗截图20180303145450.png",
    "revision": "b72094f2dc137f642b258d659ba7c5de"
  },
  {
    "url": "img/docker/搜狗截图20180303145531.png",
    "revision": "0192e016514ae6de37acb335483c6365"
  },
  {
    "url": "img/docker/搜狗截图20180303165113.png",
    "revision": "57658a824fedd4daf6c46fb28ddf9a2e"
  },
  {
    "url": "img/EChartsStudy/接入百度地图.png",
    "revision": "6536c736188c9ea30914de1c6f09e68c"
  },
  {
    "url": "img/EChartsStudy/柱+折线图.png",
    "revision": "012d1f48b8e15cf20e763ed5310210b0"
  },
  {
    "url": "img/EChartsStudy/迁徙图.png",
    "revision": "f9079e675926a79a70417595adf6ce6e"
  },
  {
    "url": "img/EChartsStudy/饼图.png",
    "revision": "5394c36784b787fd477693968c133693"
  },
  {
    "url": "img/essay/NiceBlogExamples.png",
    "revision": "4ae74d1a112937624ddcb289604d9d2b"
  },
  {
    "url": "img/essay/ToDo.png",
    "revision": "6aa4b2d90ea09c3cbb13dbc24b5d3947"
  },
  {
    "url": "img/HashMap/20180423002750407.png",
    "revision": "f35b7d5feca86f51427b731dd5310e6e"
  },
  {
    "url": "img/itext/pdf2.png",
    "revision": "f557069c584ea0c2bf4031d2306beb5f"
  },
  {
    "url": "img/itext/pdf3.png",
    "revision": "18753afbd11acf6c3864eab6b2e2dd16"
  },
  {
    "url": "img/jvm/gc001.png",
    "revision": "9096a5c1aa708e99e4a0eb011c39f110"
  },
  {
    "url": "img/jvm/gc002.png",
    "revision": "04f03419851adab68f221464d5f236fe"
  },
  {
    "url": "img/jvm/gc003.png",
    "revision": "7c61067e76f98493875fb0318535706f"
  },
  {
    "url": "img/jvm/gc004.png",
    "revision": "fb57425f659c93e108b52848734291a5"
  },
  {
    "url": "img/jvm/gc005.png",
    "revision": "39041532371209775ba5bcf397604011"
  },
  {
    "url": "img/jvm/jvm001.png",
    "revision": "645747e72e6790bb9a70ae6166a61a33"
  },
  {
    "url": "img/jvm/jvm002.png",
    "revision": "f46c1bb2f52ba3826599cf6a5959313e"
  },
  {
    "url": "img/jvm/jvm003.png",
    "revision": "8cfa470daab1e9cde72e91a564182b95"
  },
  {
    "url": "img/jvm/jvm004.png",
    "revision": "53c75a6570d0adf443287266c0fe7efe"
  },
  {
    "url": "img/rabbitmq/rabbitmq.png",
    "revision": "f8ed6faa42fcdba67c8ed7b2c59ac495"
  },
  {
    "url": "img/rabbitmq/topic.png",
    "revision": "76d56b40d2a16592fef156f73f228d20"
  },
  {
    "url": "img/rabbitmq/队列模型.png",
    "revision": "805d0059bd3df57f88b1fb5e0631a654"
  },
  {
    "url": "img/redis/缓存更新.png",
    "revision": "29bb26641ac9ff576cffab4de9b0a4f7"
  },
  {
    "url": "img/redis/缓存查询.png",
    "revision": "2fc82232bd83608e50aa29ecba90b733"
  },
  {
    "url": "img/swagger2/swagger2.png",
    "revision": "0ac3840245a81620a4365409ce608e81"
  },
  {
    "url": "img/viaStart/thumb.png",
    "revision": "0d4c9d70e021216c051bf1ce37a37da3"
  },
  {
    "url": "img/vuedemo/1.png",
    "revision": "ebc5b5e16665f1d3494b9ca7afce270f"
  },
  {
    "url": "img/vuedemo/2.png",
    "revision": "8c7a40b960334a58a097b1c2292a8fa4"
  },
  {
    "url": "img/vuedemo/3.png",
    "revision": "acb3adcb4752f27bc621c244252a63ae"
  },
  {
    "url": "img/vuedemo/4.png",
    "revision": "e0600647cb12f4f3a100383f91baa7c2"
  },
  {
    "url": "img/vuedemo/5.png",
    "revision": "c0b6c66dd9e8df10c0dda568268ff314"
  },
  {
    "url": "img/vuedemo/6.png",
    "revision": "2ccae59d8c1134edc7fdaf0a6e41e78d"
  },
  {
    "url": "index.html",
    "revision": "0ffa98781d0f6833e7a1b255c4b5a3e4"
  },
  {
    "url": "love/love.html",
    "revision": "8d53a8c3042c710f16ac57d20611988d"
  },
  {
    "url": "love/比心.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "tag/index.html",
    "revision": "9b9a501ec56ef758e61e90bbbe602f09"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "280c50289c149c42b23b4a7dabd23415"
  },
  {
    "url": "tags/ECharts/index.html",
    "revision": "10432996ede76c6c0dd6adae4c2643d6"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "be8e321065be5167f401da2952c4f151"
  },
  {
    "url": "tags/Java/page/2/index.html",
    "revision": "55da5c59311750c4cbb8f7411b79822d"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "4389844aed039eb3ced0ce6e8ad5d550"
  },
  {
    "url": "tags/json/index.html",
    "revision": "6b13dc6aa15e70640749ba464c026409"
  },
  {
    "url": "tags/jvm/index.html",
    "revision": "3af7ce716deb1c907689285c00fbe236"
  },
  {
    "url": "tags/pdf/index.html",
    "revision": "64a12cfe3d1cb478218af3d12389fc1f"
  },
  {
    "url": "tags/poi/index.html",
    "revision": "8dc4bcc4eb89ae6a6cd2cc12a69d5390"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "872033075f9c3dfa16cebaa066078da6"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "3c6868472c86aec521c27c92fc4384e6"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "56d917647e3e1964e3952330f9b5a38b"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "d87aaa1305c4ad69dc70271c2abc9f57"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "eb2d6e0c1089dd9cf94d4f59a0ef5ccb"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "e790942f45e6947fcc5433abea1bb60a"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "0a242c896106b711d5c91a5fa5c2e9b0"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "272e9618bcb15f968210b5aff2ca4e43"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "7fe48fef2ac16bea85db814d2a22de1a"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "f06e59de9d6f0b665ca0490fbfeda2f0"
  },
  {
    "url": "timeline/index.html",
    "revision": "0fdc14367d71dfe69ca96c80c5e7ee93"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "1d34c29e1844ee1505f6c00d33219036"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "3e8bf5b27e88b82d9e99b6f5f412da97"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "40d81c825792a05d093bd7be25e8588b"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "7af4559918d54f71c89956c86a927029"
  },
  {
    "url": "views/front-end/EChartsStudy.html",
    "revision": "3618015795ee43277256eb7ad463e2f4"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "b7c12639644bded3bd58f05a33d9ecd0"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "e5966b194dd332cece4ac31e736cd4af"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "d5780fbc9514452a03ac8e027bf19eea"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "2ff4f9959f161ff05060f0d1ede9f73c"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "04cd0a69e72c99cef6dcad472d84c9d0"
  },
  {
    "url": "views/index.html",
    "revision": "ab897f7c5cf104ec806fdb4c14fc8fe9"
  },
  {
    "url": "views/java/ArrayList.html",
    "revision": "cbd55aaa3fa7a42fd777b83d68749ec2"
  },
  {
    "url": "views/java/docker.html",
    "revision": "8d1f6892b4e02c0e1f356d7c82b56f6d"
  },
  {
    "url": "views/java/HashMap.html",
    "revision": "745316d83f7cdec74ad5df4ee84cb752"
  },
  {
    "url": "views/java/itext.html",
    "revision": "a971bfe9dce839d06eb1eaab1b147ceb"
  },
  {
    "url": "views/java/jvm.html",
    "revision": "15ea47bc88107f389aef070ebb3bec0e"
  },
  {
    "url": "views/java/poi.html",
    "revision": "8c40e512ce8f606a24a581ca0ef3b825"
  },
  {
    "url": "views/java/quartz.html",
    "revision": "42f4a4008ccfeb474a4598a594cd6afc"
  },
  {
    "url": "views/java/rabbitmq.html",
    "revision": "8136e26547173993f6fff406daaf1bc7"
  },
  {
    "url": "views/java/redis.html",
    "revision": "a0490e577c40bce75db295b62ecce8a2"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "5be017c39198e76fb1647008077f1b44"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "6b3436d403d9969eb0eda09cc407d02b"
  },
  {
    "url": "views/java/thread.html",
    "revision": "5112d63e37e7e9c274daff9a7638d9be"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "6e72868a382072f759f930fe25c3a773"
  },
  {
    "url": "vuepress/head.png",
    "revision": "8919827e695ae6a739b646f05bb5d991"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "bf80a6f75ed6aff874261bb1d13ff529"
  },
  {
    "url": "vuepress/znote.png",
    "revision": "0098af9084c619fae94c3d593c609bbd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
