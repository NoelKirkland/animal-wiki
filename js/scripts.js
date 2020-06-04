$(document).ready(function() {
  $("form#animal-selecter").submit(function(event){
    event.preventDefault();
    const animal = $("#animal").val();
    if(animal === "monkey"){
      $("#monkey").show();
    }
    else if(animal === "rhino"){
      $("#rhino").show();
    }
    else{
      $("#pig").show();
    }
  }); 
});