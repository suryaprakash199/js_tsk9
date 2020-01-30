function nxt() {
	var tex =""
	var p = JSON.parse(localStorage.getItem('prakash'));
	if(p!=null){
	for (var i = 0; i < p.length; i++) {
		tex += "<tr><td>" + p[i].name
		tex += "<td>" + p[i].age
		tex += "<td>" + p[i].gender
		tex += "<td>" + p[i].college
		tex += "<td>" + p[i].department
		tex += "<td>" + p[i].cgpa
		tex += "<td>" + p[i].mail +"</td></tr>"
		tex += "<td><button onclick='del()'>Delete"+"</button></td></tr>"
	console.log(tex);
	}
}
	document.getElementById('result').innerHTML = tex;
}
function del() {
		localStorage.removeItem('prakash');
	}