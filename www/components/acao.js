	var res="";
	var valor1="";
	
$(document).on('click', '.num', function(){				
		res+=$(this).val();
		$('#display').val(res);
	});//qnd um btn da class num for clicado o valor do btn atual aparece no input #display
	
$(document).on('click','#btnC',function(){
	$('#display').val("");
  res="";
});//limpando o display com o btn clear 'C'

function total(){
valor1=eval(res);
	$('#display').val(valor1);
	res=valor1;
}