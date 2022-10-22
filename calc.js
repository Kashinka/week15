/* Доработайте калькулятор из прошлых заданий, выдавая сообщение "На ноль делить нельзя!" пользователю, если он пытается поделить на 0. */

// add switch

function showMessage() {

    let x = document.getElementById('x').value;

    let y = document.getElementById('y').value;

    let operation = document.getElementById('operation').value;

    let result = operation;

    switch (result) {
        case '+':
            result = document.getElementById('result').innerHTML = Number(x) + Number(y); break;
        case '-':
            result = document.getElementById('result').innerHTML = Number(x) - Number(y); break;
        case '/':
            result = document.getElementById('result').innerHTML = Number(x) / Number(y); break;
        case '*':
            result = document.getElementById('result').innerHTML = Number(x) * Number(y); break;
        case '/0':
            y = 0;
            alert('На ноль делить нельзя!');
        default:
            alert('Ошибка!');
}

    /* if (operation==="+"){

        document.getElementById('result').innerHTML = Number(x) + Number(y);

    }

    if (operation==="-"){

        document.getElementById('result').innerHTML = Number(x) - Number(y);

    }

    if (operation==="*"){

        document.getElementById('result').innerHTML = Number(x) * Number(y);

    }

    if (operation==="/"){

        document.getElementById('result').innerHTML = Number(x) / Number(y);

    }

    } */