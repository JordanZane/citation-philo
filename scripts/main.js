function showRandomCitation(citations) {
    let randomIndex = Math.floor(Math.random() * citations.length);
    let randomCitation = citations[randomIndex];

    let imageContainer = document.getElementById("img-auteur-container");
    let citationContentContainer = document.getElementById("citation-content");

    imageContainer.innerHTML = ""; // Clear previous content
    citationContentContainer.innerHTML = ""; // Clear previous content
    
    let imageAuthor = document.createElement("img");
    imageAuthor.src = randomCitation.image;
    imageAuthor.alt = randomCitation.auteur;
    imageAuthor.classList.add("active");

    let nameAuthor = document.createElement("h2");
    nameAuthor.innerText = randomCitation.auteur;
    nameAuthor.classList.add("active");

    let citationContent = document.createElement("p");
    citationContent.innerText = randomCitation.content;
    citationContent.classList.add("active");

    imageContainer.appendChild(imageAuthor);
    imageContainer.appendChild(nameAuthor);

    citationContentContainer.appendChild(citationContent);
}

document.addEventListener("DOMContentLoaded", function () {
    fetch('data/citations.json')
        .then(response => response.json())
        .then(citations => {
            // Use the data to generate HTML elements
            console.log(citations);
            showRandomCitation(citations);

            // Add click event listener
            document.querySelector("#button-random-container > button").addEventListener("click", function () {
                showRandomCitation(citations);
            });
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
        });
});