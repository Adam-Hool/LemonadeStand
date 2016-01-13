"use strict";

var moneyIHave=20;
document.getElementById('money').innerHTML=moneyIHave;

function goods(price,daysTillExperation,quantity)
{
	var inStock;
	inStock=false;
    this.price=price;
    this.daysTillExperation=daysTillExperation;
    this.quantity=quantity;
    this.isExpired=false;

    function goneBad()
    {
    	if(this.daysTillExperation=0)
    	{
    		this.isExpired=true;
    	}
    }

    function getPrice(item)
    {
     	return this.price;
    }

    function checkIfOutOfStock(item)
    {
        if(this.quantity>0)
        {
        	inStock=true;
        }

        else
        {
        	inStock=false;
        }
    }


}

var lemons = new goods(1,1,0);
var ice = new goods(1,1,0);
var sugar = new goods(2,5,0);
var cups = new goods(1,100,0);

function getLemonQuantity()
{
    document.getElementById('lemonsInStock').innerHTML=lemons.quantity;
}

function getIceQunatity()
{
    document.getElementById('iceInStock').innerHTML=ice.quantity;
}

function getSugarQuantity()
{
    document.getElementById('sugarInStock').innerHTML=sugar.quantity;
}

function getCupsQuantity()
{
    document.getElementById('cupsInStock').innerHTML=cups.quantity;
}

function buyLemons()
{
    lemons.quantity++;
    document.getElementById('lemonsInStock').innerHTML=lemons.quantity;
}

function buyIce()
{
    ice.quantity++;
    document.getElementById('iceInStock').innerHTML=ice.quantity;
}

function buySugar()
{
    sugar.quantity++;
    document.getElementById('sugarInStock').innerHTML=sugar.quantity;
}

function buyCups()
{
    cups.quantity++;
    document.getElementById('cupsInStock').innerHTML=cups.quantity;
}

function getWeather()
{
var num=Math.floor((Math.random() * 51) + 50);
	return num;
}



function goShopping(itemOut)
{
    var stock;
    stock=itemOut;
    //money-=;
}



function nextDay()
{

}

function buyCup()
{

}

function main()
{

}
