
let total = 0

function handleClick(target){
    const itemNameId = document.getElementById('cardsTitle');
    const cardTitle = target.childNodes[3].childNodes[3].innerText;

    const li = document.createElement('li');
    li.innerText = cardTitle;
    itemNameId.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];

    total = parseInt(total) + parseInt(price) ;

    const setTotalPrice = document.getElementById('totalPrice').innerText = total;

    const btn = document.getElementById('purchesBtn').parentNode.childNodes[9];

    console.log(btn)



    if(total > 0){

        document.getElementById('purchesBtn').disabled = false;

    }

   

   
}