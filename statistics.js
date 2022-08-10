'use strict';

const body = document.getElementsByTagName('body')
let table = document.getElementById('table')


function uniqueID () {
    var val = Math.floor(1000 + Math.random() * 9000);
  return val;
}
let foodies = [];
function Food(FoodId,FoodName,Type1,Price1){
this.Id= FoodId;
this.Name=FoodName;
this.Type=Type1;
this.Price=Price1;
this.render();
foodies.push(this);
}


Food.prototype.render =function(){
    let nRow = document.createElement('tr')
    table.appendChild(nRow);
    let nID =document.createElement('td')
    table.appendChild(nID);
    nID.textContent = ` ${this.Id}`
    let nName = document.createElement('td')
    table.appendChild(nName)
    nName.textContent =`${this.Name}`
    let nType = document.createElement('td')
    table.appendChild(nType)
    nType.textContent =`${this.Type}`
    let nPrice = document.createElement('td')
    table.appendChild(nPrice)
    nPrice.textContent =`${this.Price}`

}



let submitButton = document.getElementById ("form");
submitButton.addEventListener('submit',handleSubmit)
function handleSubmit(event){
    
    event.preventDefault()
     let Id = uniqueID();
    let Name = event.target.foodName.value;

    let Type = event.target.foodType.value;
    let Price =event.target.Price.value;

 const newplate = new Food (Id,Name,Type,Price);
 
 saveData(foodies);
}
function saveData (Data){
 let DataObj = JSON.stringify(Data);
 localStorage.setItem("Data",DataObj)
 
}
function getData() {

  let gotData = localStorage.getItem("foods");
  let arrData = JSON.parse(gotData);
  

  if (arrData != null) {
     
  for (let i = 0; i < arrData.length; i++) {
     new Food(arrData[i].FoodId,arrData[i].FoodName,arrData[i].Type1,arrData[i].Price1,);
        
    }
      
  }
  
  for (let i = 0; i < foodies.length; i++) {
    
    foodies[i].render(); 
    
  }
  
  console.log(foodies)


}
getData(); 





