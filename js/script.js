function getReceipt() {
	text1 = "";
	text2 = "";
	var runningTotal = 0;
	var pizzaTotal = 0;
	var pizzaArray = document.getElementsByClassName("pizza");
	for (var i = 0; i < pizzaArray.length; i++) {
		if (pizzaArray[i].checked) {
			var selectedPizza = pizzaArray[i].value;
			text1 = text1+selectedPizza+"<br>";
		}
	}
	if (selectedPizza === "Pizzaname1") {
		pizzaTotal = 8;
		text2 = text2+pizzaTotal+"<br>";
	} else if (selectedPizza === "Pizzaname2") {
		pizzaTotal = 10;
		text2 = text2+pizzaTotal+"<br>";
	} else if (selectedPizza === "Pizzaname3") {
		pizzaTotal = 12;
		text2 = text2+pizzaTotal+"<br>";
	} else if (selectedPizza === "Extra Large Pizza") {
		pizzaTotal = 16;
		text2 = text2+pizzaTotal+"<br>";
	}
	runningTotal = pizzaTotal;
	getToppings(runningTotal,text1,text2);
};

function getToppings(runningTotal,text1,text2) {
	var toppingsTotal = 0;
	var selectedToppings;
	var toppingsArray = document.getElementsByClassName("toppings");
	for (var j = 0; j < toppingsArray.length; j++) {
		if (toppingsArray[j].checked) {
			selectedToppings = toppingsArray[j].value;
			text1 = text1 + selectedToppings + "<br>";
		}
		if (selectedToppings === "Avocado Topping") {
			toppingsTotal = 1;
		}
		if (selectedToppings === "Broccoli Topping") {
			toppingsTotal = 1;
		}
		if (selectedToppings === "Onions Topping") {
			toppingsTotal = 1;
		}
		if (selectedToppings === "Zucchini Topping") {
			toppingsTotal = 1;
		}
		if (selectedToppings === "Lobster Topping") {
			toppingsTotal = 2;
		}
		if (selectedToppings === "Oyster Topping") {
			toppingsTotal = 2;
		}
		if (selectedToppings === "Salmon Topping") {
			toppingsTotal = 2;
		}
		if (selectedToppings === "Tuna Topping") {
			toppingsTotal = 2;
		}
		if (selectedToppings === "Bacon Topping") {
			toppingsTotal = 3;
		}
		if (selectedToppings === "Duck Topping") {
			toppingsTotal = 3;
		}
		if (selectedToppings === "Ham Topping") {
			toppingsTotal = 3;
		}
		if (selectedToppings === "Sausage Topping") {
			toppingsTotal = 3;
		}
	}
	runningTotal = (runningTotal + toppingsTotal);
	text2 = text2 + toppingsTotal + "<br>";
	getItemSize(runningTotal,text1,text2);
};

function getItemSize(runningTotal,text1,text2) {
	var selectedItemSize;
	var itemSizeArray = document.getElementsByClassName("itemSize");
	for (var j = 0; j < itemSizeArray.length; j++) {
		if (itemSizeArray[j].checked) {
			selectedItemSize = itemSizeArray[j].value;
			text1 = text1 + selectedItemSize + "<br>";
		}
	}
	text2 = text2 + 0 + "<br>";
	getCheese(runningTotal,text1,text2);
};

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
			text1 = text1 + selectedCheese + "<br>";
		}
		if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
		}
	}
	runningTotal = (runningTotal + cheeseTotal);
	text2 = text2 + cheeseTotal + "<br>";
	getMeat(runningTotal,text1,text2);
};

function getMeat(runningTotal,text1,text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
		text1 = text1+selectedMeat[j]+"<br>";
		if (meatCount <= 1) {
				text2 = text2 + 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	getVeggie(runningTotal,text1,text2);
};

function getVeggie(runningTotal,text1,text2) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies")
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	for (var j = 0; j < selectedVeggie.length; j++) {
			text1 = text1+selectedVeggie[j]+"<br>";
			if (veggieCount <= 1) {
				text2 = text2 + 0 + "<br>";
				veggieCount = veggieCount - 1;
			} else if (veggieCount == 2) {
				text2 = text2 + 1 + "<br>";
				veggieCount = veggieCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				veggieCount = veggieCount - 1;
			}
	}
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};

function clearAll() {
	document.getElementById("form").reset();
	document.getElementById("cart").style.opacity=0;
};