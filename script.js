let parent = document.getElementById("parent")
let prices = document.getElementById("prices")

let productList = [];

fetch("https://fakestoreapi.com/products?limit=10").then((response) => {
    return response.json();
})
.then((res) => {
    renderData(res)
});

function renderData(data) {
    data.map((item) => {
        let div = document.createElement("div");
        div.classList.add("box");

        div.innerHTML = `
            <img width=100% src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <div>
                <span>${item.price}</span>
            </div>

        `;
        let button = document.createElement("button")
        button.classList.add("btn")
        button.textContent = "Sotib olish";
        button.addEventListener("click", () => addCount(item));
        div.appendChild(button);

        parent.appendChild(div);
    });
}

function addCount(product) {
    prices.innerHTML = ""
    alert("Mahsulot sotib olindi")
    productList.push(product);

    productList.map((item) => {
        let p = document.createElement("p");
        p.classList.add("text")
        p.innerHTML = `<span>${item.title}</span> <span>${item.price}</span>`;
        prices.appendChild(p);
    });

    let total =productList.reduce((total, item) => {
        total += item.price;
        return total;
    }, 0);

    let span = document.createElement("span")
    span.classList.add("span")
    span.textContent = total;
    prices.appendChild(span);
}