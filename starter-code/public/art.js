

$(document).ready(function(){
  getArt();
  $('#add-art').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/art-gallery/add',
      data: $('#add-art').serialize(),
      success: handleArt,
      error: onError,
      dataType: 'json'
    });

  });
});

function getArt(){
    $.ajax({
      method: 'GET',
      url:'/api/art',
      success: handleArt,
      error: onError,
      dataType: 'json'
    });
}
function handleArt(json){
  $('#art-collection').empty();
  console.log("woo");
  json.forEach(function(input){
    $('#art-collection').append('<h3>' + input.title +" by " + input.artist + '<//h3>');
    $('#art-collection').append('<p>' + input.description + '</p>');
  });
}


function onError(xhr, status, errorThrown) {
 console.log('uh oh');
}
