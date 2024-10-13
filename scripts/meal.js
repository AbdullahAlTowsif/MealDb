console.log('connected');

let allCategories = [];

const loadCategories = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((data) => {
        allCategories = data.categories
        console.log(allCategories);
        displayCategories(allCategories.slice(0,5))
    })
    .catch((err) => console.log(err));
};

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = "";
    categories.forEach((item) => {
        // console.log(item.strCategory)
        const div = document.createElement('div');
        div.classList = 'card lg:card-side bg-base-100 shadow-xl'
        div.innerHTML = `
        <figure>
            <img class="w-full" src="${item.strCategoryThumb}" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${item.strCategory}</h2>
            <p>${item.strCategoryDescription.slice(0,100)}</p>
            <div class="card-actions justify-start">
                <button class="text-primary font-bold underline">View Details</button>
            </div>
        </div>
        `
        categoriesContainer.append(div);
    })
}

document.getElementById('btn-showAll').addEventListener('click', function(){
    displayCategories(allCategories);
    document.getElementById('btn-showAll').classList = 'hidden';
});



loadCategories();