const productsData = [
    { id: 1, name: "Кровать", price: 52999, category: "bedroom", manufacturer: "IKEA", image: "./img/Спальня/бежевая кровать.jpg"},
    { id: 2, name: "Шкаф", price: 63999, category: "bedroom", manufacturer: "IKEA", image: "./img/Спальня/бежевый шкаф.jpg"},
    { id: 3, name: "Столик", price: 69999, category: "bedroom", manufacturer: "IKEA", image: "./img/Спальня/белый столик.jpg"},
    { id: 4, name: "Шкаф", price: 41999, category: "bedroom", manufacturer: "IKEA", image: "./img/Спальня/белый шкаф 2.jpg"},
    { id: 5, name: "Шкаф", price: 74999, category: "bedroom", manufacturer: "IKEA", image: "./img/Спальня/белый шкаф.jpg"},
    { id: 6, name: "Кровать", price: 57999, category: "bedroom", manufacturer: "HOFF", image: "./img/Спальня/кремовая кровать.jpg"},
    { id: 7, name: "Пуф", price: 59999, category: "bedroom", manufacturer: "HOFF", image: "./img/Спальня/пуф.jpg"},
    { id: 8, name: "Кровать", price: 129999, category: "bedroom", manufacturer: "HOFF", image: "./img/Спальня/серая кровать 2.jpg"},
    { id: 9, name: "Кровать", price: 109999, category: "bedroom", manufacturer: "HOFF", image: "./img/Спальня/серая кровать.jpg"},
    { id: 10, name: "Кровать", price: 139999, category: "bedroom", manufacturer: "HOFF", image: "./img/Спальня/темно серая кровать.jpg"},
    { id: 11, name: "Тумбочка", price: 124999, category: "bedroom", manufacturer: "IKEA", image: "./img/Спальня/тумбочка.jpg"},
    

    { id: 13, name: "Кухня", price: 84999, category: "kitchen", manufacturer: "HOFF", image: "./img/Кухня/бежевая кухня с мрамором.jpg"},
    { id: 14, name: "Кухня", price: 79999, category: "kitchen", manufacturer: "HOFF", image: "./img/Кухня/бежевые стулья.jpg"},
    { id: 15, name: "Кухня", price: 71999, category: "kitchen", manufacturer: "HOFF", image: "./img/Кухня/белая кухня с деревянным столом и светильником.jpg"},
    { id: 16, name: "Кухня", price: 67999, category: "kitchen", manufacturer: "IKEA", image: "./img/Кухня/белая кухня с деревянным столом.jpg"},
    { id: 17, name: "Кухня", price: 72999, category: "kitchen", manufacturer: "HOFF", image: "./img/Кухня/белая кухня со столом с окном.jpg"},
    { id: 18, name: "Кухня", price: 75999, category: "kitchen", manufacturer: "IKEA", image: "./img/Кухня/белая кухня.jpg"},
    { id: 19, name: "Кухня", price: 81999, category: "kitchen", manufacturer: "IKEA", image: "./img/Кухня/белая мраморная кухня.jpg"},
    { id: 20, name: "Стол", price: 68999, category: "kitchen", manufacturer: "HOFF", image: "./img/Кухня/белый стол с серыми стульями.jpg"},
    { id: 21, name: "Стул", price: 59999, category: "kitchen", manufacturer: "HOFF", image: "./img/Кухня/коричневый стул.jpg"},
    { id: 22, name: "Кухня", price: 57999, category: "kitchen", manufacturer: "IKEA", image: "./img/Кухня/светло-серая кухня.jpg"},
    { id: 23, name: "Стул", price: 48999, category: "kitchen", manufacturer: "HOFF", image: "./img/Кухня/серый стул.jpg"},
    { id: 24, name: "Кухня", price: 51999, category: "kitchen", manufacturer: "HOFF", image: "./img/Кухня/темно бежевая кухня.jpg"},
    

    { id: 25, name: "Кровать", price: 119999, category: "children", manufacturer: "IKEA", image: "./img/Детская/белая кровать.jpg"},
    { id: 26, name: "Шкаф", price: 89999, category: "children", manufacturer: "IKEA", image: "./img/Детская/бело розовый шкаф.jpg"},
    { id: 27, name: "Кровать", price: 109999, category: "children", manufacturer: "IKEA", image: "./img/Детская/бело-серая кровать.jpg"},
    { id: 28, name: "Шалаш", price: 67999, category: "children", manufacturer: "IKEA", image: "./img/Детская/белый шалаш.jpg"},
    { id: 29, name: "Кровать Двухярусная", price: 78999, category: "children", manufacturer: "IKEA", image: "./img/Детская/двухярусная кровать.jpg"},
    { id: 30, name: "Стол", price: 34999, category: "children", manufacturer: "IKEA", image: "./img/Детская/деревянный стол.jpg"},
    { id: 31, name: "Шалаш", price: 55999, category: "children", manufacturer: "IKEA", image: "./img/Детская/зеленый шалаш.jpg"},
    { id: 32, name: "Кровать", price: 62999, category: "children", manufacturer: "HOFF", image: "./img/Детская/розовая кровать.jpg"},
    { id: 33, name: "Полки", price: 74999, category: "children", manufacturer: "HOFF", image: "./img/Детская/розовые полки.jpg"},
    { id: 34, name: "Кровать", price: 42999, category: "children", manufacturer: "IKEA", image: "./img/Детская/серая кровать.jpg"},
    { id: 35, name: "Стол", price: 58999, category: "children", manufacturer: "HOFF", image: "./img/Детская/серый стол.jpg"},
    
];

let currentCategory = "bedroom";

function showProduction(category) {
    currentCategory = category;
    filterProducts();
}

function filterProducts() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const manufacturerSelect = document.getElementById("manufacturerSelect").value;
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    const filteredProducts = productsData.filter(product => {
        const matchesCategory = product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchInput);
        const matchesManufacturer = manufacturerSelect === "all" || product.manufacturer === manufacturerSelect;

        return matchesCategory && matchesSearch && matchesManufacturer;
    });

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product");

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        const title = document.createElement("h3");
        title.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = `${product.price} руб.`;

        const button = document.createElement("button");
        button.textContent = "КУПИТЬ";

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(button);
        productsContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showProduction("bedroom");
});


