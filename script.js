//const input = document.querySelector(input);
const pid = document.getElementById("pid");
const input1 = document.getElementById('Calculo1');
const input2 = document.getElementById('Calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');
const head = document.querySelector('#header');
const phead = document.querySelector('#pheader');


const img = document.createElement('img');
img.setAttribute('src','https://1.bp.blogspot.com/-XF8zVU58Pl0/XqjU4U_rwgI/AAAAAAAAMCQ/aRwYqs0AOHQ3EDSFAuIODInGO_yDwY7BACNcBGAsYHQ/s1600/10%2Breglas%2Bde%2Boro%2Bpara%2Bla%2Bexportaci%25C3%25B3n.png');
img.setAttribute('width', '200rem');
console.log(img);

pid.append(img);

// btn.addEventListener('click', btnOnClick);
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs
}

form.addEventListener('mouseover', Pst);

function Pst(event) {
    pheader.innerText = "Se ve pero no se Toca"
}

function CalculOnChange() {
    console.log('Calculando el evento onchange')
}

