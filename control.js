var control_vars = {
	is_speaking: false,
	is_recognizing: false
};
f_control_vars = [];

var f_storage = [];
window.addEventListener('storage', (ev) => {
	for(let f of f_storage){
		f(ev);
	}
	// console.log(ev);
});



window.addEventListener("message", (event) => {
	// if (event.origin !== "http://example.com:8080") return;

	// event.source is window.opener
	// event.data is "hello there!"

	// console.log(event);

	// event.source.postMessage(
	// 	"hi there yourself!  the secret response " + "is: rheeeeet!",
	// 	event.origin,
	// );
});



// variable sharing handler
f_storage.push(function(ev) {
	if (ev.key != "gmeet_setvar") return;
	try {
		let param = JSON.parse(ev.newValue);
		control_vars[param.key] = param.value;

		let input = document.querySelector("input.vars." + param.key);
		if (input) {
			input.value = param.value;
		}
		// console.log("set var ", param.key, param.value);

		for(let f of f_control_vars){
			f(param.key);
		}
	} catch(e){}
});