/**
 * Created By: Dolphin Web Solution Pvt. Ltd.
 */
require(['jquery', 'owlcarousel'], function ($) {
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                425: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    });
});
