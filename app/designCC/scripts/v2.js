$(document).ready(function() {
  
  //array of subreddits for the project
  subreddits=["design_critiques","design","crappydesign","userexperience","webdev","css","jquery","javascript","php","wordpress","webhosting","talesfromdesigners","webmarketing","dotcom","somebodymakethis"];

  
  //loop through the subreddits array 0..15
  for(i=0;i<subreddits.length;i++) {
    
    // $("#"+subreddits[i]).append(subreddits[i]); 
    
    

    $.getJSON("http://www.reddit.com/r/"+subreddits[i]+"/.json", function foo(result) {
        



      

      subredditname = result.data.children[i].data.subreddit;
      console.log(subredditname);

     
    });
    
  }
  
});


// function expand(i) {
//   for(j=0;j<15;j++) {
//     if(j==i) {
//         $(".link-"+j).slideToggle();
//     }
//     else {
//        $(".link-"+j).slideUp();
//     }
//   }
// }