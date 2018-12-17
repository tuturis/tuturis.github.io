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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7626e6bd76de1f139a69.js"
  },
  {
    "url": "app-c3a5c262227e66adb251.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c96fdfe9c675340bc3e5.js"
  },
  {
    "url": "index.html",
    "revision": "5e641c5945c46792b9c8215c34375554"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "72d013412096fb9a2a9b5ff126e996da"
  },
  {
    "url": "0.36758773931b0511fda0.css"
  },
  {
    "url": "component---src-pages-index-js-b5653b6a401ab1232aeb.js"
  },
  {
    "url": "2-220fa2bd9e39dbda1e94.js"
  },
  {
    "url": "1-e5195df679879c225734.js"
  },
  {
    "url": "0-9d445012c707c3090429.js"
  },
  {
    "url": "static/d/551/path---index-6a9-S3oWjtLp1LFcZp1M5cGlqq8.json",
    "revision": "0669b7d3f133b58b9b5271b866370d62"
  },
  {
    "url": "component---src-pages-404-js-7e614e035bee57b8d183.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "df4edee4693ed29fcc0eaa905eac9a5c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});