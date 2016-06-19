$(document).ready(function(){
	
	$('form').submit(function(){
		if($('#username').val() == '') {
			alert('請輸入姓名');
			return false; //阻止表單被送出
		}
		//避免重複送出
		$('#submit').attr('disabled', false);
	});//end submit


	//自動聚焦在第一組文字輸入欄位
	$(':text:first').focus();

});//end ready