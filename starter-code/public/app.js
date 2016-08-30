console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');
  $('#guess-number-form').on('submit', function(event){
    event.preventDefault();
    var data = $(this).serialize();
    $.ajax({
      method: "GET",
      url: ("/guess?" + data),
      success: numSuccess,
      error: onError
    });
  });
  function numSuccess(json){
    $('#high-low-correct').html(json);
  }
  $('#target-number-form').on('submit', function(event){
    event.preventDefault();
    var data = $(this).serialize();
    $.ajax({
      method: "POST",
      url: ("/change?" + data),
      success: numChange,
      error: onError
    });
  });
  function numChange(json){
    alert(json);
  }

  function onError(xhr, status, errorThrown) {
   console.log('uh oh');
  }
});
