let question = document.querySelector('.main-grid-question');
let answer = document.querySelectorAll('.main-grid-answer');
let perguntas = [
	"Tenho mais afinidade com lógica do que com artes.",
	"Tenho perfil de líder/empreendedor.",
	"Sou uma pessoa imaginativa.",
	"Gosto de lidar com pessoas.",
	"Mantenho constante aprendizado em minhas atividades."
];
let des = 0; let jodi = 0; let mad = 0; let q = 0;
let verificar = (()=>{
	if(q==5){
		if(des>jodi && des>mad){
			window.location.href = "./etim.html#a";
		}else if(jodi>des && jodi>mad){
			window.location.href = "./etim.html#b";
		}else{
			window.location.href = "./etim.html#c";
		}
		q = 0;
		jodi = 0;
		mad = 0;
		des = 0;
	}
});

answer[0].addEventListener('click', ()=>{
	question.innerHTML = perguntas[q];
	switch(q){
		case 1:
			des+= 2;
			mad+= 1;
		break;

		case 2:
			mad+= 2;
		break;

		case 3:
			jodi+=2;
			des+=1;
		break;

		case 4:
			mad+=2;
			des-=2;
			jodi-=1;
		break;

		case 5:
			des++;
			jodi++;
			mad++;
		break;
	}
	verificar();
	q++;
});

answer[1].addEventListener('click', ()=>{
	question.innerHTML = perguntas[q];
	switch(q){
		case 1:
			jodi+=1;
		break;

		case 2:
		break;

		case 3:
		break;

		case 4:
		break;

		case 5:
		break;
	}	
	verificar();
	q++;
});

answer[2].addEventListener('click', ()=>{
	question.innerHTML = perguntas[q];
	switch(q){
		case 1:
			jodi+=2;
		break;

		case 2:
			jodi++;
			mad--;
		break;

		case 3:
			mad-=2;
		break;

		case 4:
			jodi+=2;
			des+=2;
			mad--;
		break;

		case 5:
			des--;
			jodi--;
			mad--;
		break;
	}
	verificar();
	q++;
});
