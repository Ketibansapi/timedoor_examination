function disabledToppings1() {
	document.getElementById("lobster").disabled = true;
	// document.getElementById("avocado").disabled = false;
	// document.getElementById("broccoli").disabled = false;
	// document.getElementById("onions").disabled = false;
	// document.getElementById("zucchini").disabled = false;
	// document.getElementById("tuna").disabled = false;
	// document.getElementById("ham").disabled = false;
	document.getElementById("oyster").disabled = true;
	document.getElementById("salmon").disabled = true;
	document.getElementById("bacon").disabled = true;
	document.getElementById("duck").disabled = true;
	document.getElementById("sausage").disabled = true;
  }
  function disabledToppings2() {
	document.getElementById("avocado").disabled = true;
	// document.getElementById("lobster").disabled = false;
	// document.getElementById("broccoli").disabled = false;
	// document.getElementById("onions").disabled = false;
	// document.getElementById("zucchini").disabled = false;
	document.getElementById("tuna").disabled = true;
	// document.getElementById("ham").disabled = false;
	// document.getElementById("bacon").disabled = false;
	// document.getElementById("salmon").disabled = false;
	// document.getElementById("oyster").disabled = false;
	document.getElementById("duck").disabled = true;
	document.getElementById("sausage").disabled = true;
  }
  function disabledToppings3() {
	document.getElementById("avocado").disabled = true;
	// document.getElementById("broccoli").disabled = false;
	// document.getElementById("zucchini").disabled = false;
	// document.getElementById("onions").disabled = false;
	document.getElementById("lobster").disabled = true;
	// document.getElementById("duck").disabled = false;
	// document.getElementById("ham").disabled = false;
	// document.getElementById("sausage").disabled = false;
	// document.getElementById("tuna").disabled = false;
	document.getElementById("oyster").disabled = true;
	// document.getElementById("bacon").disabled = false;
	document.getElementById("salmon").disabled = true;
  }

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
		getLobster('disabled');

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
	}
	runningTotal = (runningTotal + toppingsTotal);
	text2 = text2 + toppingsTotal + "<br>";
	getBroccoli(runningTotal,text1,text2);
};

function getBroccoli(runningTotal,text1,text2) {
	var broccoliTotal = 0;
	var selectedBroccoli;
	var broccoliArray = document.getElementsByClassName("broccoli");
	for (var j = 0; j < broccoliArray.length; j++) {
		if (broccoliArray[j].checked) {
			selectedBroccoli = broccoliArray[j].value;
			text1 = text1 + selectedBroccoli + "<br>";
		}
		if (selectedBroccoli === "Broccoli Topping") {
			broccoliTotal = 1;
		}
	}
	runningTotal = (runningTotal + broccoliTotal);
	text2 = text2 + broccoliTotal + "<br>";
	getOnions(runningTotal,text1,text2);
};

function getOnions(runningTotal,text1,text2) {
	var onionsTotal = 0;
	var selectedOnions;
	var onionsArray = document.getElementsByClassName("onions");
	for (var j = 0; j < onionsArray.length; j++) {
		if (onionsArray[j].checked) {
			selectedOnions = onionsArray[j].value;
			text1 = text1 + selectedOnions + "<br>";
		}
		if (selectedOnions === "Onions Topping") {
			onionsTotal = 1;
		}
	}
	runningTotal = (runningTotal + onionsTotal);
	text2 = text2 + onionsTotal + "<br>";
	getZucchini(runningTotal,text1,text2);
};

function getZucchini(runningTotal,text1,text2) {
	var zucchiniTotal = 0;
	var selectedZucchini;
	var zucchiniArray = document.getElementsByClassName("zucchini");
	for (var j = 0; j < zucchiniArray.length; j++) {
		if (zucchiniArray[j].checked) {
			selectedZucchini = zucchiniArray[j].value;
			text1 = text1 + selectedZucchini + "<br>";
		}
		if (selectedZucchini === "Zucchini Topping") {
			zucchiniTotal = 1;
		}
	}
	runningTotal = (runningTotal + zucchiniTotal);
	text2 = text2 + zucchiniTotal + "<br>";
	getLobster(runningTotal,text1,text2);
};

function getLobster(runningTotal,text1,text2) {
	var lobsterTotal = 0;
	var selectedLobster;
	var lobsterArray = document.getElementsByClassName("lobster");
	for (var j = 0; j < lobsterArray.length; j++) {
		if (lobsterArray[j].checked) {
			selectedLobster = lobsterArray[j].value;
			text1 = text1 + selectedLobster + "<br>";
		}
		if (selectedLobster === "Lobster Topping") {
			lobsterTotal = 2;
		}
	}
	runningTotal = (runningTotal + lobsterTotal);
	text2 = text2 + lobsterTotal + "<br>";
	getOyster(runningTotal,text1,text2);
};

function getOyster(runningTotal,text1,text2) {
	var oysterTotal = 0;
	var selectedOyster;
	var oysterArray = document.getElementsByClassName("oyster");
	for (var j = 0; j < oysterArray.length; j++) {
		if (oysterArray[j].checked) {
			selectedOyster = oysterArray[j].value;
			text1 = text1 + selectedOyster + "<br>";
		}
		if (selectedOyster === "Oyster Topping") {
			oysterTotal = 2;
		}
	}
	runningTotal = (runningTotal + oysterTotal);
	text2 = text2 + oysterTotal + "<br>";
	getSalmon(runningTotal,text1,text2);
};

function getSalmon(runningTotal,text1,text2) {
	var salmonTotal = 0;
	var selectedSalmon;
	var salmonArray = document.getElementsByClassName("salmon");
	for (var j = 0; j < salmonArray.length; j++) {
		if (salmonArray[j].checked) {
			selectedSalmon = salmonArray[j].value;
			text1 = text1 + selectedSalmon + "<br>";
		}
		if (selectedSalmon === "Salmon Topping") {
			salmonTotal = 2;
		}
	}
	runningTotal = (runningTotal + salmonTotal);
	text2 = text2 + salmonTotal + "<br>";
	getTuna(runningTotal,text1,text2);
};

function getTuna(runningTotal,text1,text2) {
	var tunaTotal = 0;
	var selectedTuna;
	var tunaArray = document.getElementsByClassName("tuna");
	for (var j = 0; j < tunaArray.length; j++) {
		if (tunaArray[j].checked) {
			selectedTuna = tunaArray[j].value;
			text1 = text1 + selectedTuna + "<br>";
		}
		if (selectedTuna === "Tuna Topping") {
			tunaTotal = 2;
		}
	}
	runningTotal = (runningTotal + tunaTotal);
	text2 = text2 + tunaTotal + "<br>";
	getBacon(runningTotal,text1,text2);
};

function getBacon(runningTotal,text1,text2) {
	var baconTotal = 0;
	var selectedBacon;
	var baconArray = document.getElementsByClassName("bacon");
	for (var j = 0; j < baconArray.length; j++) {
		if (baconArray[j].checked) {
			selectedBacon = baconArray[j].value;
			text1 = text1 + selectedBacon + "<br>";
		}
		if (selectedBacon === "Bacon Topping") {
			baconTotal = 3;
		}
	}
	runningTotal = (runningTotal + baconTotal);
	text2 = text2 + baconTotal + "<br>";
	getDuck(runningTotal,text1,text2);
};

function getDuck(runningTotal,text1,text2) {
	var duckTotal = 0;
	var selectedDuck;
	var duckArray = document.getElementsByClassName("duck");
	for (var j = 0; j < duckArray.length; j++) {
		if (duckArray[j].checked) {
			selectedDuck = duckArray[j].value;
			text1 = text1 + selectedDuck + "<br>";
		}
		if (selectedDuck === "Duck Topping") {
			duckTotal = 3;
		}
	}
	runningTotal = (runningTotal + duckTotal);
	text2 = text2 + duckTotal + "<br>";
	getHam(runningTotal,text1,text2);
};

function getHam(runningTotal,text1,text2) {
	var hamTotal = 0;
	var selectedHam;
	var hamArray = document.getElementsByClassName("ham");
	for (var j = 0; j < hamArray.length; j++) {
		if (hamArray[j].checked) {
			selectedHam = hamArray[j].value;
			text1 = text1 + selectedHam + "<br>";
		}
		if (selectedHam === "Ham Topping") {
			hamTotal = 3;
		}
	}
	runningTotal = (runningTotal + hamTotal);
	text2 = text2 + hamTotal + "<br>";
	getSausage(runningTotal,text1,text2);
};

function getSausage(runningTotal,text1,text2) {
	var sausageTotal = 0;
	var selectedSausage;
	var sausageArray = document.getElementsByClassName("sausage");
	for (var j = 0; j < sausageArray.length; j++) {
		if (sausageArray[j].checked) {
			selectedSausage = sausageArray[j].value;
			text1 = text1 + selectedSausage + "<br>";
		}
		if (selectedSausage === "Sausage Topping") {
			sausageTotal = 3;
		}
	}
	runningTotal = (runningTotal + sausageTotal);
	text2 = text2 + sausageTotal + "<br>";
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