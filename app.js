//Traffic Lights
function doTrafficLights() {
  var activeLight = getActiveLight();
  if (activeLight === 'red') {
    turnRed();
    }
  else if (activeLight === 'yellow') {
    turnYellow();
	}
  else {
    turnGreen();
	}
}

//Error Alert
function main() {
  try {
  doAllTheThings();
  }
  catch(e) {
    console.log("There's been an error... Bummer.");
    reportError(e);
  }
}