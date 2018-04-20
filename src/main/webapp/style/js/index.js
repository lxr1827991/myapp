$(function(){
	//搜索弹窗
		var search_con =  
		'<div class="pulic-header-box-1 bg-back-fff">'
			+'<div class="head-warp-1 public-box-model public-model-align-centent">'
				+'<span class="head-left-warp search-head"><a class="iconfont icon-jiantou-l" onclick="layer.closeAll()"></a></span>'
			   	+'<div class="parking-search-warp public-box-flex-1">'
		   			+'<div class="parking-search-content public-box-flex-1">'
				   		+'<input type="text" class="public-box-flex-1 parking-search-input" placeholder="请输入停车场名称、地点">'
				   		+'<span class="head-right-warp">'
				   			+'<i class="iconfont icon-sousuo1"></i>'
				   		+'</span>'
				   		+'<span class="head-right-del" onclick="del(this)">'
				   			+'<i class="iconfont icon-cuowu1"></i>'
				   		+'</span>'
			   		+'</div>'
			   	+'</div>'
			+'</div>'
		+'</div>'
		+'<div class="bg-back-fff">'
			+'<div class="parking-search">'
				+'<div class="search-con">'
						+'<a class="public-box-model" href="nearby_parking.html">'
							+'<div class="address-left public-model-align-centent"><i class="iconfont icon-fujin1"></i></div>'
							+'<div class="address-con public-box-flex-1"><h4>金悦凯庭酒店停车场</h4><p class="f-color-gray">南昌市青云谱区</p></div>'
							+'<div class="address-right public-model-align-centent"><i class="iconfont icon-jiantou-r"></i></div>'
						+'</a>'
						+'<a class="public-box-model" href="nearby_parking.html">'
							+'<div class="address-left public-model-align-centent"><i class="iconfont icon-fujin1"></i></div>'
							+'<div class="address-con public-box-flex-1"><h4>金悦凯庭酒店停车场</h4><p class="f-color-gray">南昌市青云谱区</p></div>'
							+'<div class="address-right public-model-align-centent"><i class="iconfont icon-jiantou-r"></i></div>'
						+'</a>'
						+'<a class="public-box-model" href="nearby_parking.html">'
							+'<div class="address-left public-model-align-centent"><i class="iconfont icon-fujin1"></i></div>'
							+'<div class="address-con public-box-flex-1"><h4>金悦凯庭酒店停车场</h4><p class="f-color-gray">南昌市青云谱区</p></div>'
							+'<div class="address-right public-model-align-centent"><i class="iconfont icon-jiantou-r"></i></div>'
						+'</a>'
				+'</div>'
			+'</div>'
		+'</div>'
	$('#parking-search').on('click',function(){
		layer.open({
	  		type: 1,
	  		content: search_con,
	  		anim: 'up',
	  		className:'bg-back-f6f5f5',
	  		style: 'position:fixed; left:0; top:0; right:0;bottom:0;width:100%; height:100%; border: none; -webkit-animation-duration: .5s; animation-duration: .5s;'
		});
	})
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
function del_search_con(){
	
}
