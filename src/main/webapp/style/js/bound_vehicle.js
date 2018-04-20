sf();
var nVehicleIdLength = $(".vehicle-id>li").length;//获取需要输入的车牌号的位数
$("body").delegate(".plateKeyboardUl>li>a", "click", function () {
	var _cur_class = $(".vehicle-id > .active");
	var _cur_index = $(".vehicle-id > .active").index();
	console.log(_cur_index);
	if (!$(this).hasClass("del_vehicle_id")) {
		var qu = $(this).text();
		_cur_class.text(qu);
		_cur_class.removeClass("active").next().addClass("active");
	} else {
		_cur_class.text("");
		if (_cur_index != 0) {
			_cur_class.removeClass("active").prev().addClass("active");
		}
	}
	var _index = $(".vehicle-id li.active").index();
	if (_index > 0) {
		cp();
	} else {
		sf();
	}
	var carPlate = "";
	$(".vehicle-id li").each(function () {
		carPlate += $(this).text();
	});
	if (carPlate.length == nVehicleIdLength) {
		$("input[name='carPlate']").val(carPlate);
	}
});
$(".vehicle-id>li").on("click", function () {
	$this = $(this);
	var nIndex = $this.index();
	$(".vehicle-id>li").removeClass("active");
	$this.addClass("active");
	if (nIndex === 0) {
		sf();
	} else {
		cp();
	}
});
function sf() {
	var sf =  //地区 
	"<div class=\"plateKeyboard-end\" onclick=\"complete()\">\u5b8c\u6210</div>" + "<ul class=\"plateKeyboardUl\">" + "<li>" + "<a href=\"javascript:;\">\u4eac</a>" + "<a href=\"javascript:;\">\u6caa</a>" + "<a href=\"javascript:;\">\u9102</a>" + "<a href=\"javascript:;\">\u6e58</a>" + "<a href=\"javascript:;\">\u5ddd</a>" + "<a href=\"javascript:;\">\u6e1d</a>" + "<a href=\"javascript:;\">\u7ca4</a>" + "<a href=\"javascript:;\">\u95fd</a>" + "<a href=\"javascript:;\">\u664b</a>" + "<a href=\"javascript:;\">\u9ed1</a>" + "</li>" + "<li>" + "<a href=\"javascript:;\">\u6d25</a>" + "<a href=\"javascript:;\">\u6d59</a>" + "<a href=\"javascript:;\">\u8c6b</a>" + "<a href=\"javascript:;\">\u8d63</a>" + "<a href=\"javascript:;\">\u8d35</a>" + "<a href=\"javascript:;\">\u9752</a>" + "<a href=\"javascript:;\">\u743c</a>" + "<a href=\"javascript:;\">\u5b81</a>" + "<a href=\"javascript:;\">\u5409</a>" + "<a href=\"javascript:;\">\u8499</a>" + "</li>" + "<li>" + "<a href=\"javascript:;\">\u5180</a>" + "<a href=\"javascript:;\">\u82cf</a>" + "<a href=\"javascript:;\">\u7696</a>" + "<a href=\"javascript:;\">\u6842</a>" + "<a href=\"javascript:;\">\u4e91</a>" + "<a href=\"javascript:;\">\u9655</a>" + "<a href=\"javascript:;\">\u7518</a>" + "<a href=\"javascript:;\">\u85cf</a>" + "<a href=\"javascript:;\">\u65b0</a>" + "<a href=\"javascript:;\">\u8fbd</a>" + "</li>" + "<li>" + "<a href=\"javascript:;\">\u9c81</a>" + "<a class=\"del_vehicle_id\">\u2190</a>" + "</li>" + "</ul>" + "</div>";
	$(".bd").html(sf);
}
function cp() {
	var cp = "<div class=\"plateKeyboard-end\" onclick=\"complete()\">\u5b8c\u6210</div>" + "<ul class=\"plateKeyboardUl\">" + "<li>" + "<a class=\"\">0</a>" + "<a class=\"\">1</a>" + "<a class=\"\">2</a>" + "<a class=\"\">3</a>" + "<a class=\"\">4</a>" + "<a class=\"\">5</a>" + "<a class=\"\">6</a>" + "<a class=\"\">7</a>" + "<a class=\"\">8</a>" + "<a class=\"\">9</a>" + "</li>" + "<li>" + "<a class=\"\">Q</a>" + "<a class=\"\">W</a>" + "<a class=\"\">E</a>" + "<a class=\"\">R</a>" + "<a class=\"\">T</a>" + "<a class=\"\">Y</a>" + "<a class=\"\">U </a>" + "<a class=\"gray\">I</a>" + "<a class=\"gray\">O</a>" + "<a class=\"\">P</a>" + "</li>" + "<li>" + "<a class=\"\">A</a>" + "<a class=\"\">S</a>" + "<a class=\"\">D</a>" + "<a class=\"\">F</a>" + "<a class=\"\">G</a>" + "<a class=\"\">H</a>" + "<a class=\"\">J</a>" + "<a class=\"\">K</a>" + "<a class=\"\">L</a>" + "<a class=\"\">\u6fb3</a>" + "</li>" + "<li>" + "<a class=\"\">Z</a>" + "<a class=\"\">X</a>" + "<a class=\"\">C</a>" + "<a class=\"\">V</a>" + "<a class=\"\">B</a>" + "<a class=\"\">N</a>" + "<a class=\"\">M</a>" + "<a class=\"\">\u6e2f</a>" + "<a class=\"del_vehicle_id\">\u2190</a>" + "</li>" + "</ul>" + "</div>";
	$(".bd").html(cp);
}
function complete() {
	$(".bd").html("");
}