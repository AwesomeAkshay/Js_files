$(document).ready(function () { 
 // View Products toggling

 var wealthSliderSelectVal = 'wealth-creation';
 $('.jsViewProducts').on('click', function (){
   $(this).toggleClass('active');
   // $(this).parent().siblings('.wealth-creation-products').removeClass('active');
   $(this).parent().siblings('.wealth-sliders-wrap').slideToggle('100');
   $('.jsWealthSlider').slick('refresh')
 });

 // Wealth select toggling
 $('.jsWealthSelectToggle').on('click', function (){
   $(this).toggleClass('active');
   $('.wealth-select .wealth-select-options-wrap').toggleClass('active')
 });
 // clicking on options in wealth creation
 $('.jsWealthOptions li').on('click', function (){
   $('.jsWealthSelectToggle').removeClass('active');
   var selectedValue = $(this).html();
   wealthSliderSelectVal = $(this).attr('class');
   $('.wealth-select .wealth-select-options-wrap').removeClass('active')
   $('.jsWealthSelectToggle span').html(selectedValue)

   //Change bottom options slider
   $('.wealth-creation-products').removeClass('active');
   $('#' + wealthSliderSelectVal).addClass('active');
   $('#' + wealthSliderSelectVal + ' .jsWealthSlider').slick('refresh');
 });

 $(document).on("click", function(event){
   var $trigger = $(".close-on-outside");
   if($trigger !== event.target && !$trigger.has(event.target).length){
     $('.jsWealthSelectToggle').removeClass('active');
     $('.wealth-select-options-wrap').removeClass('active');
     $('.js-advisory-notification').addClass('d-none');
     $('.js-fd-rate-info').addClass('d-none');
     $('.js-fd-rate-info-mobile').removeClass('active');
   }
 });
 // Wealth creation slider
 $(".jsWealthSlider").slick({
   dots: true,
   infinite: false,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
         infinite: false,
         dots: true,
       },
     },
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: false,
         dots: true,
       },
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         arrows: false,
         centerMode: true,
         centerPadding: '60px'
       },
     },
   ],
 });

});