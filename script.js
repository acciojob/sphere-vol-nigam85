function volume_sphere(event) {
//Write your code here
//  var radius = parseFloat(document.getElementById("radius").value);

//  Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
// var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

//  Display the volume in the volume field
//   document.getElementById("volume").value = volume.toFixed(2);
//  CalculateButton.addEventListener('click',calculateVolume)
  const radiusInput = document.getElementById("radius");
            const radius = parseFloat(radiusInput.value);

            // calculate the volume of the sphere
            const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

            // display the volume in the volume field
            const volumeField = document.getElementById("volume");
            volumeField.value = volume.toFixed(4); // round to 2 decimal places
        }


 }
 window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;