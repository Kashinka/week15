function showMessage() {

    let x = document.getElementById('x').value;
    
    // console.log(x);

    let y = document.getElementById('y').value;
    
    // console.log(y);

    let operation = document.getElementById('operation').value;

    if (operation==="+"){

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

    }