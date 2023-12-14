function celsiusConvertor() {
  const temp_value = parseFloat(document.querySelector(".temp_value").value);
  const temp_from = document.querySelector("#from").value;
  const temp_to = document.querySelector("#to").value;
  const result = document.querySelector("#result");

  let answer;
  

  if(temp_from==='celsius'){
    if (temp_to === 'fahrenheit') {
      answer = (temp_value) * 9 / 5 + 32;
    } else if (temp_to === 'kelvin') {
      answer = temp_value + 273;
    } else {
      answer = temp_value;
    }
  }
  
  else if(temp_from==='fahrenheit'){
    if (temp_to === 'celsius') {
      answer = (temp_value -32)*5/9;
    } else if (temp_to === 'kelvin') {
      answer = (temp_value -32)*5/9+273;
    } else {
      answer = temp_value;
    }
  }

  else{
    if(temp_to==='celsius'){
      answer=temp_value-273;
    }
    else if(temp_to==='fahrenheit'){
      answer=(temp_value-273)*1.8+32;
    }
    else{
      answer=temp_value;
    }
  }

  result.innerHTML = answer;
}

document.getElementById("convertButton").addEventListener("click", function (event) {
  celsiusConvertor();
  event.preventDefault(); 
});








































// const to = document.getElementById("temp-to");
// const from = document.getElementById("temp-from");
// const result = document.getElementById("result");

// window.addEventListener("load",()=>{
//      degree.value="";
//     result.innerHTML="";
//      })

//      convert.addEventListener("click",(e)=>{
//            e.preventDefault();
//             convertFun();
//          })

// function convertFun() {
//     let degree=degree.value;
//     if (from.value === "fahrenheit") {
//         if (to.value === "celsius") {
//             result.innerHTML = (degree.value - 32) * 5 / 9;
//         } else if (to.value === "kelvin") {
//             result.innerHTML = (degree.value - 32) * 5 / 9 + 273.15;
//         } else {
//             result.innerHTML = degree.value;
//         }
//     } else if (from.value === "celsius") {
//         if (to.value === "fahrenheit") {
//             result.innerHTML = degree.value * (9 / 5) + 32;
//         } else if (to.value === "kelvin") {
//             result.innerHTML = parseFloat(degree.value) + 273.15;
//         } else {
//             result.innerHTML = degree.value;
//         }
//     } else {
//         if (to.value === "celsius") {
//             result.innerHTML = degree.value - 273.15;
//         } else if (to.value === "fahrenheit") {
//             result.innerHTML = (degree.value - 273.15) * (9 / 5) + 32;
//         } else {
//             result.innerHTML = degree.value;
//         }
//     }
// }



// // const degree=document.getElementById("degree-input");
// // const type=document.getElementById("type");
// // const result=document.getElementById("result");
// // const convert=document.getElementById("convert");
// // window.addEventListener("load",()=>{
// //     degree.value="";
// //     result.innerHTML="";
// // })

// // convert.addEventListener("click",(e)=>{
// //     e.preventDefault();
// //     convertFun();
// // })

// // function convertFun(){
// //     let inputValue=degree.value;

// //     if(type.value==="fahrenheit"){
// //         const fahrenheitToCelsius=(inputValue-32)*(5/9);
// //         celsius.innerHTML=`${fahrenheitToCelsius.toFixed(3)} &deg;c`;
// //     }
// // }