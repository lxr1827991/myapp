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
		<title>收费规则</title>
		<%@ include file="../include/head.jsp"%>
	</head>

	<body>
		
		<div class="changing-rules mt20">
			<div class="changing-rules-banner">
				<img src="style/images/changing-rules-banner.png"/>
			</div>
			
			<c:if test="${not empty chargingRules}">
				<c:forEach var="result" items="${chargingRules}">
					<div class="berth-group p20 bg-back-fff mt20">
						<div class="berth-group-title pub-flex-centent"><h5><c:out value="${result.timeperiod}"/><c:out value="${result.methodname}"/></h5></div>
						<div class="berth-group-con">
							<table border="0" cellspacing="0" cellpadding="0" class="table-skin-1">
								<tr><th>时间</th><th>费用</th><th>备注</th></tr>
								<c:choose>
									<c:when test="${empty result.rates}">
										<tr><td><c:out value="${result.timeperiod}"/></td><td><c:out value="${result.methodname}"/></td><td><c:out value="${result.limit}"/></td></tr>
									</c:when>
									<c:otherwise>
										<c:forEach var="rate" items="${result.rates}" varStatus="st">
											<tr><td><c:out value="${rate.time}"/></td><td><c:out value="${rate.price}"/></td><td><c:if test="${st.count == result.rate.size()}"><c:out value="${result.limit}"/></c:if></td></tr>
										</c:forEach>
									</c:otherwise>
								</c:choose>
							</table>
						</div>
					</div>
				</c:forEach>
			</c:if>
		</div>
	</body>
</html>
