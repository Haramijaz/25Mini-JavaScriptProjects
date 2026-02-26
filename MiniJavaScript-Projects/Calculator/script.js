// Select display input
let result = document.getElementById("result");

// Select all buttons
let buttons = document.querySelectorAll(".btn");

// Select history list
let historyList = document.getElementById("historyList");

// Loop through all buttons
buttons.forEach(button => {

    button.addEventListener("click", function(){

        let value = this.innerText;

        // Clear display
        if(value === "C"){
            result.value = "";
        }

        // Calculate result
        else if(value === "="){
            try {
                let calculation = result.value;
                let answer = eval(calculation); // Evaluate expression
                result.value = answer;

                // Add to history
                let li = document.createElement("li");
                li.innerText = calculation + " = " + answer;
                historyList.appendChild(li);

            } catch {
                result.value = "Error";
            }
        }

        // Add value to display
        else {
            result.value += value;
        }

    });

});
