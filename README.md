### template

基于deno 基础框架的template库

#### 安装

* 安装

```
  deno add jsr:@dowell/template
```
* 修改入口 index.html文件

```
  
<!-- Include Handlebars from a CDN -->
<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>

```

* 开发

```
    import Handlebars from "dowell/template"
  // compile the template
  var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
  // execute the compiled template and print the output to the console
  console.log(template({ doesWhat: "rocks!" }));
```


#### 关于

* 相关库

```
    https://github.com/handlebars-lang/handlebars.js

```



