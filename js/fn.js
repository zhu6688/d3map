//显示区宽高
function win(){
	return {
		w : $(window).width(),
		h : $(window).height()
	}
}

//判断浏览器
function browser(){
	var brow = window.navigator.userAgent.toLowerCase();
	if(/msie 8/.test(brow) || /msie 7/.test(brow) || /msie 6/.test(brow)){
		$('.wrap').html('<p style="text-align: center;line-height: 40px;">您的浏览器不支持html5,请升级浏览器！</p>')
		return false;
	}	
}

//今天的日期
function nowDate(){
	var oDate = new Date();
	var y = oDate.getFullYear();
	var m = oDate.getMonth()+1;
	var d = oDate.getDate();
	return y + '-' + two(m) + '-' + two(d); 
}

//不足10补0
function two(d){
	return d >= 10 ? d : '0' + d;
}

//判断数字的颜色
function getColor(num){
	var n = parseFloat(num);
	if(isNaN(n)){
		return 'black';
	}else{
		if(num>0){
			return 'red';
		}else if(num<0){
			return 'green';
		}
	}
}

//左上角的涨跌幅
function upDown(num){
	var upHtml = '<li>涨跌幅</li>'
				+'<li class="color1">&gt;'+ num +'</li>'
				+'<li class="color2">1~'+ num +'</li>'
				+'<li class="color3">0</li>'
				+'<li class="color4">-1~-'+ num +'</li>'
				+'<li class="color5">&lt;-'+ num +'</li>';
	
	$('#upDown').html(upHtml);	
}

//左下角的平均价
function average(average,max,min){
	var averageHtml = '<li class="aver_li">'
							+'<p class="title">平均价</p>'
							+'<p class="c_red">'+ average +'</p>'
						+'</li>'
						+'<li>'
							+'<p class="title">最高涨幅</p>'
							+'<p>北京 鞍钢</p>'
							+'<p class="c_red">'+ max +'</p>'
						+'</li>'
						+'<li class="last_border">'
							+'<p class="title">最高跌幅</p>'
							+'<p>邢台 酒钢</p>'
							+'<p class="c_green">'+ min +'</p>'
						+'</li>';
	$('#averagePrice').html(averageHtml);		
}
