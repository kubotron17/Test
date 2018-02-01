var Money = 10;

var ClickAmount = 1;
var UpgradeClickCost = 25;

var GenAmount = 0;
var GenTickAmount = 1;
var GenTickInterval = 4000;
var GenPrice = 50;
var GenStart = false;
var GenRunning = false;

var DisTimer = setInterval(UpdateDis, 100);
var ManifestTimer = setInterval(UpdateManifest, 250);
var GenCheckTimer = setInterval(GenCheck, 250);

function Click(){
    Money += ClickAmount;
}

function UpgradeClick(){
    if(Money >= UpgradeClickCost){
        Money -= UpgradeClickCost;
        UpgradeClickCost *= 1.05;
        UpgradeClickCost = UpgradeClickCost.toFixed(2);
        ClickAmount ++;
        document.getElementById("UpgradeClick").value = "+1 Click   $" + UpgradeClickCost;
    }
}

function UpdateDis(){
    document.getElementById("DisMoney").innerHTML = "$" + round(Money, 2);
}

function UpdateManifest(){
    document.getElementById("Manifest").innerHTML = "You Own: <br>Clicks: " + ClickAmount + "<br><br><br>You Generate:<br>" + ClickAmount + "/Click";
}

function BuyGen(){
    if(Money >= GenPrice){
        Money -= GenPrice;
        GenPrice *= 1.15;
        GenAmount ++;
        if(GenRunning == false){
         GenStart = true;   
        }
        document.getElementById("Gen").value = "+1 Gen   $" + round(GenPrice, 2);
    }
    else{
        console.log("You need additional  $" + (GenPrice - Money) +" to buy this");
    }
}

function GenCheck(){
    if(GenStart == true){
        StartGen();
        GenStart = false;
        GenRunning = true;
    }
}

function StartGen(){
    var GenTimer = setInterval(GenTick, GenTickInterval);
}

function GenTick(){
    Money += GenAmount * GenTickAmount;
}



function Clickx5(){
    Click();
    Click();
    Click();
    Click();
    Click();
}

function round(value, decimals) {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
}

function Start(){
    document.getElementById("Gen").value = "+1 Gen   $" + GenPrice;
    document.getElementById("UpgradeClick").value = "+1 Click   $" + UpgradeClickCost;
}