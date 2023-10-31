let product_arr1 =[
    {
        product_src : "https://tagzfoods.com/cdn/shop/products/IMG_5401_180x.jpg?v=1691648887",
        title : "BRO-SOME LOVE",
        price : 590.00
    },
    {
        product_src : "https://tagzfoods.com/cdn/shop/products/IMG_5401_180x.jpg?v=1691648887",
        title : "BRO-SOME LOVE",
        price : 490.00
    },
    {
        product_src : "https://tagzfoods.com/cdn/shop/products/IMG_5401_180x.jpg?v=1691648887",
        title : "BRO-SOME LOVE",
        price : 90.00
    },
    {
        product_src : "https://tagzfoods.com/cdn/shop/products/IMG_5401_180x.jpg?v=1691648887",
        title : "BRO-SOME LOVE",
        price : 190.00
    },
    {
        product_src : "https://tagzfoods.com/cdn/shop/products/IMG_5401_180x.jpg?v=1691648887",
        title : "BRO-SOME LOVE",
        price : 390.00
    },
    {
        product_src : "https://tagzfoods.com/cdn/shop/products/IMG_5401_180x.jpg?v=1691648887",
        title : "BRO-SOME LOVE",
        price : 690.00
    },
    {
        product_src : "https://tagzfoods.com/cdn/shop/products/IMG_5401_180x.jpg?v=1691648887",
        title : "BRO-SOME LOVE",
        price : 790.00
    },
]

function products(){
    let product_box = document.getElementById("product");

    
    let product_arr = product_arr1.filter( elem => {
        return (elem.price >= 200 && elem.price <= 500) 
    } )
    console.log(product_arr)
    for(let i=0;i<product_arr.length;i++){

        let outer_div = document.createElement("div");
        outer_div.classList.add("shop");
        let product_image = document.createElement("img");
        product_image.src = product_arr[i].product_src;
        let title = document.createElement("h3");
        title.textContent = product_arr[i].title;
        let price = document.createElement("p");
        price.textContent = product_arr[i].price;
        let atcBtn = document.createElement("button");
        atcBtn.textContent = "Add to Cart";

        outer_div.append(product_image , title , price , atcBtn);

        product_box.appendChild(outer_div);

    }



}

products();