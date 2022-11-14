(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{332:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"svn安装使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#svn安装使用"}},[s._v("#")]),s._v(" SVN安装使用")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#flag"}},[s._v("Flag")])]),t("li",[t("a",{attrs:{href:"#linux安装"}},[s._v("Linux安装")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"flag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[s._v("#")]),s._v(" Flag")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/topics/subversion",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/topics/subversion"),t("OutboundLink")],1)])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/apache/subversion",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/apache/subversion"),t("OutboundLink")],1),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://subversion.apache.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://subversion.apache.org"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("windows服务端 "),t("a",{attrs:{href:"https://www.visualsvn.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.visualsvn.com"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://tortoisesvn.net/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://tortoisesvn.net/downloads.html"),t("OutboundLink")],1)])])])]),s._v(" "),t("blockquote",[t("p",[s._v("按装"),t("code",[s._v("VisualSVN")]),s._v("后客户端使用报错："),t("code",[s._v("执行上下文错误: 由于目标计算机积极拒绝，无法连接。")]),s._v("，需要在"),t("code",[s._v("服务")]),s._v("列表中找到相关服务 ->\n右键打开属性 -> 点击登录页签修改"),t("code",[s._v("登录身份")]),s._v("为"),t("code",[s._v("本地系统账户")]),s._v(" -> 点击常规页签修改"),t("code",[s._v("启动类型")]),s._v("为"),t("code",[s._v("自启动")]),s._v("，再点击启动")])]),s._v(" "),t("ul",[t("li",[s._v("Edge：RESTful API "),t("a",{attrs:{href:"https://www.collab.net/downloads/subversion",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.collab.net/downloads/subversion"),t("OutboundLink")],1),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://sharpsvn.open.collab.net",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://sharpsvn.open.collab.net"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_52588152/article/details/111659773",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何在windows系统下搭建SVN服务器"),t("OutboundLink")],1)])])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.wandisco.com/source-code-management/subversion",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.wandisco.com/source-code-management/subversion"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://sliksvn.com/pub",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://sliksvn.com/pub"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/jenkinsci/subversion-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/jenkinsci/subversion-plugin"),t("OutboundLink")],1)])]),s._v(" "),t("ul",[t("li",[s._v("SVN教程 "),t("a",{attrs:{href:"https://svnbucket.com/posts",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://svnbucket.com/posts"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/justry_deng/article/details/82259470",target:"_blank",rel:"noopener noreferrer"}},[s._v("TortoiseSVN打分支、合并分支、切换分支"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SVN不同分支，进行比对")]),s._v("\nsvn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(":1323\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取所有SVN提交作者用户名的列表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://stackoverflow.com/questions/2494984/how-to-get-a-list-of-all-subversion-commit-author-usernames")]),s._v("\nsvn log "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--quiet")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^r/ {print $3}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v("\nsvn log "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--quiet")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^r"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $3}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("选中要比对的一个分支，"),t("kbd",[s._v("Shift")]),s._v("+右键+选中"),t("code",[s._v("TorsoiseSVN")]),s._v(" -> "),t("code",[s._v("diff with url")]),s._v("，然后填入另外一个要比对的分支url即可")])]),s._v(" "),t("h2",{attrs:{id:"linux安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux安装"}},[s._v("#")]),s._v(" Linux安装")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查已安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" subversion\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" subversion\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已安装版本")]),s._v("\nsvnserve "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])])]),t("p",[t("strong",[s._v("创建代码库")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立SVN版本库目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /home/svn/svnrepos/test\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建SVN版本库")]),s._v("\nsvnadmin create /home/svn/svnrepos/test\n")])])]),t("blockquote",[t("p",[s._v("执行上面的命令后，自动建立"),t("code",[s._v("svndata")]),s._v("库，\n"),t("code",[s._v("/home/svn/svnrepos/test")]),s._v("文件夹包含了"),t("code",[s._v("conf")]),s._v("、"),t("code",[s._v("db")]),s._v("、"),t("code",[s._v("format")]),s._v("、"),t("code",[s._v("hooks")]),s._v("、"),t("code",[s._v("locks")]),s._v("、"),t("code",[s._v("README.txt")]),s._v("等文件，说明一个SVN库已经建立。")])]),s._v(" "),t("p",[t("strong",[s._v("配置代码库")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入`conf`文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/svn/svnrepos/test/conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置用户密码`passwd`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n")])])]),t("ul",[t("li",[s._v("在"),t("code",[s._v("[users]")]),s._v("节点下添加以下内容(账户=密码)")])]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 账户=密码\n52ztf.cn=52ztf.cn\n")])])]),t("ul",[t("li",[s._v("配置权限控制"),t("code",[s._v("authz")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" authz\n")])])]),t("blockquote",[t("p",[s._v("目的是设置哪些用户可以访问哪些目录，向"),t("code",[s._v("authz")]),s._v("文件末尾追加以下内容：")]),s._v(" "),t("blockquote",[t("p",[s._v("设置"),t("code",[s._v("[/]")]),s._v("代表根目录下所有的资源,"),t("code",[s._v("rw")]),s._v("为读和写，"),t("code",[s._v("*")]),s._v("代表所有用户,先按"),t("code",[s._v("shift+g")]),s._v("跳到末尾，然后添加")])])]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[/]\n52ztf.cn=rw\n*=r\n")])])]),t("ul",[t("li",[s._v("配置服务"),t("code",[s._v("svnserve.conf")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" svnserve.conf\n")])])]),t("blockquote",[t("p",[s._v("在"),t("code",[s._v("[general]")]),s._v("节点下追加以下内容")])]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 匿名访问的权限，可以是read,write,none,默认为read\nanon-access=none\n# 使授权用户有写权限\nauth-access=write\n# 密码数据库的路径\npassword-db=passwd\n# 访问控制文件\nauthz-db=authz\n# 认证命名空间，subversion会在认证提示里显示，并且作为凭证缓存的关键字\nrealm = This Is A Repository\n")])])]),t("blockquote",[t("p",[s._v("如果需要创建多个库就需要重复做上面2、3步，并且最后一个目录名是不一样的")])]),s._v(" "),t("ul",[t("li",[s._v("建立第2个SVN版本库目录")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /home/svn/svnrepos/test2\n")])])]),t("ul",[t("li",[s._v("创建第2个SVN版本库")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("svnadmin create /home/svn/svnrepos/test2\n")])])]),t("p",[t("strong",[s._v("启动")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("svnserve "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" /home/svn/svnrepos/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看SVN进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" svn\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测SVN端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -antlp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" svnserve\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放开端口")]),s._v("\nfirewall-cmd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--zone")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3690")]),s._v("/tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\nfirewall-cmd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reload")]),s._v("\n")])])]),t("p",[t("strong",[s._v("连接地址："),t("code",[s._v("svn://host:port/仓库名")])])]),s._v(" "),t("p",[t("strong",[s._v("停止SVN")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找svnserve进程（PID）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aux")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" svnserve\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结束进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" PID\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" svnserve\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);