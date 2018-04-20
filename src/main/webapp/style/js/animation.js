$(window).load(function(){
	 setTimeout(function(){
	 	layer.closeAll();
	 },500)
});
layer.open({
  	type: 6,
  	content: '加载中...',
	shade: 'background-color: rgba(0,0,0,0.4)',
	shadeClose: false
});
