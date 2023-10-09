// module.exports = {
// 	'acid': -1,
// 	'version': '4.4.8',
// 	'siteroot': 'https://gomall.wegouer.com/app/index.php',
// 	'apiroot': 'https://gomall.wegouer.com/web/index.php?_mall_id=1',
// 	'domain': 'https://gomall.wegouer.com'
// }

// H5
// let siteInfo = {
// 	   'acid': -1,
// 	   'version': '4.4.9',
// 	   'siteroot': 'https://gomall-dev.wegouer.com/web/shoproot.php',
// 	   'apiroot': 'https://gomall-dev.wegouer.com/web/shoproot.php?_mall_id=1',
// 	   'domain': 'https://gomall-dev.wegouer.com'
// };

function getSiteInfo() {
	// let siteInfo = {
	// 	'acid': -1,
	// 	'version': '4.4.9',
	// 	'siteroot': 'https://gomall.wegouer.com/web/shoproot.php',
	// 	'apiroot': 'https://gomall.wegouer.com/web/shoproot.php?_mall_id=1',
	// 	'domain': 'https://gomall.wegouer.com'
	// }
	let siteInfo = {
		'acid': -1,
		'version': '4.4.9',
		'siteroot': 'https://gomall-dev.wegouer.com/web/shoproot.php',
		'apiroot': 'https://gomall-dev.wegouer.com/web/shoproot.php?_mall_id=1',
		'domain': 'https://gomall-dev.wegouer.com'
	}

	let extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
	console.log('==========');
	console.log(extConfig);
	Object.assign(siteInfo, extConfig)
	return siteInfo;
}


module.exports = getSiteInfo();
