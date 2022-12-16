//returing card number input to the image
document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}
//Breaking card number into 4 sets 
const cardNumber = document.querySelector("#credit-card");
cardNumber.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardNumberText.innerText = "1234 5678 9101 1121";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ", "");

        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            cardNumberText.innerHTML = valuesOfInput
        }
    }
})
//returing card holder input to the image
document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

//returing card month input to the image
document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}
//returing card year input to the image
document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}
//transformation 
document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}
//transformation 
document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}
//returing card cvv input to the image
document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}


let btnsubmit=document.getElementById("submitForm");
btnsubmit.addEventListener("click",submit);
function submit() {
    let check1=document.getElementById("credit-card").value;
    let check2=document.getElementById("name-text").value;
    let check3=document.getElementById("address-card").value;
    let check4=document.getElementById("month-input-id").value;
    let check5=document.getElementById("year-inpu-id").value;
    let check6=document.getElementById("cvv-id").value;
    
    
    if (check1==="") {
        alert("Card Number Required");
    } else if (check2==="") {
        alert("Holder Name Required");
    }
    else if (check3==="") {
        alert("Address Required");
    }
    else if (check4==="MONTH") {
        alert("Exp Month Required");
    }
    else if (check5==="YEAR") {
        alert("Exp Year Required");
    }
    else if (check6==="") {
        alert("CVV Required");
    }
    else{
    alert("Donation Succesful");
    }
}