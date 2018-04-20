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
		<title>停车资讯</title>
		<%@ include file="../include/head.jsp"%>
		<link rel="stylesheet" href="//at.alicdn.com/t/font_365487_cp3pb9lzzra1nhfr.css" />
		<script type="text/javascript">
			$(function(){
				var context = $(".newsdetail-body").text();
				$(".newsdetail-body").html(context);//.show();
				
$("img").each(function(i,e){
					
					var src = $(e).attr("src");
					if(src.indexOf("../upload/")==0)
						$(e).attr("src","/EMIS/"+src.substring(3,src.length));
					
				});
				
				
			});
		</script>
	</head>

	<body>
		
		<main class="plr25">
			<div class="newsdetail mt20">
		    	<div class="newsdetail-head">
				
					
				</div>
				<div class="newsdetail-body" style="display: none;"><c:out value="${news.comment}" escapeXml="false"/></div>
		    </div>
		</main>
	</body>
</html>