function segitiga(){
    if (document.getElementById("pilihSegitiga").selectedIndex == 0){
        segitigaAtas();
    } else if (document.getElementById("pilihSegitiga").selectedIndex == 1){
        segitigaBawah();
    } else if (document.getElementById("pilihSegitiga").selectedIndex == 2){
        segitigaKanan();
    } else if (document.getElementById("pilihSegitiga").selectedIndex == 3){
        segitigaKiri();
    } else {
        document.write("Wrong Input Data");
    }
}

function segitigaAtas(){
    var n = document.getElementById("inputNumber").value;
    n = parseInt(n);

    for (i = n; i > 0; i--) {
        for (j = 1; j <= i - 1; j++) {
            document.write('&nbsp&nbsp');
        }

        for (y = 1; y <= n - i + 1; y++) {
            document.write('*');
        }

        for (l = 1; l <= n - i; l++) {
            document.write('*');
        }
        document.write('<br>');
    }
}
document.getElementById("demo").innerHTML = segitigaAtas();

function segitigaBawah(){
    var n = document.getElementById("inputNumber").value;
    n = parseInt(n);

    for (i = 1; i <= n; i++){
        for (j = 1; j <= i; j++) {
            document.write('&nbsp&nbsp');
        }

        for (y = 1; y <= n - i; y++) {
            document.write('*');
        }

        for (l = -1; l < n - i; l++) {
            document.write('*');
        }
        document.write('<br>');
    }
}
document.getElementById("demo").innerHTML = segitigaBawah();

function segitigaKanan(){
    var n = document.getElementById("inputNumber").value;
    n = parseInt(n);

    for (i = 1; i <= n; i++){
        for (j = 0; j < i; j++) {
            document.write('*');
        }
        document.write('<br>');
    }

    for (i = 1; i <= n - 1; i++){
        for (j = 0; j < n - i; j++) {
            document.write('*');
        }
        document.write('<br>');
    }
}
document.getElementById("demo").innerHTML = segitigaKanan();

function segitigaKiri(){
    var n = document.getElementById("inputNumber").value;
    n = parseInt(n);

    for (i = 1; i <= n; i++){
        for (j = 0; j < n - i; j++) {
            document.write('&nbsp&nbsp');
        }

        for (k = 0; k < i; k++) {
            document.write('*');
        }
        document.write('<br>');
    }

    for (i = 1; i <= n - 1; i++){
        for (j = 0; j < i; j++) {
            document.write('&nbsp&nbsp');
        }

        for (k = 0; k < n - i; k++) {
            document.write('*');
        }
        document.write('<br>');
    }
}
document.getElementById("demo").innerHTML = segitigaKiri();