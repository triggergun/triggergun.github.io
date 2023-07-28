# 开始掌握docsify

## Quick start快速掌握

It is recommended to install `docsify-cli` globally, which helps initializing and previewing the website locally.

建议全局安装“docsify cli”，这有助于在本地初始化和预览网站。

`npm i docsify-cli -g`

### Initialize(初始化)

If you want to write the documentation in the `./docs` subdirectory, you can use the `init` command.

如果要在中编写文档/docs子目录，可以使用init命令。

`docsify init ./docs`

> - 初始化后
>
> ![](image/Snipaste_2023-03-10_14-22-32.png)
>
> 

### Writing content(写内容)

After the `init` is complete, you can see the file list in the `./docs` subdirectory.

- `index.html` as the entry file
- `README.md` as the home page
- `.nojekyll` prevents GitHub Pages from ignoring files that begin with an underscore

You can easily update the documentation in `./docs/README.md`, of course you can add [more pages]

**翻译**

完成“init”后，您可以在“”中看到文件列表/docs子目录。

- `index.html`作为条目文件
- `.nojekyll`防止GitHub Pages忽略以下划线开头的文件

您可以在中轻松更新文档/docs/README.md`，当然您可以添加[更多页面]



### Preview your site(预览您的网站)

Run the local server with `docsify serve`. You can preview your site in your browser on `http://localhost:3000`.

```xquery
docsify serve docs
```

> For more use cases of `docsify-cli`, head over to the [docsify-cli documentation](https://github.com/docsifyjs/docsify-cli).

**翻译**

使用“docsify serve”运行本地服务器。您可以在浏览器中预览网站`http://localhost:3000`.

有关“docsify cli”的更多用例，请转至`[docsify cli documentation]`

### Manual initialization(手动初始化)

If you don't like `npm` or have trouble installing the tool, you can manually create `index.html`:

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta charset="UTF-8" />
    <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/npm/docsify@4/themes/vue.css"
    />
  </head>
  <body>
    <div id="app"></div>
    <script>
      window.$docsify = {
        //...
      };
    </script>
    <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
  </body>
</html>
```

**翻译**

如果您不喜欢“npm”或安装该工具时遇到问题，可以手动创建“index.html”：

#### Specifying docsify versions

- 指定文档版本

>Note that in both of the examples below, docsify URLs will need to be manually updated when a new major version of docsify is released (e.g. `v4.x.x` => `v5.x.x`). Check the docsify website periodically to see if a new major version has been released.

Specifying a major version in the URL (`@4`) will allow your site will receive non-breaking enhancements (i.e. "minor" updates) and bug fixes (i.e. "patch" updates) automatically. This is the recommended way to load docsify resources.

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/themes/vue.css" />
<script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
```

If you prefer to lock docsify to a specific version, specify the full version after the `@` symbol in the URL. This is the safest way to ensure your site will look and behave the same way regardless of any changes made to future versions of docsify.

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify@4.11.4/themes/vue.css"
/>
<script src="//cdn.jsdelivr.net/npm/docsify@4.11.4"></script>
```

**翻译**

>请注意，在下面的两个示例中，当docsify的新主要版本发布时，需要手动更新docsify URL（例如“v4.x.x”=>“v5.x.x”）。请定期检查docsify网站以查看是否发布了新的主要版本。

在URL中指定主要版本（`@4`）将允许您的网站自动接收非破坏性增强（即“次要”更新）和错误修复（即“补丁”更新）。这是加载文档资源的推荐方法。

- code

如果您希望将docsify锁定到特定版本，请在URL中的@符号后指定完整版本。这是确保您的网站外观和行为相同的最安全的方式，无论对未来版本的docsify进行任何更改。

- code

#### Manually preview your site

- 手动预览网站

If you have Python installed on your system, you can easily use it to run a static server to preview your site.

```python
# python2
cd docs && python -m SimpleHTTPServer 3000

# python3
cd docs && python -m http.server 3000
```

**翻译**

如果您的系统上安装了Python，您可以轻松地使用它运行`静态服务器`来预览站点。\

## Loading dialog(加载对话框)

If you want, you can show a loading dialog before docsify starts to render your documentation:

```html
<!-- index.html -->

<div id="app">Please wait...</div>
```

You should set the `data-app` attribute if you changed `el`:

```html
<!-- index.html -->

<div data-app id="main">Please wait...</div>

<script>
  window.$docsify = {
    el: '#main',
  };
</script>
```

Compare [el configuration](https://docsify.js.org/#/configuration?id=el).

**翻译**

如果需要，可以在docsify开始渲染文档之前显示加载对话框：

- code

如果更改了“el”，则应设置“data app”属性：

- code

比较el配置

## Writing more pages(写更多的页面)

- [More pages](https://docsify.js.org/#/more-pages?id=more-pages)

If you need more pages, you can simply create more markdown files in your docsify directory. If you create a file named `guide.md`, then it is accessible via `/#/guide`.

For example, the directory structure is as follows:

```text
.
└── docs
    ├── README.md
    ├── guide.md
    └── zh-cn
        ├── README.md
        └── guide.md
```

Matching routes

```text
docs/README.md        => http://domain.com
docs/guide.md         => http://domain.com/#/guide
docs/zh-cn/README.md  => http://domain.com/#/zh-cn/
docs/zh-cn/guide.md   => http://domain.com/#/zh-cn/guide
```

**翻译**

如果需要更多页面，只需在docsify目录中创建更多markdown文件即可。`如果`创建名为“guide.md”的文件，则可以通过“/#/guide”访问该文件。

例如，目录结构如下：

- code

匹配的路线

- code

### Sidebar(侧边栏,工具条)

![](image/Snipaste_2023-03-10_15-35-43.png)

In order to have a sidebar, you can create your own `_sidebar.md` (see [this documentation's sidebar](https://github.com/docsifyjs/docsify/blob/master/docs/_sidebar.md) for an example):

First, you need to set `loadSidebar` to **true**. Details are available in the [configuration paragraph](https://docsify.js.org/#/configuration?id=loadsidebar).

```html
<!-- index.html -->

<script>
  window.$docsify = {
    loadSidebar: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

Create the `_sidebar.md`:

```markdown
<!-- docs/_sidebar.md -->

* [Home](/)
* [Guide](guide.md)
```

You need to create a `.nojekyll` in `./docs` to prevent GitHub Pages from ignoring files that begin with an underscore.

Docsify only looks for `_sidebar.md` in the current folder, and uses that, otherwise it falls back to the one configured using `window.$docsify.loadSidebar` config.

Example file structure:

```text
└── docs/
    ├── _sidebar.md
    ├── index.md
    ├── getting-started.md
    └── running-services.md
```

**翻译**

为了有一个侧边栏，您可以创建自己的`_sidebar.md`参见本文档的侧边栏

首先，需要将loadSidebar设置为true。配置段落中提供了详细信息。

- code

创建`_sidebar.md`：

- code

您需要在中创建一个“.nojekyll”/docs`以防止GitHub Pages忽略以下划线开头的文件。

Docsify只在当前文件夹中查找“_sidebar.md”，并使用它，否则它将返回到使用“window”配置的文件夹$docsify.loadSidebar  config。

文件结构示例：

- code

### [Nested Sidebars](https://docsify.js.org/#/more-pages?id=nested-sidebars)（嵌套提要栏）

You may want the sidebar to update after navigation to reflect the current directory. This can be done by adding a `_sidebar.md` file to each folder.

`_sidebar.md` is loaded from each level directory. If the current directory doesn't have `_sidebar.md`, it will fall back to the parent directory. If, for example, the current path is `/guide/quick-start`, the `_sidebar.md` will be loaded from `/guide/_sidebar.md`.

You can specify `alias` to avoid unnecessary fallback.

```html
<script>
  window.$docsify = {
    loadSidebar: true,
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md'
    }
  }
</script>
```

You can create a `README.md` file in a subdirectory to use it as the landing page for the route.

**翻译**

您可能希望侧边栏在导航后更新以反映当前目录。这可以通过向每个文件夹添加一个“_sidebar.md”文件来完成。

`_sidebard.md`”从每个级别目录加载。如果当前目录没有`_sidebar.md`，它将返回到父目录。例如，如果当前路径是“`/guide/quick-start`”，则将从`“/guider/_sidebar.md”`加载“`_sidebar.md`”。

您可以指定“别名”以避免不必要的回退。

- code

您可以在子目录中创建一个“README.md”文件，将其用作路线的登录页。

### [Set Page Titles from Sidebar Selection](https://docsify.js.org/#/more-pages?id=set-page-titles-from-sidebar-selection)（设置页面标题从提要栏选择）

A page's `title` tag is generated from the *selected* sidebar item name. For better SEO, you can customize the title by specifying a string after the filename.

```markdown
<!-- docs/_sidebar.md -->
* [Home](/)
* [Guide](guide.md "The greatest guide in the world")
```

**翻译**

页面的“title”标记由*所选*侧边栏项目名称生成。为了更好的SEO，您可以通过在文件名后面指定字符串来自定义标题。

### [Table of Contents](https://docsify.js.org/#/more-pages?id=table-of-contents)（目录）

Once you've created `_sidebar.md`, the sidebar content is automatically generated based on the headers in the markdown files.

A custom sidebar can also automatically generate a table of contents by setting a `subMaxLevel`, compare [subMaxLevel configuration](https://docsify.js.org/#/configuration?id=submaxlevel).

```html
<!-- index.html -->

<script>
  window.$docsify = {
    loadSidebar: true,
    subMaxLevel: 2
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

### [Ignoring Subheaders](https://docsify.js.org/#/more-pages?id=ignoring-subheaders)（忽略子标题）

When `subMaxLevel` is set, each header is automatically added to the table of contents by default. If you want to ignore a specific header, add `<!-- {docsify-ignore} -->` to it.

```markdown
# Getting Started

## Header <!-- {docsify-ignore} -->

This header won't appear in the sidebar table of contents.
```

To ignore all headers on a specific page, you can use `<!-- {docsify-ignore-all} -->` on the first header of the page.

```markdown
# Getting Started <!-- {docsify-ignore-all} -->

## Header

This header won't appear in the sidebar table of contents.
```

Both `<!-- {docsify-ignore} -->` and `<!-- {docsify-ignore-all} -->` will not be rendered on the page when used.

# Custom navbar(自定义名称)

## [HTML](https://docsify.js.org/#/custom-navbar?id=html)

If you need custom navigation, you can create a HTML-based navigation bar.

Note that documentation links begin with `#/`.

```html
<!-- index.html -->

<body>
  <nav>
    <a href="#/">EN</a>
    <a href="#/zh-cn/">简体中文</a>
  </nav>
  <div id="app"></div>
</body>
```

**翻译**

如果需要自定义导航，可以创建基于HTML的导航栏。

请注意，文档链接以“#/”开头。

## Markdown

Alternatively, you can create a custom markdown-based navigation file by setting `loadNavbar` to **true** and creating `_navbar.md`, compare [loadNavbar configuration](https://docsify.js.org/#/configuration?id=loadnavbar).

```html
<!-- index.html -->

<script>
  window.$docsify = {
    loadNavbar: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<!-- _navbar.md -->

* [En](/)
* [chinese](/zh-cn/)
```

You need to create a `.nojekyll` in `./docs` to prevent GitHub Pages from ignoring files that begin with an underscore.

`_navbar.md` is loaded from each level directory. If the current directory doesn't have `_navbar.md`, it will fall back to the parent directory. If, for example, the current path is `/guide/quick-start`, the `_navbar.md` will be loaded from `/guide/_navbar.md`.

**翻译**

或者，您可以通过将“loadNavbar”设置为**true**并创建“_navbar.md”，比较loadNavbar配置，来创建基于标记的自定义导航文件

- code

您需要在中创建一个“`.nojekyll`在”/docs`以防止GitHubPages忽略以下划线开头的文件。

从每个级别目录加载`_navbar.md`。如果当前目录没有“`_navbar.md`”，它将返回到父目录。例如，如果当前路径是“`/guide/quick-start`”，则将从“`/guider/_navbar.md`”加载“`_navbar.md`”。



## Nesting(嵌套)

You can create sub-lists by indenting items that are under a certain parent.

可以通过缩进某个父项下的项来创建子列表。

```markdown
<!-- _navbar.md -->

* Getting started

  * [Quick start](quickstart.md)
  * [Writing more pages](more-pages.md)
  * [Custom navbar](custom-navbar.md)
  * [Cover page](cover.md)

* Configuration
  * [Configuration](configuration.md)
  * [Themes](themes.md)
  * [Using plugins](plugins.md)
  * [Markdown configuration](markdown.md)
  * [Language highlight](language-highlight.md)
```

renders as渲染后。

![](image/Snipaste_2023-03-10_15-52-30.png)

## Combining custom navbars with the emoji plugin(将自定义导航栏与表情符号插件相结合)

If you use the [emoji plugin](https://docsify.js.org/#/plugins?id=emoji):

```html
<!-- index.html -->

<script>
  window.$docsify = {
    // ...
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>
```

you could, for example, use flag emojis in your custom navbar Markdown file:

例如，您可以在自定义导航栏Markdown文件中使用标志emojis：[:us:, :uk:]

```markdown
<!-- _navbar.md -->

* [:us:, :uk:](/)
* [:cn:](/zh-cn/)
```

# Cover(封面)

Activate the cover feature by setting `coverpage` to **true**. See [coverpage configuration](https://docsify.js.org/#/configuration?id=coverpage).

通过将“coverpage”设置为**true**，激活封面功能。参见封面配置

## Basic usage(基本用法)

Set `coverpage` to **true**, and create a `_coverpage.md`:

将“coverpage”设置为**true**，并创建“_coverpage.md”：

```html
<!-- index.html -->

<script>
  window.$docsify = {
    coverpage: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<!-- _coverpage.md -->

![logo](_media/icon.svg)

# docsify <small>3.5</small>

> A magical documentation site generator.

- Simple and lightweight
- No statically built html files
- Multiple themes


[GitHub](https://github.com/docsifyjs/docsify/)
[Get Started](#docsify)
```

>- 
>- `[Get Started](#docsify)`:表示按钮，（）表示跳转路径
>
>

![](image/Snipaste_2023-03-10_17-22-40.png)

## Custom background(自定义背景)

The background color is generated randomly by default. You can customize the background color or a background image:

默认情况下，背景颜色是随机生成的。您可以自定义背景颜色或背景图像：

```markdown
<!-- _coverpage.md -->

# docsify <small>3.5</small>

[GitHub](https://github.com/docsifyjs/docsify/)
[Get Started](#quick-start)

<!-- background image -->

![](_media/bg.png)

<!-- background color -->

![color](#f0f0f0)
```

## Coverpage as homepage(首页封面)

Normally, the coverpage and the homepage appear at the same time. Of course, you can also separate the coverpage by [onlyCover option](https://docsify.js.org/#/configuration?id=onlycover).

通常，封面和主页同时出现。当然，您也可以通过`onlyCover选项`分隔封面

## Multiple covers(多个封面)

If your docs site is in more than one language, it may be useful to set multiple covers.

如果您的文档站点使用多种语言，设置多个封面可能会很有用。

For example, your docs structure is like this

例如，您的文档结构如下

```text
.
└── docs
    ├── README.md
    ├── guide.md
    ├── _coverpage.md
    └── zh-cn
        ├── README.md
        └── guide.md
        └── _coverpage.md
```

Now, you can set

```js
window.$docsify = {
  coverpage: ['/', '/zh-cn/']
};
```

Or a special file name或特殊文件名

```js
window.$docsify = {
  coverpage: {
    '/': 'cover.md',
    '/zh-cn/': 'cover.md'
  }
};
```



















