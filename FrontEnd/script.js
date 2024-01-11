document.addEventListener("DOMContentLoaded", async function () {
    
    // Récupération des traveaux
    const responseWorks = await fetch('http://localhost:5678/api/works');
    const works = await responseWorks.json();
    genererWorks(works);
  
    // Récupération des catégories
    const responseCategories = await fetch('http://localhost:5678/api/categories');
    const categories = await responseCategories.json();
    genererFiltres(categories);

  });
  
  function genererWorks(works) {
    const sectionGallery = document.querySelector(".gallery");
  
    works.forEach(article => {
      const workElement = document.createElement("figure");
      const imageElement = document.createElement("img");
      imageElement.src = article.imageUrl;
  
      const nomElement = document.createElement("figcaption");
      nomElement.innerText = article.title;
      sectionGallery.appendChild(workElement);
      workElement.appendChild(imageElement);
      workElement.appendChild(nomElement);
  
      
    });
  }
  
  function genererFiltres(categories) {
   const filterContainer = document.querySelector('.filters');
  
    // Ajoute un bouton "Tous"
    const allButton = document.createElement('button');
    allButton.classList.add('filter__btn','filter__btn--active');
    allButton.innerText = 'Tous';
    filterContainer.appendChild(allButton);
  
    // Ajoute des boutons pour chaque catégorie
    categories.forEach(category => {
      const button = document.createElement('button');
      button.classList.add('filter__btn');
      button.textContent = category.name;
      filterContainer.appendChild(button);
    });
  }
  
 
  