function volume_sphere(event) {
    //Write your code here
	// var radius = parseFloat(document.getElementById("radius").value);

 //  // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
 //  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

 //  // Display the volume in the volume field
 //  document.getElementById("volume").value = volume.toFixed(2);
	// CalculateButton.addEventListener('click',calculateVolume)

	event.preventDefault();
	let item = parseFloat(document.getElementById('radius').value);
	let vol = document.getElementById('volume');
	vol.inputMode.value = none;
	let result = 4/3 * Math.PI * item * item * item;
	console.log(result);

	vol.value = result.toFixed(2);
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
