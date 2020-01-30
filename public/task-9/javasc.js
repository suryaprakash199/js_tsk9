
function myfunc() {
	var arr =[];
    var datas = JSON.parse(localStorage.getItem('prakash'))
    if(datas != null){
    for (var i = 0; i < datas.length; i++) {
    	arr.push(datas[i]);
    	console.log(arr);
    }
}
	var a = document.getElementById('uname').value;
	var b = document.getElementById('uage').value;
	var c = document.getElementsByName('umale');
	var d = document.getElementById('ucollege').value;
	var e = document.getElementById('udepartment').value;
	var f = document.getElementById('ucgpa').value;
	var g = document.getElementById('umail').value;
	for (var i = 0; i < c.length; i++) {
			if (c[i].checked) {
				var h = c[i].value;			
			}			
		}	
	if ( a,b,c,d,e,f,g == "") {
	alert(" Please Enter Given Details")
	}
	else
	{
	 var z = { name :a, age :b, gender:h, college:d, department:e, cgpa:f,mail:g};	
	 arr.push(z);
	 localStorage.setItem('prakash',JSON.stringify(arr));
	 alert('Successfuly Entered Details')
	 location.replace('table.html')
	}

}