/*在youhost替换你的域名，需要有https协议才可以正常使用 */


function getSiteInfo() {
	let siteInfo = {
		'version': '4.5.0',
    'siteroot': 'https://youhost/web/shoproot.php',
    
    'apiroot': 'https://youhost/web/shoproot.php?_mall_id=#',
    /*id=# "#"替换成你创建的商城ID*/
		'domain': 'https://youhost'
	}

	let extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
	console.log(extConfig);
	Object.assign(siteInfo, extConfig)
	return siteInfo;
}
module.exports = getSiteInfo();