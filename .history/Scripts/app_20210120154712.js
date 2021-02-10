/*custon javascript  goes here */

// - Immediately invoked function Expression

(function()
{
    "use strict";
    function Start()
    {
        console.log("App Started...");
        

        let paragraphOneContent = "This is my first paragraph"
        //Selection
        let paragraphOne = document.getElementById("paragraphOne");
        paragraphOne.textContent = paragraphOneContent;

        //Step 1 Create a new element
        let paragraphTwo = document.createElement("p");
        //Step 2 Configure the new element
        paragraphTwo.setAttribute("id", "paragraphTwo");
        paragraphTwo.textContent = "This is my second paragraph";
        paragraphTwo.className = "fs-4 fw-bold";
        //Step 3 Target the parent element
        let mainContent = document.querySelector("main");
        //Step 4 Append the new element to the parent
        mainContent.appendChild(paragraphTwo);

        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `<h2>This is my second heading</h2>
        <p #id = paragraphThree> This is the third paragraph </p>`;


        //mainContent.append(newDivTag);

        paragraphOne.after(newDivTag);
    }

    window.addEventListener("load", Start);
})();