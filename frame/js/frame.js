(function($){
window.isLocal = !( location.host && /(news\.cn)|(66\.(11)|(12))/.test(location.host) );

var conf = 	
{
	'msg':{
		navLine: '<a href="javascript:void(0);">站内信</a>',
		URL : (isLocal ? {
				groups : "json/groups.json",
				send_lists: "json/msgList.json",
				receive_lists: "json/msgList.json",
				recycle_lists: "json/msgList.json"
			} : {
				groups : "json/groups.json",
				send_lists: "json/msgList.json",
				receive_lists: "json/msgList.json",
				recycle_lists: "json/msgList.json"
			})
	},
	"clmConfigur":{
 		URL : (isLocal ? {
 				clmConfigur: "json/list-collocate.json"
	 		}:{
	 			clmConfigur: "json/list-collocate.json"
	 		})
	},
	"siteConfigur":{
 		URL : (isLocal ? {
 				siteConfigur: "json/list-sites.json"
	 		}:{
	 			siteConfigur: "json/list-sites.json"
	 		})
	},
	'newsClassify':{        //start
		URL : (isLocal ? {
				newsClassify : "json/site-config.json"
				// newsDelete : "json/site-config.json",
				// newsMoveUp : "json/site-config.json",
				// newsMoveDown : "json/site-config.json",
				// newsTop : "json/site-config.json"
			} : {
				newsClassify : "json/site-config.json"
				// newsDelete : "json/site-config.json",
				// newsMoveUp : "json/site-config.json",
				// newsMoveDown : "json/site-config.json",
				// newsTop : "json/site-config.json"
			})
	},
	'conClassifyConf':{      
		URL : (isLocal ? {
				conClassifyConf : "json/site-config.json"
				// conDelete : "json/site-config.json",
				// conMoveUp : "json/site-config.json",
				// conMoveDown : "json/site-config.json",
				// conTop : "json/site-config.json"
			} : {
				conClassifyConf : "json/site-config.json"
				// conDelete : "json/site-config.json",
				// conMoveUp : "json/site-config.json",
				// conMoveDown : "json/site-config.json",
				// conTop : "json/site-config.json"
			})
	},
	'columnModelConf':{
		URL : (isLocal ? {
				columnModelConf : "json/list-model.json",
				columnDelete : "json/list-model.json",
				columnMoveUp : "json/list-model.json",
				columnMoveDown : "json/list-model.json",
				columnTop : "json/list-model.json"
			} : {
				columnModelConf : "json/list-model.json",
				columnDelete : "json/list-model.json",
				columnMoveUp : "json/list-model.json",
				columnMoveDown : "json/list-model.json",
				columnTop : "json/list-model.json"
			})
	},
	'letterContent':{
		URL:(isLocal?{
			letterContent:"json/letter-cont.json"
		}:{
			letterContent:"json/letter-cont.json"
		})
	}             //end

};

$('<style id="css-style-switch"></div>').appendTo( $('body') );

$.initFrame = function(key){
	var _this = conf[key];
	if( _this ){
		if( window.top != window ){
			if( _this.navLine ) {
				$(".mainHead",top.document).html( _this.navLine );
			}
		}
	}
	return _this;
};

if( window.top != window ){
	require(['requestAFrame'],function(R){
		R.addTimeout('css-style',function(){
			//如果父标签的自定义样式没有加载成功，继续监听
		},200,Infinity,function(){
			var cssTxt = $("#css-style-switch",top.document).html();
			if( !!cssTxt ){
				var css = $('<style id="css-style-switch">'+ cssTxt + '</div>');
				$('#css-style-switch').replaceWith(css);
			}
			return !!cssTxt;
		});
	});	
}

})(jQuery);