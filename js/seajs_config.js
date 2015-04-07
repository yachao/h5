seajs.config
({
    alias: 
    {   
        'backbone': 'base/backbone',
        'underscore' : 'base/underscore',
        'zepto' : 'base/zepto',
        'mustache' : 'base/mustache',
        'iScroll' : 'base/iscroll',
        'hammer' : 'base/hammer.jq',
        'page_control' : 'frame/page_control',
        'page' : 'frame/page',
        'scroll' : 'frame/view_scroll',
        'ua' : 'base/ua',

        'base_package' : 'lib/base_package',
        'mod_package' : 'mod/app',
    }
})

// seajs.config({
//     //开发配置
//     //base:'http://statics.spp.com/lib/',
//     base: "http://test.cn/seaJS/lib",
    
//     //别名配置
//     alias: {
//         "jquery": "jquery/jquery/1.9.1/jquery.js",
//         "knockout": "knockout/3.2.0/knockout.js"
//     },
    
//     // 路径配置
//     paths:{
//         'common':'common/src',
//         'index':'index/src'
//     },
    
//     // 变量配置 引用require('{locale}.js');
//     vars: {
//         'locale': 'zh-cn'
//     },
    
//     // 映射配置
//     map: [
//         [ 'lib/common', 'app/common' ],
//         [ 'lib/index', 'app/index' ],
//         [ /^(.*\.(?:css|js))(.*)$/i, '$1?20140710' ]
//     ],
    
//     // 预加载项
//     preload: [
//          "jquery"
//     ],
    
//     // 文件编码
//     charset: 'utf-8'
// })