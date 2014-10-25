$(document).ready(function(){
// design_critiques
$.getJSON("http://www.reddit.com/r/design_critiques.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url;
        //post title
        $("#design_critiques").append( '<h4>'+post.data.title +'</h4>' );
        
        //convert url to link
        function convertToLinks(text) {
            var replaceText, replacePattern1;
             
            //URLs starting with http://, https://
            replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
            replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
             
            //URLs starting with "www."
            replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
            replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
             
            //returns the text result
             
            return replacedText;
        }
        linkto = convertToLinks(linkto);
        $("#design_critiques").append( '<br>' + linkto + '<br>');
        $("#design_critiques").append( '<hr>' );
      }

    )
  }
); 


        //scroll to top
        $('.two').bind('click',function(){
            theOffset = $(this).offset();
                 $('body,html').animate({ scrollTop: theOffset.top - 0 });
        });



// /r/design
$.getJSON("http://www.reddit.com/r/design.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#design").append( '<h4>'+post.data.title +'</h4>' );
        // $("#crappydesign_critiques").append( '<br>' + post.data.url + '<br>');
        // $("#crappydesign_critiques").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        console.log(linkto);

        $("#design").append( '<br>' + linkto + '<br>');
        $("#design").append( '<hr>' );
      }

    )
  }
); 

        //scroll to top
        $('.three').bind('click',function(){
            theOffset = $(this).offset();
                 $('body,html').animate({ scrollTop: theOffset.top - 0 });
        });

        //scroll to top function
    //     $('#design_scroll').bind('click',function(){
    //         if ($('#collapseTwo').hasClass('collapse')){
    //         theOffset = $(this).offset();
    //              $('body,html').animate({ scrollTop: $('#design_scroll').offset().top
    // }, 400);
    //          }
    //     });
        
        $('#design_scroll').bind('click',function(){
            
            $("html, body").scrollTo('#collapseTwo',{duration:'slow', offsetTop : '50'});
        });
// /r/crappydesign
$.getJSON("http://www.reddit.com/r/crappydesign.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#crappydesign").append( '<h4>'+post.data.title +'</h4>' );
        // $("#crappydesign_critiques").append( '<br>' + post.data.url + '<br>');
        // $("#crappydesign_critiques").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#crappydesign").append( '<br>' + linkto + '<br>');
        $("#crappydesign").append( '<hr>' );
      }

    )
  }
); 
        //scroll to top
        $('.four').bind('click',function(){
            theOffset = $(this).offset();
                 $('body,html').animate({ scrollTop: theOffset.top - 0 });
        });

// /r/userexperience
$.getJSON("http://www.reddit.com/r/userexperience.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#userexperience").append( '<h4>'+post.data.title +'</h4>' );
        // $("#userexperience_critiques").append( '<br>' + post.data.url + '<br>');
        // $("#userexperience_critiques").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#userexperience").append( '<br>' + linkto + '<br>');
        $("#userexperience").append( '<hr>' );
      }

    )
  }
);  

        //scroll to top
        $('.five').bind('click',function(){
            theOffset = $(this).offset();
                 $('body,html').animate({ scrollTop: theOffset.top - 0 });
        });

// /r/webdev
$.getJSON("http://www.reddit.com/r/webdev.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#webdev").append( '<h4>'+post.data.title +'</h4>' );
        // $("#webdev_critiques").append( '<br>' + post.data.url + '<br>');
        // $("#webdev_critiques").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#webdev").append( '<br>' + linkto + '<br>');
        $("#webdev").append( '<hr>' );
      }

    )
  }
); 

// /r/css
$.getJSON("http://www.reddit.com/r/css.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#css").append( '<h4>'+ post.data.title +'</h4>' );
        // $("#css_critiques").append( '<br>' + post.data.url + '<br>');
        // $("#css_critiques").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#css").append( '<br>' + linkto + '<br>');
        $("#css").append( '<hr>' );
      }

    )
  }
); 

// /r/jquery
$.getJSON("http://www.reddit.com/r/jquery.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#jquery").append( '<h4>'+post.data.title +'</h4>' );
        // $("#jquery_critiques").append( '<br>' + post.data.url + '<br>');
        // $("#jquery_critiques").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#jquery").append( '<br>' + linkto + '<br>');
        $("#jquery").append( '<hr>' );
      }

    )
  }
);   

// /r/javascript
$.getJSON("http://www.reddit.com/r/javascript.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#javascript").append( '<h4>'+post.data.title +'</h4>' );
        // $("#javascript_critiques").append( '<br>' + post.data.url + '<br>');
        // $("#javascript_critiques").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#javascript").append( '<br>' + linkto + '<br>' + '<br>');
        $("#javascript").append( '<hr>');

      }

    )
  }
);   

// /r/php
$.getJSON("http://www.reddit.com/r/php.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#php").append( '<h4>'+post.data.title +'</h4>' );
        // $("#php_critiques").append( '<br>' + post.data.url + '<br>');
        // $("#php_critiques").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#php").append( '<br>' + linkto + '<br>' + '<br>');
        $("#php").append( '<hr>');

      }

    )
  }
);   

// /r/wordpress
$.getJSON("http://www.reddit.com/r/wordpress.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#wordpress").append( '<h4>'+post.data.title +'</h4>' );
        // $("#wordpress_critiques").append( '<br>' + post.data.url + '<br>');
        // $("#wordpress_critiques").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#wordpress").append( '<br>' + linkto + '<br>' + '<br>');
        $("#wordpress").append( '<hr>');

      }

    )
  }
);    

// /r/webhosting
$.getJSON("http://www.reddit.com/r/webhosting.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#webhosting").append( '<h4>'+post.data.title +'</h4>' );
        // $("#webhosting_critiques").append( '<br>' + post.data.url + '<br>');
        // $("#webhosting_critiques").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#webhosting").append( '<br>' + linkto + '<br>' + '<br>');
        $("#webhosting").append( '<hr>');

      }

    )
  }
);      

// /r/talesfromdesigners
$.getJSON("http://www.reddit.com/r/talesfromdesigners.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#talesfromdesigners").append( '<h4>'+post.data.title +'</h4>' );
        // $("#talesfromdesigners").append( '<br>' + post.data.url + '<br>');
        // $("#talesfromdesigners").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#talesfromdesigners").append( '<br>' + linkto + '<br>' + '<br>');
        $("#talesfromdesigners").append( '<hr>');

      }

    )
  }
);

// /r/webmarketing
$.getJSON("http://www.reddit.com/r/webmarketing.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#webmarketing").append( '<h4>'+post.data.title +'</h4>' );
        // $("#webmarketing").append( '<br>' + post.data.url + '<br>');
        // $("#webmarketing").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#webmarketing").append( '<br>' + linkto + '<br>' + '<br>');
        $("#webmarketing").append( '<hr>');

      }

    )
  }
);

// /r/dotcom
$.getJSON("http://www.reddit.com/r/dotcom.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#dotcom").append( '<h4>'+post.data.title +'</h4>' );
        // $("#dotcom").append( '<br>' + post.data.url + '<br>');
        // $("#dotcom").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#dotcom").append( '<br>' + linkto + '<br>' + '<br>');
        $("#dotcom").append( '<hr>');

      }

    )
  }
);           


// /r/somebodymakethis
$.getJSON("http://www.reddit.com/r/somebodymakethis.json?",function foo(result) {
    $.each(result.data.children.slice(0, 5),
      function (i, post) {

        var linkto = post.data.url
        $("#somebodymakethis").append( '<h4>'+post.data.title +'</h4>' );
        // $("#somebodymakethis").append( '<br>' + post.data.url + '<br>');
        // $("#somebodymakethis").append( '<br>' + post.data.permalink );
        
    


        function convertToLinks(text) {
        var replaceText, replacePattern1;
         
        //URLs starting with http://, https://
        replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;
        replacedText = text.replace(replacePattern1, '<a class="colored-link-1" title="$1" href="$1" target="_blank">$1</a>');
         
        //URLs starting with "www."
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a class="colored-link-1" href="http://$2" target="_blank">$2</a>');
         
        //returns the text result
         
        return replacedText;

        console.log(replacedText);
        }
        linkto = convertToLinks(linkto);
        // console.log(linkto);

        $("#somebodymakethis").append( '<br>' + linkto + '<br>' + '<br>');
        $("#somebodymakethis").append( '<hr>');

      }

    )
  }
); 


});     