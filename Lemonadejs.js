"use strict";

var moneyIHave=20;
var cupPrice=0;
var daysLeft=6;

document.getElementById('money').innerHTML=moneyIHave;
randomeWeatherForcast();

function setLemonadePrice()
{
    var lemonadePrice;
    lemonadePrice=prompt("how much do you want to sell a cup of lemonade for?");
    document.getElementById('todayCupPrice').innerHTML=lemonadePrice;
    cupPrice=parseFloat(lemonadePrice);
    console.log(cupPrice);
    return cupPrice;
}

function goods(price,quantity)
{
    this.price=price;
    this.quantity=quantity;

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

function randomeWeatherForcast()
{
    var num=Math.floor((Math.random() * 3) + 1);
    if(num===1)
    {
        document.getElementById('forcast').innerHTML="hot";
        return "hot";
    }
    else if(num===2)
    {
        document.getElementById('forcast').innerHTML="cool";
        return "cool";
    }
    else if (num==3)
    {
        document.getElementById('forcast').innerHTML="stormy";
        return "stormy";
    }

}

function determinPotentialCustomers(weather)
{
    var customers = [];//can not seet property of 0 to undifined
    if(weather==="hot")
    {
        for(var x=0;x<100;x++)
        {
            customers[x]=Math.floor((Math.random() * 100) + 1);
        }
    }
    else if(weather==="cool")
    {
        for(var x=0;x<50;x++)
        {
            customers[x]=Math.floor((Math.random() * 100) + 1);
        }
    }
    else if(weather==="stormy")
    {
        for(var x=0;x<25;x++)
        {
            customers[x]=Math.floor((Math.random() * 100) + 1);
        } 
    }
    console.log(customers);
    return customers;
}

function buyCupsofLemonade(customers)
{
    for(var x=0;x<customers.length;x++)
    {
        var chance=(50+(cupPrice*10))
        if(customers[x]>chance)
        {
            console.log(customers[x]);
            if(lemons.quantity>0&&ice.quantity>0&&sugar.quantity>0&&cups.quantity>0)
            {
                console.log(moneyIHave, cupPrice, "above");
                moneyIHave=moneyIHave+cupPrice;
                console.log(moneyIHave, cupPrice, "below");
                lemons.quantity=lemons.quantity-1;
                console.log(lemons.quantity);
                $('#lemonsInStock').html(lemons.quantity);
                ice.quantity=ice.quantity-1;
                $('#iceInStock').html(ice.quantity);
                sugar.quantity=sugar.quantity-1;
                $('#sugarInStock').html(sugar.quantity);
                cups.quantity=cups.quantity-1;
                $('#cupsInStock').html(cups.quantity);
                $('#money').html(moneyIHave);
                console.log("money i have0", moneyIHave);

            }
        }
    }
    
}
var hot;//100 randome dice rolls
var cool;//50 randome dice rolls
var stormy;//25 randome dice rolls
var day;

var lemons = new goods(0.75,0);
var ice = new goods(0.25,0);
var sugar = new goods(1.25,0);
var cups = new goods(0.25,0);

function buyLemons()
{
    if(moneyIHave-lemons.price<=0)
    {
        console.log("your out of money");
        return;
    }
    lemons.quantity=lemons.quantity+10;
    moneyIHave-=lemons.price;
    document.getElementById('money').innerHTML=moneyIHave;
    document.getElementById('lemonsInStock').innerHTML=lemons.quantity;
}

function buyIce()
{
    if(moneyIHave-ice.price<=0)
    {
        console.log("your out of money");
        return;
    }
    ice.quantity=ice.quantity+10;
    moneyIHave-=ice.price;
    document.getElementById('money').innerHTML=moneyIHave;

    document.getElementById('iceInStock').innerHTML=ice.quantity;
}

function buySugar()
{
    if(moneyIHave-sugar.price<=0)
    {
        console.log("your out of money");
        return;
    }
    sugar.quantity=sugar.quantity+10;
    moneyIHave-=sugar.price;
    document.getElementById('money').innerHTML=moneyIHave;

    document.getElementById('sugarInStock').innerHTML=sugar.quantity;
}

function buyCups()
{
    if(moneyIHave-cups.price<=0)
    {
        console.log("your out of money");
        return;
    }
    cups.quantity=cups.quantity+10;
    moneyIHave-=cups.price;
    document.getElementById('money').innerHTML=moneyIHave;

    document.getElementById('cupsInStock').innerHTML=cups.quantity;
}
function nextDay()
{
    ice.quantity=0;
    $('#iceInStock').html(iceInStock);
    if(daysLeft>0)
    {
        daysLeft--;
    }
    else
    {
        console.log("Game is over.  You made ", moneyIHave);
    }
}


function main()
{
    var potentialCustomers;
    var weather;

    cupPrice=setLemonadePrice();
    weather=randomeWeatherForcast();
    potentialCustomers=determinPotentialCustomers(weather);
    buyCupsofLemonade(potentialCustomers);
    nextDay(daysLeft);
}
