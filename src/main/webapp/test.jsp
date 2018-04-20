<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title>Insert title here</title>
<script type="text/javascript" src="jquery.min.js"></script>
<style type="text/css">
table td.context{
width: 40%;
}
table td.context div{
width: 600px;
}

table tr{
height: 50px;
}
table td input{
width: 100%;
height: 100%;
}
</style>
</head>
<body>
<input type="button" value="test" onclick="dotest()">

</body>
<script type="text/javascript">

function dotest() {
	
	for (var i = 0; i < 500; i++) {
		p1(i);
	}
	
	
	
}


function p1(i){
	$.ajax({
		url:"test.do",
		data:{vcode:i},
		dataType : 'JSON',
		type:'post',
		async: false,
		success:function(data){
			
			
		p2(data.jsessionid,i);
			
			
		}
	});
	
	
}


function p2(sid,i){
	$.ajax({
		url:"test.do",
		data:{sysSessionid:sid},
		dataType : 'JSON',
		type:'get',
		async: false,
		success:function(data){
			
			if(data.data!=i)
				console.log(data);
			
			
		}
	});
	
}



function t2(){
	$.ajax({
		url:"test.do",
		data:{sysSessionid:"34998e97-5166-4c0a-9f72-f8ec39e8e9c5"},
		dataType : 'JSON',
		type:'get',
		async: false,
		success:function(data){
			
			
				console.log(data);
			
			
		}
	});
	
	
}



</script>
</html>