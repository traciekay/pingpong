$(document).ready(function() {
        $("#ping-form").submit(function(event) {
          var number1 = parseInt($("#pingpong").val());
          $('#output').empty();

          for (var x=1; x <=number1; x++){
              if( x % 3 ===0 && x % 5===0 ) {
                $("#output").append("<li>pingpong</li> \n");
              }
              else if ( x % 3 === 0 ) {
                      $("#output").append("<li>ping</li> \n");
                    }
                    else  if( x % 5 === 0 ) {
                      $("#output").append("<li>pong</li> \n");
                    }
                    else {
                      $("#output").append("<li>" + x +"</li>\n");
                    }
                  }
                  event.preventDefault();
        });
      });
