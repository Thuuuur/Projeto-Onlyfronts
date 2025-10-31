var basicCard = document.getElementById("basic-plan");
var premiumCard = document.getElementById("premium-plan");
var basicButton = document.querySelector(".btn-basic");
var premiumButton = document.querySelector(".btn-premium");

basicButton.addEventListener('click', selectBasic);
premiumButton.addEventListener('click', selectPremium);

function selectBasic() {
    console.log("Basic Selecionado");
    basicCard.className = "payment-card-basic selected";
    premiumCard.className = "payment-card-premium unselected";
}

function selectPremium() {
    console.log("Premium Selecionado");
    basicCard.className = "payment-card-basic unselected";
    premiumCard.className = "payment-card-premium selected";
}