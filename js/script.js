/* *** IZRAČUN BROJA DANA *** */
function calc(by) {
  var by = document.getElementById("by").value;
  var ytl = 80;
  var dy = parseInt(by) + ytl;
  var today = new Date();
  var year = today.getFullYear();
  var rest = dy - year;
  var restDay = rest * 365;
  document.getElementById("days").innerHTML = restDay;
}
/* *** DODAVANJE/BRISANJE KLASE *** */
$(document).ready(function(){
  $("#button").click(function(){
    if(this.class == "container"){
      $("#top p").show();
      $("#main").show();
      $("#bottom").hide()
    }
    else{
      $("#top p").hide();
      $("#main").hide();
      $("#bottom").show()
    }
  });
});
