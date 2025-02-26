(function() {
    // Add calculator HTML
    const calculatorHTML = `
        <div class="sainik-school-calculator" style="margin-top: 30px;">
            <div class="calculator-container">
                <h3 style="text-align: center; margin-bottom: 20px; font-size: 1.5em; color: #333;">
क्या आपके बच्चे की आयु Sainik School के लिए सही है ? यहाँ Check करें
</h3>
                <div class="age-calculator-form-container">
                    <form id="leadGenerationForm">
                        <div class="step active" id="step1">
                            <p>
                                <label>Select AISSEE Exam:</label>
                                <input type="radio" id="class6" name="examClass" value="6" required>
                                <label for="class6">Class 6</label>
                                <input type="radio" id="class9" name="examClass" value="9" required>
                                <label for="class9">Class 9</label>
                            </p>
                            <p>
                                <label for="birthdate">Select Birthdate:</label>
                                <div class="date-dropdown-container">
                                    <select id="birthDay" required>
                                        <option value="" disabled selected>Day</option>
                                    </select>
                                    <select id="birthMonth" required>
                                        <option value="" disabled selected>Month</option>
                                    </select>
                                    <select id="birthYear" required>
                                        <option value="" disabled selected>Year</option>
                                    </select>
                                </div>
                            </p>
                            <p>
                                <label for="examYear">Select the year of exam:</label>
                                <select id="examYear" required>
                                    <option value="" disabled selected>Select Year</option>                                                 
                                    <option value="2025">Exam on 5 April 2025</option>
                                    <option value="2026">Exam in Jan 2026</option>
                                    <option value="2027">Exam in Jan 2027</option>
                                    <option value="2028">Exam in Jan 2028</option>
                                    <option value="2029">Exam in Jan 2029</option>
                                    <option value="2030">Exam in Jan 2030</option>
                                </select>
                            </p>
                            <p><button type="button" onclick="nextStep(1)">Next</button></p>
                        </div>
                        <div class="step" id="step2">
                            <p>
                                <label for="classSelection">Select Current Class:</label>
                                <select id="classSelection" required>
                                    <option value="" disabled selected>Select Class</option>
                                    <option value="Class2">Class 2</option>
                                    <option value="Class3">Class 3</option>
                                    <option value="Class4">Class 4</option>
                                    <option value="Class5">Class 5</option>
                                    <option value="Class6">Class 6</option>
                                    <option value="Class7">Class 7</option>
                                    <option value="Class8">Class 8</option>
                                    <option value="Class9">Class 9</option>
                                    <option value="Class10">Class 10</option>
                                    <option value="Other Class">Other Class</option>
                                </select>
                            </p>
                            <p>
                                <label for="stateSelection">Select State:</label>
                                <select id="stateSelection" required>
                                    <option value="" disabled selected>Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Other">Other</option>
                                </select>
                            </p>
                            <p><button type="button" onclick="nextStep(2)">Next</button></p>
                        </div>
                        <div class="step" id="step3">
                            <p><label for="studentName">Student's Name:</label> <input type="text" id="studentName" required></p>
                            <p><label for="mobileNumber">Mobile Number:</label> <input type="tel" id="mobileNumber" pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" required></p>
                            <p><button type="button" id="submitButton" onclick="generateLead()">Submit</button></p>
                        </div>
                        <div class="result" id="result">&nbsp;</div>
                    </form>
                </div>
            </div>
        </div>
    `;

    // Add calculator styles
    const calculatorStyles = `
        <style>
            .sainik-school-calculator {
                font-family: Arial, sans-serif;            
                margin: 0;
                padding: 20px;
            }
            .sainik-school-calculator .calculator-container {
                background-image: linear-gradient(to right top, #e0e3c2, #f3dec3, #fedbce, #ffdadd, #fddae6, #f9dcee, #f2def6, #eedef9, #e9defb, #e3defd, #dddeff);
                padding: 20px;
                border-radius: 15px !important;                     
                width: auto;    
                margin: auto; 
            }
            .sainik-school-calculator .age-calculator-form-container {
                font-family: Arial, sans-serif;
            }
            .sainik-school-calculator .age-calculator-form-container form {
                max-width: 400px;
                margin: 0 auto;
                text-align: center;
                padding: 20px;
                border: 2px solid #290324;
                border-radius: 5px;
                background-color: #f9f9f9;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .sainik-school-calculator .age-calculator-form-container label {
                font-weight: bold;
                display: block;
                margin-bottom: 10px;
            }
            .sainik-school-calculator .age-calculator-form-container input,
            .sainik-school-calculator .age-calculator-form-container select {
                width: 100%;
                padding: 10px;
                margin-bottom: 20px;
                border-radius: 5px;
                border: 1px solid #ddd;
                box-sizing: border-box;
                font-size: 16px;
            }
            .sainik-school-calculator .age-calculator-form-container button {
                width: 100%;
                padding: 15px;
                font-size: 18px;
                font-weight: bold;
                color: #000000;
                background-color: #F1C40F;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            .sainik-school-calculator .age-calculator-form-container button:hover {
                background-color: #F1C40F;
            }
            .sainik-school-calculator .age-calculator-form-container .result {
                margin-top: 20px;
                font-size: 20px;
                font-weight: bold;
                text-align: center;
            }
            .sainik-school-calculator .age-calculator-form-container .result.success {
                color: darkgreen;
            }
            .sainik-school-calculator .age-calculator-form-container .result.failure {
                color: red;
            }
            .sainik-school-calculator .step {
                display: none;
            }
            .sainik-school-calculator .step.active {
                display: block;
            }
            .sainik-school-calculator .age-calculator-form-container input[type="radio"] {
                width: auto;
                display: inline-block;
                margin-right: 10px;
            }
            .sainik-school-calculator .age-calculator-form-container input[type="radio"] + label {
                display: inline-block;
                margin-right: 20px;
            }
            .sainik-school-calculator .date-dropdown-container {
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
            }
            .sainik-school-calculator .date-dropdown-container select {
                width: 32%;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #ddd;
                font-size: 16px;
            }
            @media (max-width: 768px) {
                .sainik-school-calculator {
                    padding: 0;
                }
                .sainik-school-calculator .calculator-container {
                    max-width: 100%;
                    border-radius: 0;
                    padding: 10px;
                }
                .sainik-school-calculator .age-calculator-form-container form {
                    padding: 10px;
                }
            }
        </style>
    `;

    // Insert HTML and CSS into the page
    const widget = document.getElementById('sainik-school-widget');
    widget.innerHTML = calculatorStyles + calculatorHTML;

    // Define all calculator functions in the global scope
    window.populateDateDropdowns = function() {
        var daySelect = document.getElementById("birthDay");
        var monthSelect = document.getElementById("birthMonth");
        var yearSelect = document.getElementById("birthYear");

        // Populate days
        for (var i = 1; i <= 31; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i < 10 ? "0" + i : i;
            daySelect.add(option);
        }

        // Populate months
        var months = [
            {value: 0, text: "January"},
            {value: 1, text: "February"},
            {value: 2, text: "March"},
            {value: 3, text: "April"},
            {value: 4, text: "May"},
            {value: 5, text: "June"},
            {value: 6, text: "July"},
            {value: 7, text: "August"},
            {value: 8, text: "September"},
            {value: 9, text: "October"},
            {value: 10, text: "November"},
            {value: 11, text: "December"}
        ];
        months.forEach(function(month) {
            var option = document.createElement("option");
            option.value = month.value;
            option.text = month.text;
            monthSelect.add(option);
        });

        // Populate years
        for (var i = 2020; i >= 2008; i--) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            yearSelect.add(option);
        }
    }

    window.validateDate = function(day, month, year) {
        var date = new Date(year, month, day);
        return date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
    }

    window.nextStep = function(currentStep) {
        var step = document.getElementById("step" + currentStep);
        var nextStep = document.getElementById("step" + (currentStep + 1));
        
        var isValid = validateStep(currentStep);
        if(!isValid) {
            alert("Please fill out all fields.");
            return;
        }
        
        step.classList.remove("active");
        nextStep.classList.add("active");
    }

    window.validateStep = function(stepNumber) {
        var isValid = true;
        var inputs = document.querySelectorAll("#step" + stepNumber + " input:not([type='radio']), #step" + stepNumber + " select");
        
        inputs.forEach(function (input) {
            if(input.value === "" || input.value === null) {
                isValid = false;
            }
        });
        
        if(stepNumber === 1) {
            var radioButtons = document.querySelectorAll("#step1 input[type='radio']:checked");
            if(radioButtons.length === 0) {
                isValid = false;
            }
        }
        
        return isValid;
    }

    window.getPageIdentifier = function() {
        var h1Element = document.querySelector('h1');
        return h1Element ? h1Element.innerText : 'No H1 found';
    }

    window.checkEligibility = function(birthdate, examYear, examClass) {
        var startDate, endDate;
        
        if (examClass === "6") {
            startDate = new Date(examYear - 12, 3, 1);
            endDate = new Date(examYear - 10, 2, 31, 23, 59, 59, 999);
        } else if (examClass === "9") {
            startDate = new Date(examYear - 15, 3, 1);
            endDate = new Date(examYear - 13, 2, 31, 23, 59, 59, 999);
        }
        
        return birthdate >= startDate && birthdate <= endDate;
    }

   window.calculateAge = function(birthDate, cutoffDate) {
        let years = cutoffDate.getFullYear() - birthDate.getFullYear();
        let months = cutoffDate.getMonth() - birthDate.getMonth();
        let days = cutoffDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(cutoffDate.getFullYear(), cutoffDate.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }

    window.validateMobileNumber = function(number) {
        const regex = /^[6-9]\d{9}$/;
        return regex.test(number);
    }

    window.generateLead = function() {
        var studentName = document.getElementById("studentName").value;
        var mobileNumber = document.getElementById("mobileNumber").value;
        
        var birthDay = parseInt(document.getElementById("birthDay").value);
        var birthMonth = parseInt(document.getElementById("birthMonth").value);
        var birthYear = parseInt(document.getElementById("birthYear").value);
        
        if (!validateDate(birthDay, birthMonth, birthYear)) {
            alert("Please enter a valid date.");
            return false;
        }
        
        var birthdate = new Date(birthYear, birthMonth, birthDay);
        
        var examYear = parseInt(document.getElementById("examYear").value);
        var classSelection = document.getElementById("classSelection").value;
        var stateSelection = document.getElementById("stateSelection").value;
        var examClass = document.querySelector('input[name="examClass"]:checked').value;
        var pageIdentifier = getPageIdentifier();
        
        if(studentName === "" || !birthdate) {
            alert("All fields must be filled out");
            return false;
        }

        if (!validateMobileNumber(mobileNumber)) {
            alert("Please enter a valid 10-digit mobile number.");
            return false;
        }
        
        var isEligible = checkEligibility(birthdate, examYear, examClass);
        var age = calculateAge(birthdate, new Date(examYear, 2, 31));
        
        var result = document.getElementById("result");
        var submitButton = document.getElementById("submitButton");
        
        var ageString = `${age.years} years${age.months > 0 ? ` ${age.months} month${age.months !== 1 ? 's' : ''}` : ''}${age.days > 0 ? ` and ${age.days} day${age.days !== 1 ? 's' : ''}` : ''}`;

        if(isEligible) {
            result.innerHTML = `Success! ${studentName} is ELIGIBLE for Class ${examClass} in ${examYear}. ${studentName}'s age as of 31 March ${examYear} is ${ageString}.`;
            result.className = "result success";
        } else {
            result.innerHTML = `Not Eligible. ${studentName} is NOT ELIGIBLE for Class ${examClass} in ${examYear}. ${studentName}'s age as of 31 March ${examYear} is ${ageString}.`;
            result.className = "result failure";
        }
        
        submitButton.innerHTML = "Get Free Trial Class - Instant";
        submitButton.style.backgroundColor = "#04AA6D";
        submitButton.style.color = "white";
        submitButton.onclick = function () {
            window.location.href = "https://course.thespeedybrains.com/s/pages/ss-redirect";
        };
        
        var data = "name=" + encodeURIComponent(studentName) +
            "&phone=" + encodeURIComponent(mobileNumber) +
            "&birthdate=" + encodeURIComponent(birthdate.toISOString().substring(0, 10)) +
            "&examYear=" + encodeURIComponent(examYear) +
            "&examClass=" + encodeURIComponent(examClass) +
            "&classSelection=" + encodeURIComponent(classSelection) +
            "&stateSelection=" + encodeURIComponent(stateSelection) +
            "&note=Eligibility: " + (isEligible ? "Eligible" : "Not Eligible") + " for Sainik School Class " + examClass + ". Age: " + ageString +
            "&pageSource=" + encodeURIComponent(pageIdentifier) +
            "&accountsId=";
        
        sendDataToCRM(data);
    }

    window.sendDataToCRM = function(data) {
        fetch("https://flow.tsblive.in/webhook/5cb5cabc-a089-46df-be32-b9433abac950", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: data
        })
        .then(response => {
            if (response.ok) {
                console.log("Data sent successfully.");
            } else {
                console.error("Error sending data.");
            }
        })
        .catch(error => {
            console.error("Error sending data: ", error);
        });
    }

    // Initialize the calculator
    populateDateDropdowns();
})();
