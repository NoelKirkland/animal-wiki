$(document).ready(function() {
  $("form#animal-selecter").submit(function(event){
    event.preventDefault();
    const animal = $("#animal").val();
    if(animal === "monkey"){
      $("#monkey").show();
      $("#rhino").hide();
      $("#pig").hide();
    }
    else if(animal === "rhino"){
      $("#rhino").show();
      $("#monkey").hide();
      $("#pig").hide();
    }
    else{
      $("#pig").show();
      $("#monkey").hide();
      $("#rhino").hide();
    }
  }); 
});