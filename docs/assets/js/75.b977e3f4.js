(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{390:function(a,s,e){"use strict";e.r(s);var t=e(0),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"centos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[a._v("#")]),a._v(" CentOS")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#yum和rpm操作"}},[a._v("YUM和RPM操作")])]),s("li",[s("a",{attrs:{href:"#systemctl"}},[a._v("systemctl")])]),s("li",[s("a",{attrs:{href:"#内核升级"}},[a._v("内核升级")])]),s("li",[s("a",{attrs:{href:"#一键安装bbr"}},[a._v("一键安装BBR")]),s("ul",[s("li",[s("a",{attrs:{href:"#安装新版内核headers"}},[a._v("安装新版内核headers")])]),s("li",[s("a",{attrs:{href:"#内核升级方法"}},[a._v("内核升级方法")])])])]),s("li",[s("a",{attrs:{href:"#三方工具"}},[a._v("三方工具")])]),s("li",[s("a",{attrs:{href:"#chrome"}},[a._v("Chrome")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"yum和rpm操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum和rpm操作"}},[a._v("#")]),a._v(" YUM和RPM操作")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("yum -y install 包名")]),a._v("（支持*） ：自动选择y，全自动")]),a._v(" "),s("li",[s("code",[a._v("yum install 包名")]),a._v("（支持*） ：手动选择y or n")]),a._v(" "),s("li",[s("code",[a._v("yum remove 包名")]),a._v("（不支持*）")]),a._v(" "),s("li",[s("code",[a._v("rpm -ivh 包名")]),a._v("（支持*）：安装rpm包")]),a._v(" "),s("li",[s("code",[a._v("rpm -e 包名")]),a._v("（不支持*）：卸载rpm包")]),a._v(" "),s("li",[s("code",[a._v("yum info nginx")]),a._v("(查看当前版本可选)")]),a._v(" "),s("li",[s("code",[a._v("yum list installed | grep 包名")]),a._v("（不支持*）：确认是否安装过包")]),a._v(" "),s("li",[s("code",[a._v("yum -y update")]),a._v(" 更新yum源包")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装EPEL源")]),a._v("\nyum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" epel-release \n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查询已安装软件包信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-qi")]),a._v(" 软件名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查询已安装软件包安装位置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ql")]),a._v(" 软件名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看已安装软件依赖")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-qR")]),a._v(" 软件名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看已安装软件的配置文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-qc")]),a._v(" 软件名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查询已安装文件所属软件包")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-qf")]),a._v(" 文件名的绝对路径\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装软件包数量")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-qa")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-qa")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 软件名称\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--nodeps")]),a._v(" 列出的软件全名\n")])])]),s("h2",{attrs:{id:"systemctl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#systemctl"}},[a._v("#")]),a._v(" systemctl")]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("systemctl")]),a._v("是"),s("code",[a._v("CentOS7")]),a._v("的服务管理工具中主要的工具，它融合之前"),s("code",[a._v("service")]),a._v("和"),s("code",[a._v("chkconfig")]),a._v("的功能于一体。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动一个服务")]),a._v("\nsystemctl start firewalld.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 关闭一个服务")]),a._v("\nsystemctl stop firewalld.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启一个服务")]),a._v("\nsystemctl restart firewalld.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示一个服务的状态")]),a._v("\nsystemctl status firewalld.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在开机时启用一个服务")]),a._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" firewalld.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在开机时禁用一个服务")]),a._v("\nsystemctl disable firewalld.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看服务是否开机启动")]),a._v("\nsystemctl is-enabled firewalld.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看已启动的服务列表")]),a._v("\nsystemctl list-unit-files"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" enabled\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看启动失败的服务列表")]),a._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--failed")]),a._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看mysql是否自启动")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chkconfig")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--list")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" mysqld\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置开启自启动")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chkconfig")]),a._v(" mysqld on\n")])])]),s("h2",{attrs:{id:"内核升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内核升级"}},[a._v("#")]),a._v(" 内核升级")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查当前CentOS系统版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/redhat-release\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查当前CentOS系统内核版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sr")]),a._v("\n")])])]),s("ul",[s("li",[a._v("运行yum命令升级")])]),a._v(" "),s("blockquote",[s("p",[a._v("CentOS中update命令可以一次性更新所有软件(包括系统版本)到最新版本。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 先清除所有")]),a._v("\nyum clean all\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 再升级")]),a._v("\nyum update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 升级内核")]),a._v("\nyum update kernel  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n")])])]),s("ul",[s("li",[a._v("在"),s("code",[a._v("CentOS7.x")]),a._v("上启用"),s("code",[a._v("ELRepo")]),a._v("仓库")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 首先导入elrepo的key")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--import")]),a._v(" https://www.elrepo.org/RPM-GPG-KEY-elrepo.org\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装elrepo的yum")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Uvh")]),a._v(" http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm\n")])])]),s("ul",[s("li",[a._v("查看内核相关包")])]),a._v(" "),s("blockquote",[s("p",[a._v("仓库启用后，你可以使用下面的命令列出可用的系统内核相关包，查看内核相关包")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--disablerepo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--enablerepo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"elrepo-kernel"')]),a._v(" list available\n")])])]),s("ul",[s("li",[a._v("安装最新的主线稳定内核")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--enablerepo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("elrepo-kernel "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" kernel-ml\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者以下命令安装最新的主线稳定内核")]),a._v("\nyum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--enablerepo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("elrepo-kernel "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" kernel-ml.x86_64 kernel-ml-devel.x86_64\n")])])]),s("ul",[s("li",[a._v("查看可用内核")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /boot/grub2/grub.cfg "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" menuentry \n")])])]),s("ul",[s("li",[a._v("设置内核启动项")])]),a._v(" "),s("blockquote",[s("p",[a._v("替换刚刚查看出来的内核名字执行，比如："),s("code",[a._v("grub2-set-default 'CentOS Linux (4.15.13-1.el7.elrepo.x86_64) 7 (Core)'")])]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("grub2-set-default '内核名字'")])])])]),a._v(" "),s("ul",[s("li",[a._v("查看内核启动项是否设置成功")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("grub2-editenv list\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查当前CentOS系统内核版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sr")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看多余的内核")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-qa")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" kernel\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除多余的内核")]),a._v("\nyum remove 内核名字\n")])])]),s("h2",{attrs:{id:"一键安装bbr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一键安装bbr"}},[a._v("#")]),a._v(" 一键安装BBR")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ylx2016/Linux-NetSpeed",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/ylx2016/Linux-NetSpeed"),s("OutboundLink")],1)])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/teddysun/across",target:"_blank",rel:"noopener noreferrer"}},[a._v("秋水逸冰"),s("OutboundLink")],1)])]),a._v(" "),s("ul",[s("li",[a._v("下载并执行脚本")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x bbr.sh\n./bbr.sh\n")])])]),s("blockquote",[s("p",[a._v("安装完成后，脚本会提示需要重启 VPS，输入"),s("code",[a._v("y")]),a._v("并回车后重启。")])]),a._v(" "),s("ul",[s("li",[a._v("查看内核版本")])]),a._v(" "),s("blockquote",[s("p",[a._v("显示为最新版就表示OK了，重启完成后，进入VPS，验证一下是否成功安装最新内核并开启"),s("code",[a._v("TCP BBR")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sysctl")]),a._v(" net.ipv4.tcp_available_congestion_control\n")])])]),s("blockquote",[s("p",[a._v("返回值一般为"),s("code",[a._v("net.ipv4.tcp_available_congestion_control = bbr cubic reno")]),a._v("，\n或者为："),s("code",[a._v("net.ipv4.tcp_available_congestion_control = reno cubic bbr")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sysctl")]),a._v(" net.ipv4.tcp_congestion_control\n")])])]),s("blockquote",[s("p",[a._v("返回值一般为 "),s("code",[a._v("net.ipv4.tcp_congestion_control = bbr")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sysctl")]),a._v(" net.core.default_qdisc\n")])])]),s("blockquote",[s("p",[a._v("返回值一般为 "),s("code",[a._v("net.core.default_qdisc = fq")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("lsmod "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" bbr\n")])])]),s("blockquote",[s("p",[a._v("返回值有"),s("code",[a._v("tcp_bbr")]),a._v("模块即说明"),s("code",[a._v("bbr")]),a._v("已启动。")])]),a._v(" "),s("blockquote",[s("p",[a._v("注意：并不是所有的都会有此返回值，若没有也属正常。")])]),a._v(" "),s("h3",{attrs:{id:"安装新版内核headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装新版内核headers"}},[a._v("#")]),a._v(" 安装新版内核headers")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--enablerepo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("elrepo-kernel "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" kernel-ml-headers\n")])])]),s("ul",[s("li",[a._v("根据"),s("code",[a._v("CentOS")]),a._v("版本的不同，此时一般会出现类似于以下的错误提示：\n"),s("ul",[s("li",[s("code",[a._v("Error: kernel-ml-headers conflicts with kernel-headers-2.6.32-696.20.1.el6.x86_64")])]),a._v(" "),s("li",[s("code",[a._v("Error: kernel-ml-headers conflicts with kernel-headers-3.10.0-693.17.1.el7.x86_64")])])])])]),a._v(" "),s("p",[s("strong",[a._v("卸载原版内核"),s("code",[a._v("headers")])])]),a._v(" "),s("blockquote",[s("p",[a._v("需要先卸载原版内核"),s("code",[a._v("headers")]),a._v("，然后再安装最新版内核"),s("code",[a._v("headers")]),a._v("。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum remove kernel-headers "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("注意：有时候这么操作还会卸载一些对内核 headers 依赖的安装包，比如 gcc、gcc-c++ 之类的。\n不过不要紧，我们可以在安装完最新版内核 headers 后再重新安装回来即可。")])]),a._v(" "),s("h3",{attrs:{id:"内核升级方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内核升级方法"}},[a._v("#")]),a._v(" 内核升级方法")]),a._v(" "),s("ul",[s("li",[a._v("CentOS系统升级内核")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" kernel-ml kernel-ml-devel\n")])])]),s("ul",[s("li",[a._v("升级"),s("code",[a._v("headers")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" kernel-ml-headers\n")])])]),s("ul",[s("li",[a._v("执行命令")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("grub2-set-default "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("最后，重启VPS即可。")])]),a._v(" "),s("h2",{attrs:{id:"三方工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三方工具"}},[a._v("#")]),a._v(" 三方工具")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel lrzsz "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nlrzsz-devel p7zip p7zip-devel net-tools net-tools-devel "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" vim-devel libaio libaio-devel\n")])])]),s("p",[s("strong",[s("code",[a._v("figlet")])])]),a._v(" "),s("blockquote",[s("p",[a._v("Linux下的命令行工具，我们经常会看到一些终端工具有一个字符Logo,这些Logo可以通过"),s("code",[a._v("Figlet")]),a._v("生成：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" figlet\n")])])]),s("ul",[s("li",[a._v("居中显示用 "),s("code",[a._v("-c")])]),a._v(" "),s("li",[a._v("从文件导入用 "),s("code",[a._v("-p")]),a._v("， 比如从testFile导入"),s("code",[a._v("figlet -c -p < testFile")])]),a._v(" "),s("li",[a._v("还可以用"),s("code",[a._v("-w")]),a._v("指定宽度。")]),a._v(" "),s("li",[a._v("实时显示时间"),s("code",[a._v("watch -n1 \"date '+%D%n%T' |figlet -k\"")])])]),a._v(" "),s("p",[s("strong",[s("code",[a._v("boxes")])])]),a._v(" "),s("blockquote",[s("p",[a._v("这个工具提供了 n 种样式，例如各种动物等，然后你输入的字符就放在这些图案的内部空白处。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" boxes\n")])])]),s("blockquote",[s("p",[a._v("使用boxes -l列出所有的样式。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" boxes "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("style name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 比如dog")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" boxes "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" dog\n")])])]),s("p",[s("strong",[s("code",[a._v("Toilet")])])]),a._v(" "),s("blockquote",[s("p",[a._v("可以输出更丰富的样式，它比 "),s("code",[a._v("figlet")]),a._v(" 命令的效果更有艺术感。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" toilet "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" term "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-F")]),a._v(" border "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--gay")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 可以有颜色")]),a._v("\ntoilet "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" mono12 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-F")]),a._v(" metal Linux\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 多种样式")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'+%D %T'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" toilet "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" term "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-F")]),a._v(" border "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--gay")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n")])])]),s("h2",{attrs:{id:"chrome"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome"}},[a._v("#")]),a._v(" Chrome")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://intoli.com/blog/installing-google-chrome-on-centos",target:"_blank",rel:"noopener noreferrer"}},[a._v("chrome其他安装方式"),s("OutboundLink")],1)])]),a._v(" "),s("p",[s("strong",[a._v("rpm包安装")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载rpm包")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装依赖")]),a._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" lsb libXScrnSaver libappindicator-gtk3 liberation-fonts\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装chrome")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ivh")]),a._v(" google-chrome-stable_current_x86_64.rpm\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者使用yum安装chrome")]),a._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" google-chrome-stable_current_x86_64.rpm\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看版本")]),a._v("\ngoogle-chrome "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装chromedriver：一个用来和chrome交互的接口")]),a._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" chromedriver\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看安装的chromedriver版本")]),a._v("\nchromedriver "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n")])])]),s("p",[s("strong",[a._v("在线安装")])]),a._v(" "),s("ul",[s("li",[a._v("创建repo文件")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/yum.repos.d/google-chrome.repo\n")])])]),s("ul",[s("li",[a._v("添加内容")])]),a._v(" "),s("div",{staticClass:"language-conf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[google-chrome]\nname=google-chrome\nbaseurl=http://dl.google.com/linux/chrome/rpm/stable/$basearch\nenabled=1\ngpgcheck=1\ngpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub\n")])])]),s("ul",[s("li",[a._v("安装")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" google-chrome-stable\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果安装失败")]),a._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" google-chrome-stable "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--nogpgcheck")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);