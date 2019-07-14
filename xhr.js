let inputLogin = document.getElementById('inputLogin');
let inputPassword =document.getElementById('inputPassword');

const database = firebase.database();

let ref = database.ref('people');

ref.on('value', gotData , errData);

function gotData(data){
	let peopleListings = document.querySelectorAll(".LoginData");
	for(let i = 0; i<peopleListings.length; i++){
		peopleListings[i].remove();
	}
	let persons = data.val();
	let keys=Object.keys(persons);
	for( let i = 0; i<keys.length; i++ ){
		let k = keys[i];
		let login= persons[k].login;
		let password = persons[k].password;
		let tbl= document.getElementById('myTable');
		let row= tbl.insertRow();
		let cell1=row.insertCell();
		let cell2=row.insertCell();
		cell1.setAttribute("class", "LoginData");
		cell2.setAttribute("class", "LoginData");
		cell1.innerHTML=login;
		cell2.innerHTML=password;

	}
} 


function submitData(){
	let data = {
		login: inputLogin.value,
		password: inputPassword.value
	}

ref.push(data);
}		

function errData(err){
	console.log('Error!');
	console.log(err);
} 
