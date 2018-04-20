<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="../include/taglibs.jsp"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE HTML>
<html>
	<head>
		<base href="<%=basePath%>">
		<title>泊位详情</title>
		<%@ include file="../include/head.jsp"%>
	</head>

	<body class="bg-back-f6f5f5">
		<%-- 
		<div class="parking-nearby-box public-box-model bg-back-fff">
			<div class="parking-nearby-box-left public-box-flex-1">
				<div class="parking-nearby-box-info">
					<h2 id="sectionName"></h2>
				</div>
				<div class="parking-nearby-box-address">距离：${distance}</div>

				<div class="parking-nearby-box-attr public-box-model">
					<span>总泊位: <em id="totalQty">0</em></span>
					<span>剩余泊位: <em class="f-color-orange" id="restQty">0</em></span>
				</div>
			</div>
			<div class="parking-nearby-box-right">
			<!-- 	<div class="parking-nearby-record">
					<strong>2.6万</strong>
					<em class="f-color-gray">位车友停过</em>
				</div>
				<div class="parking-nearby-navigation" onclick="navigation();" style="cursor:pointer;">
					<i class="iconfont icon-daohang"></i>导航
				</div> -->
			</div>
		</div> --%>
		
		<div class="bg-back-fff toll-standard mt15">
			<div class="toll-standard-head public-box-model">
				<h4 class="pub-flex-type-1">收费标准</h4>
			</div>
			<div class="toll-standard-con"></div>
		</div>
		<script type="text/javascript">
			var parkRule = '';
			var longitude,latitude;
			$(function(){
				var section = ${section};
				if(section && 1 == section.state)
				{
					var data = section.data;
					$("#title").text(data.sectionname);
					$("#sectionName").text(data.sectionname);
					$("#totalQty").text(data.total);
					$("#restQty").text(data.rest);
					var timePrices = data.timeprice;
					for(var i in timePrices)
					{
						var timePrice = timePrices[i];
						parkRule += '<div class="berth-group p20 bg-back-fff mt20"><div class="berth-group-title pub-flex-centent"><h5>';
						parkRule += timePrice.timeperiod+timePrice.methodname+'</h5></div>';
						parkRule += '<div class="berth-group-con"><table border="0" cellspacing="0" cellpadding="0" class="table-skin-1">';
						parkRule += '<tr><th>时间</th><th>费用</th><th>备注</th></tr>';
						if(0 == timePrice.rates.length)
						{
							parkRule += '<tr><td>'+timePrice.timeperiod+'</td><td>'+timePrice.methodname+'</td><td>'+timePrice.limit+'</td></tr>';
						}
						else
						{
							for(var j in timePrice.rates)
							{
								var rate = timePrice.rates[j];
								parkRule += '<tr><td>'+rate.time+'</td><td>'+rate.price+'</td><td>';
								if(j == timePrice.rates.length-1)
								{
									parkRule += timePrice.limit;
								}
								parkRule += '</td></tr>';
							}
						}
						parkRule += '</table></div></div>';
					}
					$(".toll-standard-con").html(parkRule);
					longitude = data.longitude;
					latitude = data.latitude;
					// $(".parking-nearby-navigation").html('<a href="nearby/route.do?longitude='+data.longitude+'&latitude='+data.latitude+'"><i class="iconfont icon-daohang"></i>导航</a>');
					
				}
				//$(".parking-nearby-box-address").text(formatDistance('${distance}'));
			});
			
			function formatDistance(d)
			{
				if(d < 1000)return d.toFixed(2)+"米";
				else return (d/1000).toFixed(2)+"千米";
			}
			
			function navigation()
			{
				// 根据浏览器定位
				var geolocation = new BMap.Geolocation();
				layer.open({
			    	type: 6,
			    	content: '加载中...',
			  		shade: 'background-color:rgba(0,0,0,0.4)',
			  		shadeClose: false
			  	});
				geolocation.getCurrentPosition(function(r){
					layer.closeAll();
					if(this.getStatus() == BMAP_STATUS_SUCCESS)
					{
	           			location.href="http://api.map.baidu.com/direction?origin="+r.latitude+","+r.longitude+"&destination="+latitude+","+longitude+"&mode=driving&region="+r.address.city+"&output=html";
					}
					else 
					{
						layer.open({content:'定位失败：'+this.getStatus(),skin:'msg',time:2});
					}        
				},{enableHighAccuracy: true}); 
			}
		</script>
	</body>
</html>