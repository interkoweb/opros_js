let buttons=document.getElementsByTagName('button');
// Тестовое подключние JSON
function getFileSity(fileName){
	let  request = new XMLHttpRequest();
	request.open('GET', fileName, false);
	request.send(null);
	return  JSON.parse(request.responseText);
}
let sityData = getFileSity('test.json');

console.log(sityData);
/////------------------////



let question=[
	'Визитки',
	'Буклеты',
	'Юрлицо',
	'ИП', 
	'Автозавод',
	'Нижегородский'
];

let div1=document.querySelector('#div1');
let div2=document.querySelector('#div2');
let div3=document.querySelector('#div3');
let div4=document.querySelector('#div4');
let submit=document.querySelector('#submit');
let submitForm=document.querySelector('#submitForm');

function display_no(event){
    event.classList.add('display-no');
	}
function display_yes(event){
    event.classList.remove('display-no');
	}

	
	for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',
    function clickButton(event){
        event.preventDefault();
        if(buttons[i].classList ==''+i+''){
            if(i==0||i==1){
							display_no(div1);
							question.push(i);
							display_yes(div2);
							otvet = question[i];
            }
            else if(i==2||i==3){
							display_no(div2);
							question.push(i);
							display_yes(div3);
							otvet1 = question[i];					
            }
						else if(i==4||i==5){
							display_no(div3);
							display_yes(submit);
							question.push(i);
							otvet2 = question[i];					
						}
				
      	}
			 
				
			
				console.log(otvet);
				
				});

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let sale_kod = getRandomInt(100000, 999999);

		submitForm.addEventListener('submit',function(event){
				event.preventDefault();
				display_no(submit);
				var result = 'Вы нажали на блоки:<br>' + otvet + '  ' + otvet1 + '  ' + otvet2 + '<br><br>Вы просто гений. <br><br>Ваш код: <span class="sale_kod">' + sale_kod + '</span>';
				document.getElementById("result").innerHTML = result;

			});

	




