var myQuote = '', myAuthor = '';

$("#getMessage").click(function(){
  $(function (){
    $quotes = $('#quotes');
    $.ajax({
      type: 'GET',
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      success: function(q){
        var post = q.shift();
        $( '#quotes' ).html(post.content);
        $( '#author' ).text('—'+post.title);
      },
      cache: false
    });
  });
});

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  }
  return t;
}(document, "script", "twitter-wjs"));


$("#tweetBtn").click(function(){
  var quote = document.getElementById('quotes').textContent;
  var author = document.getElementById('author').textContent;
  var tweetUrl ='https://twitter.com/intent/tweet?text='+encodeURIComponent(quote+author);
    window.open(tweetUrl);
});