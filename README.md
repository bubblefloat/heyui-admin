<h1>
    <center>HeyUI-admin模板适配版</center>
</h1>

## 一、框架介绍
1. 本项目使用的是：[HeyUI-Admin](https://heyui.github.io/heyui-admin-docs/#README)框架

2. **HeyUI-Admin**是一个企业级中后台前端的解决方案，其中集成了一系列前端系统的示例以及架构处理方案。

---
## 二、安装步骤
> 使用npm下载
1. 下载hey-cli框架：
    ```
    npm install -g hey-cli
    ```

2. 安装heyui-admin框架方案
    1. 原生heyui-admin：
        ```
        git clone --depth=1 https://github.com/heyui/heyui-admin 项目名
        ```
    2. 本项目 (建议如此)：
        ```
        git clone https://github.com/bubblefloat/heyui-admin.git 项目名
        ```
3. 安装
    ```
    cd ./项目名
    npm install
    ```
4. 启动
    ```
    npm run serve
    ```
---
## 三、 其他说明
> heyui-admin文档：https://heyui.github.io/heyui-admin-docs/#README

> heyui文档：https://www.heyui.top/component/guide

1. 扩展库
    1. [Hey-utils](https://www.npmjs.com/package/hey-utils)方法库：用于判断数据类型、数值计算、数组对象转换、uuid、获取URL参数等。

    2. **R**、**G**、**Model**介绍：
        - ***Model***：js-model，前端数据模型，常用于格式化数据。如添加文章、修改文章都在data中定义了article_title字段，可以通过js-model一定义，无需重复声明。

        - ***G***：即全局变量与全局事件。如定义了G.set(‘env’, {url: ‘www.baidu.com’})，可在其他地方通过G.get(‘env’)获取。

	    - ***R***：引用 src/js/common/request 文件，该文件定义了所有前端请求方法。

2. 修改主题的方法
    1. 如果你使用的是hey-cli脚手架，可以通过修改 var.less 自定义主题。具体参数文档：https://www.heyui.top/component/themes

3. 全局变量的配置
    1. 在`hey.conf.js`中配置：(***本项目中使用了该方法***)
        ```
        global: {
            Website: [path.resolve(__dirname, 'src/js/config/website-config.js'), 'default']
        },
        ```
        vue中使用：
        ```
        data() {
    	    return {
      		    name: Website.name
    	    };
  	    }
        ```
    
    2. 使用`G全局变量`设置：(***之后可能采取此方法***)<br>
        在`js/config/heyui-config.js`中：
        ```
        import websiteConfig from './website-config';
	    …
        G.set('website', websiteConfig);
        ```
        vue中使用：
        ```
        data() {
            return {
                name: G.get('website').name
            };
  	    },
        ```

    3. 使用`Heyui-config函数`设置<br>
        在`js/config/heyui-config.js`中：
        ```
        import websiteConfig from './website-config';
        …
        HeyUI.config('website', websiteConfig);
        ```
        vue中使用：
        ```
        data() {
            return {
                name: HeyUI.getOption('website').name
            };
  	    },
        ```