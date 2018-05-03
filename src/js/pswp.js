'use strict';

var items = [
        [
            {
                src: 'https://www.rewardexpert.com/shared/wine-map/images/map_wine@2x.png',
                srcset: 'https://www.rewardexpert.com/shared/wine-map/images/map_wine@2x.png 2x',
                w: 1130,
                h: 595
            }
        ]
    ];

var openPhotoSwipe = function(items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var items = items;

    var options = {

        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
