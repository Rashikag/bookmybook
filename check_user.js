$('#username').keyup(function())
{
var username=$('#username').val();
$('#status').html('<img src="https://i.gifer.com/7plQ.gif">');

if(username!='')
    {
    $.post('check_user')    
    }
else{
    
$('#status').html('');
}
}
