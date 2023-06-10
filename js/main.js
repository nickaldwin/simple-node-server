document.querySelector('#clickme').addEventlistener('click', makeReq)

	async function makeReq(){
	
	const userName = document.querySelector('#userName').value;
	const res = await fetch(`/api?student={userName}`)
	const data = await res.json()

	console.log(data);
	document.querySelector('#personName').textContent = data.name
	document.querySelentor('#personStatus').textContent = data.status
	document.querySelector('#personOccupation').textContect = data.currntOccupation
}
