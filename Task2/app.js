function Recipe(url) {
    return fetch(url)
        .then(response => response.json())
}

let searchBtn = document.querySelector('#searchBtn');
let searchField = document.querySelector('#searchField');
let Recipes = [];
searchBtn.addEventListener('click', ev => {
    setTimeout(function () {
        responseData();
    }, 10);
})

searchField.addEventListener('keypress', ev => {
    if (ev.key === 'Enter') {
        setTimeout(function () {
            responseData();
        }, 10);
    }
})


function cleaner() {
    let Clear = document.querySelector('#recipes');
    var child = Clear.lastElementChild;
    while (child) {
        Clear.removeChild(child);
        child = Clear.lastElementChild;
    }
}

async function responseData() {

    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField.value}`;
    const response = await Recipe(url);

    if (response.meals == null) {
        alert(`This meal recipe doesn't exists`);
    } else {
        cleaner();
        response.meals.forEach(element => {
            let recipe = document.createElement('div');
            let name = document.createElement('div');
            let hname = document.createElement('h1');
            let descriptionBar = document.createElement('div');
            let image = document.createElement('div');
            let img = document.createElement('img');
            let description = document.createElement('div');
            let ul = document.createElement('ul');

            let li1 = document.createElement('li')
            li1.classList.add(element.idMeal);
            li1.innerHTML = element.strIngredient1 + ' - ' + element.strMeasure1;
            let li2 = document.createElement('li')
            li2.classList.add(element.idMeal);
            li2.innerHTML = element.strIngredient2 + ' - ' + element.strMeasure2;
            let li3 = document.createElement('li')
            li3.classList.add(element.idMeal);
            li3.innerHTML = element.strIngredient3 + ' - ' + element.strMeasure3;
            let li4 = document.createElement('li')
            li4.classList.add(element.idMeal);
            li4.innerHTML = element.strIngredient4 + ' - ' + element.strMeasure4;
            let li5 = document.createElement('li')
            li5.classList.add(element.idMeal);
            li5.innerHTML = element.strIngredient5 + ' - ' + element.strMeasure5;
            let li6 = document.createElement('li')
            li6.classList.add(element.idMeal);
            li6.innerHTML = element.strIngredient6 + ' - ' + element.strMeasure6;


            img.src = element.strMealThumb;
            img.width = 250;
            img.height = 250;
            image.appendChild(img);
            hname.innerHTML = element.strMeal;
            name.appendChild(hname);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            description.appendChild(ul);

            recipe.classList.add('recipe');
            name.classList.add('name');
            descriptionBar.classList.add('description-bar');
            image.classList.add("image");
            description.classList.add("description");

            let make = document.createElement('div');
            let txt = document.createElement('h4');
            txt.innerHTML = element.strInstructions;
            make.appendChild(txt);
            descriptionBar.appendChild(image);
            descriptionBar.appendChild(description);

            recipe.appendChild(name);
            recipe.appendChild(descriptionBar);
            recipe.appendChild(make);

            let appender = document.querySelector("#recipes");
            appender.appendChild(recipe);
            make.classList.add('make');
        });
    }
}


