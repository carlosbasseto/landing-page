const inputRange = document.getElementById("customRange");
    
    
function handleRangeValueDefination(value) {
    const valueRange = document.getElementById(`range-${value}`).innerText;
    const formattedValue = valueRange.split(" ")[1];
    inputRange.value = Number(formattedValue);
    handleInputRange();
    
}


function handleInputRange() {
    const result = document.getElementById("result-inputRange");

    result.innerText = Number(inputRange.value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
if(inputRange) {
    inputRange.addEventListener("input", () => {
        handleInputRange()
    })
}








let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    
    document.querySelector('.carousel-inner').style.transform = `translateX(${-currentIndex * 100}%)`;
}

function moveSlide(direction) {
    currentIndex += direction;
    showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);
