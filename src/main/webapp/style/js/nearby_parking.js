// 百度地图API功能
	var map = new BMap.Map("allmap");       
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
	// 定义一个控件类,即function
	function ZoomControl(){
	  // 默认停靠位置和偏移量
	  this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
	  this.defaultOffset = new BMap.Size(10,10);
	}
// 通过JavaScript的prototype属性继承于BMap.Control
	ZoomControl.prototype = new BMap.Control();

	// 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
	// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
	ZoomControl.prototype.initialize = function(map){
	  // 创建一个DOM元素
	  var div = document.createElement("img");
	  // 设置样式
	  div.style.cursor = "pointer";
//	  div.style.background = "url(images/sx.png)";
	  div.style.backgroundSize="100% 100%";
 	  div.style.width = ".9rem";
 	  div.style.height = ".9rem";
 	  div.src = "style/images/sx.png";
 	  div.style.zIndex = "120";
	  // 添加DOM元素到地图中
	  map.getContainer().appendChild(div);
	  // 将DOM元素返回
	  
	 div.onclick = function(){
	  	parking_type()
	  }
	  return div;
	  

	}
	// 创建控件
	var myZoomCtrl = new ZoomControl();
	// 添加到地图当中
	map.addControl(myZoomCtrl);
	
	function parking_type(){
		var parking_screen = '<div class="parking-screen-box">'
			+'<h4>附近停车筛选</h4>'
			+'<span class="close public-centent" onclick="layer.closeAll()"><i class="iconfont icon-iconfont54"></i></span>'
			+'<ul class="parking-screen-con pub-flex-centent">'
				+'<a class="pulic-line-centent pub-flex-type-1" href="nearby/parkList.do">'
					+'<i class="iconfont icon-tingchechangshoufei "></i>'
					+'<p>停车场</p>'
				+'</a>'
				+'<a class="pulic-line-centent pub-flex-type-1">'
					+'<i class="iconfont icon-tiyuchangguan"></i>'
					+'<p>体育场馆</p>'
				+'</a>'
				+'<a class="pulic-line-centent pub-flex-type-1" href="nearby/berthList.do">'
					+'<i class="iconfont icon-mianfeitingchechang"></i>'
					+'<p>路边泊位</p>'
				+'</a>'
		+'</div>'
		layer.open({
	  		type: 1,
	  		content: parking_screen,
	  		anim: 'up',
		}); 
	}
	$(function(){
		$('body').delegate('.parking-search-input','input propertychange',function(){//给未来元素增加事件
			if($(this).val()!==''){
				$('.head-right-del').show()
			}else{
				$('.head-right-del').hide()
			}
		})
	})
	
	function del(obj){
		$('.parking-search-input').val('');
		$(obj).hide()
	}
