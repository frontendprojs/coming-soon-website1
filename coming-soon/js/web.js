const input = document.getElementById('input');
const btn = document.getElementById('send');
const msg = document.getElementById('message');



function error() {
    msg.innerHTML = '<p>Please Enter An Valid Email</p>';
    msg.className = 'red';
    input.className = 'bordererror';
}
function success() {
    msg.innerHTML = '';
    input.className = 'nobordererror';
    input.value = '';
    alert(`you are now connected, Thank you!`);
}
function check(inp) {
    const imp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(inp.value.match(imp)) {
        return true;
    }else {
        return false;
    }
}

function empty(inpu) {
    if(inpu.value.trim() === '') {
        return false;
    }else {
        return true;
    }
}

btn.addEventListener('click', () => {
    if(empty(input) && check(input)) {
        success();
    }else {
        error();
    }
})