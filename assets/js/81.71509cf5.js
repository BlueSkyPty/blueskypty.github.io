(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{621:function(t,a,e){"use strict";e.r(a);var s=e(4),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("OS：Windows 10 19041.450"),e("br"),t._v("\nDocker 版本：Docker version 19.03.12, build 48a66213fe")])]),e("h2",{attrs:{id:"下载安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[t._v("#")]),t._v(" 下载安装")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.docker.com/get-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v(" 后，直接点击安装即可，安装后，按提示操作会进入 tutorial 指引")]),t._v(" "),e("h2",{attrs:{id:"docker-tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-tutorial"}},[t._v("#")]),t._v(" Docker Tutorial")]),t._v(" "),e("p",[t._v("使用以下命令即可运行官方的 Getting Started 项目的 Docker 容器：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80 docker/getting-started\n")])])]),e("ul",[e("li",[e("code",[t._v("-d")]),t._v(" 独立模式运行 detached mode (in the background)")]),t._v(" "),e("li",[e("code",[t._v("-p")]),t._v(" 端口映射")]),t._v(" "),e("li",[e("code",[t._v("docker/getting-started")]),t._v(" 镜像")])]),t._v(" "),e("p",[t._v("支持以下写法：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker run -dp "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80 docker/getting-started\n")])])]),e("p",[t._v("打开浏览器，进入 "),e("code",[t._v("localhost")]),t._v(" 即可进入官方 Getting Started 入门指引")]),t._v(" "),e("h2",{attrs:{id:"容器和容器镜像的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器和容器镜像的理解"}},[t._v("#")]),t._v(" 容器和容器镜像的理解")]),t._v(" "),e("blockquote",[e("p",[t._v("Now that you've run a container, what is a container?"),e("br"),t._v("\nSimply put, a container is simply another process on your machine that has been isolated from all other processes on the host machine."),e("br"),t._v("\n简而言之，容器只是计算机上的另一个进程，与主机上的所有其他进程隔离。"),e("br"),t._v("\nThat isolation leverages kernel namespaces and cgroups, features that have been in Linux for a long time."),e("br"),t._v("\n这种隔离利用了 Linux 上已有很长时间的 kernel namespaces 和 cgroups。"),e("br"),t._v("\nDocker has worked to make these capabilities approachable and easy to use.")])]),t._v(" "),e("p",[t._v("我的理解是，Docker 容器可以类比于一台独立的主机，只不过是在一台主机上用不同的进程模拟这种隔离的环境。")]),t._v(" "),e("blockquote",[e("p",[t._v("When running a container, it uses an isolated filesystem."),e("br"),t._v("\n运行容器时，使用的是隔离的文件系统。"),e("br"),t._v("\nThis custom filesystem is provided by a container image."),e("br"),t._v("\n而这个自定义的文件系统就是由容器镜像提供。"),e("br"),t._v("\nSince the image contains the container's filesystem, it must contain everything needed to run an application - all dependencies, configuration, scripts, binaries, etc."),e("br"),t._v("\n既然镜像包含容器的文件系统，它必须包含运行应用程序所需的一切-所有依赖项，配置，脚本，二进制文件等。"),e("br"),t._v("\nThe image also contains other configuration for the container, such as environment variables, a default command to run, and other metadata."),e("br"),t._v("\n镜像还包含容器的其他配置，例如环境变量，要运行的默认命令和其他元数据。")])]),t._v(" "),e("p",[t._v("Docker 容器镜像可以类比于主机的 OS 镜像，用于安装所需的一切。")]),t._v(" "),e("h2",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),e("p",[t._v("示例")]),t._v(" "),e("div",{staticClass:"language-dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("12"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基本运行环境")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /app                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行基本路径")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" . .                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" yarn install "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("production   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建容器镜像时执行的命令")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/index.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动容器镜像时执行的命令")]),t._v("\n")])])]),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),e("ul",[e("li",[t._v("构建镜像")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker build "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-t IMAGE_NAME:TAG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" DOCKERFILE "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" URL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `-t` Name and optionally a tag in the 'name:tag' format")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如：docker build -t getting-started .")]),t._v("\n")])])]),e("ul",[e("li",[t._v("运行容器")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker run "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-dp HOST_PORT:CONTAINER_PORT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" IMAGE_NAME\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `-p` format: ip:hostPort:containerPort | ip::containerPort | hostPort:containerPort | containerPort")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以为范围 xxx-xxx:xxx-xxx/tcp")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如：docker run -dp 80:80 getting-started")]),t._v("\n")])])]),e("ul",[e("li",[t._v("查看当前运行容器")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n")])])]),e("ul",[e("li",[t._v("停止容器")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 docker ps 获取 CONTAINER_ID")]),t._v("\ndocker stop CONTAINER_ID\n")])])]),e("ul",[e("li",[t._v("删除容器")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以添加 -f 参数")]),t._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" CONTAINER_ID\n")])])]),e("ul",[e("li",[t._v("分享镜像")])]),t._v(" "),e("p",[t._v("首先在 "),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),e("OutboundLink")],1),t._v(" 创建仓库")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果未登录需要先登录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker login -u USER_NAME")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标记镜像名称")]),t._v("\ndocker tag IMAGE_NAME USER_NAME/IMAGE_NAME\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到 Docker Hub")]),t._v("\ndocker push USER_NAME/IMAGE_NAME\n")])])]),e("ul",[e("li",[t._v("容器中执行命令")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" CONTAILNER_ID COMMAND\n")])])]),e("h2",{attrs:{id:"数据持久化-container-volumes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据持久化-container-volumes"}},[t._v("#")]),t._v(" 数据持久化 Container Volumes")]),t._v(" "),e("p",[t._v("类似于共享文件夹，在不同的容器中挂载，修改同步到主机")]),t._v(" "),e("ul",[e("li",[t._v("创建 volume")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker volume create VOLUME_NAME\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker volume cerete todo-db")]),t._v("\n")])])]),e("ul",[e("li",[t._v("运行容器（with volume）")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker run "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-dp HOST_PORT:CONTAINER_PORT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -v VOLUME_NAME:CONTAINER_MOUNT_PATH IMAGE_NAME\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started")]),t._v("\n")])])]),e("h2",{attrs:{id:"play-with-docker-在线-docker-沙盒环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#play-with-docker-在线-docker-沙盒环境"}},[t._v("#")]),t._v(" Play with Docker（在线 Docker 沙盒环境）")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://labs.play-with-docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Play with Docker"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker run -dp xxx:xxx USER_NAME/IMAGE_NAME\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);