let billinput = document.querySelector(".bill input");
let numpeopleinput = document.querySelector(".numpeople input");
let tips = document.querySelectorAll(".tips");
let custom = document.querySelector(".tips-in input");
let displayAmount = document.querySelector(".display-amount")
let displayTotal = document.querySelector(".display-total")
let notfelem = document.querySelector(".notf");
let resetbtn = document.querySelector(".button button");
let selectip=  document.querySelector(".row:nth-child(2) span");
let percent = [];


tips.forEach(item => {
    item.addEventListener("click", () => {
        tips.forEach(item => item.classList.remove("active"));
        item.classList.toggle("active");
        resetbtn.className = "btnactive";
        selectip.classList.remove("colred");
        percent.unshift(item.textContent.slice(0, -1));
        custom.value = ""
        displayAmount.textContent = `$${((billinput.value * percent[0]) / 100) / numpeopleinput.value}`
        displayTotal.textContent = `$${(+billinput.value + (billinput.value * percent[0]) / 100) / numpeopleinput.value}`
    })

    resetbtn.addEventListener("click", () => {
        displayTotal.textContent = "$0.00"
        displayAmount.textContent = "$0.00"
        numpeopleinput.value = 1;
        resetbtn.className = ""
        billinput.value = ""
        custom.value = ""
        item.classList.remove("active")
        billinput.classList.remove("numred")

    })
    custom.addEventListener("keyup", () => {
        if (billinput.value === "") {
            billinput.classList.add("numred")
            displayAmount.textContent = "add bill!";
            displayTotal.textContent = "add bill!";
        }
        else {
            item.classList.remove("active");
            resetbtn.className = "btnactive";
            selectip.classList.remove("colred");
            displayAmount.textContent = `$${((billinput.value * custom.value) / 100) / numpeopleinput.value}`
            displayTotal.textContent = `$${(+billinput.value + (billinput.value * custom.value) / 100) / numpeopleinput.value}`
        }

        billinput.addEventListener("keyup", () => {
            if (billinput.value > 0) {
                item.classList.remove("active")
                billinput.classList.remove("numred")
                displayTotal.textContent = "$0.00"
                displayAmount.textContent = "$0.00"
                custom.value = ""
                numpeopleinput.value = 1;
            }
        })

    })

    numpeopleinput.addEventListener("keyup", () => {
        if (numpeopleinput.value == "" || numpeopleinput.value < 1) {
            notfelem.innerHTML = "Can't be zero"
            numpeopleinput.classList.add("numred")
        }
        else if (!percent[0]) {
            notfelem.innerHTML = "";
            numpeopleinput.classList.remove("numred");
            selectip.classList.add("colred")
            displayAmount.textContent = `$${billinput.value / numpeopleinput.value}`;
            displayTotal.textContent = `$${billinput.value / numpeopleinput.value}`;
            resetbtn.className = "btnactive"
        }
        else {
            numpeopleinput.classList.remove("numred")
            notfelem.innerHTML = ""
            displayAmount.textContent = `$${((billinput.value * percent[0]) / 100) / numpeopleinput.value}`
            displayTotal.textContent = `$${(+billinput.value + (billinput.value * percent[0]) / 100) / numpeopleinput.value}`
        }
        console.log(percent[0]);
    })
})


