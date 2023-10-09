# opmall-xcx

## 介绍说明：

使用小程序开发工具进行使用

只需要修改根目录下面的:siteinfi.js文件对应自己的小程序的域名

根据自己电脑系统下载对于的小程序开发工具：

[微信开发者工具下载地址与更新日志 | 微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)



根据提示就可以运行了
![20231009170139.jpg](\docs\img\20231009170139.jpg)



```
'siteroot': 'https://youhost/web/shoproot.php',   
'apiroot': 'https://youhost/web/shoproot.php?_mall_id=#',
    /*id=# "#"替换成你创建的商城ID*/
'domain': 'https://youhost'
```



修改小程序appid在根目录文件project.config.json/或者在小程序开发者工具中进行修改

```
"appid": "#####",
```