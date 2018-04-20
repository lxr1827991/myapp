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
<div>
<p>洪城停车api接口</p>


</div>

<div>
<input id="uid" type="text" value="20170927134858252415713015236184">


</div>

<table style="width: 100%;border-style:solid" border="1" cellspacing="0">
	<col style="width: 10%" />
	<col style="width: 50%" />
	<col style="width: 20%" />
	<col style="width: 20%" />
<thead>


<tr>
      <th >名称</th>
      <th width="50%">接口</th>
      <th>测试返回</th>
       <th>说明</th>
    </tr>

</thead>
<tbody>

		
	<tr>
		<td>查询用户</td>
			<td class="context"><input type="text" value="test/finduser.do?phone=18279915667" onkeydown="if (event.keyCode == '13') {onExcute(this)}"></td>
			<td class="context"><div ></div></td>
			<td class="context"><div >
			最多绑定3个车牌<br>
			需要uid<br>
			一：参数<br>
			
			</div></td>
		</tr>
		
			<tr>
		<td>发送信息</td>
			<td class="context"><input type="text" value="test/sendmsg.do?mebid=20171102105322973841843345162244&phone=0&type=1&orderid=12313232" onkeydown="if (event.keyCode == '13') {onExcute(this)}"></td>
			<td class="context"><div ></div></td>
			<td class="context"><div >
			
			一：参数<br>
			
			id：车牌id
			bindStatus:固定0
			</div></td>
		</tr>
		
				<tr>
		<td>设置车牌号自动支付</td>
			<td class="context"><input type="text" value="api/car/update.do?id=20171102105322973841843345162244&autoPay=1" onkeydown="if (event.keyCode == '13') {onExcute(this)}"></td>
			<td class="context"><div ></div></td>
			<td class="context"><div >
			需要uid<br>
			一：参数<br>
			id：车牌id
			autoPay:0：关闭自动支付，1：打开自动支付
			</div></td>
		</tr>
		
		<tr>
		<td>车牌认证</td>
			<td class="context"><input type="text" value="api/car/auth.do?id=20171102105322973841843345162244&carPlate=赣A37486&owner=张三&carframeNumber=123&engineNumber=1233&brandModel=23435" onkeydown="if (event.keyCode == '13') {onExcute(this)}"></td>
			<td class="context"><div ></div></td>
			<td class="context"><div >
			需要uid<br>
			一：参数<br>
			id:车牌id<br>
			carPlate：车牌号<br>
			owner：车主姓名<br>
			carframeNumber：车架号码<br>
			engineNumber：发动机号<br>
			brandModel：品牌型号<br>
			</div></td>
		</tr>
		
		<tr>
		<td>查询车牌号</td>
			<td class="context"><input type="text" value="api/car/list.do" onkeydown="if (event.keyCode == '13') {onExcute(this)}"></td>
			<td class="context"><div></div></td>
			<td class="context"><div>
			需要uid<br>
			一：参数<br>

auto_pay：0：关闭自动支付，1：打开自动支付<br>

bind_time：绑定时间<br>
car_plate：车牌号<br>
certified：1：已认证，0：未认证<br>
id：车牌id<br>

			</div></td>
		</tr>
		
		<tr>
			<td></td>
			<td class="context"></td>
			<td class="context"><div ></div></td>
			<td class="context"><div></div></td>
		</tr>
		

		
		<tr>
		<td>极光推送</td>
			<td class="context"><input type="text" 
			value="jpush.do?phone=18279915667" onkeydown="if (event.keyCode == '13') {onExcute(this)}"></td>
			<td class="context"><div ></div></td>
			<td class="context"><div>
			
			一：参数<br>
			
			二：返回值<br>
			
			
			</div></td>
		</tr>
		
		
		
		<tr>
		<td>消费流水</td>
			<td class="context"><input type="text" 
			value="test/water.do" onkeydown="if (event.keyCode == '13') {onExcute(this)}"></td>
			<td class="context"><div ></div></td>
			<td class="context"><div>
			一：参数<br>		
			二：返回值<br>
			</div></td>
		</tr>
		
		<tr>
		<td>一卡通测试</td>
			<td class="context"><input type="text" 
			value="api/pay/ykt.do" onkeydown="if (event.keyCode == '13') {onExcute(this)}"></td>
			<td class="context"><div ></div></td>
			<td class="context"><div>
			一：参数<br>		
			二：返回值<br>
			</div></td>
		</tr>
		
		

</tbody>
	</table>


</body>
<script type="text/javascript">

function output(input,text){
	$(input).parent().next().find(">div").html(text);
	
	
}



function onExcute(input){
	
	
	output(input,"。。。");
	
	
	var url = $(input).val();
	
	var x = (url.indexOf("?"));
	
	if(x>-1){ var pstr = url.substring(x+1,url.length);
	
	 var durl = url.substring(0,url.indexOf("?"));}
	else {
		
		 var pstr = "";
			
		 var durl = url;
	}
	
	
	var uid = $("#uid").val();
	
	$.ajax({
		url:durl,
		data:pstr+"&debug=true"+(uid?"&uid="+uid:""),
		dataType : 'JSON',
		type:'post',
		async: false,
		success:function(data){
			
			console.log(data);
			
			output(input,JSON.stringify(data));
			
			
		}
	});
	
	

	
	
}


$(function(){
	var trs = $("table>tbody>tr");
	
	trs.each(function(i,e){
		var td = $(e).children("td:first-child")
		td.html(i+": "+td.html())
		
		
	});
	
});
/* 

var dd = {"status":0,"msg":null,"data":{"message":"获取数据成功","ts":1510882217039,"ngis":"cd08575a0eaaea319ac37b5ee30014ee","state":1,"data":[{"total":"100","id":"20170621165624638414297732951693source2","systype":1,"address":"深圳市龙岗区吉华路601号二楼","name":"前海亿车财富港","firstprice":"1.00","reformstatus":"3","longitude":"114.070729","rest":10,"latitude":"22.6403","plosoucetype":2},{"total":"100","id":"20170907190040494858415960098544source2","systype":1,"address":"深圳市宝安区新安六路8","name":"家乐福(香缤店)","firstprice":"","reformstatus":"3","longitude":"113.881183","rest":100,"latitude":"22.570205","plosoucetype":2},{"total":"100","id":"20170811104959729804848946817682source2","systype":1,"address":"深圳市宝安区新湖路24号","name":"深圳道滘渤海湾","firstprice":"","reformstatus":"3","longitude":"113.879818","rest":100,"latitude":"22.573275","plosoucetype":2},{"total":"100","id":"20170627174939828595267822863583source2","systype":1,"address":"深圳市宝安区宝源路","name":"天霸专用停车场","firstprice":"5.00","reformstatus":"3","longitude":"113.873853","rest":10,"latitude":"22.573342","plosoucetype":2},{"total":"100","id":"20170811110012292784323731656004source2","systype":1,"address":"深圳市宝安区劳动路26号","name":"劳动新村","firstprice":"","reformstatus":"3","longitude":"113.873422","rest":100,"latitude":"22.575545","plosoucetype":2},{"total":"100","id":"20170907190158374790775563384562source2","systype":1,"address":"深圳市宝安区海城路333号","name":"绝味鸭脖(西乡盐田沃尔玛店)","firstprice":"","reformstatus":"3","longitude":"113.873278","rest":100,"latitude":"22.569871","plosoucetype":2},{"total":"100","id":"20170727142530804530487072148081source2","systype":1,"address":"深圳市宝安区宝源路168号","name":"天虹地下大型停车场","firstprice":"5.00","reformstatus":"3","longitude":"113.8728665374","rest":16,"latitude":"22.5740208425","plosoucetype":2},{"total":"100","id":"20170907190304026557320087090764source2","systype":1,"address":"深圳市宝安区宝源路1090","name":"星巴克咖啡(宝安沃尔玛店)","firstprice":"","reformstatus":"3","longitude":"113.871122","rest":100,"latitude":"22.574477","plosoucetype":2},{"total":"100","id":"20170727141831979751526692282022source2","systype":1,"address":"深圳市宝安区新湖路4号","name":"平洲露天大型停车场","firstprice":"5.00","reformstatus":"3","longitude":"113.869267","rest":52,"latitude":"22.581853","plosoucetype":2},{"total":"100","id":"20170718110146651134850146618194source2","systype":1,"address":"深圳市盐田区马峦山隧道","name":"马鞍山悬崖勒马","firstprice":"5.00","reformstatus":"3","longitude":"114.306446","rest":100,"latitude":"22.618202","plosoucetype":2},{"total":9,"id":"20170707114634282386935909229391","systype":2,"name":"机场东路","firstprice":0.0,"longitude":"113.875832","rest":5,"latitude":"22.585049"},{"total":2,"id":"20171018143502064375773708425115","systype":2,"name":"盛源广停","firstprice":0.0,"longitude":"113.8752483390","rest":0,"latitude":"22.5714449222"},{"total":24,"id":"20171109155040123258771129422962","systype":2,"name":"测试","firstprice":0.0,"longitude":"112.22","rest":17,"latitude":"22.21315"},{"total":2,"id":"20171024111833802169704987877209","systype":2,"name":"李佳慧测试路段","firstprice":0.0,"longitude":"112","rest":2,"latitude":"22"}],"runtime":68}};

function t(){
	var lng=114.0199773259;
	var lat=22.6404055637;
	
	var arr = dd.data.data;
	
	
	for ( var i in arr) {
		var d = ((lng-arr[i].longitude)*(lng-arr[i].longitude))+((lat-arr[i].latitude)*(lat-arr[i].latitude));
		console.log(arr[i].id);
		console.log(d);
	}
	
	
	
} */





</script>
</html>