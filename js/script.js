// // 	Form Validation


// function validateForm() {
//     var x = document.forms["customer-details"]["Name"].value;
//     if (x == "") {
//         alert("This Field is required");
//         return false;
//     }
// }

// // Javascript Filevar cart = [];

// $(document).ready(function(){

// 	//Check local Storage and if there is something called item then create the list
// 	if (localStorage.getItem("items") === null) {
// 		$("#Cart").append($("<li class='empty'>Your cart is empty</li>").html(item));
// 	} else {
// 		var storedItems = JSON.parse(localStorage.getItem("items"));
// 		for(var i=0; i<storedItems.length;i++){
// 			var item = storedItems[i];
// 			var ClassName = item['product'].replace(/\s/g, '');
// 			$("#Cart").append("<li class='"+ ClassName + "'>"+ item['product'] + " - " + item['quantity'] + " ($" +  item['price'] + ")</li>");
// 			cart.push(item);
// 		}
// 	}
// 	CartCount();
// 	PriceCount();
// console.log(cart);
// 	//Empty your entire cart and your Local Storage
// 	$('#Clear').click(function(){
// 		localStorage.clear();
// 		$("#Cart").empty();
// 		cart = [];
// 		$("#Cart").append($("<li class='empty'>Your cart is empty</li>"));
// 		CartCount();
// 		PriceCount();
// 	});

// });

// //Adding new Items into your Cart
// //It will check to see if there is already something in your cart.
// //If there isn't then it will create a new entry
// //If there is it will add the new quantity
// $(document).on('click', '.Add', function(e) {
// 	var value = $(this).parent().find('p.product_title').text();
// 	var price = parseFloat($(this).parent().find('.product_price').text()).toFixed(2);
// 	var quantity = 1;
// 	var CartItemFound = false;
// 	var fullprice = parseFloat(price * quantity).toFixed(2);
// 	console.log(fullprice);
// 	if(cart.length !== 0){
// 		for(var i=0; i<cart.length; i++){
// 			if(cart[i]['product'] === value){
// 				CartItemFound = true;
// 				break;
// 			}
// 		}
// 	}

// 	var ClassName = value.replace(/\s/g, '');

// 	if(CartItemFound === true){
// 		//There is an exsisting entry in the array
// 		for(var i=0; i<cart.length; i++){
// 			if(cart[i]['product'] === value){
// 				var OldQuant = Number(cart[i]['quantity']);
// 				var OldPrice = parseFloat(cart[i]['price']).toFixed(2);
// 				var NewQuant = parseInt(OldQuant) + quantity;
// 				var NewPrice = Number(OldPrice) + Number(fullprice);
// 				var NewPrice = parseFloat(NewPrice).toFixed(2);
// 				cart[i]['price'] = NewPrice;
// 				cart[i]['quantity'] = NewQuant;
// 				$('li.' + ClassName).text(value + " - " + NewQuant + " ($" + NewPrice + ")");
// 				break;
// 			}
// 		};
// 		localStorage.setItem("items", JSON.stringify(cart));
// 	} else {
// 		//There is a new entry in the array
// 		cart.push({
// 			"product" : value ,
// 			"quantity" : quantity,
// 			"price" : fullprice
// 		});
// 		localStorage.setItem("items", JSON.stringify(cart));
// 		$(".empty").remove();
// 		$("#Cart").append("<li class='"+ ClassName + "'>"+ value + " - " + quantity + " ($" + fullprice +   ")</li>");			
// 	}
// 	CartCount();
// 	PriceCount();
// });

// //When removing a item quantity from cart
// $(document).on('click', '.Remove', function(e) {
// 	var value = $(this).parent().find('p.product_title').text();	
// 	var price = parseFloat($(this).parent().find('.product_price').text()).toFixed(2);
// 	var quantity = 1;
// 	var CartItemFound = false;

// 	//Check to see if there is an exsisting entry in localstorage
// 	if(cart.length !== 0){
// 		for(var i=0; i<cart.length; i++){
// 			if(cart[i]['product'] === value){
// 				CartItemFound = true;
// 				break;
// 			}
// 		}
// 	}

// 	if(CartItemFound === true){
// 		for(var i=0; i<cart.length; i++){
// 			if(cart[i]['product'] === value){
// 				var NewQuant = parseInt(cart[i]['quantity']) - quantity;
// 				var ClassName = cart[i]['product'].replace(/\s/g, '');
// 				var OldPrice = parseFloat(cart[i]['price']).toFixed(2);
// 				var NewPrice = Number(OldPrice) - Number(price);
// 				var NewPrice = parseFloat(NewPrice).toFixed(2);
// 				if(NewQuant > 0){
// 					cart[i]['quantity'] = NewQuant;
// 					cart[i]['price'] = NewPrice;
// 					$('li.' + ClassName).text(value + " - " + NewQuant + " ($" + NewPrice + ")");
// 				} else {
// 					cart.splice(i, 1);
// 					$('li.' + ClassName).remove();
// 				}
// 			}
// 		}
// 		localStorage.setItem("items", JSON.stringify(cart));
// 	}
// 	CartCount();
// 	PriceCount();
// });

// function CartCount(){
// 	$('.cartCount').empty();
// 	var Count = 0;
// 	var Quant;
// 	if(cart != null){
// 		for (var i = 0; i < cart.length; i++) {
// 			Quant = parseInt(cart[i]['quantity']);
// 			Count = Count += Quant;
// 		};
// 	} else {
// 		Count = 0;
// 	}
// 	$('.cartCount').text(Count);

// }


// function PriceCount(){
// 	$('.PriceCount').empty();
// 	var Count = 0;
// 	var price;
// 	if(cart != null){
// 		for (var i = 0; i < cart.length; i++) {
// 			var CartPrice = parseFloat(cart[i]['price']);
// 			var Count = Count += CartPrice;
// 		};
// 	} else {
// 		Count = 0;
// 	}
// 	$('.PriceCount').text(Count.toFixed(2));

// }

//	Pop Up Example 

 // $(document).ready(function () {
 //     $("button").click(function () {
 //         $(".pop").fadeIn(300);
 //         positionPopup();
 //     });

 //     $(".pop > span, .pop").click(function () {
 //         $(".pop").fadeOut(300);
 //     });
 // });

 $(document).ready(function () {
 	//	Opening the Pop Up
     $("#roti-option").click(function () {
         $(".pop-up").fadeIn(100);
     });
     //	Closing the Pop Up
     $(".pop-up > span, .pop-up").click(function () {
         $(".pop-up").fadeOut(100);
     });
 });

//	Try making a function that lets you open and close
//	the pop up and be able to select the quantity of items also



