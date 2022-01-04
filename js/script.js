(function($){
    $(document).ready(function(){
      $(".name-field input").focus(function(){
        $(".name-field label").hide(function(){
        });
      });
      $(".email-field input").focus(function(){
        $(".email-field label").hide(function(){
        });
      });
      $(".message-field textarea").focus(function(){
        $(".message-field label").hide(function(){
        });
      });
      $('.sk1').pieChart({
        barColor: '#8e44ad',
        trackColor: '#a4b0be',
        lineWidth: 13,
        size: 160
      });
      $('.sk2').pieChart({
        barColor: '#d74680',
        trackColor: '#a4b0be',
        lineWidth: 13,
        size: 160
      });
      $('.sk3').pieChart({
        barColor: '#15c7a8',
        trackColor: '#a4b0be',
        lineWidth: 13,
        size: 160
      });
      $('.sk4').pieChart({
        barColor: '#ffc048',
        trackColor: '#a4b0be',
        lineWidth: 13,
        size: 160
      });
      $('.sk5').pieChart({
        barColor: '#eb7d4b',
        trackColor: '#a4b0be',
        lineWidth: 13,
        size: 160
      });
      $('.sk6').pieChart({
        barColor: '#ff5e57',
        trackColor: '#a4b0be',
        lineWidth: 13,
        size: 160
      });
      var mixing = mixitup('.portfolio-img-layout');
    });
  })(jQuery)