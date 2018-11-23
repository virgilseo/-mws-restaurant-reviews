self.addEventListener('install', function(event) {
  //Put cached assets into a variable
  const urlsToCache = [
    '/',
    'js/main.js',
    'js/restaurant_info.js',
    'js/dbhelper.js',
    'css/styles.css',
    'css/responsive.css',
    'data/restaurants.json',
    '/index.html',
    '/restaurant.html',
    'img/1.jpg',
    'img/1_small.jpg',
    'img/2.jpg',
    'img/2_small.jpg',
    'img/3.jpg',
    'img/3_small.jpg',
    'img/4.jpg',
    'img/4_small.jpg',
    'img/5.jpg',
    'img/5_small.jpg',
    'img/6.jpg',
    'img/6_small.jpg',
    'img/7.jpg',
    'img/7_small.jpg',
    'img/8.jpg',
    'img/8_small.jpg',
    'img/9.jpg',
    'img/9_small.jpg',
    'img/10.jpg',
    'img/10_small.jpg'
  ];

  event.waitUntil(
    //create the cash
    caches.open('restaurant-static-v1').then(function (cache) {   
      // store the urls in the cash using return
      return cache.addAll(urlsToCache);
      })
  );
});
