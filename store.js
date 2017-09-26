

var menu = [{name:'bananasplit', price:20}, 
			{name:'spoon', 	price:4},
			{name:'topping', price:5}];

function describeItem(item) {
	console.log('Item: '+ item.name + ' Price: '+ item.price);

}
function describeMenu() {
	console.log('Describe menu');
	
	for (i =0; i < menu.length; i++) {
		describeItem(menu[i]);
	}

}

function greet (){

	console.log('Välkommen!');
};
function counter(b, s){

	console.log('Counter');
	//console.log(20*5+5*3);
	//console.log(bananasplit*b+spoon*s);
};
greet();
describeMenu();
counter(5, 3);
