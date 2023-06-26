const button = document.querySelector("button");

button.addEventListener("click", () => {
  const divRoot = document.querySelector("#root");

  const articleElement = createNodeElement("article", "article-piscine");
  divRoot.appendChild(articleElement);

  const titleElement = createNodeElement("h1", "title-piscine", "Hello La Piscine");
  articleElement.appendChild(titleElement);

  const imgElement = createNodeElement(
    "img",
    "img-piscine",
    "",
    "https://www.activateurdeprogres.fr/sites/default/files/activator_form/Piscine-x-EGS.jpg"
  );
  articleElement.appendChild(imgElement);

  const textElement = createNodeElement("p", "text-piscine", "lorem ipsum");
  articleElement.appendChild(textElement);
});

const createNodeElement = (tagType, className, text = "", imgSrc = "") => {
  const nodeElement = document.createElement(tagType);
  nodeElement.setAttribute("class", className);

  nodeElement.setAttribute("src", imgSrc);
  nodeElement.textContent = text;

  return nodeElement;
};
