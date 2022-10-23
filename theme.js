function onChangeTheme() {

    let selectTheme = document.getElementById('select-theme')
    
switch (selectTheme.value) {

    case 'th1':
        document.body.style.backgroundColor = 'white';
    break;
    case 'th2':
        document.body.style.backgroundColor = 'blue';
        break;
    case 'th3':
        document.body.style.backgroundColor = 'black';
        break;

    }
    
}