const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
const spans = document.querySelectorAll('.q span');
const checkBoxInput = document.querySelectorAll('input[type=radio]');
inputs.forEach((input) => {
    input.addEventListener('input', function () {
        if (input.value.length == 0) {
            input.style.borderColor = 'hsl(0, 66%, 54%)';
        }
        else if(input.value.length > 0) {
            input.style.borderColor = 'hsl(169, 82%, 27%)';
            if (input.nextElementSibling.classList.contains('warninn')) {
                input.parentElement.removeChild(input.nextElementSibling);
            }
        }
    })
})
let isvalid = true;
document.forms[0].addEventListener('submit', (e) => {
    inputs.forEach((input) => {
        if (input.value.length == 0  ) {
            e.preventDefault();
            if (input.nextElementSibling === null) {
                let p = document.createElement('p');
                p.innerHTML = 'This field is Required';
                p.classList.add('warninn');
                input.parentElement.appendChild(p);
                isvalid = false;
            }
        }
    })
    if(isvalid) {
        document.querySelector('.accpted').style.display = 'block';
        setTimeout(()=>{
            document.querySelector('.accpted').style.top = '-50px';
            document.querySelector('.accpted').style.display = 'none';
        },1500)
    }
})
spans.forEach((span)=>{
    span.addEventListener('click',function(){
        span.style.borderColor = 'hsl(169, 82%, 27%)';
        span.style.background = 'hsl(148, 38%, 91%)';
        span.firstChild.checked = true;
    })
})