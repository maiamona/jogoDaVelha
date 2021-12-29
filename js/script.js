let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let botao = document.querySelector('.botao');
let secondPlayer;

let player1 = 0;
let player2 = 0;



for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        let el = checkEl(player1, player2);

        // console.log(this.childNodes.length);

        // verifica se ja tem x ou o
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);// clonamos todo elemento
            // this.appendChild(el);
            this.appendChild(cloneEl);

            // computa jogada
            if (player1 == player2) {

                player1++;

                if (secondPlayer == 'ai-player') {
                    computerPlay();
                    player2++;
                }
            } else {
                player2++;
            }

            // checa quem venceu
            checkWinCondition();
        }
    });

}
// evento 2 jogadores ou inteligencia artificial
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        secondPlayer = this.getAttribute('id');

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function () {
            let container = document.querySelector('#container');
            container.classList.remove('hide');
        }, 500);
    });
}
// ve quem vai jogar
function checkEl(player1, player2) {
    let el;
    if (player1 == player2) {
        // x
        el = x;
    } else {
        // o
        el = o;
    }
    return el;
}

// ver quem ganhou
function checkWinCondition() {
    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');



    // console.log(b1.childNodes.length);

    // horizontal (1ª linha)
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            pinta(b1, b2, b3);
            // x  
            // console.log('x venceu');
            setTimeout(function () {
                // x.classList.add('blink_text');
                declareWinner('x');
                normal(b1, b2, b3);
            }, 500);


        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            pinta(b1, b2, b3);
            // o
            // console.log('o venceu');
            setTimeout(function () {
                declareWinner('o');
                normal(b1, b2, b3);
            }, 500);
        }
    }
    // horizontal2 (2ª linha)
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            pinta(b4, b5, b6);
            // x  
            // console.log('x venceu');
            setTimeout(function () {
                declareWinner('x');
                normal(b4, b5, b6);
            }, 500);
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            pinta(b4, b5, b6);
            // o
            // console.log('o venceu');
            setTimeout(function () {
                declareWinner('o');
                normal(b4, b5, b6);
            }, 500);
        }
    }
    // horizontal3 3ª linha)
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            pinta(b7, b8, b9);
            // x  
            // console.log('x venceu');
            setTimeout(function () {
                declareWinner('x');
                normal(b7, b8, b9);
            }, 500);
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            pinta(b7, b8, b9);
            // o
            // console.log('o venceu');
            setTimeout(function () {
                declareWinner('o');
                normal(b7, b8, b9);
            }, 500);
        }
    }
    // vertical1 1ª linha)
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            pinta(b1, b4, b7);
            // x  
            // console.log('x venceu');
            setTimeout(function () {
                declareWinner('x');
                normal(b1, b4, b7);
            }, 500);
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            pinta(b1, b4, b7);
            // o
            // console.log('o venceu');
            setTimeout(function () {
                declareWinner('o');
                normal(b1, b4, b7);
            }, 500);
        }
    }
    // vertical2 2ª linha)
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            pinta(b2, b5, b8);
            // x  
            // console.log('x venceu');
            setTimeout(function () {
                declareWinner('x');
                normal(b2, b5, b8);
            }, 500);
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            pinta(b2, b5, b8);
            // o
            // console.log('o venceu');
            setTimeout(function () {
                declareWinner('o');
                normal(b2, b5, b8);
            }, 500);
        }
    }
    // vertical3 3ª linha)
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            pinta(b3, b6, b9);
            // x  
            // console.log('x venceu');
            setTimeout(function () {
                declareWinner('x');
                normal(b3, b6, b9);
            }, 500);
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            pinta(b3, b6, b9);
            // o
            // console.log('o venceu');
            setTimeout(function () {
                declareWinner('o');
                normal(b3, b6, b9);
            }, 500);
        }
    }
    // diagonal da esquerda para direita)
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            pinta(b1, b5, b9);
            // x  
            // console.log('x venceu');
            setTimeout(function () {
                declareWinner('x');
                normal(b1, b5, b9);
            }, 500);
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            pinta(b1, b5, b9);
            // o
            // console.log('o venceu');
            setTimeout(function () {
                declareWinner('o');
                normal(b1, b5, b9);
            }, 500);
        }
    }
    // diagonal da direita para esquerda)
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            pinta(b3, b5, b7);
            // x  
            // console.log('x venceu');
            setTimeout(function () {
                declareWinner('x');
                normal(b3, b5, b7);
            }, 500);
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            pinta(b3, b5, b7);
            // o
            // console.log('o venceu');
            setTimeout(function () {
                declareWinner('o');
                normal(b3, b5, b7);
            }, 500);
        }

        // empate
        let counter = 0;

        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].childNodes[0] != undefined) {
                counter++;
            }
        }

        if (counter == 9) {
            // console.log('empate');
            declareWinner('enpatou');
        }
    }


}

function declareWinner(winner) {
    let scoreBoardX = document.querySelector('#scoreboard-1');
    let scoreBoardO = document.querySelector('#scoreboard-2');
    let msg = '';

    if (winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = 'O jogador 1 venceu';
    } else if (winner == 'o') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        msg = 'O jogador 2 venceu';
    } else {
        msg = 'EMPATE !';
    }
    messageText.innerHTML = msg;
    messageContainer.classList.remove('hide');

    setTimeout(function () {
        messageContainer.classList.add('hide');
    }, 3000);

    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll('.box div');

    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5); //de 0 a 5
        if (boxes[i].childNodes[0] == undefined) {// preenche apenas nos campos vazios
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        } else {
            filled++;
        }
    }
    if (counter == 0 && filled < 9) {
        computerPlay();
    }
}

function pinta(a, b, c) {
    a.style.backgroundColor = 'yellow';
    b.style.backgroundColor = 'yellow';
    c.style.backgroundColor = 'yellow';
}

function normal(a, b, c) {
    a.style.backgroundColor = 'white';
    b.style.backgroundColor = 'white';
    c.style.backgroundColor = 'white';
}



botao.addEventListener('click', () => {
    location.reload();
});

