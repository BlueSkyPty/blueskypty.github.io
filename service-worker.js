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
    "revision": "a1dd30976f6d5baefcafc8609deeb4d0"
  },
  {
    "url": "assets/css/0.styles.803c785b.css",
    "revision": "88b79bf6ecf255b51d03007ad6478102"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.1523e2ce.js",
    "revision": "30b68addb40106d7cab8d6ec17f188fd"
  },
  {
    "url": "assets/js/10.6b6591e1.js",
    "revision": "af8d38113c916e9440706cfb57d208f1"
  },
  {
    "url": "assets/js/100.3ddfa99c.js",
    "revision": "e46b19555b941b2c47ec8f3e1f3107db"
  },
  {
    "url": "assets/js/101.391c3281.js",
    "revision": "56fde3dca9f5bfe4615e4323ab21ff77"
  },
  {
    "url": "assets/js/102.2c722cb3.js",
    "revision": "ac494188881aa7cb855cbbd321356415"
  },
  {
    "url": "assets/js/103.c48ff426.js",
    "revision": "b1309dd9f3feaf7edbf49c5729a55835"
  },
  {
    "url": "assets/js/104.e8c0bcc1.js",
    "revision": "c566d197ef142691b6493c868b9f8ea1"
  },
  {
    "url": "assets/js/105.350bc720.js",
    "revision": "42db8b9097a1ff1f26b70ce5ee81248e"
  },
  {
    "url": "assets/js/106.0dbcedfd.js",
    "revision": "7f48ed81bb5f983674b6dd330eb98d65"
  },
  {
    "url": "assets/js/107.522d31b1.js",
    "revision": "270fb18ad606b7c92620fd49d08651e3"
  },
  {
    "url": "assets/js/108.805e21ab.js",
    "revision": "b5d5e28563ca31ff8267b2957e8cfc19"
  },
  {
    "url": "assets/js/11.e67f5c27.js",
    "revision": "eeeed78d6f6478a992ae43e22af1ef7f"
  },
  {
    "url": "assets/js/12.62aaabd1.js",
    "revision": "27f7a5eb5d44905442177f1645bdc95f"
  },
  {
    "url": "assets/js/13.b92fe7a6.js",
    "revision": "45f8980a90a40fd21d2c2389a8a0beea"
  },
  {
    "url": "assets/js/14.f413b7ba.js",
    "revision": "febbaf7fa046c3f1dd7827f24e6015ea"
  },
  {
    "url": "assets/js/15.21d805fb.js",
    "revision": "12101a2ff2c6e475a2d3183da0d83138"
  },
  {
    "url": "assets/js/16.0fca6bb6.js",
    "revision": "b711a3a8f368b280edb1b6cad442834d"
  },
  {
    "url": "assets/js/17.a1f31e8a.js",
    "revision": "5c2fd7305252f1e918bc14ba0b6a8ded"
  },
  {
    "url": "assets/js/18.a557e4e0.js",
    "revision": "f41ef5c32ea6f14469c6d5db09d52ea0"
  },
  {
    "url": "assets/js/19.0e9894a1.js",
    "revision": "d033c0a1d0ab4e95918373c5f83d772a"
  },
  {
    "url": "assets/js/20.63b18a09.js",
    "revision": "c2db8f1a245f8955786ecbef1cdfc383"
  },
  {
    "url": "assets/js/21.0972ae3e.js",
    "revision": "d0ad1d508eef279930d13ba18bbd2391"
  },
  {
    "url": "assets/js/22.8af9171e.js",
    "revision": "b79950405d1a26c99793c0dc5adceb73"
  },
  {
    "url": "assets/js/23.1b061fab.js",
    "revision": "9614ee0c76efc3f8a13caf5a1cbcb60e"
  },
  {
    "url": "assets/js/24.5e73eee5.js",
    "revision": "c2880cecc0f73c12a67d32b5b54b857d"
  },
  {
    "url": "assets/js/25.9f8c6c8c.js",
    "revision": "dad3f3c508ec124ba80f708858427955"
  },
  {
    "url": "assets/js/26.e6a0c5f3.js",
    "revision": "175c547b244cf9ffcddc96c2b828f513"
  },
  {
    "url": "assets/js/27.642f64a3.js",
    "revision": "db8ebb494aa66ac9c999e4ee1d8d86e9"
  },
  {
    "url": "assets/js/28.1f1752c8.js",
    "revision": "da2a881fa92c1446d8cd3492d689628a"
  },
  {
    "url": "assets/js/29.8bc91005.js",
    "revision": "4d324e40d0f7a170c4f0affbcaebfdf9"
  },
  {
    "url": "assets/js/30.b02ffe4f.js",
    "revision": "00cf546fa61909dd1b710cba20750d50"
  },
  {
    "url": "assets/js/31.0e23993e.js",
    "revision": "ee6e1dd78df7e38f710f84f5c1710f3d"
  },
  {
    "url": "assets/js/32.7f0289ca.js",
    "revision": "4945668a279f6c9011f5b82dd92b9be1"
  },
  {
    "url": "assets/js/33.8d638594.js",
    "revision": "e73a4155b1d037f6d7e0d7dbd8aeb73c"
  },
  {
    "url": "assets/js/34.17ac5603.js",
    "revision": "48c30b03bb36247e54eceb0402b3915f"
  },
  {
    "url": "assets/js/35.cbdd5828.js",
    "revision": "a04a495f9b5549759465d83cf8a0fe22"
  },
  {
    "url": "assets/js/36.adf2690b.js",
    "revision": "4d5a2e62020e4854aa3720181d1f06b4"
  },
  {
    "url": "assets/js/37.ecf2c9c8.js",
    "revision": "ce2fa1aa225a385ebf82536606454da6"
  },
  {
    "url": "assets/js/38.3514f76b.js",
    "revision": "c857e14f5fb01a190c8caf4535d3d795"
  },
  {
    "url": "assets/js/39.8578e3fd.js",
    "revision": "23c309877f367a46276a7bc7c2b1c75f"
  },
  {
    "url": "assets/js/4.6b1d0d33.js",
    "revision": "b4cf14f17c7252b01e6229892da225b8"
  },
  {
    "url": "assets/js/40.8d6376a2.js",
    "revision": "8974bdd8711b9bcc18290ba9b42e57af"
  },
  {
    "url": "assets/js/41.b1b86ac1.js",
    "revision": "b4d1ce9f9885f5215e03e82699df0994"
  },
  {
    "url": "assets/js/42.76dcc693.js",
    "revision": "a6a65fe94baaedb7aa46390b209cc6e5"
  },
  {
    "url": "assets/js/43.0e2782a6.js",
    "revision": "84a28a49e6759cdc9b8408dfcee40ab0"
  },
  {
    "url": "assets/js/44.3740e0d3.js",
    "revision": "19cf3ba3913c38815ad94a0254a356d4"
  },
  {
    "url": "assets/js/45.80ac1998.js",
    "revision": "ec663698188d0b94067925649123b781"
  },
  {
    "url": "assets/js/46.419d3541.js",
    "revision": "5c7dc4d43845a614088f6b5c2574cfd4"
  },
  {
    "url": "assets/js/47.afa41e80.js",
    "revision": "f1854ffaa8a4843b98a268bf4133b6d3"
  },
  {
    "url": "assets/js/48.01f37867.js",
    "revision": "78fcc96ef1ffaa5e3bac825002fc3ed3"
  },
  {
    "url": "assets/js/49.16338994.js",
    "revision": "9f113b2fa9293d67040b0c5cf9ac76e8"
  },
  {
    "url": "assets/js/5.78eddf9e.js",
    "revision": "1f9e90428d0b58d22da811828186df43"
  },
  {
    "url": "assets/js/50.f5d7e044.js",
    "revision": "bb0dc1e081eaa55b5101419d6b77e22e"
  },
  {
    "url": "assets/js/51.e3532ff7.js",
    "revision": "a39c58133f263b45d2a8d4fe9576556f"
  },
  {
    "url": "assets/js/52.f1e2f9a3.js",
    "revision": "fddfc02729e5e02186315700291be866"
  },
  {
    "url": "assets/js/53.9dae0d86.js",
    "revision": "bb3f7652d6f962e963f73f8b9d3a1872"
  },
  {
    "url": "assets/js/54.2de17383.js",
    "revision": "7a856e3224dd41f0ac6230a4d2e9f747"
  },
  {
    "url": "assets/js/55.31580a8d.js",
    "revision": "4e5fc51fb929bf37e291c935bdba7cfd"
  },
  {
    "url": "assets/js/56.f9c6896e.js",
    "revision": "f45bc6d9b62c164a21641a49fd15ab15"
  },
  {
    "url": "assets/js/57.4836947d.js",
    "revision": "a1ff4664d5f7c6fb1e3559a524c0fd30"
  },
  {
    "url": "assets/js/58.7821e265.js",
    "revision": "e7f82e5635444255b462ebae01ba8232"
  },
  {
    "url": "assets/js/59.b9a5df8a.js",
    "revision": "37727b2d97b09a5cd6382d9336aef891"
  },
  {
    "url": "assets/js/6.2495e67b.js",
    "revision": "9fdb715fabc335df57d6ede6eff353d5"
  },
  {
    "url": "assets/js/60.5fc8c3c7.js",
    "revision": "5524efc86ed209dd4834479611de0c07"
  },
  {
    "url": "assets/js/61.8293b978.js",
    "revision": "b398d2b1c6658a2f229a409eafcb3923"
  },
  {
    "url": "assets/js/62.ef031cff.js",
    "revision": "3ed8beb99f56fb33e339f7cc83a3ea5c"
  },
  {
    "url": "assets/js/63.87c592cb.js",
    "revision": "c86e088f029395f07b15cb2229676ccc"
  },
  {
    "url": "assets/js/64.a7814502.js",
    "revision": "2e1ab1ce8dc0ecb10bb394c7fa229a32"
  },
  {
    "url": "assets/js/65.a4f3b999.js",
    "revision": "c19087e10478a0eaafd82f633691ca19"
  },
  {
    "url": "assets/js/66.534b86b3.js",
    "revision": "a09fd6dd6529675c036bdfbabba19a0a"
  },
  {
    "url": "assets/js/67.8266f569.js",
    "revision": "a844bf3971f2d4fe9246c85b103ceb0d"
  },
  {
    "url": "assets/js/68.1788a8c6.js",
    "revision": "146a0d0a907577f265a30245cea3d83a"
  },
  {
    "url": "assets/js/69.2ebb753e.js",
    "revision": "a065692e2f86fc12843326a7ced354ae"
  },
  {
    "url": "assets/js/7.e61b7feb.js",
    "revision": "7e267aa15e9df093be7e4bc3bffdd1e6"
  },
  {
    "url": "assets/js/70.0190cd09.js",
    "revision": "dcab21a3861661989b47b912c70d48f5"
  },
  {
    "url": "assets/js/71.2d4080e9.js",
    "revision": "6a6fca77d30bc7ca766b7ce2ef48696b"
  },
  {
    "url": "assets/js/72.5cba5bc3.js",
    "revision": "ba3c8be0ce397b00a07279c0bd363cdb"
  },
  {
    "url": "assets/js/73.7db02dff.js",
    "revision": "816ccf7f68fc83d20c06f2119604d3bf"
  },
  {
    "url": "assets/js/74.77f32b9c.js",
    "revision": "02fbc6bd8957e67cc7cc11058ae4719a"
  },
  {
    "url": "assets/js/75.c4d7b190.js",
    "revision": "0cf446cd91d7310583a88cff34006f16"
  },
  {
    "url": "assets/js/76.38239095.js",
    "revision": "c62b3b4ed2a2cc2fa4ce9c1df647094e"
  },
  {
    "url": "assets/js/77.f0fd1a53.js",
    "revision": "d0bc5f8339de39f119435118a0772121"
  },
  {
    "url": "assets/js/78.9e23b03c.js",
    "revision": "c84f6dcef24fab3cc7024fbdd054baa4"
  },
  {
    "url": "assets/js/79.46a5d0f6.js",
    "revision": "28c23e541f9890e55357aa2db6619aa3"
  },
  {
    "url": "assets/js/8.443db2c2.js",
    "revision": "5f612bedf83a3b520d0944fecc64bb76"
  },
  {
    "url": "assets/js/80.61ef4d1a.js",
    "revision": "d1e68b2e6a6d48a74cc5cbf3e8141e80"
  },
  {
    "url": "assets/js/81.71509cf5.js",
    "revision": "a586862066877dd34436c5147eb54d13"
  },
  {
    "url": "assets/js/82.39744166.js",
    "revision": "33357be231ca8d97a1e05c7a6af18f93"
  },
  {
    "url": "assets/js/83.961c72f3.js",
    "revision": "47ad9915d3b85ceb800a9e81bd6c9bc9"
  },
  {
    "url": "assets/js/84.d999cb1e.js",
    "revision": "c944eec0c1495266fee1de7b7d287dd8"
  },
  {
    "url": "assets/js/85.3667a214.js",
    "revision": "8649a53e4b5d9d43ba8e298ec7f0d277"
  },
  {
    "url": "assets/js/86.0e775f1d.js",
    "revision": "1016b6532b62aa1505de862023e2e584"
  },
  {
    "url": "assets/js/87.1760f8e5.js",
    "revision": "436db59f4bfb31b2363f706d0ebec51f"
  },
  {
    "url": "assets/js/88.23a69f11.js",
    "revision": "62fe2803a9072abbcb6461f3311ab45f"
  },
  {
    "url": "assets/js/89.fcddb098.js",
    "revision": "9d346b98371474347b432cf0560aa3b5"
  },
  {
    "url": "assets/js/9.098a38d8.js",
    "revision": "0f21e5cba4fccd85028fb93d68155acb"
  },
  {
    "url": "assets/js/90.0e4de015.js",
    "revision": "a57fb1aef8c3ddfb5ec16c80f4b243cc"
  },
  {
    "url": "assets/js/91.353704fc.js",
    "revision": "2b6ae3f50281452613e05cd09f8c30a6"
  },
  {
    "url": "assets/js/92.f73ded1c.js",
    "revision": "d4a6af1e2cb55244cd5f8d8b9b0efeb0"
  },
  {
    "url": "assets/js/93.b66a5754.js",
    "revision": "f377cd4addd57964372ee605037bbb6c"
  },
  {
    "url": "assets/js/94.5475a196.js",
    "revision": "1faa6b7c28370e6b7946332d053de16f"
  },
  {
    "url": "assets/js/95.3742375e.js",
    "revision": "46d363c0f73a283c290445d22b742b1f"
  },
  {
    "url": "assets/js/96.815a618a.js",
    "revision": "e0ee38c5a38f52086ce8324de8687ad3"
  },
  {
    "url": "assets/js/97.a6d80b68.js",
    "revision": "62ffe85f38bfe74a131131ec84ed2ec4"
  },
  {
    "url": "assets/js/98.eee56a0a.js",
    "revision": "0765ba39187a4e506bf6ea0f1c54094a"
  },
  {
    "url": "assets/js/99.8eeee7ee.js",
    "revision": "15bb35e40e9c02e3b306e6bb56cc975a"
  },
  {
    "url": "assets/js/app.98ab8927.js",
    "revision": "2b39157fcf256e79fd444095c4cad1d8"
  },
  {
    "url": "assets/js/vendors~flowchart.ecdf697a.js",
    "revision": "8c0ac8e9d1753ee63205fc62e66b6db8"
  },
  {
    "url": "avatar.png",
    "revision": "f1511f9d0f5eab671ed1e00e7c2a4a75"
  },
  {
    "url": "baidu_verify_UMNmWdWYdG.html",
    "revision": "ccd49ecafa072065494a46dc49f3badc"
  },
  {
    "url": "bg.jpg",
    "revision": "eeb52a7402b93340c8370fedd1e9e745"
  },
  {
    "url": "categories/ai/index.html",
    "revision": "8a438fb3461cc85c04eb53f66c11b677"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "218829b122e6e3cede9bcc8a122aec13"
  },
  {
    "url": "categories/back-end/index.html",
    "revision": "da256e441852b622285732065b4e537d"
  },
  {
    "url": "categories/back-end/page/2/index.html",
    "revision": "06f0c78cf36de2c2cc6986b9c9d22e51"
  },
  {
    "url": "categories/back-end/page/3/index.html",
    "revision": "90fa5f775d5929082aa228adf5ee5583"
  },
  {
    "url": "categories/back-end/page/4/index.html",
    "revision": "134efdc845a621608ddfc76a86833842"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "deb5e6e4f2b8871d4e46ed0958eef1f5"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "7d9e008f791d5a2ca49ddd0970a0f070"
  },
  {
    "url": "categories/index.html",
    "revision": "8a4efdc9e46bcfd3432a9a055dc3846b"
  },
  {
    "url": "categories/machine-leaning/index.html",
    "revision": "aa43bf255f888b1bd3201cc6ac4a5f20"
  },
  {
    "url": "categories/machine-learning/index.html",
    "revision": "362729afe33994072265a89c1b7b5d9f"
  },
  {
    "url": "categories/note/index.html",
    "revision": "373f144d8c9fc7759c8e9350dd75e75d"
  },
  {
    "url": "categories/note/page/2/index.html",
    "revision": "cfeec80c46efbc44fa9ce355c961b3fa"
  },
  {
    "url": "categories/note/page/3/index.html",
    "revision": "922e5a821e33f0881d6bb9fcf0acf081"
  },
  {
    "url": "categories/note/page/4/index.html",
    "revision": "078154ee00d0f3101f91b382a4721623"
  },
  {
    "url": "categories/note/page/5/index.html",
    "revision": "91746ae0a32a4fcbd0ca15c9fb68564c"
  },
  {
    "url": "categories/note/page/6/index.html",
    "revision": "2c92f77823818e28ffd4e90c93fd6135"
  },
  {
    "url": "categories/note/page/7/index.html",
    "revision": "36e381b43243c3e5e8687ffb83a91298"
  },
  {
    "url": "categories/ops/index.html",
    "revision": "2afe317310b0a86280c9f67ce51ac104"
  },
  {
    "url": "categories/ops/page/2/index.html",
    "revision": "812713b2fd0de57e1d7d1f6f0b54d17b"
  },
  {
    "url": "categories/other/index.html",
    "revision": "a1aa4539c94fa58d46979ea43235dae2"
  },
  {
    "url": "categories/security/index.html",
    "revision": "763c2c0d6c5d9ade74ba63028b3ffce0"
  },
  {
    "url": "categories/wanji/index.html",
    "revision": "9151b7dead12d1b792b9f52a46e17ad2"
  },
  {
    "url": "categories/wanji/page/2/index.html",
    "revision": "a8f2aedac0be4b49e65fd4acd0bcc813"
  },
  {
    "url": "google6598f2831dbc9230.html",
    "revision": "fe6f2763cc3b4f14854bc6f0dac78347"
  },
  {
    "url": "hero.png",
    "revision": "324856481fc40a7b4cdceade04701f1f"
  },
  {
    "url": "img/cover/animation/DEPTH OF FIELD ～ 爱与憎恨的剧场 中二病でも恋がしたい！ DEPTH OF FIELD 〜 愛と憎しみ劇場_1589003207.8591747.jpg",
    "revision": "1dc40a3c436e87c039e7710848edb405"
  },
  {
    "url": "img/cover/animation/naruto.jpg",
    "revision": "d4f903063c8ff4b91b52328cb0389080"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活 Reゼロから始める異世界生活_1585969677.9443781.jpg",
    "revision": "364b79959e5e5eb9940a6be3feeed9b1"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活_冰结之绊.jpg",
    "revision": "853082e53c0d785d39ecf4ec6678f12e"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活_第二季.jpg",
    "revision": "8b328ede30d59d4d2050c1416373ba87"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活_雪之回忆.jpg",
    "revision": "3e2d7a83f5719588e3a16409f866efbc"
  },
  {
    "url": "img/cover/animation/一人之下 第一季_1587816625.6930337.jpg",
    "revision": "41bd78575898cd05cad6fe20d175f90e"
  },
  {
    "url": "img/cover/animation/一人之下 第三季_1587816626.661105.jpg",
    "revision": "16b26c075b380dc80abf13e82f2f2c60"
  },
  {
    "url": "img/cover/animation/一人之下 第二季_1587816624.7733808.jpg",
    "revision": "5970fe54b41132a717baeed7a34052a0"
  },
  {
    "url": "img/cover/animation/一人之下2番外篇天师下山_1587816627.4403129.jpg",
    "revision": "49c20cddc639d76cebc1bfd9fd174844"
  },
  {
    "url": "img/cover/animation/东京食尸鬼 第四季 東京喰種トーキョーグール：re_1585969945.843714.jpg",
    "revision": "869bf8b700db7065f378bade73532737"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！ Lite 中二病でも恋がしたい！ Lite_1589003203.3650713.jpg",
    "revision": "99ffacc6615bb8ece677226fe3d72323"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！ 中二病でも恋がしたい！_1589003197.8079042.jpg",
    "revision": "54b0709406506ff60f75cd6cab213a4b"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！ 闪耀的圣爆诞祭 中二病でも恋がしたい！ 煌めきの…聖爆誕祭_1589003201.3334818.jpg",
    "revision": "2177535396c2b123b133b315d81b8134"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！剧场版 -Take On Me- 映画 中二病でも恋がしたい！ -Take On Me-_1589003198.7844956.jpg",
    "revision": "3231cca9303ea4ad4276be0bc248e10f"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 Lite 中二病でも恋がしたい！戀 Lite_1589003208.825747.jpg",
    "revision": "5f67b89fa8b485828a60875edb6a3456"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 OVA 中二病でも恋がしたい！戀 再生の…邪王真眼黙示録_1589003205.5471196.jpg",
    "revision": "e1c186513226a6296a4d5add0760c0e1"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 SP 中二病でも恋がしたい！戀 SP_1589003206.6409478.jpg",
    "revision": "a551e98c461789a79ec770589e58c9f0"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 中二病でも恋がしたい！戀_1589003199.9848888.jpg",
    "revision": "49bcc090fadc4534166e11fb6ac32d76"
  },
  {
    "url": "img/cover/animation/为美好的世界献上祝福！ この素晴らしい世界に祝福を!_1605425565.4270442.jpg",
    "revision": "f4e71ec9933edfe78a790527ca50634e"
  },
  {
    "url": "img/cover/animation/伍六七之最强发型师_1607848862.3159475.jpg",
    "revision": "7f1c023d91c3ca92ea214504dff214a9"
  },
  {
    "url": "img/cover/animation/元龙_1598680444.8660152.jpg",
    "revision": "04730a3787a99be7d9eb6333d4e3257c"
  },
  {
    "url": "img/cover/animation/全员恶玉 アクダマドライブ_1604816490.532245.jpg",
    "revision": "560d1a814df0eb4c71df5d262347b139"
  },
  {
    "url": "img/cover/animation/全职高手 第二季_1602221982.5260127.jpg",
    "revision": "97dcaa9b4986a4f33155f0e048f44404"
  },
  {
    "url": "img/cover/animation/关于我转生变成史莱姆这档事 第二季 転生したらスライムだった件 第2期_1589002260.311745.jpg",
    "revision": "555ffb8563eda00256775f749dc3ef85"
  },
  {
    "url": "img/cover/animation/关于我转生变成史莱姆这档事 転生したらスライムだった件_1589002258.9276857.jpg",
    "revision": "b64c4b3aa101a33b6e1b7a3a5098c9dc"
  },
  {
    "url": "img/cover/animation/冰菓 氷菓_1586575399.2935002.jpg",
    "revision": "09df73333da8de3ec03a6d6b97c2ff18"
  },
  {
    "url": "img/cover/animation/凡人修仙传 燕家堡之战_1610855727.2835217.jpg",
    "revision": "f8a7cbc0159e7faec10cfb0e94f6496c"
  },
  {
    "url": "img/cover/animation/凡人修仙传 燕家堡之战_1613896836.3889074.jpg",
    "revision": "a4127d0086780003c9d2cbf7763ea53b"
  },
  {
    "url": "img/cover/animation/凡人修仙传_1598791855.6524.jpg",
    "revision": "fc7eb9096a13690ad4ec2d66e6df49e5"
  },
  {
    "url": "img/cover/animation/凸变英雄 LEAF_1585926386.4507935.jpg",
    "revision": "b9f61d2a822e5052e1d5c13d25a664a8"
  },
  {
    "url": "img/cover/animation/凸变英雄 TO BE HERO_1585926335.596215.jpg",
    "revision": "aab4fd801566090a65fcff50026e51c2"
  },
  {
    "url": "img/cover/animation/刀剑神域 ソードアート・オンライン_1585970062.6267538.jpg",
    "revision": "9daa245fe5ece39fdee9a02f71ed227d"
  },
  {
    "url": "img/cover/animation/刺客伍六七 第一季_1585926238.4364276.jpg",
    "revision": "b76700252358ef9cddafc13995490c52"
  },
  {
    "url": "img/cover/animation/刺客伍六七 第三季_1607848863.228451.jpg",
    "revision": "5701db8c55fe3d8c7997a0369635abeb"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心 第一季_1585926273.1405962.jpg",
    "revision": "d42191ca8499be8a40b574bc7056de1f"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心 第二季_1598791705.330565.jpg",
    "revision": "7c4cd509a9e0b0644c274879d5d3ed68"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心之长漂_1604640938.1598358.jpg",
    "revision": "bfb4f862708d27e5b69e09eaa59ed93f"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心第三季_1604640806.6842566.jpg",
    "revision": "4b9f20ca4a5819012c4a947e3ade4ba6"
  },
  {
    "url": "img/cover/animation/剧场版 中二病也要谈恋爱！ Lite 映画 中二病でも恋がしたい！ Lite_1589003204.3897648.jpg",
    "revision": "ce01db5c94af996f216df3e4126bc851"
  },
  {
    "url": "img/cover/animation/命运之夜 无限剑制 Fate stay night [Unlimited Blade Works]_1585926115.8239627.jpg",
    "revision": "318d8257c46a89bb4ee09936e011f548"
  },
  {
    "url": "img/cover/animation/命运之夜前传 第一期 Fate Zero_1585969392.6366308.jpg",
    "revision": "9055f23f11f0bc5b5dbcac938ac13a5b"
  },
  {
    "url": "img/cover/animation/命运石之门 STEINS;GATE_1589003785.1149235.jpg",
    "revision": "81cb98646dd085a12a2cac2834351e0e"
  },
  {
    "url": "img/cover/animation/命运石之门：横行跋扈的浪荡之徒 STEINS;GATE 横行跋扈のポリオマニア_1589003787.6910338.jpg",
    "revision": "ac783697be87db2abb19df00ca0a3880"
  },
  {
    "url": "img/cover/animation/命运石之门：聪明睿智的认知计算 STEINS;GATE 聡明叡智のコグニティブ・コンピューティング_1589003788.7402122.jpg",
    "revision": "afe82b59a0e7e599d8aca95097d1c1de"
  },
  {
    "url": "img/cover/animation/命运石之门0 STEINS;GATE 0_1589003786.6583555.jpg",
    "revision": "47f8469c8a2fbe6b0eff5f8acc1e1d14"
  },
  {
    "url": "img/cover/animation/命运石之门0：结晶多形的情人节 STEINS;GATE 0 結晶多形のヴァレンティヌス_1589003791.7312207.jpg",
    "revision": "ba680ecbc1820bf75ff66b1affa093ad"
  },
  {
    "url": "img/cover/animation/命运石之门23β：境界面上的缺失之环.jpg",
    "revision": "1fb724860e51c6810584c7239e2bb530"
  },
  {
    "url": "img/cover/animation/命运石之门剧场版：负荷领域的既视感 劇場版 STEINS;GATE 負荷領域のデジャヴ_1589003789.7337732.jpg",
    "revision": "c9c3b235471959ce620a9a6df58b5e3e"
  },
  {
    "url": "img/cover/animation/咒术回战 呪術廻戦_1604816542.0103776.jpg",
    "revision": "ab6cf9eca3ac85105d67ca94c11543c8"
  },
  {
    "url": "img/cover/animation/团子大家族 CLANNAD -クラナド-_1585926172.4044523.jpg",
    "revision": "f0eddb551798b7c5aff92a9eee37e8f9"
  },
  {
    "url": "img/cover/animation/堀与宫村_ホリミヤ_1615731141.8307843.jpg",
    "revision": "487a9ee87845ec5cc568c8878a5c7657"
  },
  {
    "url": "img/cover/animation/境界的彼方 TV未放送话 境界の彼方 未放映エピソード（第0話）_1589003613.76756.jpg",
    "revision": "4b966d1cf563dfc09732e6761166f01e"
  },
  {
    "url": "img/cover/animation/境界的彼方 偶像裁判！～即使迷茫也要裁决之人～ きょうかいのかなた アイドル裁判！～迷いながらも君を裁く民～_1589003614.5766551.jpg",
    "revision": "f9e924c01ba242dd959d4eab13efca31"
  },
  {
    "url": "img/cover/animation/境界的彼方 剧场版 未来篇 劇場版 境界の彼方 I’LL BE HERE 未来篇_1589003611.6783621.jpg",
    "revision": "0c7bec5e628b349865935b0455a9c4e8"
  },
  {
    "url": "img/cover/animation/境界的彼方 剧场版 过去篇 劇場版 境界の彼方 I’LL BE HERE 過去篇_1589003612.5371315.jpg",
    "revision": "34f1a86de6251bb57b87b64ed86708cd"
  },
  {
    "url": "img/cover/animation/境界的彼方 境界の彼方_1589003610.7269473.jpg",
    "revision": "848473974794fd8f2b8725974cac6f31"
  },
  {
    "url": "img/cover/animation/境界的彼方SP 境界の彼方ミニ劇場_1589003615.747619.jpg",
    "revision": "f8a7cbc0159e7faec10cfb0e94f6496c"
  },
  {
    "url": "img/cover/animation/声之形 聲の形_1591865423.033343.jpg",
    "revision": "a04fe8c3619559465c61214df7a1bc92"
  },
  {
    "url": "img/cover/animation/夏目友人帐 劇場版 夏目友人帳 ～うつせみに結ぶ～_1586575710.5734751.jpg",
    "revision": "93adc25f20c0734a65d14fec183a5108"
  },
  {
    "url": "img/cover/animation/夏目友人帐 夏目友人帳_1586575711.549216.jpg",
    "revision": "3235e580a2326a92e00b677de36d9140"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第三季 夏目友人帳 参_1586575719.189755.jpg",
    "revision": "30c09c0f0361d153dff6b9e786bc3369"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第二季 続 夏目友人帳_1586575717.2175088.jpg",
    "revision": "98f36589b48a0ada985003665d69486d"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第五季 夏目友人帳 伍_1586575713.2895663.jpg",
    "revision": "1b2bd95df99f00a68b39a7754e527d5e"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第五季 特别篇 一夜酒杯 夏目友人帳 伍 特別編 一夜盃_1586575721.841378.jpg",
    "revision": "3892866f6cbef6064af1bb27242384c7"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第五季 特别篇 游戏盛宴 夏目友人帳 伍 特別編 遊戯の宴_1586575720.090627.jpg",
    "revision": "9328f238a1bb065a7670943c5bd0d378"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第六季 夏目友人帳 陸_1586575718.1654663.jpg",
    "revision": "06c243c55c2a69119700a1eb664fcab9"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第六季 特别篇 梦幻的碎片 夏目友人帳 陸 特別編 夢幻のかけら_1586575720.9363923.jpg",
    "revision": "df21b1a8a626ed74d68463bade959761"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第六季 特别篇 铃响的残株 夏目友人帳 陸 特別編 鈴鳴るの切り株_1586575716.1299927.jpg",
    "revision": "7a79a78f6d8ab0d31e452ace56ed194f"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第四季 夏目友人帳 肆_1586575714.298881.jpg",
    "revision": "ef43587ee4bd184ff916cbd0fe4407c8"
  },
  {
    "url": "img/cover/animation/夏目友人帐：曾几何时下雪之日 夏目友人帳 いつかゆきのひに_1586575712.3281357.jpg",
    "revision": "270799ff7d3ccf5c42dd1d37c5b3a90f"
  },
  {
    "url": "img/cover/animation/夏目友人帐：猫咪老师首次变身使者 夏目友人帳 ニャンコ先生とはじめてのおつかい_1586575715.1216898.jpg",
    "revision": "25f3d4a010e224eacd28c81ea078a656"
  },
  {
    "url": "img/cover/animation/大欺诈师 GREAT PRETENDER_1593323282.6797037.jpg",
    "revision": "82e422da3475b7c6f5798f2497cec5ba"
  },
  {
    "url": "img/cover/animation/大理寺日志_1586576302.7692626.jpg",
    "revision": "4f044b73ee5f6f0e1e4e539770e36dc1"
  },
  {
    "url": "img/cover/animation/女高中生的虚度日常 女子高生の無駄づかい_1589002852.7528338.jpg",
    "revision": "b97219089ec3d9e96072356faa7b359c"
  },
  {
    "url": "img/cover/animation/妄想学生会 生徒会役員共_1596356746.1200936.jpg",
    "revision": "55c0c0b188f19c4bef887a362c4494f9"
  },
  {
    "url": "img/cover/animation/家庭教师 家庭教師ヒットマンREBORN!_1585925087.2388551.jpg",
    "revision": "d86e9e566714817c887d45eebea0a141"
  },
  {
    "url": "img/cover/animation/寒蝉鸣泣之时 ひぐらしのなく頃に_1610112378.2165432.jpg",
    "revision": "6998ab0bf42b0b76400aeb63996f137e"
  },
  {
    "url": "img/cover/animation/寒蝉鸣泣之时·业 ひぐらしのなく頃に 業_1610112379.2500236.jpg",
    "revision": "296d0710e5591dbfa9c5e593d8e51353"
  },
  {
    "url": "img/cover/animation/小鸟游六花·改 剧场版 中二病也要谈恋爱！ 小鳥遊六花・改 ～劇場版 中二病でも恋がしたい！～_1589003202.2089472.jpg",
    "revision": "0faeffe5e5022a818d19d9861f940e9d"
  },
  {
    "url": "img/cover/animation/心理测量者3 PSYCHO-PASS サイコパス 3_1585925325.6729088.jpg",
    "revision": "ad01253c24f2a37d0b9071dc6cda3b8c"
  },
  {
    "url": "img/cover/animation/我们仍未知道那天所看见的花的名字_1598682205.0430555.jpg",
    "revision": "73a8aef300ae09f4c72569954d31a6a3"
  },
  {
    "url": "img/cover/animation/我们仍未知道那天所看见的花的名字_剧场版_1598682206.1141315.jpg",
    "revision": "84322230ed54f187abff484a8d76f3d1"
  },
  {
    "url": "img/cover/animation/我家大师兄脑子有坑 第二季_1604640859.9180338.jpg",
    "revision": "9861c654cdeaf64e8538805780570ae6"
  },
  {
    "url": "img/cover/animation/我想吃掉你的胰脏 君の膵臓をたべたい_1589001286.8862827.jpg",
    "revision": "327ccfec98f7303b170c8137ff67efe0"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 OVA やはり俺の青春ラブコメはまちがっている。 OVA_1589002438.557332.jpg",
    "revision": "85c9cfeedf6214361b0ce3b927eaad09"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 やはり俺の青春ラブコメはまちがっている。_1585969733.0615635.jpg",
    "revision": "556a17a6562c5116c7b15623e7c176a0"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 第三季 完 やはり俺の青春ラブコメはまちがっている。完_1589002436.3329194.jpg",
    "revision": "b1917adfed2ecb02b30aa0ac8e9dc8d6"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 第二季 OVA やはり俺の青春ラブコメはまちがっている。続 OVA_1589002440.034373.jpg",
    "revision": "f842c131bfc4a20019a602b9c0b3e59d"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 第二季 续 やはり俺の青春ラブコメはまちがっている。続_1589002437.4796777.jpg",
    "revision": "ffd4a659482cf90c164b2c32867d0565"
  },
  {
    "url": "img/cover/animation/文豪野犬 文豪ストレイドッグス_1594102113.5871732.jpg",
    "revision": "211770dea7d88efc0e7f6679b3e03b82"
  },
  {
    "url": "img/cover/animation/新世纪福音战士 新世紀エヴァンゲリオン_1610111952.1978788.jpg",
    "revision": "58bb51510d63629c0dbeefe17dbbce97"
  },
  {
    "url": "img/cover/animation/星游记 第一季_1612013075.9135053.jpg",
    "revision": "909898173f4d6ccc3f72275abb2b695e"
  },
  {
    "url": "img/cover/animation/极主夫道 極主夫道_1615094066.365526.jpg",
    "revision": "4c88ba1c42cec753a137a13d4cadd182"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮 とある科学の超電磁砲_1598790861.4960368.jpg",
    "revision": "e6f599856e6e566b5131589e28acaae9"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮OVA：御坂学姐现在是焦点人物_1598790862.9439692.jpg",
    "revision": "780565c599caa5f0122bb3f5cc1e70a8"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮OVA：炎炎酷日下做摄影模特也不轻松啊_1598790864.429887.jpg",
    "revision": "537b3f3e12fc1c18d8b5d639936166ff"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮S OVA とある科学の超電磁砲S 大事なことはぜんぶ銭湯に教わった_1598790867.7153492.jpg",
    "revision": "be0b8d48bf76929d887417f27b54edd5"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮S とある科学の超電磁砲S_1598790866.0815735.jpg",
    "revision": "fa38c04c9f931476900283fecea96a43"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮T とある科学の超電磁砲T_1598790869.2180655.jpg",
    "revision": "7df8e355e9dd734442f9a3a7fb4c5c42"
  },
  {
    "url": "img/cover/animation/汉化日记 第一季_1604815396.6564424.jpg",
    "revision": "4a7bdaa808f553a625da972825f810e4"
  },
  {
    "url": "img/cover/animation/汉化日记 第二季_1604815385.2098784.jpg",
    "revision": "e9de57bda7d2a050cac10721908b8fde"
  },
  {
    "url": "img/cover/animation/游戏人生 ノーゲーム・ノーライフ_1589001578.2607884.jpg",
    "revision": "be61befc8b9ec5e06b33e3f5ff58c9e7"
  },
  {
    "url": "img/cover/animation/游戏人生 零 ノーゲーム・ノーライフ ゼロ_1589001580.7540507.jpg",
    "revision": "a56bbea47ea0563a9ed522d741bbcd06"
  },
  {
    "url": "img/cover/animation/炎炎消防队 二之章 炎炎ノ消防隊 弐ノ章_1598790666.003107.jpg",
    "revision": "7320a0a2e48bb68b08f548f6d2aa6b1a"
  },
  {
    "url": "img/cover/animation/炎炎消防队 炎炎ノ消防隊_1598790664.7653487.jpg",
    "revision": "2f03bffe44da8b0f34060c4e5835b942"
  },
  {
    "url": "img/cover/animation/爱，死亡和机器人 第一季 Love, Death & Robots Season 1_1587187812.607653.jpg",
    "revision": "bf037aa181d6f3cd7b5f3b5ad1e6901e"
  },
  {
    "url": "img/cover/animation/电锯人.jpg",
    "revision": "dfc83b362410ee54397644a1f713d931"
  },
  {
    "url": "img/cover/animation/男子高中生的日常 男子高校生の日常_1589003026.677807.jpg",
    "revision": "d00d8179d09087c6bc49d6329a417068"
  },
  {
    "url": "img/cover/animation/知晓天空之蓝的人啊 空の青さを知る人よ_1601270270.8203645.jpg",
    "revision": "0d6ffab1075cbd0e1a2d0ab525ca195c"
  },
  {
    "url": "img/cover/animation/碧蓝之海 ぐらんぶる_1585925141.7311099.jpg",
    "revision": "5c922e608e653aaa14dee7d047e3ed00"
  },
  {
    "url": "img/cover/animation/秦时明月之沧海横流_1602222187.037226.jpg",
    "revision": "13795badaa5afc8755a81f7250f443ea"
  },
  {
    "url": "img/cover/animation/红白黑黄 第一季 RWBY Season 1_1600613356.4275353.jpg",
    "revision": "14bde917d79f1403855b2184ece6148b"
  },
  {
    "url": "img/cover/animation/绝园的暴风雨 絶園のテンペスト_1598680683.5899887.jpg",
    "revision": "63e83292211c1182ce2748fa0ff29516"
  },
  {
    "url": "img/cover/animation/罪恶王冠 ギルティクラウン_1586575578.8566122.jpg",
    "revision": "8d57e47c8363fa133eb78c59da0c7077"
  },
  {
    "url": "img/cover/animation/致不灭的你 不滅のあなたへ_1605425771.1585212.jpg",
    "revision": "e3512412253965af1084d01f9280e0da"
  },
  {
    "url": "img/cover/animation/致不灭的你 不滅のあなたへ_1615093823.8227906.jpg",
    "revision": "8a3f3040589e99d036032ee4f69ec6ff"
  },
  {
    "url": "img/cover/animation/葬送的芙莉莲.jpg",
    "revision": "3f44391634e854eeedf63c46659d1e90"
  },
  {
    "url": "img/cover/animation/辉夜大小姐想让我告白 第一季 天才们的恋爱头脑战 かぐや様は告らせたい～天才たちの恋愛頭脳戦～_1585970219.5961487.jpg",
    "revision": "efed35f65cf7c5b9c20277ce2d76e98f"
  },
  {
    "url": "img/cover/animation/辉夜大小姐想让我告白 第二季 かぐや様は告らせたい？ ～天才たちの恋愛頭脳戦～_1586668715.4943583.jpg",
    "revision": "63833630ee09db53076d78bb6161c1ba"
  },
  {
    "url": "img/cover/animation/达尔文游戏 ダーウィンズゲーム_1594102176.291782.jpg",
    "revision": "feba54ec1e136e95e4eebf3e8f6867ea"
  },
  {
    "url": "img/cover/animation/进击的巨人 第三季 Part.2 進撃の巨人 Season 3 Part.2_1607307893.38439.jpg",
    "revision": "39173c58ad893fd847fe1ae08234fe39"
  },
  {
    "url": "img/cover/animation/进击的巨人 第四季 進撃の巨人 The Final Season_1607306144.6104312.jpg",
    "revision": "9f21346dd2c832830ac399c644dcfb4e"
  },
  {
    "url": "img/cover/animation/进击的巨人.jpg",
    "revision": "b52d068ea8d96f2f8a9e7328de5839ba"
  },
  {
    "url": "img/cover/animation/进击的巨人第三季.jpg",
    "revision": "deba934b28f073977f44f8e1a211b0e4"
  },
  {
    "url": "img/cover/animation/进击的巨人第二季.jpg",
    "revision": "275b9bb2d10b1e81c9700f70744823ac"
  },
  {
    "url": "img/cover/animation/钢之炼金术师 鋼の錬金術師_1610112161.1140132.jpg",
    "revision": "94c3ad9198c106ff7428fc3d209b7955"
  },
  {
    "url": "img/cover/animation/钢之炼金术师FA 鋼の錬金術師 FULLMETAL ALCHEMIST_1610112162.3668275.jpg",
    "revision": "9d536e8f6a3b0139f0d7b320d5561d10"
  },
  {
    "url": "img/cover/animation/银魂 銀魂_1596350080.1353695.jpg",
    "revision": "296429c30046b9a61057666c2fd62fb1"
  },
  {
    "url": "img/cover/animation/间谍过家家.jpg",
    "revision": "7cc95be7bc1eb31c1df1801f43675194"
  },
  {
    "url": "img/cover/animation/隐瞒之事 かくしごと_1610855819.9664078.jpg",
    "revision": "fa066b6ae21868fa8b1df56fe0aee2cb"
  },
  {
    "url": "img/cover/animation/雾山五行_1598792049.0016093.jpg",
    "revision": "c50e196e230168313fe95a061f2f7b64"
  },
  {
    "url": "img/cover/animation/青春期猪头少年不做兔女郎学姐的梦 青春ブタ野郎はバニーガール先輩の夢を見ない_1589002733.6539207.jpg",
    "revision": "12c96c661541a4f4cc130b6fb858bc13"
  },
  {
    "url": "img/cover/animation/青春期猪头少年不做怀梦少女的梦 青春ブタ野郎はゆめみる少女の夢を見ない_1589002732.726506.jpg",
    "revision": "21b460e488d988298b558c8ba733c0d1"
  },
  {
    "url": "img/cover/animation/非人哉_1589002638.7049315.jpg",
    "revision": "113e145aff5864c4616e2fbefbb9a5da"
  },
  {
    "url": "img/cover/animation/风灵玉秀_1585969616.0985014.jpg",
    "revision": "88ab60da65c377f12f06b6468bf8b3d4"
  },
  {
    "url": "img/cover/animation/鬼灭之刃 鬼滅の刃_1598792127.4313507.jpg",
    "revision": "42dbd68d2498074a6cb0a0e3b774a17a"
  },
  {
    "url": "img/cover/animation/齐木楠雄的灾难 斉木楠雄のΨ難_1585970519.8406558.jpg",
    "revision": "05e5d9d7b5852358099ef2e51cda5230"
  },
  {
    "url": "img/cover/book/4321_1585897435.8476274.jpg",
    "revision": "992e7e15677bec0065ac38836c4199a5"
  },
  {
    "url": "img/cover/book/三体_1585897694.8293366.jpg",
    "revision": "352b77c9426300b32ac08b8f0db978cc"
  },
  {
    "url": "img/cover/book/人类简史_1585897561.6528192.jpg",
    "revision": "73c0c171203951b1bc9b8189731a3a73"
  },
  {
    "url": "img/cover/book/人行道王国_1585897470.283358.jpg",
    "revision": "75b2d284f18a1e684ca3b3e3fa01a20c"
  },
  {
    "url": "img/cover/book/你当像鸟飞往你的山_1585897725.865459.jpg",
    "revision": "e0dfc7b7804b797f27f0372431469dbc"
  },
  {
    "url": "img/cover/book/最好的时光在路上_1615041403.651003.jpg",
    "revision": "5e196335f62af6202eea8d231ba9822f"
  },
  {
    "url": "img/cover/book/君主论_1585896884.5916448.jpg",
    "revision": "ef8c86e29177d69558b25f4607a7e6ce"
  },
  {
    "url": "img/cover/book/嫌疑人X的献身_1587825216.9453857.jpg",
    "revision": "037b2645f76588d71e79efa63a348bdc"
  },
  {
    "url": "img/cover/book/富爸爸，穷爸爸_1585897639.017536.jpg",
    "revision": "d412a0a3d8f76154122fafe6441a485a"
  },
  {
    "url": "img/cover/book/时间的秩序_1585897590.5492332.jpg",
    "revision": "48d249d28483d1b2fb7641494dc4fe1d"
  },
  {
    "url": "img/cover/book/洞穴奇案_1585896027.198742.jpg",
    "revision": "12ff91107a85e164a9c5c800d6a7f6f2"
  },
  {
    "url": "img/cover/book/潜规则_1585896937.9712746.jpg",
    "revision": "17a25c9fd8f100b92f63bf8a8b46e84f"
  },
  {
    "url": "img/cover/book/爱的博弈_1585897032.5092676.jpg",
    "revision": "9c1020b7b1514f873078b9351a6f3c80"
  },
  {
    "url": "img/cover/book/白夜行_1585895973.8514829.jpg",
    "revision": "d8d6801a69ade76da9dc59464bc85f0b"
  },
  {
    "url": "img/cover/book/看不见的剪辑_1597317749.9047.jpg",
    "revision": "112cb78d6a98050aa22f43d8499e8151"
  },
  {
    "url": "img/cover/book/眨眼之间_1597317912.09056.jpg",
    "revision": "491f89a8395f110cc709e43fa6e706d8"
  },
  {
    "url": "img/cover/book/美丽新世界_1585897386.9219372.jpg",
    "revision": "ec5a1ee8ed29b862780f40c456ce4a03"
  },
  {
    "url": "img/cover/book/血酬定律_1585896971.4534743.jpg",
    "revision": "ffcb9704e0cf0ed521fe8a034f20e63b"
  },
  {
    "url": "img/cover/book/解忧杂货店_1587824761.17957.jpg",
    "revision": "86e6c7aedf3105cda7b303d7bda40bf8"
  },
  {
    "url": "img/cover/book/资本论_1585897326.1348414.jpg",
    "revision": "51d5dd420485891553844480174ab695"
  },
  {
    "url": "img/cover/book/超越感觉_1585897532.9392817.jpg",
    "revision": "c1207982eaab9ccf700210b3df87e844"
  },
  {
    "url": "img/cover/book/黑客与画家_1597317981.5908504.jpg",
    "revision": "ac5500ba67811391054b7cd2f47bc614"
  },
  {
    "url": "img/cover/default.jpg",
    "revision": "5c10cd29509954ea73cbc09d4304ff58"
  },
  {
    "url": "img/cover/movie/七宗罪 Se7en_1605424194.307574.jpg",
    "revision": "a0276c947611a7311dcbb03b043ed3b2"
  },
  {
    "url": "img/cover/movie/三傻大闹宝莱坞 3 Idiots_1601793342.5394852.jpg",
    "revision": "c01d8035edbf61286935543a5062c1af"
  },
  {
    "url": "img/cover/movie/再次出发之纽约遇见你 Begin Again_1601797399.4216352.jpg",
    "revision": "5f773042dbd1b0c45f5c6c1c76e78ba8"
  },
  {
    "url": "img/cover/movie/利刃出鞘 Knives Out_1589622614.554978.jpg",
    "revision": "ac68e5d420cf17356b50c7d91ba507cf"
  },
  {
    "url": "img/cover/movie/可可西里_1601796654.738392.jpg",
    "revision": "8f2fb23fbf7df2baae85453cbd2ad783"
  },
  {
    "url": "img/cover/movie/复仇者联盟3：无限战争 Avengers.jpg",
    "revision": "7da962a91072a78a3d5e7a4e8ac0a065"
  },
  {
    "url": "img/cover/movie/复仇者联盟4：终局之战 Avengers.jpg",
    "revision": "559d432fc35c94b07ad0cf1ea5fe1708"
  },
  {
    "url": "img/cover/movie/大话西游之大圣娶亲 西遊記大結局之仙履奇緣_1601793517.5869331.jpg",
    "revision": "541094105557befc42526d9b01ece668"
  },
  {
    "url": "img/cover/movie/大话西游之月光宝盒 西遊記第壹佰零壹回之月光寶盒_1601793519.0343032.jpg",
    "revision": "ca3aa79b945bd478f586e4e2fc8b3633"
  },
  {
    "url": "img/cover/movie/寄生虫 기생충_1589623219.768211.jpg",
    "revision": "614ab729d659a0da48dc6965d3780994"
  },
  {
    "url": "img/cover/movie/寻梦环游记 Coco_1601794237.4108212.jpg",
    "revision": "073ee045fc09813763dfa6a101ad0ab1"
  },
  {
    "url": "img/cover/movie/小萝莉的猴神大叔 Bajrangi Bhaijaan_1601793808.451275.jpg",
    "revision": "c32ac303e00915d21147108cbe9fd883"
  },
  {
    "url": "img/cover/movie/怦然心动 Flipped_1589623063.6880758.jpg",
    "revision": "c8fe428afd6ff91ccf61935476566f62"
  },
  {
    "url": "img/cover/movie/我不是药神_1601794370.8576474.jpg",
    "revision": "42833315d48542b8f1fd5c98e906befc"
  },
  {
    "url": "img/cover/movie/我和我的家乡_1611370645.3507812.jpg",
    "revision": "4753fb2c574f6bbf234026081929b4f3"
  },
  {
    "url": "img/cover/movie/控方证人 Witness for the Prosecution_1589622779.5202994.jpg",
    "revision": "87bdc47c4ce640b6869b741b596d099b"
  },
  {
    "url": "img/cover/movie/生化危机 Resident Evil_1601796410.396677.jpg",
    "revision": "74d7027b15312c7e6e5e86ac5376c9af"
  },
  {
    "url": "img/cover/movie/疯狂动物城 Zootopia_1601793897.819059.jpg",
    "revision": "b144c23b4f8e99729e69e9dbc48980f4"
  },
  {
    "url": "img/cover/movie/疯狂的麦克斯4：狂暴之路 Mad Max.jpg",
    "revision": "73ef90dd331d8ce79aae16d2b1acafeb"
  },
  {
    "url": "img/cover/movie/盗梦空间 Inception_1589623271.7394319.jpg",
    "revision": "b693f9bea994d730e45ddbdc9523f310"
  },
  {
    "url": "img/cover/movie/盗钥匙的方法 鍵泥棒のメソッド_1606834155.667749.jpg",
    "revision": "97e1825bbec648769324b23d05128007"
  },
  {
    "url": "img/cover/movie/看不见的客人 Contratiempo_1589518291.3730936.jpg",
    "revision": "3aba91d51811844945aa894df6e52a42"
  },
  {
    "url": "img/cover/movie/神偷奶爸 Despicable Me_1601796114.4692767.jpg",
    "revision": "c1eaa8da5c45a4cce4250aea58d985e7"
  },
  {
    "url": "img/cover/movie/穿越时空的少女 時をかける少女_1608474088.6478672.jpg",
    "revision": "24aa72926f189e3d460c3c7f2daf7a32"
  },
  {
    "url": "img/cover/movie/窃听风暴 Das Leben der Anderen_1608474235.761454.jpg",
    "revision": "5745aea684caf06fe46bd04ba330fde1"
  },
  {
    "url": "img/cover/movie/红辣椒 パプリカ_1608474330.818665.jpg",
    "revision": "806c6da9cdd55a0cd90ea78dd2440faf"
  },
  {
    "url": "img/cover/movie/终结者 The Terminator_1601796350.5186133.jpg",
    "revision": "469db37d593f5da82b6aa9a9dc3ea4f8"
  },
  {
    "url": "img/cover/movie/绿皮书 Green Book_1589622940.5721269.jpg",
    "revision": "5fe64b86199e4193a870b727ea13ba67"
  },
  {
    "url": "img/cover/movie/网络谜踪 Searching_1589698684.1172712.jpg",
    "revision": "836d8e6574a95cf7811044ef979a1c20"
  },
  {
    "url": "img/cover/movie/被嫌弃的松子的一生 嫌われ松子の一生_1608474278.109583.jpg",
    "revision": "05d168b82fe1f558fd9a6c73ef03a6ea"
  },
  {
    "url": "img/cover/movie/调音师 Andhadhun_1589623557.2217262.jpg",
    "revision": "3ee982977527b6697f9dca8db1badf32"
  },
  {
    "url": "img/cover/movie/辩护人 변호인_1608474181.4256582.jpg",
    "revision": "9c90070e01da8bc2433229d1ef18ba91"
  },
  {
    "url": "img/cover/movie/这个杀手不太冷 Léon_1601794670.9565396.jpg",
    "revision": "3beebb4581790cfdc9f59f61ae2e42c6"
  },
  {
    "url": "img/cover/movie/送你一朵小红花_1609633472.2473087.jpg",
    "revision": "e8bc9726548ca648346d2e83992ae746"
  },
  {
    "url": "img/cover/tvSeries/3年A班：从现在起，大家都是人质_1608474512.099212.jpg",
    "revision": "77ac87094c7e1af640a3b8b137d4ef1c"
  },
  {
    "url": "img/cover/tvSeries/亚当的超狂工作室 Savage Builds_1605424546.159232.jpg",
    "revision": "57caa602ba667292c643c00ec6d25b19"
  },
  {
    "url": "img/cover/tvSeries/人生删除事务所 dele ディーリー_1585923321.6637092.jpg",
    "revision": "4991e6bdb64948e99c27e730287de4c6"
  },
  {
    "url": "img/cover/tvSeries/仙剑奇侠传_1585923132.341561.jpg",
    "revision": "7be553e2e9a7fca758c92904e6a430af"
  },
  {
    "url": "img/cover/tvSeries/信号 시그널_1585924044.934179.jpg",
    "revision": "a0333ad6f17ef2661999c24966e8a96d"
  },
  {
    "url": "img/cover/tvSeries/匹诺曹 피노키오_1606210299.4421241.jpg",
    "revision": "349450aaacf5a66a0502f222417eda8e"
  },
  {
    "url": "img/cover/tvSeries/半泽直树 半沢直樹_1595146887.3777108.jpg",
    "revision": "01ba6805810901dfff399fe2201c8e72"
  },
  {
    "url": "img/cover/tvSeries/半泽直树2 半沢直樹2_1595146888.5461469.jpg",
    "revision": "7389ea97a65e4efa4861ab317e9e05af"
  },
  {
    "url": "img/cover/tvSeries/去他妈的世界 第一季 The End of the Fucking World Season 1_1585924220.552149.jpg",
    "revision": "875e6226e998ef31eedd49f1a28badda"
  },
  {
    "url": "img/cover/tvSeries/坡道上的家 坂の途中の家_1608474449.0222256.jpg",
    "revision": "99a275da7e772bfdf2ae542e41bba283"
  },
  {
    "url": "img/cover/tvSeries/大江大河_1608516875.2203677.jpg",
    "revision": "fd77c0625390abbf74aa98a19eb394fb"
  },
  {
    "url": "img/cover/tvSeries/大江大河2_1608516876.4397173.jpg",
    "revision": "9c43f11ebb62712c49990a512f26123c"
  },
  {
    "url": "img/cover/tvSeries/天赐的声音 第一季_1611725307.4245465.jpg",
    "revision": "2e03c0b86c4b42a4a7f9921d78b91188"
  },
  {
    "url": "img/cover/tvSeries/天赐的声音 第二季_1611725308.3943996.jpg",
    "revision": "a5c1647e69ca4564e5f580da24a0ca8a"
  },
  {
    "url": "img/cover/tvSeries/姐姐的爱乐之程_1611490586.1068618.jpg",
    "revision": "8afd8dd8037079a40d35f1131ad9eb96"
  },
  {
    "url": "img/cover/tvSeries/巅峰拍档 第二十八季 Top Gear Season 28_1586272743.9453914.jpg",
    "revision": "26064ab920da124739a8fe5d1793e250"
  },
  {
    "url": "img/cover/tvSeries/我，喜欢你_1602130189.8904605.jpg",
    "revision": "af4800c3e251751a0f7d59b43302b6d2"
  },
  {
    "url": "img/cover/tvSeries/我们与恶的距离 我們與惡的距離_1585924294.6041443.jpg",
    "revision": "32097172496ee7829f7a1ff357e75693"
  },
  {
    "url": "img/cover/tvSeries/我是歌手 第一季_1605423874.4925146.jpg",
    "revision": "9668cc38a78bc29453d80b0e0ec0c05d"
  },
  {
    "url": "img/cover/tvSeries/无证之罪_1603034715.5966406.jpg",
    "revision": "06a17236cf9c6aec33cadadd5e23dd87"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第一季_1594102371.1799963.jpg",
    "revision": "2a1679ee69092e5d5252d4a28b44d181"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第三季_1594102368.61622.jpg",
    "revision": "eff0f88e6653080cf0e392460b431bde"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第二季_1594102370.0204074.jpg",
    "revision": "c84957a6017fef82ea2360163abe3562"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第五季_1594102372.539142.jpg",
    "revision": "52af648b4b0201cf8324603d273815fd"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第四季_1594102367.622257.jpg",
    "revision": "3ec291fe077705392c3c4626e16aa836"
  },
  {
    "url": "img/cover/tvSeries/暴走大事件 第八季_1613896768.529891.jpg",
    "revision": "8e1660de483a22880e97eb444c3a0c15"
  },
  {
    "url": "img/cover/tvSeries/暴走大事件 第六季_1605424009.4009516.jpg",
    "revision": "6423d5ef64e9a342b86675ae1ae4f7e5"
  },
  {
    "url": "img/cover/tvSeries/梦想改造家 第六季_1592891305.6434877.jpg",
    "revision": "11a3bb22ad8430317fbbb7264af7645d"
  },
  {
    "url": "img/cover/tvSeries/沉默的真相_1601793033.7507782.jpg",
    "revision": "363165e442ba009813f41b88657daf56"
  },
  {
    "url": "img/cover/tvSeries/爱情公寓_1585921972.3063571.jpg",
    "revision": "58a2730b184e07d736f5368265d15232"
  },
  {
    "url": "img/cover/tvSeries/生活大爆炸  第一季 The Big Bang Theory Season 1_1585922087.7021892.jpg",
    "revision": "21d9e4a70651ccb321b50ffebd5a811c"
  },
  {
    "url": "img/cover/tvSeries/男人帮_1585924355.9011319.jpg",
    "revision": "a1164c809d31069e294f63de8d3bc310"
  },
  {
    "url": "img/cover/tvSeries/破产姐妹 第一季 2 Broke Girls Season 1_1585924798.0466225.jpg",
    "revision": "f1c28a6dc73b67725aaa377cfd29e20e"
  },
  {
    "url": "img/cover/tvSeries/绝命毒师 第一季 Breaking Bad Season 1_1585923360.451869.jpg",
    "revision": "a8a723de5403f707fe42f892441bb5aa"
  },
  {
    "url": "img/cover/tvSeries/胜者即是正义 リーガル・ハイ_1593323566.1153116.jpg",
    "revision": "be0d74926a534b061e29feb30ed1cc2b"
  },
  {
    "url": "img/cover/tvSeries/胜者即是正义2 リーガルハイ2_1595147132.5017843.jpg",
    "revision": "aac650bb4195df52b9c694efc226ea21"
  },
  {
    "url": "img/cover/tvSeries/脱口秀大会 第三季_1601270890.8320255.jpg",
    "revision": "54e4b6f648df24b6454cd05bfd179f7a"
  },
  {
    "url": "img/cover/tvSeries/蒙面唱将猜猜猜 第一季_1596179742.8977056.jpg",
    "revision": "d43061e070f5c152387b4f84d383b503"
  },
  {
    "url": "img/cover/tvSeries/蒙面唱将猜猜猜 第五季_1611725887.4262514.jpg",
    "revision": "6a61405a0bf61e24e2e9cb3e260d3f68"
  },
  {
    "url": "img/cover/tvSeries/蒙面唱将猜猜猜 第四季_1596179744.4396722.jpg",
    "revision": "11934c948ec298bfc438957b4bcd7642"
  },
  {
    "url": "img/cover/tvSeries/行骗天下JP コンフィデンスマンJP_1593323492.5273848.jpg",
    "revision": "104ce630aeb4cac828a579b53f6bcc91"
  },
  {
    "url": "img/cover/tvSeries/诗歌之王 第二季_1611725722.9074235.jpg",
    "revision": "d82b1fb4e067df8986ab7427a840383d"
  },
  {
    "url": "img/cover/tvSeries/请回答1988 응답하라 1988_1585923935.8388011.jpg",
    "revision": "6c1422b5f38f84c1e86c58a91152fe7c"
  },
  {
    "url": "img/cover/tvSeries/轮到你了 あなたの番です_1605425270.4120092.jpg",
    "revision": "7d477edcb008bbf652385c079e1df8b3"
  },
  {
    "url": "img/cover/tvSeries/隐秘的角落_1592891172.6912322.jpg",
    "revision": "433946bd5f0b80c7bfa27195b3a4f4be"
  },
  {
    "url": "img/cover/video/狂おしいほど僕には美しい - majiko.jpg",
    "revision": "a46d9e0fab04ff972fb4f52257c14425"
  },
  {
    "url": "img/essay/20200326_130024_yrxnjerdx_1.jpg",
    "revision": "2d69fb61a7add7fdd3acbb5218eaf65e"
  },
  {
    "url": "img/essay/20200326_130024_yrxnjerdx.jpg",
    "revision": "d795fd1d77b78b09797554fbb6626772"
  },
  {
    "url": "img/note/20200325162737-mq-rabbitmq.jpg",
    "revision": "899b3142d83bf840c8f89c4342ed2311"
  },
  {
    "url": "img/note/20200325164844-mq-rabbitmq.jpg",
    "revision": "be1b876e816c7ad03da14f373892966f"
  },
  {
    "url": "img/note/20200325170202-mq-rabbitmq.jpg",
    "revision": "693d6a0432f3d391d1d74bf752b586f2"
  },
  {
    "url": "img/note/20200325170650-mq-rabbitmq.jpg",
    "revision": "3dbcb1d12fcfb3f3367074edcaab5d69"
  },
  {
    "url": "img/note/20200325170750-mq-rabbitmq.jpg",
    "revision": "a492e9bda053d58a5e4b4424909fba11"
  },
  {
    "url": "img/note/20200325170846-mq-rabbitmq.jpg",
    "revision": "200c49ab7bb4c6f73214a7de59411b27"
  },
  {
    "url": "img/other/20200323230011.jpg",
    "revision": "fb6262c55669169d81ca55b6879b3bc9"
  },
  {
    "url": "img/other/20200323234051.jpg",
    "revision": "6357aa782af56c40467967537a685c83"
  },
  {
    "url": "img/other/20200323234753.jpg",
    "revision": "4022cae61e79ab2d4fa0abe1103cca53"
  },
  {
    "url": "img/other/20200325125911.png",
    "revision": "9f6fedff808fd3961181cd6828029963"
  },
  {
    "url": "img/other/20200325130218.png",
    "revision": "115c76c8bbe6a9955026e56586486dbf"
  },
  {
    "url": "img/other/upyun.png",
    "revision": "561e9d0af96ca7983bf3d721fc72ed39"
  },
  {
    "url": "img/photo/daily_20200811_1.jpg",
    "revision": "e04892c72ab483067a88a171d4bdc4c7"
  },
  {
    "url": "img/photo/daily_20200811_2.jpg",
    "revision": "0cb9a9da7fd98e3e9502f2e74a27aefe"
  },
  {
    "url": "img/photo/xili_ecological_park_1.jpg",
    "revision": "c01f5fbfcb10a821560381317be0c081"
  },
  {
    "url": "img/photo/xili_ecological_park_2.jpg",
    "revision": "2542612b7b696fabe41643a5bcffcbcf"
  },
  {
    "url": "img/photo/xili_ecological_park_3.jpg",
    "revision": "a9198ad09a5a13ae3a1f977719c9949f"
  },
  {
    "url": "img/photo/xili_ecological_park_4.jpg",
    "revision": "823c9f4a64d52c8f1fe8b060f9af1b4b"
  },
  {
    "url": "index.html",
    "revision": "17320568cf142419d4647068c1216540"
  },
  {
    "url": "logo_original.png",
    "revision": "417aae886a6faa02c41a910188e0cba1"
  },
  {
    "url": "logo.png",
    "revision": "fac1e9667afc37aa618b482fd5776f96"
  },
  {
    "url": "tag/analysis/index.html",
    "revision": "a6c1501666c9b1be902d31305b8adf92"
  },
  {
    "url": "tag/android/index.html",
    "revision": "9f2a3d864e1c98d2614f0d430ea58945"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "a3061cd84aeeb5298f73fe08e5d2886b"
  },
  {
    "url": "tag/cache/index.html",
    "revision": "4253b0140fa71459b734facb405ad924"
  },
  {
    "url": "tag/camera/index.html",
    "revision": "e1f69fd6d20808318812f2f48f845b5e"
  },
  {
    "url": "tag/chrome/index.html",
    "revision": "8d40f6c2268c49a59b80428697a1f646"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "20e1994b93e33a0c47a6cd9948e88ad4"
  },
  {
    "url": "tag/data-leak/index.html",
    "revision": "9e936076bf0397c98fd2c26e991a0ac1"
  },
  {
    "url": "tag/debug/index.html",
    "revision": "b93888a862f5b4f7600326d7e53b4f06"
  },
  {
    "url": "tag/design/index.html",
    "revision": "45a5f531eac559ea0c370b482d95dc3b"
  },
  {
    "url": "tag/dev/index.html",
    "revision": "4f4079c7b450e53fd934dbc565d0d143"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "2b27203ce545dd33ad2e31f265051b79"
  },
  {
    "url": "tag/dubbo/index.html",
    "revision": "bd6d4151b2b90eb27834742053524bc3"
  },
  {
    "url": "tag/env/index.html",
    "revision": "bbc595588b7f0ea7cb3a2a82951ed24f"
  },
  {
    "url": "tag/es/index.html",
    "revision": "5439a80fe69a0772409405be84e39fe2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b17849c696e091ee67181e6b72063ce9"
  },
  {
    "url": "tag/github/index.html",
    "revision": "f6a907715ac9fc214ea21f0c0f27a422"
  },
  {
    "url": "tag/IDE/index.html",
    "revision": "ad1ea8347fdd7eb1cbd44cebc16e4798"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "67e8cd1565f3462d194eeed03fdba130"
  },
  {
    "url": "tag/ideas/index.html",
    "revision": "db6a7227f52878675f65d828e2b58822"
  },
  {
    "url": "tag/index.html",
    "revision": "0d1fbf0650f0889fc64c49b9df0ae68a"
  },
  {
    "url": "tag/interesting/index.html",
    "revision": "a5f70116acaae6ab26df837712558316"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "bd0ee740b9673c03fb5e7eda5b24c339"
  },
  {
    "url": "tag/java/index.html",
    "revision": "dd82e1b1aaf3830ae3030fc9077b690a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6eb4926452a8ff09f264aeaae44c1337"
  },
  {
    "url": "tag/kafka/index.html",
    "revision": "b52202f5c7d1be48d43af36c04399dc9"
  },
  {
    "url": "tag/leetcode/index.html",
    "revision": "d9c5bc5d14dbf3e97ee79ae778ab73e9"
  },
  {
    "url": "tag/life/index.html",
    "revision": "151a48323e4378fa092c932fbd574348"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "95a723b079b7f0762a5f5863f4f598c7"
  },
  {
    "url": "tag/logger/index.html",
    "revision": "10316ac4250f441fa54aea510ad453b6"
  },
  {
    "url": "tag/MQ/index.html",
    "revision": "295a9bb3cb960b8fb9107a6eb46414f6"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "81ef301d917132768be846441f733436"
  },
  {
    "url": "tag/office/index.html",
    "revision": "28e7494dd681ec3e3e5fda067f27dde5"
  },
  {
    "url": "tag/pc/index.html",
    "revision": "a3f44ac69267b1532a961dc605fe2bf6"
  },
  {
    "url": "tag/PC/index.html",
    "revision": "8b537d01f4f8579fe4e66695e09bdaae"
  },
  {
    "url": "tag/perf/index.html",
    "revision": "a806259f1457c9308d4d03e92946ceca"
  },
  {
    "url": "tag/photography/index.html",
    "revision": "50f7fe1e18553147410079a2f7fc506f"
  },
  {
    "url": "tag/practice/index.html",
    "revision": "026ee4ea44792e40343af4a1f0e0b520"
  },
  {
    "url": "tag/privacy/index.html",
    "revision": "625f67fe45de3fe342d75d8556604a4f"
  },
  {
    "url": "tag/PS/index.html",
    "revision": "4b5f10f85acba963bf15c852e61a525c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9895a049a1be3bc19cb671185394f371"
  },
  {
    "url": "tag/Q&A/index.html",
    "revision": "b5615b32a458344c0163744dce1d7427"
  },
  {
    "url": "tag/router/index.html",
    "revision": "d2f2e5329752c625a5fcc5c383a19360"
  },
  {
    "url": "tag/search/index.html",
    "revision": "fd8d390fe9e07389367d92519637a5de"
  },
  {
    "url": "tag/spider/index.html",
    "revision": "4706a8b069b229715d8da7a348ed14ca"
  },
  {
    "url": "tag/spring boot/index.html",
    "revision": "2c37095b29753dfd6b9c6aa64cf7f3d2"
  },
  {
    "url": "tag/study/index.html",
    "revision": "1bafed0ba07dd032bc6cce5879ba03d1"
  },
  {
    "url": "tag/summary/index.html",
    "revision": "5eabe5df94fc83520becb1a00be715f1"
  },
  {
    "url": "tag/telegram/index.html",
    "revision": "02137380cce762eda4f748e956a8e468"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "a4ed14ed374cf64c077b98c21fdb3c2a"
  },
  {
    "url": "tag/tomcat/index.html",
    "revision": "ffbd760915ca40fedd8ff7f39a20f4e6"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "409ebbe1de5d409e01e56e09650ed521"
  },
  {
    "url": "tag/troubleshoot/index.html",
    "revision": "9bd644658128803768f94c9fe2eba84b"
  },
  {
    "url": "tag/tv/index.html",
    "revision": "70f7c8c0190e2478edb854c7535e8803"
  },
  {
    "url": "tag/vpn/index.html",
    "revision": "754a73eeab240cc1112c5a49f19a67ca"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9a207c5b3dadb1a115fac6eae48378d8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ce31faf2b65f9ebb42f39c5fc954a383"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "2b210e81c96ad5de4851821925e68944"
  },
  {
    "url": "tag/zookeeper/index.html",
    "revision": "c9a13ea7a2c359494b6dd1c79604dc61"
  },
  {
    "url": "tag/分布式/index.html",
    "revision": "6765a31dd11f9278c71b1ce2a54ba07b"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "810cfd2a3319f81814599a894717f5e7"
  },
  {
    "url": "timeline/index.html",
    "revision": "f5735d42b5c20c46b62ac588afc082a0"
  },
  {
    "url": "views/memo.html",
    "revision": "90bed3c2048b1a2e202c830cd52aed3c"
  },
  {
    "url": "views/message-board.html",
    "revision": "8af4fb64ee86d21b7a2082064a850b9a"
  },
  {
    "url": "views/news.html",
    "revision": "2a124091bd184dff71997610125edaf1"
  },
  {
    "url": "views/note/ai/202101211832-ai-machine-leaning-deep-leaning.html",
    "revision": "ce10873773c0635685dee7a2a07d0748"
  },
  {
    "url": "views/note/algorithm/202003171553-algorithm-in-practice.html",
    "revision": "96e51761bde35a893a54faee3024be5f"
  },
  {
    "url": "views/note/algorithm/202007131836-time-of-sum.html",
    "revision": "bb9fb61d3e060267f47631230e794222"
  },
  {
    "url": "views/note/algorithm/202008252322-algorithm-learning.html",
    "revision": "b19fd190706ac81f4995efe3df46e8e1"
  },
  {
    "url": "views/note/algorithm/202008311800-leetcode-0001.html",
    "revision": "f77983bb1ef0df07433b8eb17ce4fcf5"
  },
  {
    "url": "views/note/algorithm/202104161400-leetcode-198-213.html",
    "revision": "11233a714684c56f6d45565547f64da1"
  },
  {
    "url": "views/note/back-end/202003170000-qa-sumary.html",
    "revision": "6d76ced3473c3e64ed6f1cfb153b1881"
  },
  {
    "url": "views/note/back-end/202003220000-mq-1.html",
    "revision": "3eba465629b2012ea021be76430db9af"
  },
  {
    "url": "views/note/back-end/202003251037-tomcat-remote-debugging.html",
    "revision": "2ed23eec01a9a5ae069c96850e7f909f"
  },
  {
    "url": "views/note/back-end/202003251549-mq-2.html",
    "revision": "1f1595384054398ee4765f39a083a50a"
  },
  {
    "url": "views/note/back-end/202004021613-java-log.html",
    "revision": "eb6a4c662ead65ac31ee2d41e1409c2c"
  },
  {
    "url": "views/note/back-end/202004071826-zookeeper-install.html",
    "revision": "bb6284945a60ad6a85923635a000f03d"
  },
  {
    "url": "views/note/back-end/202004081325-mq-kafka-install.html",
    "revision": "868d51c6cad341caa07f30f6a483ef59"
  },
  {
    "url": "views/note/back-end/202004081353-java-for-update-value.html",
    "revision": "0e3b912f171144720c95b04a2807fad9"
  },
  {
    "url": "views/note/back-end/202004110912-mq-kafka-spring-boot-quick-start.html",
    "revision": "94f70ac1b02e419289d590c3bc647a64"
  },
  {
    "url": "views/note/back-end/202004181200-paging-when-data-changed.html",
    "revision": "437969b70ae6bd303226cc3bf72f126b"
  },
  {
    "url": "views/note/back-end/202004211800-mysql-index-about-like.html",
    "revision": "4eb53f38e520ce04f4aeab18fd1cc913"
  },
  {
    "url": "views/note/back-end/202005111040-troubleshoot-advice.html",
    "revision": "68ed4277af04e20c4dbe26b2db3181cc"
  },
  {
    "url": "views/note/back-end/202006231316-java-programming-thinking.html",
    "revision": "d7155ba175c88b6817da9b6c8699a835"
  },
  {
    "url": "views/note/back-end/202006301740-es-search-perf.html",
    "revision": "f83dbf72e0144e331df536ed76d1b820"
  },
  {
    "url": "views/note/back-end/202009111657-troubleshoot-map-containsKey.html",
    "revision": "ff730388885001a260b5b5ca14a7fa14"
  },
  {
    "url": "views/note/back-end/202009151110-troubleshoot-dubbo.html",
    "revision": "1bd013cc96ae65d2ef402e453f53ffb6"
  },
  {
    "url": "views/note/back-end/202009151113-troubleshoot-record.html",
    "revision": "7a7c4dda1d351f70e32dbbe8ede4acb0"
  },
  {
    "url": "views/note/back-end/202009161800-design-resource-rank.html",
    "revision": "30eb7822c8fc103f5ee3614ed2761a0f"
  },
  {
    "url": "views/note/back-end/202009181055-java-basic-knowledge.html",
    "revision": "53178197dfbaa8ed608d917233bca92f"
  },
  {
    "url": "views/note/back-end/202009291133-common-deign-sharing.html",
    "revision": "a81c8d20af00f2687272842714999f44"
  },
  {
    "url": "views/note/back-end/202010141945-troubleshoot-mysql-timestamp-range.html",
    "revision": "7f0d1d93ec3a3d10b4acf14d45ea38cc"
  },
  {
    "url": "views/note/back-end/202010151119-design-img-multiple-size-upload.html",
    "revision": "ed5fda137d7ba3450f2ea1aa1c4cf227"
  },
  {
    "url": "views/note/back-end/202010171641-troubleshoot-call-chain-analysis.html",
    "revision": "9d45f14fe887647abb021fbf786d7a95"
  },
  {
    "url": "views/note/back-end/202011041635-troubleshoot-oom.html",
    "revision": "f3fbf90a177d6568421d60deb25717c3"
  },
  {
    "url": "views/note/back-end/202011061053-struts-to-spring-mvc.html",
    "revision": "06ae73ede144d9970d58ec6b89257630"
  },
  {
    "url": "views/note/back-end/202011111918-ip-parse-service-design.html",
    "revision": "c4971e304a2c693651ced16433db3560"
  },
  {
    "url": "views/note/back-end/202012120023-cache.html",
    "revision": "ade880e96d79dc7be1d484329d3525d8"
  },
  {
    "url": "views/note/back-end/202012141640-troubleshoot-dubbo-registry.html",
    "revision": "6f3c9baec1a70f4950c9a2b14e3663c3"
  },
  {
    "url": "views/note/back-end/202012291105-elasticsearch-analysis-ik.html",
    "revision": "1844065e52805953e3cc932d757154f7"
  },
  {
    "url": "views/note/back-end/202101291313-arthas.html",
    "revision": "35d6d55e636d27e70220983c786c50ad"
  },
  {
    "url": "views/note/back-end/202104131352-idea-debug.html",
    "revision": "eb841cc5da8baa0d9babbb9395119e1d"
  },
  {
    "url": "views/note/back-end/202105201717-ip-parsing-service-troubleshoot-and-perf.html",
    "revision": "736ee3b655a45444690946e866e92e91"
  },
  {
    "url": "views/note/dev/202008032201-dev-log.html",
    "revision": "ea6b5dfe13a78c530b67eaa61f6fe6eb"
  },
  {
    "url": "views/note/dev/202010301115-improve-the-development-experience.html",
    "revision": "8ef62e070ba5bece7dc1bcca192aff27"
  },
  {
    "url": "views/note/dev/idea.html",
    "revision": "8928abcecedb5d057ddd1e1d0750e250"
  },
  {
    "url": "views/note/front-end/202003281955-vuepress-favorites-dev.html",
    "revision": "ee7fb4fa4a924c38f75fe222a534c528"
  },
  {
    "url": "views/note/front-end/202004021835-js-date-format.html",
    "revision": "f7ec07a314122db2fecba0af7ef9c47b"
  },
  {
    "url": "views/note/machine-learning/202003060000-init.html",
    "revision": "6ee27950bbbd2d16c16232d4c414c9b2"
  },
  {
    "url": "views/note/ops/202003080000-how-to-set-up-blog.html",
    "revision": "02cf8aeb5dbe4d6d9c7029f2645e35e5"
  },
  {
    "url": "views/note/ops/202003231800-github-actions.html",
    "revision": "7d59f856070f65c14b862d06a330c7cf"
  },
  {
    "url": "views/note/ops/202003241800-vuepress-plugin.html",
    "revision": "0a9a2f1fdd5e8a89b443178da99f8ac9"
  },
  {
    "url": "views/note/ops/202003291850-douban-search-tool.html",
    "revision": "7ed9c5ca7b1d57d1c0d788017f162542"
  },
  {
    "url": "views/note/ops/202003302049-git-merge-problem.html",
    "revision": "59fa2b951bce30d3f547a8a3f33f0d56"
  },
  {
    "url": "views/note/ops/202004031522-linux-environment-variable.html",
    "revision": "c05c0098f2ac62386471549d4bd631f5"
  },
  {
    "url": "views/note/ops/202004061808-vuepress-enhance-app.html",
    "revision": "8752f6613912d878ffb8dbc7bacdc734"
  },
  {
    "url": "views/note/ops/202004081131-linux-command.html",
    "revision": "03ee860fc7118aaa45118523d995a7b9"
  },
  {
    "url": "views/note/ops/202004141352-vuepress-last-updated.html",
    "revision": "1f12412888bc1b4b31681c62daeb5b6d"
  },
  {
    "url": "views/note/ops/202006051715-about-bilibili-share-iframe.html",
    "revision": "adf156933c4eedb579855b3a3ca6ecbc"
  },
  {
    "url": "views/note/ops/202006061325-windows-command.html",
    "revision": "3db8abc4fdad367c1168970771791970"
  },
  {
    "url": "views/note/ops/202007151700-dev-env-and-tools.html",
    "revision": "9dca2e3550920b6c55870c9d0b28ddee"
  },
  {
    "url": "views/note/ops/202008211422-docker.html",
    "revision": "587b313549bdc822f9000f6cb100be06"
  },
  {
    "url": "views/note/ops/202008222201-microsoft-e5.html",
    "revision": "b84f1457c4a099884576f189844edc34"
  },
  {
    "url": "views/note/ops/202009041358-forestry-vuepress-cms.html",
    "revision": "778e7d5bfeb61ed9b3602bb9656c247f"
  },
  {
    "url": "views/note/ops/202012202137-linux.html",
    "revision": "b410dc75d1cb0fb5aafe8adc9c207953"
  },
  {
    "url": "views/note/ops/202101032118-github-default-branch.html",
    "revision": "2eb091442c9ae8bf2c3de696ed9bb4d7"
  },
  {
    "url": "views/note/photography/202006231335-photography-composition.html",
    "revision": "d1d668350b9eaef7079d7eb4d60d92cd"
  },
  {
    "url": "views/note/photography/202102241315-ps-blending-modes.html",
    "revision": "f963caa0ff21e4e448cda7a90ff2c65b"
  },
  {
    "url": "views/note/security/202004131057-security-blog-link.html",
    "revision": "9c90619099dd0681d46440ccab7598d7"
  },
  {
    "url": "views/note/security/202004151107-gsil-github-actions.html",
    "revision": "390aa0995a54c6f89fb3d4d3939ed634"
  },
  {
    "url": "views/note/security/202103071400-immunity-canvas-7.26.html",
    "revision": "d22ec23823c58b2d6d8e008d0f13b746"
  },
  {
    "url": "views/note/security/202104131325-personal-privacy-protect.html",
    "revision": "78aea423f0f4cd2e6a398e2d097ca823"
  },
  {
    "url": "views/note/study.html",
    "revision": "7cb1838eea2d9d1662fa0d5cf5ebb6a6"
  },
  {
    "url": "views/other/202003050000-hello-world.html",
    "revision": "522df5f571ead74b579f041bf17e58b3"
  },
  {
    "url": "views/other/202003170000-vpn.html",
    "revision": "20c96fb0689037b405b730b93beecfc9"
  },
  {
    "url": "views/wanji/202005171916-remove-mitv-ad.html",
    "revision": "61817ade7e550cb58c421c439a4750f8"
  },
  {
    "url": "views/wanji/202005211317-wanji-resource-share.html",
    "revision": "7330df1386bc01b1365c83661ec20faa"
  },
  {
    "url": "views/wanji/202008261312-control-phone-on-pc.html",
    "revision": "d212f4f45fde16d8feea5c0ad6982f27"
  },
  {
    "url": "views/wanji/202010251703-taobao-yangmao.html",
    "revision": "9257cb547234c05c6267286533f7f387"
  },
  {
    "url": "views/wanji/202012132201-router-k2p.html",
    "revision": "dd2f1813119f147033c8d97bd59b67e6"
  },
  {
    "url": "views/wanji/202012201630-termux.html",
    "revision": "9d762a753302ecb9d333f6e78a065f67"
  },
  {
    "url": "views/wanji/202012201650-chrome-extensions.html",
    "revision": "65b5a88dc0e025affd1bfb05915957c2"
  },
  {
    "url": "views/wanji/202101211843-sony-α6000.html",
    "revision": "41a0283c0710762b042e4859b666ebc3"
  },
  {
    "url": "views/wanji/202101291137-remote-boot-wake-on-lan.html",
    "revision": "ca42995b46c9a762832e1409f07ece98"
  },
  {
    "url": "views/wanji/202101291140-add-wechat-by-wxid.html",
    "revision": "d924de570332a1a6244c50bb4c940b0f"
  },
  {
    "url": "views/wanji/202102131832-magisk-issure-fix.html",
    "revision": "b8c170f66c83cec6ba86a04c8b3db25f"
  },
  {
    "url": "views/wanji/202104131338-telegram.html",
    "revision": "99ec318cafd8096be303737e2a509625"
  },
  {
    "url": "views/wanji/202104131346-interesting-website.html",
    "revision": "2b16689926e343d0bcbc1103d2708c17"
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
