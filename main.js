function add1(){

    let div = document.createElement("div");
    let p = document.createElement("p");
    let bTotal = document.createElement("b");

    p.innerHTML = quantity.value + " " + product.value;
    bTotal.innerHTML = " $ "+parseFloat(quantity.value) * parseFloat(price.value);

    p.appendChild(bTotal);

    div.appendChild(p);
    list.appendChild(div);
}




function add2(){
    let content = `<div>
        <p>
            ${quantity.value} ${product.value}
            <b>$ ${parseFloat(quantity.value) * parseFloat(price.value)}</b>
        </p>
    </div>`;

    list.innerHTML += content;
}