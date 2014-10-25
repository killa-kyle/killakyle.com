
    // var feed = new Instafeed({
    //     get: 'user',
    //     userId: 30621574,
    //     accessToken: '30621574.467ede5.39ae68fca1e54705b0b487cb788ace60',
    //     target: 'instafeed',
    //     links: true,
    //     limit: 8,
    //     sortBy: 'most-recent',
    //     resolution: 'standard_resolution',
    //     template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>',
    // });
    
    // feed.run();
jQuery(document).ready(function() {
     //Set up instafeed
     var feed = new Instafeed({
         clientId: 'd37edb81f275402aab1601481b992f6f',
         target: 'instafeed',
         get: 'tagged',
         tagName: 'fall',
         links: true,
         limit: 8,
         sortBy: 'most-liked',
         resolution: 'standard_resolution',
         template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
     });
     feed.run();
        
});
