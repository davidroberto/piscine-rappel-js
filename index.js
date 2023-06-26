const button = document.querySelector("button");

// au click sur le bouton

button.addEventListener("click", () => {
  // je cible l'élément dans le DOM quk a l'id root
  const divRoot = document.querySelector("#root");

  // je créé une balise article
  const articleElement = document.createElement("article");
  divRoot.appendChild(articleElement);

  // créer un titre
  const titleElement = document.createElement("h1");
  titleElement.textContent = "Hello La Piscine";
  articleElement.appendChild(titleElement);

  const imgElement = document.createElement("img");
  imgElement.setAttribute(
    "src",
    "https://www.activateurdeprogres.fr/sites/default/files/activator_form/Piscine-x-EGS.jpg"
  );
  articleElement.appendChild(imgElement);

  const textElement = document.createElement("p");
  textElement.textContent = "lorem ipsum";
  articleElement.appendChild(textElement);
});
