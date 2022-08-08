'use strict';

const body = document.getElementsByTagName('body')

const foods = [];
function Food(FoodId,FoodName,Type,Price){
this.FoodId1= FoodId;
this.FoodName1=FoodName;
this.Type1=Type;
this.Price1=Price;

foods.push(this);
}


Food.prototype.render =function(){
    
}



let submitButton = document.getElementById ("form");
submitButton.addEventListener('sumbit',handleSubmit)
function handleSubmit(event){
    
    event.preventDefault()
    
 
   
 
   
   
    
    
    
}




