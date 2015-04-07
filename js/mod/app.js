define('mod/app', ['base_package'], function(require, exports){
	var $ = require('zepto');

	alert($('#wrap').html());
});