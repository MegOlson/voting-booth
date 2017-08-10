$(document).ready(function() {
  $('button').on('click', function(){
    var age = $("input:radio[name=age]:checked").val();
    console.log('over');
    if(age === 'seventeen-'){
      $('.younger').css('display', 'block');
    } else {
      console.log('over');
      $('.older').css('display', 'block');
    };
  });
});
