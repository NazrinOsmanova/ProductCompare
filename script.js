let cart = [];
let newProductId = 0;

document.querySelector(".add-button").addEventListener("click", function addToCart(productId, productName, productPrice) {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        alert("Bu mehsul elave edilib!");
    } else {
        console.log(document.querySelector("#store-name").value);

        let newElement = document.createElement("tr");

        newElement.innerHTML = `
                        <td>${document.querySelector("#store-name").value}</td>
                        <td>${document.querySelector("#product-name").value}</td>
                        <td>${document.querySelector("#brand-name").value}</td>
                        <td><span>${document.querySelector("#size").value}</span>kq</td>
                        <td><span>${document.querySelector("#price").value}</span>AZN</td>
                        <td><span>${(document.querySelector("#price").value) / (document.querySelector("#size").value)}</span>AZN</td>
                        <td>
                            <a href="#edit" title="Edit">✏️</a>
                            &nbsp;
                            <a href="#delete" title="Delete" onclick="return confirm('Silinsin?')">🗑️</a>
                        </td>
        `;

        document.querySelector(".products").appendChild(newElement);

        // cart.push({
        //     id: newProductId++,
        //     name: productName,
        //     price: productPrice,
        //     quantity: 1
        // });

        document.querySelector(".item-form").reset();
    }
})