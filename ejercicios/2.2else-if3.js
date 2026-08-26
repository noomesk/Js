//Diseña las decisiones para clasificar una temperatura:
//asumendo celsius

const temperatura = -1;

if (temperatura >= 40) {
  console.log("Extremo");
} else if (temperatura >= 30 && temperatura <= 39) {
   console.log("Muy caluroso")
} else if (temperatura >= 25 && temperatura <= 29) {
   console.log("Cálido")
}else if (temperatura >= 20 && temperatura <= 24) {
   console.log("Templado")
} else if (temperatura >= 15 && temperatura <= 19) {
   console.log("Fresco")
} else if (temperatura >= 0 && temperatura <= 14) {
   console.log("Frío")
} else {
  console.log("Muy frío");
}

console.log();