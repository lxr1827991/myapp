	// 百度地图API功能
			var map = new BMap.Map("nearby-allmap");       
			map.centerAndZoom(new BMap.Point(115.89352755,28.689578),13);
			
			var opts = {offset: new BMap.Size(10, 70)}    
			map.addControl(new BMap.ScaleControl(opts));
			
			var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL,offset: new BMap.Size(10, 70),anchor:BMAP_ANCHOR_TOP_RIGHT }    
			map.addControl(new BMap.NavigationControl(opts));


			//创建停车场图标
			var tcc = new BMap.Point(115.89352755,28.689578);
			var tccMyIcon = new BMap.Icon("style/images/icon_berth.png", new BMap.Size(17,20));
			var tccMarker2 = new BMap.Marker(tcc,{icon:tccMyIcon});  // 创建标注
			//map.addOverlay(tccMarker2);              // 将标注添加到地图中
			

	
			//创建泊位图标
			var bw = new BMap.Point(115.905766,28.709095);
			var bwMyIcon = new BMap.Icon("style/images/icon_parking_lot.png", new BMap.Size(17,20));
			var bwMarker2 = new BMap.Marker(bw,{icon:bwMyIcon});  // 创建标注
			//map.addOverlay(bwMarker2); 

			
			//创建我的位置图标
			var address = new BMap.Point(115.89352755,28.698536);
			var addressMyIcon = new BMap.Icon("style/images/icon_my_location.png", new BMap.Size(17,22));
			var addressMarker2 = new BMap.Marker(address,{icon:addressMyIcon});  // 创建标注
			//map.addOverlay(addressMarker2); 
			
			//停车场弹出
			var optsx = "<h3 class='map_info_title'>金悦凯庭酒店停车场</h3><div class='map_info_con public-box-model'><span class='map_info_address pub-flex-type-1'>距离：2.4KM</span><a class='map_info_details' href='parking_lot/details.html'>查看详情 ></a></div>" 
			var infoWindow = new BMap.InfoWindow(optsx);  // 创建信息窗口对象 
			
			tccMarker2.addEventListener("click", function(){
				map.openInfoWindow(infoWindow,tcc); //开启信息窗口
			});
			
			//泊位弹出
			var bwBody = "<h3 class='map_info_title'>解放西路路段</h3><div class='map_info_con public-box-model'><span class='map_info_address pub-flex-type-1'>距离：2.4KM</span><a class='map_info_details' href='berth/details.html'>查看详情 ></a></div>"  
			var bwinfoWindow = new BMap.InfoWindow(bwBody);  // 创建信息窗口对象 
			bwMarker2.addEventListener("click", function(){
				map.openInfoWindow(bwinfoWindow,bw); //开启信息窗口
			});
			
			//测试作用
//			map.addEventListener("click",function(e){
//				console.log(e.point.lng + "," + e.point.lat);
//			});

			function ZoomControl(){
			  // 默认停靠位置和偏移量
			  this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
			  this.defaultOffset = new BMap.Size(10,150);
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
		 	  div.style.width = "40px";
		 	  div.style.height = "40px";
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
						+'<a class="pulic-line-centent pub-flex-type-1" id="screen_parking_lot">'
							+'<i class="iconfont icon-tingchechangshoufei"></i>'
							+'<p>停车场</p>'
						+'</a>'
						+'<a class="pulic-line-centent pub-flex-type-1" id="screen_sports">'
							+'<i class="iconfont icon-tiyuchangguan"></i>'
							+'<p>体育场馆</p>'
						+'</a>'
						+'<a class="pulic-line-centent pub-flex-type-1" id="screen_berth">'
							+'<i class="iconfont icon-mianfeitingchechang"></i>' 
							+'<p>路边泊位</p>'
						+'</a>' 
					+'</ul>'
				layer.open({
			  		type: 1,
			  		content: parking_screen,
			  		anim: 'up',
				}); 
			}
				$(function(){
					$('body').delegate('#screen_berth','click',function(){//给未来元素增加事件
						model.filter = "berth";
						refMap();
					});
					$('body').delegate('#screen_parking_lot','click',function(){//给未来元素增加事件
						model.filter = "park";
						refMap();
					});	
					$('body').delegate('#screen_sports','click',function(){//给未来元素增加事件
						model.filter = "sports";
						refMap();
					});
					
					
				})
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
	
			$('body').delegate('.parking-screen-con a','click',function(){
				$('.parking-screen-con a').removeClass('active')
				$(this).addClass('active');
				layer.closeAll()
			}) 

//			$('.nearby-allmap-more').on('click',function(){
//				$('.public-foorposition').css('z-index','19961015')
//				var a = 
//				'<div class="crumbs-address">'
//					+'<i class="iconfont icon-sousuo1"></i>江西省南昌市青云谱区解放西路220号'
//				+'</div>'
//				+'<div class="main-group-content parking-nearby-warp">'
//					+'<a class="parking-nearby-box public-box-model" href="parking_lot/details.html">'
//						+'<div class="parking-nearby-box-left public-box-flex-1">'
//							+'<div class="parking-nearby-box-info">'
//								+'<h2>金悦凯廷酒店停车场<span>2.4KM</span></h2>'
//							+'</div>'
//							+'<div class="parking-nearby-box-address">南昌市解放西路226号金悦凯庭酒店</div>'
//	
//							+'<div class="parking-nearby-box-attr public-box-model">'
//								+'<span>首价: <em class="f-color-orange">5元/小时</em></span>'
//								+'<span>空闲车位: <em class="f-color-orange">74</em></span>'
//								+'<span>露天</span>'
//							+'</div>'
//						+'</div>'
//						+'<div class="parking-nearby-box-right">'
//							+'<div class="parking-nearby-record">'
//								+'<strong>2.6万</strong>'
//								+'<em class="f-color-gray">位车友停过</em>'
//							+'</div>'
//							+'<div class="parking-nearby-navigation">'
//								+'<i class="iconfont icon-daohang"></i>导航'
//							+'</div>'
//						+'</div>'
//					+'</a>'
//					+'<a class="parking-nearby-box public-box-model" href="parking_lot/details.html">'
//						+'<div class="parking-nearby-box-left public-box-flex-1">'
//							+'<div class="parking-nearby-box-info">'
//								+'<h2>金悦凯廷酒店停车场<span>2.4KM</span></h2>'
//							+'</div>'
//							+'<div class="parking-nearby-box-address">南昌市解放西路226号金悦凯庭酒店</div>'
//	
//							+'<div class="parking-nearby-box-attr public-box-model">'
//								+'<span>首价: <em class="f-color-orange">5元/小时</em></span>'
//								+'<span>空闲车位: <em class="f-color-orange">74</em></span>'
//								+'<span>露天</span>'
//							+'</div>'
//						+'</div>'
//						+'<div class="parking-nearby-box-right">'
//							+'<div class="parking-nearby-record">'
//								+'<strong>2.6万</strong>'
//								+'<em class="f-color-gray">位车友停过</em>'
//							+'</div>'
//							+'<div class="parking-nearby-navigation">'
//								+'<i class="iconfont icon-daohang"></i>导航'
//							+'</div>'
//						+'</div>'
//					+'</a>'
//					+'<a class="parking-nearby-box public-box-model" href="parking_lot/details.html">'
//						+'<div class="parking-nearby-box-left public-box-flex-1">'
//							+'<div class="parking-nearby-box-info">'
//								+'<h2>金悦凯廷酒店停车场<span>2.4KM</span></h2>'
//							+'</div>'
//							+'<div class="parking-nearby-box-address">南昌市解放西路226号金悦凯庭酒店</div>'
//	
//							+'<div class="parking-nearby-box-attr public-box-model">'
//								+'<span>首价: <em class="f-color-orange">5元/小时</em></span>'
//								+'<span>空闲车位: <em class="f-color-orange">74</em></span>'
//								+'<span>露天</span>'
//							+'</div>'
//						+'</div>'
//						+'<div class="parking-nearby-box-right">'
//							+'<div class="parking-nearby-record">'
//								+'<strong>2.6万</strong>'
//								+'<em class="f-color-gray">位车友停过</em>'
//							+'</div>'
//							+'<div class="parking-nearby-navigation">'
//								+'<i class="iconfont icon-daohang"></i>导航'
//							+'</div>'
//						+'</div>'
//					+'</a>'
//				+'</div>'
//				layer.open({
//				  type: 1,
//				  content: a,
//				  anim: 'up',
//
//				  className:'nearby-popup',
//				  style: 'position:fixed; left:0; bottom:0; width:100%; height:60%; border: none; -webkit-animation-duration: .5s; animation-duration: .5s;'
//				});
//			})


$('.icon-search').on('click',function(){
	if($(this).find('.iconfont').hasClass('icon-liebiao1')){
		$('#nearby-allmap').hide();//地图
		$('.search-list').show();
		$(this).find('.iconfont').attr('class','iconfont icon-ditu3');

	}else{
		$('#nearby-allmap').show();//地图
		$('.search-list').hide();
		$(this).find('.iconfont').attr('class','iconfont icon-liebiao1');
	}
})

				
		function mainHeight(){
			var nBodyHight = $(window).height(),
			nHeadHight = $('.head-warp-2').height(),
			nFoorHight = $('.public-foorposition-warp').height(),
			nMainHeight = nBodyHight-nHeadHight-nFoorHight 
			$('#nearby-allmap').height(nMainHeight)	 
			console.log(nBodyHight-nHeadHight-nFoorHight+'-'+nBodyHight+'-'+nHeadHight+'-'+nFoorHight)
		}
		mainHeight()
//			$(window).resize(function() {
////				var nBodyHight = $(window).height(),
////				nHeadHight = $('.head-warp-2').height(),
////				nFoorHight = $('.public-foorposition-warp').height(),
////				nMainHeight = nBodyHight-nHeadHight-nFoorHight 
////				$('#nearby-allmap').height(nMainHeight);
////				console.log($('.public-foorposition-warp').height())
////			var nBodyHight = $(window).height(),
////			nHeadHight = $('.head-warp-2').height(),
////			nFoorHight = $('.public-foorposition-warp').height(),
////			nMainHeight = nBodyHight-nHeadHight-nFoorHight 
////			$('#nearby-allmap').height(nMainHeight)	 
//console.log($('.public-foorposition-warp').height())
//			});			