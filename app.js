
$(document).ready(function(){

})
// var cal=[];
var str='';
var result;
// var status=false;

$('.num').on('click',function(){
  // status=true;
  var num=$(this).text();
  // cal.push(num);
  concat(num);
  $('#result').text(num);

});
$('.operator').on('click',function(){

  var operator=$(this).text();
  concat(operator); 
    $('#result').text(operator);
   

})

$('#allclear').on('click',function(){
  str='';
  result='';
  // status=false;
  $("#input").text(str);
  $('#result').text(result);
});
$('#clearlast').on('click',function(){
  str=str.substring(0, str.length-1);
  $("#input").text(str);
  $('#result').text(str.charAt(str.length-1));
})

$('.equals').on('click',function(){
  var calculate=str;
  // str='';
  result=eval(calculate).toFixed(2);
  console.log(result.length);
 if(result.length<11){
   $('#result').text(result);
 }else{
   str='';
   $('#input').text(str);
  $('#result').text('digit limit met'); 
 }
    
  
   
  
   
})

function concat(item){
  if(str.length==0 && (item=='+'||item=='-'||item=='.'||item=='/'||item=='*'||item=='%')){
    str=str.concat('');
     $('#input').text(str);
  }
  else if(str.length<20){
    var last=str.substring(str.length - 1);
    if((item=='+'||item=='-'||item=='.'||item=='/'||item=='*'||item=='%' )&&(last=='+'||last=='-'||last=='.'||last=='/'||last=='*'||last=='%' )){
      str=str.concat('');
      $('#input').text(str);
  
    }else{
         str=str.concat(item);
      $('#input').text(str);
  console.log('string '+str);
    }
  }
    else{
    $('#input').text('digit limit exceeded');
    str='';
  }
  }