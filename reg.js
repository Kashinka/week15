function showMessage() {

    let input = document.getElementById('name, email, username, password, confirm').value;

    let name = document.getElementById('name').value;

    let result = input;

    if (input === '') {
            document.getElementById('result').innerHTML = (`Ошибка!`);
            break;
            }
                
    else document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}`);
        }