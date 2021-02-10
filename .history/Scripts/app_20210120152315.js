/*custon javascript  goes here */

// - Immediately invoked function Expression

(function()
{

    function Start()
    {
        console.log("App Started...");

        let paragraphOneContent = "This is my first paragraph"

        let paragraphOne = document.getElementById("paragraphOne");
        paragraphOne.textContent = paragraphOneContent;

        let paragraphOneElements = document.getElementsByTagName("p")[0];
        console.log(paragraphOneElements);

        let paragraphQuery = document.querySelector("p")
        console.log(paragraphQuery);

        let paragraphOneQuerys = document.querySelectorAll("p")[0];
        consoele.log(paragraphOneQuerys);
    }

    window.addEventListener("load", Start);
})();