function person() {
    console.log("Hello?")

    const userName = "Martin";
    const userAge = 22;
    let isOnline = true;

    //userName = "Martine";
    //userAge = 23;
    isOnline = false;

    console.log(userName, userAge, isOnline);
}

//person();

const viewPersonInfo = document.querySelector("#viewPersonInfo");
console.log(viewPersonInfo);

viewPersonInfo.addEventListener("click", person);

function simpleCalculator(num1, num2) {
    const sum = num1 + num2;

    console.log(sum);
};

//simpleCalculator(3, 4);

const viewCalculation = document.querySelector ("#viewCalculation");
console.log(viewCalculation);

//viewCalculation.addEventListener("click", simpleCalculator(3, 4));

/*viewCalculation.addEventListener("click", function simpleCalculator(num1, num2) {
    const sum = num1 + num2;

    console.log(sum);
    //simpleCalculator (3,4)
})*/

viewCalculation.addEventListener("click", function() {simpleCalculator(3, 4)});