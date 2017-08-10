$(document).ready(function() {
  $('button').on('click', function(){
    var age = $("input:radio[name=age]:checked").val();
    if(age === 'seventeen-'){
      $('.younger').css('display', 'block');
    } else {
      $('.older').css('display', 'block');
    };
  });
});
