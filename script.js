  $(function() {
    $("a[href^='#']").not("a[href='#']").click(function() {
       $("#"+$(this).attr("href").slice(1)+"").focus();
    });
 });

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

  