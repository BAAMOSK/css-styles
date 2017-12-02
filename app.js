$("#bubble").click(function() {
    $("body, div").toggleClass('cheese_time');
    $(".outer_crater, .cheese_shadow, .cheese_hole").toggle('fast');
    $("p").toggle();
});
