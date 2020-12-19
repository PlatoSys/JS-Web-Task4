// key 2417b62ab2507409ceb3
// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=2417b62ab2507409ceb3

function FetchData(url) {
    return fetch(url)
        .then(response => response.json())

    }


let btn = document.querySelector('#currencyBTN');
btn.addEventListener('click', ev => {
    getCurrency();
})


async function getCurrency(){
    let from = document.querySelector('#fromValue').value;
    let to = document.querySelector('#toValue').value;
    let multiplier = parseInt(document.querySelector('#multiplier').value);

    let data = await FetchData(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=2417b62ab2507409ceb3`);

    let result = document.querySelector('#resultValue')
    result.innerHTML = `${from} => ${to} : ${data[`${from}_${to}`] * multiplier}`
}
