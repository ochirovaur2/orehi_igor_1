// import jQuery from "jquery";
// import popper from "popper.js";
import "pgwslider";

// localStorage.setItem('bgcolor', 'red');
// var aValue = localStorage.getItem('bgcolor');
// console.log(localStorage.getItem('bgcolor'))
// Type Writer

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  if(document.querySelector('.txt-type')){
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
  
      new TypeWriter(txtElement, words, wait);
  }
  
  
  // Init TypeWriter
  
}
//////////////////////////////////
// document.querySelector(".item__minus-btn").onclick = function(e){

//   alert("sd")
// }

// Plus Minus
function PlusMinus(){
  $('.item__minus-btn-js').on('click', function(e) {
      
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest('div').find('input');
      var value = parseInt($input.val());
   
      if (value > 1) {
          value = value - 1;
          $(".item__total-price-js")
      } else {
          value = 0;
      }
   
    $input.val(value);

   
  });
   
  $('.item__plus-btn-js').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest('div').find('input');
      var value = parseInt($input.val());
   
      if (value < 100) {
          value = value + 1;
      } else {
          value =100;
      }
   
      $input.val(value);
  });
}
PlusMinus()







///////////////////////////////////////
// Slider

$(document).ready(function() {
      $('.pgwSlider').pgwSlider({
        maxHeight : 400,
        displayControls: true,
        touchControls: true,
        transitionEffect: "sliding",
        autoSlide: false,
        displayList: false,
        adaptiveHeight: true,
        verticalCentering: true
      });
  }); 
if(!window.jQuery ) document.write('<script src="js/jquery-3.0.0.min.js"><\/script>');




//////////////////////////////////////
// Feedback

function feedback(){
  let feedbackBtn = $('.feedbackBtn-js');
  let feedback = $('.feedback-js');
  feedbackBtn.on('click', function() {
    if(feedback.hasClass("added") ){
      $('.feedback-js').animate({
          bottom: "-260px"
        }, 300, function() {
          // Animation complete.
        });

      feedback.removeClass('added');
    } else{
      $('.feedback-js').animate({
          bottom: "0"
        }, 300, function() {
          // Animation complete.
        });

      feedback.addClass('added');
    }
    
    // $('.feedback-js').css('bottom', '-250px');
    // console.log($('.feedback-js'))
  });
}


feedback();


///////////////////////
/// Вернуться обратно
function back(){
  let btnBack = $(".cart__continue-js");
  btnBack.on('click', function(event){
      event.preventDefault();
      
      history.go(-1);
      
    });
  }
back();


// function btnClickCart(){
//   let btnCart = $(".btn-cart-js");
//   btnCart.on('click', function(event){
//       // event.preventDefault();
      
//       let flag;
//       localStorage.setItem('flag', 2);

//       if(localStorage.getItem('flag')){
        
//         flag = localStorage.getItem('flag');
        
//           if(localStorage.getItem('flag') == 2){
//             alert (localStorage.getItem('flag'));
//             history.back();
            
//           }
//       };
      
//     });
//   }
// btnClickCart();

// Local Storage Order
// let dataForOrder;

// if(localStorage.getItem("orderData")){
//   // console.log( JSON.parse(localStorage.getItem("test1")) )
//   dataForOrder = JSON.parse(localStorage.getItem("orderData"));
//   console.log(dataForOrder);

// }


jQuery(document).ready(function($){
  let addToCartBtn = $('.btn__shopping-card-js');


   addToCartBtn.on('click', function(event){
      event.preventDefault();
      let btn = event.currentTarget;

      if(!btn.classList.contains("added") ){
        console.log(1);
        btn.innerHTML = "Добавлено";
        btn.style.transform = "translateY(0px)";
        btn.style.boxShadow = "0 .5rem 1rem rgba(0, 0, 0, 0.5)";
        btn.classList.add("added");

        function addToCartText(){
          btn.innerHTML = "В корзину";
          btn.style.transform = "translateY(-3px)";
          btn.style.boxShadow = "0 1rem 2rem rgba(0, 0, 0, 0.5)";
          btn.classList.remove("added");
        }

        setTimeout(addToCartText, 5000);
      }
      

      // if($(this).hasClass("added") ){
      //   $(this).find("input").val("В корзину");

      //   $(this).removeClass('added');
      //   $(this).css('background', '#312F2F');
      // } else{
      //   $(this).find("input").val("Добавлено!");
      //   $(this).addClass('added');
      //   $(this).css('background', '#8FD317');
      // }
      
    });
  
  // let shoppingCartData = document.getElementById('shoppingCartJs');
  // var cartWrapper = $('.cd-cart-container');
  // //product id - you don't need a counter in your real project but you can use your real product id
  // var productId = 0;
  
  
  // if( cartWrapper.length > 0 ) {
  //   //store jQuery objects
  //   var cartBody = cartWrapper.find('.body');
  //   var cartList = cartBody.find('ul').eq(0);
  //   var cartTotal = cartWrapper.find('.checkout').find('span');
  //   var cartTrigger = cartWrapper.children('.cd-cart-trigger');
  //   var cartCount = cartTrigger.children('.count')
  //   var addToCartBtn = $('.btn__shopping-card');
  //   var cartTriggerNav = $('.cart-js');
    
  //   var undo = cartWrapper.find('.undo');
  //   var undoTimeoutId;
  //   var promotedProduct = 0;
  //   //add product to cart
  //   addToCartBtn.on('click', function(event){
     
  //     event.preventDefault();
  //     addToCart($(this));
  //     quickUpdateCart();
  //   });

  //   //open/close cart
  //   cartTrigger.on('click', function(event){
  //     event.preventDefault();
  //     toggleCart();
  //   });
  //   cartTriggerNav.on('click', function(event){
  //     // event.preventDefault();
  //     toggleCart();
  //   });
  //   //close cart when clicking on the .cd-cart-container::before (bg layer)
  //   cartWrapper.on('click', function(event){
  //     if( $(event.target).is($(this)) ) toggleCart(true);
  //   });

  //   //delete an item from the cart
  //   cartList.on('click', '.delete-item', function(event){
  //     event.preventDefault();
  //     removeProduct($(event.target).parents('.product'));
  //     quickUpdateCart();
  //     cartCount.find('li').eq(0).text(cartBody.find('li').length-1);
  //     cartCount.find('li').eq(1).text(cartBody.find('li').length);
      
  //   });

  //   //update item quantity plus
  //   cartList.on('click', '.plus-btn', function(event){
  //     event.preventDefault();
  //       var $this = $(this);
  //       var $input = $this.closest('div').find('input');
  //       var value = parseInt($input.val());
  //       // $input.val() = value + 1;
        
  //       // event.closest('div').find('input').val().replaceWith(value);

  //       if (value < 100) {
  //           value = value + 1;
  //           $( this ).parent().find('input').attr('value', value);
  //           quickUpdateCart();
            
  //       } else {
  //           value =100;
  //       }
        
  //   });

  //   // Local Storage Cart
    
  //   if(localStorage.getItem("test1")){
  //     // Проверяем находимся ли мы на странице оформления заказа, если нет, то показываем корзину
  //     if(!document.getElementById("orderPage-js")) {
  //       let shoppingCartData = JSON.parse(localStorage.getItem("test1"));
  //       $('.cd-cart-container').find('.body').find('ul').prepend(shoppingCartData);
       
  //       $('.deleted').remove();
  //       $('.cd-cart-container').removeClass('empty');
  //       quickUpdateCart();
  //     } else {
  //       makeOrder();
  //     } 

  //   }

  //   ////// End of Local Storage

  //   // update item quantity Minus
  //   cartList.on('click', '.minus-btn', function(event){
  //     event.preventDefault();
  //       var $this = $(this);
  //       var $input = $this.closest('div').find('input');
  //       var value = parseInt($input.val());
        
  //       if (value > 1) {
  //           value = value - 1;
  //           $( this ).parent().find('input').attr('value', value);
  //           quickUpdateCart();
            
            
  //       } else {
  //           value = 0;
  //           removeProduct($(event.target).parents('.product'));
  //           quickUpdateCart();
  //           cartCount.find('li').eq(0).text(cartBody.find('li').length-1);
  //           cartCount.find('li').eq(1).text(cartBody.find('li').length);
            
  //       }
     
  //   });

  //   //reinsert item deleted from the cart
  //   undo.on('click', 'a', function(event){
  //     clearInterval(undoTimeoutId);
  //     event.preventDefault();
  //     cartList.find('.deleted').addClass('undo-deleted').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
  //       $(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend').removeClass('deleted undo-deleted').removeAttr('style');
  //       quickUpdateCart();
  //     });
  //     undo.removeClass('visible');
  //   });
  // }

  // function toggleCart(bool) {
  //   var cartIsOpen = ( typeof bool === 'undefined' ) ? cartWrapper.hasClass('cart-open') : bool;
    
  //   if( cartIsOpen ) {
  //     cartWrapper.removeClass('cart-open');
  //     //reset undo
  //     clearInterval(undoTimeoutId);
  //     undo.removeClass('visible');
  //     cartList.find('.deleted').remove();

  //     setTimeout(function(){
  //       cartBody.scrollTop(0);
  //       //check if cart empty to hide it
  //       if( Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
  //     }, 500);
  //   } else {
  //     cartWrapper.addClass('cart-open');
  //   }
  // }

  // function addToCart(trigger) {
  //   let price = trigger.data('price');
  //   let quantity = trigger.data('quantity');
  //   let productName = trigger.data('name');
  //   let optionFirst = trigger.data('optionfirst');
  //   let optionSecond = trigger.data('optionsecond');
  //   let promotionParticipant = trigger.data('promotionparticipant');
  //   let cartIsEmpty = cartWrapper.hasClass('empty');
  //   let img = trigger.data('img');
  //   let id = trigger.data('id');
  //   // console.log(img)
  //   let weight = trigger.data('weight');
  //   // console.log(weight)
  //   //update cart product list
  //   addProduct(price, quantity, productName, optionFirst, optionSecond, promotionParticipant, weight, img, id);
  //   //update number of items 
  //   updateCartCount(cartIsEmpty);
  //   //update total price
  //   updateCartTotal(price, true);
  //   //show cart
  //   cartWrapper.removeClass('empty');
  // }

  // function addProduct(price, quantity, productName, optionFirst, optionSecond, promotionParticipant, weight, img, id) {
  //   //this is just a product placeholder
  //   //you should insert an item with the selected product info
  //   //replace productId, productName, price and url with your real product info
  //   let option1, option2 ;
  //   if(optionFirst) {
  //     option1 = `<option value="${optionFirst}">${optionFirst}</option>`;
  //   } else{
  //     optionFirst = 1;
  //   }
  //   productId = productId + 1;
  
  //   var productAdded = $(`<li class='product product-js' data-name='${productName}'data-quantity='${quantity}' data-price='${price}' data-id='${id}' data-promotionparticipant='${promotionParticipant}' data-firstoption='${optionFirst}'><div class='product-image'><a href='#0'><img src='img/products/arahis/arahis3.jpg' alt='placeholder'></a></div><div class="product-details"><h3><a href="#0">${productName}</a> 
    
  //     </h3><span class="price" >${price}</span>
  //     <div class="weight-js weight">
  //       <span>Фасовка</span>
  //       ${weight}
      
  //     </div>
  //     <div class="actions">
  //     <a href="#0" class="delete-item">Удалить</a>
      
  //     <div class="quantity">
  //       <button class="plus-btn" type="button" name="button">
  //         +
  //       </button>
  //       <input type="text" name="name" value="1" readonly="readonly">
  //       <button class="minus-btn" type="button" name="button">
  //         -
  //       </button>
  //     </div>
    
  // </div></div></li>`);
  //   cartList.prepend(productAdded);
  // }
  
  // function removeProduct(product) {
  //   clearInterval(undoTimeoutId);
  //   cartList.find('.deleted').remove();
    
  //   var topPosition = product.offset().top - cartBody.children('ul').offset().top ,
  //     productQuantity = Number(product.find('.quantity').find('select').val()),
  //     productTotPrice = Number(product.find('.price').text().replace('$', '')) * productQuantity;
    
  //   product.css('top', topPosition+'px').addClass('deleted');

  //   //update items count + total price
  //   updateCartTotal(productTotPrice, false);
  //   updateCartCount(true, -productQuantity);
  //   undo.addClass('visible');

  //   //wait 8sec before completely remove the item
  //   undoTimeoutId = setTimeout(function(){
  //     undo.removeClass('visible');
  //     cartList.find('.deleted').remove();
  //   }, 8000);

  // }

  // function removePromotion() {
    
  //   cartList.find('.promotion-js').remove();

  // }
  // function promotionAdd(quantity){
  //   var productAdded = $(`<li class="product promotion-js" data-name="Подарочный набор" data-price='0' data-id='free' data-quantity="0" data-firstoption="0"><div class="product-image"><a href="#0"><img src="img/products/arahis/arahis2.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Подарочный набор</a></h3><span class="price">0</span><div class="actions"><a href="#0" class="delete-item"></a><div class="quantity"><label for="cd-product-'+ productId +'">Кол-во</label>
  //   <input type="text" name="name" value="${quantity}" readonly="readonly">
  //   </div></div></div></li>`);
  //   cartList.prepend(productAdded)
  // }

  // function Promotion(quantity){
    
  //   if(promotedProduct == 0){
  //     promotedProduct = 1;
  //     if(quantity >= 10){
  //         let promotedQuantity = quantity / 10;
  //         promotedQuantity = Math.floor(promotedQuantity);
  //         // console.log(promotedQuantity);
          
  //         removePromotion();
  //         promotedProduct = 0;
  //         promotionAdd(promotedQuantity)

  //     }
  //   }
    
  // }
  // function quickUpdateCart() {

  //   var quantity = 0;
  //   var price = 0;
  //   var priceArr = [];
  //   let optionSecondArr = [];
  //   cartList.children('li:not(.deleted)').each(function(){
  //   var singleQuantity = Number($(this).find('input').val());
    
      
  //     price = (price + singleQuantity*Number($(this).find('.price').text().replace('$', '') ) ) ;

  //   });
  //   ////////////////////////////////////////
  //   //  Информация для оформления заказа
  //   ////////////////////////////////////////
  //   var calculate = cartList.children('li:not(.deleted)');
  //   let orderInfoArr = {
  //     "totalSum": 0,
  //     "products": []
  //   };
  //   calculate.each(function(index, value){
  //     // Информация для передачи на сервер
  //     orderInfoArr.products[index] = {
  //       "id": $(this).data("id"),
  //       "price": $(this).data("price"),
  //       "quantity": $(this).find('input').val(),
  //       "name": $(this).data("name"),
  //       "sumByProduct": ($(this).data("price") * $(this).find('input').val())
  //     };
  //     // Общая сумма
  //     orderInfoArr.totalSum = orderInfoArr.totalSum + orderInfoArr.products[index].sumByProduct;
  //     // Конец / Информация для передачи на сервер

  //     // Промо акция
  //     if($(this).data("promotionparticipant") == true){
  //       quantitySumForPromotion = quantitySumForPromotion + ($(this).data("quantity") * Number($(this).find('input').val() ) );
  //     }
      
  //     // optionSecondArr.push($(this).data("firstoption"));
  //   })
   
  //   localStorage.setItem("orderData", JSON.stringify(orderInfoArr) );

  //   ////////////////////////////////////////
  //   // Конец / Информация для оформления заказа
  //   ////////////////////////////////////////

  //   ////////////////////////////////////////
  //   //  Promotion
  //   ////////////////////////////////////////

  //   var quantitySumForPromotion = 0;
  //   var calculate = cartList.children('li:not(.deleted)');
  //   calculate.each(function(index, value){
      

  //     // Промо акция
  //     if($(this).data("promotionparticipant") == true){
  //       quantitySumForPromotion = quantitySumForPromotion + ($(this).data("quantity") * Number($(this).find('input').val() ) );
  //     }
      
  //   })
   
  //   quantitySumForPromotion = quantitySumForPromotion / 1000;
  //   if(quantitySumForPromotion < 10){
  //     removePromotion();
  //     promotedProduct = 0;
      
  //   } else if (quantitySumForPromotion >= 10){
  //       Promotion(quantitySumForPromotion);
  //   }

  //   ////////////////////////////////////////
  //   // End of Promotion
  //   ////////////////////////////////////////

  //   cartTotal.text(price.toFixed(2));
  //   /// Count Items Numberms
    
  //   cartCount.find('li').eq(0).text(cartBody.find('li').length);
  //   cartCount.find('li').eq(1).text(cartBody.find('li').length + 1);
  
  //   let data = shoppingCartData.innerHTML;
  
  //   localStorage.setItem("test1", JSON.stringify(data) );
   
    
  // }

  // function updateCartCount(emptyCart, quantity) {
  //   if( typeof quantity === 'undefined' ) {
  //     var actual = Number(cartCount.find('li').eq(0).text()) + 1;
  //     var next = actual + 1;
      
  //     if( emptyCart ) {
  //       cartCount.find('li').eq(0).text(actual);
  //       cartCount.find('li').eq(1).text(next);
  //     } else {
  //       cartCount.addClass('update-count');

  //       setTimeout(function() {
  //         cartCount.find('li').eq(0).text(actual);
  //       }, 150);

  //       setTimeout(function() {
  //         cartCount.removeClass('update-count');
  //       }, 200);

  //       setTimeout(function() {
  //         cartCount.find('li').eq(1).text(next);
  //       }, 230);
  //     }
  //   } else {
  //     var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
  //     var next = actual + 1;
      
  //     cartCount.find('li').eq(0).text(actual);
  //     cartCount.find('li').eq(1).text(next);
  //   }
  // }

  // function updateCartTotal(price, bool) {
  //   bool ? cartTotal.text( (Number(cartTotal.text()) + Number(price)).toFixed(2) )  : cartTotal.text( (Number(cartTotal.text()) - Number(price)).toFixed(2) );
  // }
  
  // function makeOrder(){
  //   let dataForOrder, list, markup, totalPrice;
  //   list = document.getElementById("orderList-js");
  //   totalPrice = document.getElementById("totalPrice-js");
  //   if(localStorage.getItem("orderData")){
  //     // console.log( JSON.parse(localStorage.getItem("test1")) )
  //     dataForOrder = JSON.parse(localStorage.getItem("orderData"));

  //     console.log(12);
  //     console.log(dataForOrder.products.length);
  //     console.log(12);
  //     for(let i = 0; i < dataForOrder.products.length; i++){
  //       markup = `
  //                 <li class="order__item paragraph">
  //                     ${dataForOrder.products[i].name} ${dataForOrder.products[i].quantity} шт.  за
  //                     <span>${dataForOrder.products[i].price}</span> <i class="fas fa-ruble-sign"></i>
  //                  </li>
  //                 `;
  //       list.insertAdjacentHTML('afterbegin', markup);
  //     }

  //     totalPrice.textContent = dataForOrder.totalSum;
  //   }

    
  // };
});




///////////////////
// Feedback

// $(document).ready(function(){

//   // The relative URL of the submit.php script.
//   // You will probably have to change it.
//   // var submitURL = 'submit.php';

//   // Caching the feedback object: 
//   var feedback = $('#feedback');

//   $('#feedback h6').click(function(){

//     // We are storing the values of the animated
//     // properties in a separate object:
        
//     var anim  = {   
//       mb : 0,     // Margin Bottom
//       pt : 25     // Padding Top
//     };
    
//     var el = $(this).find('.arrow');
    
//     if(el.hasClass('down')){
//       anim = {
//         mb : -230,
//         pt : 10
//       };
//     }

//     // The first animation moves the form up or down, and the second one 
//     // moves the "Feedback heading" so it fits in the minimized version
    
//     feedback.stop().animate({marginBottom: anim.mb});
    
//     feedback.find('.section').stop().animate({paddingTop:anim.pt},function(){
//       el.toggleClass('down up');
//     });
//   });
  
//   $('#feedback a.submit').live('click',function(){
//     var button = $(this);
//     var textarea = feedback.find('textarea');
    
//     // We use the working class not only for styling the submit button,
//     // but also as kind of a "lock" to prevent multiple submissions.
    
//     if(button.hasClass('working') || textarea.val().length < 5){
//       return false;
//     }

//     // Locking the form and changing the button style:
//     button.addClass('working');
    
//     $.ajax({
//       url   : submitURL,
//       type  : 'post',
//       data  : { message : textarea.val()},
//       complete  : function(xhr){
        
//         var text = xhr.responseText;
        
//         // This will help users troubleshoot their form:
//         if(xhr.status == 404){
//           text = 'Your path to submit.php is incorrect.';
//         }

//         // Hiding the button and the textarea, after which
//         // we are showing the received response from submit.php

//         button.fadeOut();

//         textarea.fadeOut(function(){
//           var span = $('<span>',{
//             className : 'response',
//             html    : text
//           })
//           .hide()
//           .appendTo(feedback.find('.section'))
//           .show();
//         }).val('');
//       }
//     });
    
//     return false;
//   });
// });


