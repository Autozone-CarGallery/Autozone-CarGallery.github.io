function Buy_Alert() 
{
    var Buy_confirm ;
    if (confirm("are you sure you want to buy this car ?"))
    {
        Buy_confirm = "You have bought this car !";
    }
    else
    {
        Buy_confirm = "Keep looking and you may find a car that suits you better"
    }
    document.getElementById("buy_confirm").innerHTML = Buy_confirm;
}

function Comment_alert()
{
    alert("Thank you for your Comment, have a nice day!")
}