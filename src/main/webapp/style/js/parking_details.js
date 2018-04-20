function toll_standard(){
				layer.open({
					className:'toll_standard',
			  		content: '15分钟内免费停车，1小时内首付5元，以后每小时，加收2.5元。24小时内40元封顶。24小时规则只允许该车辆单次进出。',
			  		anim: 'up',
			  		btn: '我知道了'
				}); 
			}
			function problem_feedback(){
				var problem_feedback_con = 
				'<div class="problem-feedback-box">'
					+'<h4>反馈类型</h4>'
					+'<span class="close public-centent" onclick="layer.closeAll()"><i class="iconfont icon-iconfont54"></i></span>'
					+'<ul class="problem-feedback-con pub-flex-centent">'
						+'<li class="active pulic-line-centent pub-flex-type-1">'
							+'<span class="problem-feedback-icon public-centent"><i class="iconfont icon-tingchechang"></i></span>'
							+'<p>位置错误</p>'
						+'</li>'
						+'<li class="pulic-line-centent pub-flex-type-1">'
							+'<span class="problem-feedback-icon public-centent"><i class="iconfont icon-weitaigang"></i></span>'
							+'<p>不抬杆</p>'
						+'</li>'
						+'<li class="pulic-line-centent pub-flex-type-1">'
							+'<span class="problem-feedback-icon public-centent"><i class="iconfont icon-chongzhi"></i></span>'
							+'<p>费率错误</p>'
						+'</li>'
					+'</ul>'
//					+'<div class="problem-feedback-btn"><button>提交</button></div>'
				+'</div>'
				layer.open({
					className:'toll_standard',
			  		content: problem_feedback_con,
			  		anim: 'up',
			  		btn: ['提交', '取消'],
			  		yes:function(){
			  		 	layer.open({
					      	content: '提交成功，感谢您的反馈',
					      	time: 2,
					      	skin: 'msg'
					    });	
			  		},
					no:function(){
			  		 	layer.open({
					      	content: '取消',
					      	time: 2,
					      	skin: 'msg'
					    });	
			  		}

				}); 
			}
			
			$('body').delegate('.problem-feedback-con li','click',function(){
				$('.problem-feedback-con li').removeClass('active')
				$(this).addClass('active');
			})