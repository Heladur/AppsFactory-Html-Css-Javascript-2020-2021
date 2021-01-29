document.querySelector('#comprobar_preguntas').addEventListener('click', () => {
	document.querySelectorAll('input[type=radio]:checked').forEach( obj => {
		if(obj.classList.contains('correcta')){
			obj.closest('p').style.background = 'green';
		}else{
			obj.closest('p').style.background = 'red';
		}
	});
});