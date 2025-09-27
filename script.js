let tableBody = document.querySelector(".products");
let storedData = localStorage.getItem('myTableData');
let dataArray = storedData ? JSON.parse(storedData) : [];
const storeName = document.querySelector("#store-name").value.trim();
const productName = document.querySelector("#product-name").value.trim();
const brandName = document.querySelector("#brand-name").value.trim();
const size = Number(document.querySelector("#size").value);
const price = Number(document.querySelector("#price").value);

dataArray.forEach(item => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.storeName}</td>
        <td>${item.productName}</td>
        <td>${item.brandName}</td>
        <td><span>${item.size}</span>kq</td>
        <td><span>${item.price}</span>AZN</td>
        <td><span>${item.perKg}</span>AZN</td>
        <td>
            <a href="#edit" title="Edit">✏️</a>
            &nbsp;
            <a href="#delete" title="Delete" onclick="return confirm('Silinsin?')">🗑️</a>
        </td>
    `;
    tableBody.appendChild(row);
});

function renderTable() {
    tableBody.innerHTML = "";
    dataArray.forEach(item => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.storeName}</td>
            <td>${item.productName}</td>
            <td>${item.brandName}</td>
            <td><span>${item.size}</span>kq</td>
            <td><span>${item.price}</span>AZN</td>
            <td><span>${item.perKg}</span>AZN</td>
            <td>
                <a href="#edit" title="Edit">✏️</a>
                &nbsp;
                <a href="#delete" title="Delete" onclick="return confirm('Silinsin?')">🗑️</a>
            </td>
        `;
        tableBody.appendChild(row);
    });
}
renderTable();

function addProduct() {
    const storeName = document.querySelector("#store-name").value;
    const productName = document.querySelector("#product-name").value;
    const brandName = document.querySelector("#brand-name").value;
    const size = document.querySelector("#size").value;
    const price = document.querySelector("#price").value;

    if (!storeName || !productName || !brandName || size <= 0 || price <= 0) {
        alert("Zəhmət olmasa bütün xanaları düzgün doldurun!");
        return;
    }

    const perKg = (price / size).toFixed(2);

    const existingItem = dataArray.find(item =>
        item.productName === productName && item.brandName === brandName
    );

    if (existingItem) {
        alert("Bu məhsul əlavə edilib!");
        return;
    }

    const newItem = {
        storeName,
        productName,
        brandName,
        size,
        price,
        perKg
    };
    dataArray.push(newItem);

    localStorage.setItem("myTableData", JSON.stringify(dataArray));

    renderTable();

    document.querySelector(".item-form").reset();
}

document.querySelector(".add-button").addEventListener("click", function () {
    addProduct();
});

document.querySelector(".item-form").addEventListener("submit", function (e) {
    e.preventDefault();
    addProduct();
});

document.querySelector("#clear").addEventListener("click", function () {
    tableBody.innerHTML = '';
    localStorage.removeItem("myTableData");
    dataArray = [];
})
