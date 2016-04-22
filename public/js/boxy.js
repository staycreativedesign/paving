$(function(){

  $("#client-list li").click(function () {
    var target = $(this).data('target');
    var targetClient = $(target);
    var allClients = $('div[data-role=client-row]');
    var allClientsWithoutTarget = allClients.not(targetClient);
    $.when(allClientsWithoutTarget.fadeOut(1000)).then(function() {
        targetClient.fadeIn(1000);
    });
  });

  $("#services-list li").click(function () {
    var target = $(this).data('target');
    var targetClient = $(target);
    var allClients = $('div[data-role=services-row]');
    var allClientsWithoutTarget = allClients.not(targetClient);
    $.when(allClientsWithoutTarget.fadeOut(500)).then(function() {
        targetClient.fadeIn(500);
    });
  });

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

   $(document).scroll(function(){
     $("#navigation-menu").toggleClass('bg-white', $(this).scrollTop() > 250);
 });

});



