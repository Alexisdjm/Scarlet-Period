/*
$(function(){
  
  //-- remove click event from "soldout" variants in CollectionGrid
  $('.collectionGrid .swatch-element.soldout input').off('click');
  
  //-- change qty dropdown
  function abc_reset_qty_dropdown() {
    if( $('.product select#product-select').length > 0 && $('.product select#quantity').length > 0 )
    {
      var available_qty = $('.product #product-select option:selected').data('qty');
      available_qty = parseInt( available_qty );
      
      var max_limit = available_qty > 10 ? 10 : available_qty;
      
      $('.product #quantity').empty();
      for( var i = 1; i <= max_limit; i++ )
      {
        $('.product #quantity').append('<option value="'+ i +'">'+ i +'</option>');
      }
    }
  }
  
  if( $('.product select#product-select').length > 0 && $('.product select#quantity').length > 0 ) {
    //-- on change
    //$('body').on('change', 'select#product-select', function(){
    $('.product').on('change', '#product-select-option-0', function(){          
      abc_reset_qty_dropdown();
    });

    abc_reset_qty_dropdown();
  }
});
*/