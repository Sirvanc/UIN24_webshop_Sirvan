console.log(products)

let productsHTML = "<h2>Ninjago</h2>"

products.map(product => productsHTML += `<article>
<img src="website_images/PROD_${product.imagefile}" alt="${product.title}" />
<a href="#">${product.category}</a>
<h3>${product.title}</h3>
<span>Kr. ${product.price}</span>
<button>Legg i handlekurv</button>
</article>`)

console.log(productsHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML = productsHTML

function addToCart(productid) {
    //console.log("addTocart kjører:" + productid);
    cart.push({ product: productid, quantity: 1 })
    console.log(cart)
}

function updateCartDispaly() {
    let cartHTML = ""
    if(cart.length === 0) {}
        cart.map((prod, index) => {
            let filteredProduct = products.filter(filterprod => prod.product === filterprod.prodid)
            console.log(filteredProduct)
    cartHTML += `\<li>
                        <span class="title">${filteredProduct[0].title}</span>
                        <span class="price">${filteredProduct[0].price}</span>
                        <span class="quantity">${Prod.quantity}</span>
                        <span class="functions">
                            <button oneclik="remoFromCart(${index})">X</button>
                        </span>
                    </li>`;
            
        })
        document.getElementById("cartlist").innerHTML = cartHTML
        
}
function remoFromCart(index) {
    console.log("Removeing" + index)
    cart.splice(index, 1)
    updateCartDispaly()
}