const button = document.querySelector("button");

button.addEventListener("click", () => {
  const divRoot = document.querySelector("#root");

  const articleElement = createNodeElement("article", {
    class: "article-piscine",
  });
  divRoot.appendChild(articleElement);

  const titleElement = createNodeElement(
    "h1",
    {
      class: "title-piscine",
    },
    "Hello La Piscine"
  );
  articleElement.appendChild(titleElement);

  const imgElement = createNodeElement(
    "img",
    {
      class: "img-piscine",
      src: "https://www.activateurdeprogres.fr/sites/default/files/activator_form/Piscine-x-EGS.jpg",
    },
    ""
  );
  articleElement.appendChild(imgElement);

  const textElement = createNodeElement(
    "p",
    {
      class: "text-piscine",
    },
    "lorem ipsum"
  );
  articleElement.appendChild(textElement);
});

const createNodeElement = (tagType, attributes, text = "") => {
  const nodeElement = document.createElement(tagType);

  // on fait une boucle sur l'objet attributes
  // et pour chaque propriété trouvée (class, src etc)
  // on ajoute un attribut avec en type le nom de la propriété et en valeur sa valeur
  for (const property in attributes) {
    nodeElement.setAttribute(property, attributes[property]);
  }

  nodeElement.textContent = text;

  return nodeElement;
};
