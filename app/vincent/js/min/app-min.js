jQuery(document).ready(function(){var i=new Instafeed({clientId:"d37edb81f275402aab1601481b992f6f",target:"instafeed",get:"tagged",tagName:"fall",links:!0,limit:8,sortBy:"most-liked",resolution:"standard_resolution",template:'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'});i.run()});