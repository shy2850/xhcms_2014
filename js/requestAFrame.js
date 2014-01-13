﻿window.requestAFrame = (function () {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				function (fn) {
					return window.setTimeout(fn, 1000/60); 
				};
	})();
requestAFrame.i = 0;
$.extend({
	_timeoutQueue :{},
	addTimeout: function(k,fn,timer,times){
		fn.timer = Math.floor( (timer||200) * 60 / 1000);
		fn.times = times || Infinity;
		this._timeoutQueue[k] = fn;
	}
});
function queueTimeout(){
	for(var i in $._timeoutQueue){
		var fn = $._timeoutQueue[i];
		if( requestAFrame.i % fn.timer === 0 ){	//如果按照时间轮训到了，执行代码
			if(!fn.times--){	//如果可执行次数为0， 移除方法
				delete $._timeoutQueue[i];
			}else{
				fn();
			}
		}
	}
	requestAFrame(queueTimeout);
	requestAFrame.i = ( requestAFrame.i + 1) % (18000) ; //最高时隔5分钟
}

queueTimeout();