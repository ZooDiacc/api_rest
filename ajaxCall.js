


$(document).ready(function(){
    $('#postMessage').click(function(e){
        e.preventDefault();

        
        var url = $('form').serialize();

        
        function getUrlVars(url) {
            var hash;
            var myJson = {};
            var hashes = url.slice(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                myJson[hash[0]] = hash[1];
            }
            return JSON.stringify(myJson);
        }

        
        var test = getUrlVars(url);

        
        $.ajax({
            type:"POST",
            url: "/Work folders/OOP php/RESTFUL traversy/php_rest_myblog/api/post/create.php",
            data: test,
            ContentType:"application/json",

            success:function(){
                alert('successfully posted');
            },
            error:function(){
                alert('Could not be posted');
            }

        });
    });
});
    



  document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick=function(){
       
       var req;
       req=new XMLHttpRequest();
       req.open("GET", '/Work folders/OOP php/RESTFUL traversy/php_rest_myblog/api/post/read.php',true);
       req.send();
      
       req.onload=function(){
       var json=JSON.parse(req.responseText);

       
       var son = json.filter(function(val) {
              return (val.id >= 4);  
          });

      var html = "";

      
      son.forEach(function(val) {
          var keys = Object.keys(val);

          html += "<div class = 'cat'>";
              keys.forEach(function(key) {
              html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
              });
          html += "</div><br>";
      });

      
      document.getElementsByClassName('message')[0].innerHTML=html;         
      };
    };
  });
  
