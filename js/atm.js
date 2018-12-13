var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var option5 = document.getElementById('option5');
var option6 = document.getElementById('option6');

var opbut1 = document.getElementById('opbut1');
var opbut2 = document.getElementById('opbut2');
var opbut3 = document.getElementById('opbut3');
var opbut4 = document.getElementById('opbut4');
var opbut5 = document.getElementById('opbut5');
var opbut6 = document.getElementById('opbut6');

var attempt = 0;
var attempt1 = 0

var cancel = document.getElementById('cancel');
var clear = document.getElementById('clear');
var enter = document.getElementById('enter');

var content = document.getElementById('content');

var card = document.getElementById('card');
var receiptpaper = document.getElementById('receiptpaper');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');

var posAmount = [
    {   
        Name: 'JOHN SMITH',
        cardNumber: 1000288839992000,
        pin: 9909,
        checking: 100.23,
        savings: 17000.54
    },   
    {   
        Name: 'MIKE ESPY',
        cardNumber: 1200233985557444,
        pin: 7509,
        checking: 0,
        savings: .10,  
    },
    {   
        Name: 'ELIZABETH TAYLOR',
        cardNumber: 5000400034995844,
        pin: 2112,
        checking: 10000.50,
        savings: 1000, 
    },
    {   
        Name: 'TERRY JAMES',
        cardNumber: 5000454303499584,
        pin: 3490,
        checking: 100.50,
        savings: 2.50,
    },
    {   
        Name: 'DONNA RHYMES',
        cardNumber: 5000499930494484,
        pin: 0909,
        checking: 12.20,
        savings: 5300.01,
    }
]

var randomNum = Math.floor((Math.random() * 5));

cust = posAmount[randomNum]; 

card.onclick = welcome; 


function welcome(){
    
    console.log(cust.Name, cust.pin)
    var image = document.getElementById('image')
    
    card.style.animationName='example';


    content.innerHTML ='<form><h2>WELCOME, ' + cust.Name + '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999">'
    keypad();
    
    enter.onclick = checkPin;
    clear.onclick = welcome;
    cancel.onclick = reload;
    
};

function checkPin(){
    console.log(number.value, cust.pin)
    if (Number(number.value) !== Number(cust.pin)){
        content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';

        attempt++

        if (attempt == 3){
            card.style.display = 'none';
            content.innerHTML = '<h2>THEFT ATTEMPTED. CARD IS DISCARDED.</h2>';
            setTimeout(reload, 4000);
        } else {
            setTimeout(welcome, 2200);
        }

    } else {
        mainPage();
    }
};


function reload(){
    
    location.assign('file:///Users/jarrickfinkley/Desktop/Lessons/ATM/index.html');
};

function checkBalance(){
    content.innerHTML = '<form><h2>WOULD YOU LIKE TO KNOW YOUR BALANCE FOR CHECKING OR SAVINGS?</h2>'

    option1.textContent = 'CHECKING';
    option2.textContent = 'SAVINGS';
    option3.textContent = 'EXIT';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){
        content.innerHTML = '<h2>YOUR CURRENT BALANCE FOR CHECKING IS $' + Number(cust.checking).toFixed(2) + '</h2>'
    };  opbut2.onclick = function(){
        content.innerHTML = '<h2>YOUR CURRENT BALANCE FOR SAVINGS IS $' + Number(cust.savings).toFixed(2) + '</h2>'
    };  opbut3.onclick = mainPage;

};

function mainPage(){
    content.innerHTML = '<h2>TO PROCEED, SELECT FROM THE OPTIONS BELOW.</h2>'

    option1.textContent = 'DEPOSIT';
    option2.textContent = 'WITHDRAWAL';
    option3.textContent = 'CHECK BALANCE';
    option4.textContent = 'CHANGE PIN';
    option5.textContent = 'LANGUAGE';
    option6.textContent = 'EXIT';

    opbut1.onclick = deposit;
    opbut2.onclick = withdraw;
    opbut3.onclick = checkBalance;
    opbut4.onclick = changePin;
    opbut5.onclick = language;
    opbut6.onclick = exit; // exit
};

function deposit(){
    content.innerHTML = '<h2>WHICH ACCOUNT WOULD YOU LIKE TO DEPOSIT IN?'

    option1.textContent = 'CHECKING';
    option2.textContent = 'SAVINGS';
    option3.textContent = 'EXIT';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO DEPOSIT INTO YOUR CHECKING?</h2><input id="number" type=number max="9999">'
        keypad();
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';
    
        enter.onclick = function(){
            var checking = Number(cust.checking) + Number(number.value)

            cust.checking = checking

            content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS $' + Number(cust.checking).toFixed(2) + '</h2>'

            setTimeout(mainPage, 2200);
        }
    };

    opbut2.onclick = function(){
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO DEPOSIT INTO YOUR SAVINGS?</h2><input id="number" type=number max="9999">'

        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

        keypad();
    
        enter.onclick = function(){
            var savings = Number(cust.savings) + Number(number.value)

            cust.savings = savings

            content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS $' + Number(cust.savings).toFixed(2) + '</h2>'

            setTimeout(mainPage, 2200);
        }
    };

    opbut3.onclick = mainPage;
    
};

function withdraw(){
    content.innerHTML = '<h2>WHICH ACCOUNT WOULD YOU LIKE TO WITHDRAW FROM?</h2>'

    option1.textContent = 'CHECKING';
    option2.textContent = 'SAVINGS';
    option3.textContent = 'EXIT';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO WITHDRAW FROM YOUR CHECKING?</h2><input id="number" type=number max="9999">'

        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

        keypad();
       
        enter.onclick = function(){
            var checking = Number(cust.checking) - Number(number.value)

            if (checking <= 0){
                content.innerHTML = '<h2>INSUFFICIENT FUNDS</h2>';

                setTimeout(mainPage, 2000);
            } else {

                cust.checking = checking

                content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS $' + Number(cust.checking).toFixed(2) + '</h2>'

                setTimeout(mainPage, 2200);
            };
        };
    };

    opbut2.onclick = function(){
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO WITHDRAW FROM YOUR SAVINGS?</h2><input id="number" type=number max="9999">'

        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

        keypad();
    
        enter.onclick = function(){
            var savings = Number(cust.savings) - Number(number.value)

            if (savings <= 0){
                content.innerHTML = '<h2>INSUFFICIENT FUNDS</h2>';

                setTimeout(mainPage, 2000);
            } else {

                cust.savings = savings

                content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS $' + Number(cust.savings).toFixed(2) + '</h2>'

                setTimeout(mainPage, 2200);

            };
        };
    };
    
};


function changePin(){
    content.innerHTML = '<form><h2>ENTER YOUR CURRENT PIN</h2><input id="number" type=number max="9999">'

    keypad();

    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    enter.onclick = function(){
        if (Number(number.value) !== Number(cust.pin)){
            content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';
            attempt1++
    
            if (attempt1 == 3){
                card.style.display = 'none';
                content.innerHTML = '<h2>THEFT ATTEMPTED. CARD IS DISCARDED.</h2>';
                setTimeout(reload, 4000);
            } else {
                setTimeout(changePin, 2200);
            }
    
        } else {
            content.innerHTML = '<h2>NOW, ENTER YOUR NEW PIN</h2><input id="number" type=number max="9999">';

            keypad();


            var nnumber = document.getElementById('number')

            // keypad[0].onclick = function(){
            //     console.log(Number(keypad[0].value)); 
            //     nnumber.value += Number(keypad[0].value);
            // }; keypad[1].onclick = function(){
            //     console.log(Number(keypad[1].value));
            //     nnumber.value += Number(keypad[1].value);
            // };  keypad[2].onclick = function(){
            //     console.log(Number(keypad[2].value));
            //     nnumber.value += Number(keypad[2].value);
            // };  keypad[3].onclick = function(){
            //     console.log(Number(keypad[3].value));
            //     nnumber.value += Number(keypad[3].value);
            // };  keypad[4].onclick = function(){
            //     console.log(Number(keypad[4].value));
            //     nnumber.value += Number(keypad[4].value);
            // };  keypad[5].onclick = function(){
            //     console.log(Number(keypad[5].value));
            //     nnumber.value += Number(keypad[5].value);
            // };  keypad[6].onclick = function(){
            //     console.log(Number(keypad[6].value));
            //     nnumber.value += Number(keypad[6].value);
            // };  keypad[7].onclick = function(){
            //     console.log(Number(keypad[7].value));
            //     nnumber.value += Number(keypad[7].value);
            // };  keypad[8].onclick = function(){
            //     console.log(Number(keypad[8].value));
            //     nnumber.value += Number(keypad[8].value);
            // };  keypad[9].onclick = function(){
            //     console.log(Number(keypad[9].value));
            //     nnumber.value += Number(keypad[9].value);
            // };  keypad[10].onclick = function(){
            //     console.log(Number(keypad[10].value));
            //     nnumber.value += Number(keypad[10].value);
            // };  keypad[11].onclick = function(){
            //     console.log(Number(keypad[11].value));
            //     nnumber.value += Number(keypad[11].value);
            // }; 

            enter.onclick = function(){

                cust.pin = nnumber.value
                content.innerHTML = '<h2>YOUR NEW PIN NUMBER IS ' + cust.pin + '.<h2>';

                setTimeout(mainPage, 2200);

            }

            cancel.onclick = mainPage;
            opbut6.onclick = mainPage;

        }

    }
};

function language(){
    content.innerHTML = '<h2>LANGUAGE</h2>';


    option1.textContent = 'ESPANOL';
    option2.textContent = 'FRENCH';
    option3.textContent = 'GERMAN';
    option4.textContent = 'ENGLISH';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){
        content.innerHTML = '<h2>POUR PROCÉDER, CHOISISSEZ LES OPTIONS CI-DESSOUS</h2>'

        keypad();
        

        cancel.textContent = 'Cancelar';
        clear.textContent = 'Claro';
        enter.textContent = 'Entrar';

        option1.textContent = 'DEPÓSITO';
        option2.textContent = 'RETIRO';
        option3.textContent = 'COMPROBACIÓN DEL EQUILIBRIO';
        option4.textContent = 'CAMBIO DE PIN';
        option5.textContent = 'IDIOMA';
        option6.textContent = 'SALIDA';
        
        enter.onclick = checkPin;
        clear.onclick = welcome;
        cancel.onclick = reload;
    }
    
    opbut2.onclick = function(){
        content.innerHTML = '<h2>CHOISISSEZ LES OPTIONS CI-DESSOUS</h2>'

        keypad();

        cancel.textContent = 'annuler';
        clear.textContent = 'entrer';
        enter.textContent = 'effacer';

        option1.textContent = 'DÉPÔT';
        option2.textContent = 'RETRAIT';
        option3.textContent = 'VÉRIFIER L\'ÉQUILIBRE';
        option4.textContent = 'CHANGER LA PIGE';
        option5.textContent = 'LA LANGUE';
        option6.textContent = 'LA SORTIE';

        enter.onclick = checkPin;
        clear.onclick = welcome;
        cancel.onclick = reload;
    }


    opbut3.onclick = function(){
        content.innerHTML = '<h2>WÄHLEN SIE AUS DEN OPTIONEN UNTEN</h2>'

        keypad();

        cancel.textContent = 'abbrechen';
        clear.textContent = 'eingeben';
        enter.textContent = 'löschen';

        option1.textContent = 'EINZAHLUNG';
        option2.textContent = 'RÜCKNAHME';
        option3.textContent = 'CHECK BALANCE';
        option4.textContent = 'PIN ÄNDERN';
        option5.textContent = 'SPRACHE';
        option6.textContent = 'BEENDEN';

        enter.onclick = checkPin;
        clear.onclick = welcome;
        cancel.onclick = reload;

    }

    opbut4.onclick = mainPage;
};



function exit(){
    content.innerHTML = '<form><h2>EXIT.<br> ARE YOU SURE? </h2> <input type="radio" id="answer1" name="answer" value="yes" /><p class=word1>YES</p> <input type="radio" class="input1" name="answer" value="no" /><p class=words><p class=word2>NO</p></form>';

    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';


    enter.onclick = function(){

        if (answer1 = true){
            content.innerHTML = '<h2>PLEASE TAKE YOUR CARD AND RECEIPT</h2>'

            receiptpaper.innerHTML = '<h3 class="rcph">ATM <br>' + cust.Name + '</h3><br> <p class="rcp">YOUR CURRENT BALANCE FOR CHECKING: $' + cust.checking.toFixed(2) + '<br> YOUR CURRENT BALANCE FOR SAVINGS: $' + cust.savings.toFixed(2) + '<br></p> <h3 class="rcph">THANK YOU!<h3>'

            receiptpaper.style.animationName='example1';

            card.style.animationFillMode = 'backwards'
        } else {
            mainPage();
        }
    };

}

function keypad(){
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var button4 = document.getElementById('button4');
    var button5 = document.getElementById('button5');
    var button6 = document.getElementById('button6');
    var button7 = document.getElementById('button7');
    var button8 = document.getElementById('button8');
    var button9 = document.getElementById('button9');
    var button0 = document.getElementById('button0');
    var buttondel = document.getElementById('delete');
    var buttonspa = document.getElementById('space');

    var keypad = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, buttondel, buttonspa];

    var number = document.getElementById('number'); 

    keypad.forEach(function (key,idx) {
        key.addEventListener('click', function(){
            console.log(Number(keypad[idx].value)); 
            number.value += Number(keypad[idx].value);
        });
    });

};

// start.onclick = function pinNumber(){

//     console.log(cust.Name)

//     message1.innerHTML = 'Welcome, ' + cust.Name + '.  Please enter pin. Then press Enter.'
//     message2.innerHTML = '<input type="number" id="pin">'
//     start.innerHTML = 'Enter'

//     start.onclick = function dash(){
    
//         var pin = Number(document.getElementById('pin').value);


//         if (pin !== cust.pin){
//             alert("Incorrect Pin. Try Again.")
//             pinNumber()
//         }
//         else {
//             message1.innerHTML = 'Select what you would like to do, then press Enter.'
//             message2.innerHTML = '<form action="#"><select name="options"><option value="withdrawal">Withdrawal</option><option value="deposit">Deposit</option><option value="checkb">Check Balance</option><option value="transfer">Transfer</option><option value="changep">Change Pin</option>'
//             start.innerHTML = 'Enter'

//         }     

//         start.onclick = function dash(){
    
//             var mode = document.getElementById('pin').value);
    
    
//             if (pin !== cust.pin){
//                 alert("Incorrect Pin. Try Again.")
//                 pinNumber()
//             }
//             else {
//                 message1.innerHTML = 'Select what you would like to do, then press Enter.'
//                 message2.innerHTML = '<form action="#"><select name="options"><option value="withdrawal">Withdrawal</option><option value="deposit">Deposit</option><option value="checkb">Check Balance</option><option value="transfer">Transfer</option><option value="changep">Change Pin</option>'
//                 start.innerHTML = 'Enter'
    
//             }     
        
//         }
    
//     }
// }


    // number = document.getElementById('number'); 

    // keypad[0].onclick = function(){
    //     console.log(Number(keypad[0].value)); 
    //     number.value += Number(keypad[0].value);
    // }; keypad[1].onclick = function(){
    //     console.log(Number(keypad[1].value));
    //     number.value += Number(keypad[1].value);
    // };  keypad[2].onclick = function(){
    //     console.log(Number(keypad[2].value));
    //     number.value += Number(keypad[2].value);
    // };  keypad[3].onclick = function(){
    //     console.log(Number(keypad[3].value));
    //     number.value += Number(keypad[3].value);
    // };  keypad[4].onclick = function(){
    //     console.log(Number(keypad[4].value));
    //     number.value += Number(keypad[4].value);
    // };  keypad[5].onclick = function(){
    //     console.log(Number(keypad[5].value));
    //     number.value += Number(keypad[5].value);
    // };  keypad[6].onclick = function(){
    //     console.log(Number(keypad[6].value));
    //     number.value += Number(keypad[6].value);
    // };  keypad[7].onclick = function(){
    //     console.log(Number(keypad[7].value));
    //     number.value += Number(keypad[7].value);
    // };  keypad[8].onclick = function(){
    //     console.log(Number(keypad[8].value));
    //     number.value += Number(keypad[8].value);
    // };  keypad[9].onclick = function(){
    //     console.log(Number(keypad[9].value));
    //     number.value += Number(keypad[9].value);
    // };  keypad[10].onclick = function(){
    //     console.log(Number(keypad[10].value));
    //     number.value += Number(keypad[10].value);
    // };  keypad[11].onclick = function(){
    //     console.log(Number(keypad[11].value));
    //     number.value += Number(keypad[11].value);
    // }; 