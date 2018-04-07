function b() {
    console.log(myVar);
}

function a() {
    console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
