let buttons=document.getElementsByTagName('button');
let question=[
	vizitki = 'Визитки',
	bukleti = 'Буклеты',
	

];
let div1=document.querySelector('#div1');
let div2=document.querySelector('#div2');
let div3=document.querySelector('#div3');
let div4=document.querySelector('#div4');
let submit=document.querySelector('#submit');
let submitForm=document.querySelector('#submitForm');

function addHidden(event){
    event.classList.add('hidden');
	}
function removeHidden(event){
    event.classList.remove('hidden');
	}

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',
    function clickButton(event){
        event.preventDefault();
        if(buttons[i].classList ==''+i+''){
            if(i==0||i==1){
                addHidden(div1);
                question.push(i);
                removeHidden(div2);
								
            }
            else if(i==2||i==3){
							addHidden(div2);
							question.push(i);
							removeHidden(div3);
														
            }
						else if(i==4||i==5){
							addHidden(div3);
							removeHidden(submit);
							question.push(i);
						console.log(question);
						console.log(question.length);
							
						}
					
			
      }
				console.log(question);

		
							
    });
	 
	
		
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let sale_kod = getRandomInt(100000, 999999);


submitForm.addEventListener('submit',function(event){
	event.preventDefault();
	addHidden(submit);
	let result = 'Вы нажали на блоки: '+question[0]+' , '+question[1]+' и '+question[2]+'! <br><br>Вы просто гений. <br><br>Ваш код для скидки <span class="sale_kod">' + sale_kod + '</span>';
	document.getElementById("result").innerHTML = result;
	
	console.log("Вы нажали на "+question[0]+" и "+question[1]+"кнопки");

});




	

