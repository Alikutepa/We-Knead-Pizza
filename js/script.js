//business logic

function getPizzaOrder(type,crust,toppings,numberOfPizza,delivery,size) {
  this.type = type;
  this.crust = crust;
  this.toppings = toppings;
  this.numberOfPizza = numberOfPizza;
  this.delivery = delivery;
  this.size = size;
  this.sizePrice=0;
  this.crustPrice = 0;
  this.toppingPrice = 0;
  this.deliveryPrice = 0;
  this.price = 0;
};
getPizzaOrder.prototype.finalPrice = function () {
  if (this.size === "small") {
      this.sizePrice = 550;
  } else if (this.size === "medium") {
      this.sizePrice = 850;
  }else if (this.size === "large") {
      this.sizePrice = 1000;
  };
  if (this.crust === "glutenFree") {
      this.crustPrice = 200;
  } else if (this.crust === "thinCrust") {
      this.crustPrice = 150;
  }else if (this.crust === "original") {
      this.crustPrice = 150;
  }else if (this.crust === "stuffed") {
    this.crustPrice = 200;
  }else if (this.crust === "flatBread") {
      this.crustPrice = 150;
  };
  if (this.size === "small") {
      this.toppingPrice = 100;
  }else if (this.size === "medium") {
      this.toppingPrice = 150;
  }else if (this.size === "large") {
      this.toppingPrice = 200;
  };
  this.price =(this.sizePrice +this.crustPrice + this.toppingPrice) * this.numberOfPizza;
};
getPizzaOrder.prototype.toBeDelivered = function () {
  if (this.delivery === "delivery") {
      this.price += 250;
  }else if(this.delivery ==="noDelivery") {
      this.price +=0;
  };
};
function resetFieldValues () {
  size = "";
  type = "";
  toppings = "";
  crust = "";
  $("#quantity").val("");
};
//  user logic
$(document).ready(function() {
  $(".order").submit(function(event) {
      // event.preventDefault();
      var size = $("#size").val();
      
      var type = $("#type").val();
      
      var crust = $("#crust").val();
      
      var toppings = $("#toppings").val();
      
      var numberOfPizza = parseInt($("#quantity").val());
   
      var delivery = $("#delivery").val();
     
      var newPizzaOrder = new getPizzaOrder(type,crust,toppings,numberOfPizza,delivery,size);
      newPizzaOrder.finalPrice();
    
      newPizzaOrder.toBeDelivered();
      document.getElementById("orderSummary").innerHTML= "you have ordered " + numberOfPizza + " " + size + " " + type + " pizza(s) with a  " + crust + " crust and  " + toppings + " topping"
      document.getElementById("orderSummary").innerHTML= "The total cost is  " + newPizzaOrder.price + " /= " +  " For Delivery fill the contact form below"
      resetFieldValues();
  });
  $("#delivery").click(function() {
      $("#customerDetails").slideDown();
    });
    $("#checkOut").click(function(event) {
      // event.preventDefault();
      var inputtedName = $("input#name").val();
      
      document.getElementById("orderSummary").innerHTML= "Hey" + " " + inputtedName + " " + " Your order will be ready in 15mins and will be delivered in the next 20 mins."
       $("#contactform").hide();
       
    });
    
});