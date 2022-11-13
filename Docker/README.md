# Docker

## Centos安装Docker
    sudo yum install -y yum-utils
    sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

    sudo yum install docker-ce docker-ce-cli containerd.io

    sudo systemctl start docker

    重启docker
    systemctl restart docker

## Docker命令
    yum -y install docker 安装
    systemctl start docker 启动
    systemctl restart docker 重启
    systemctl stop docker 停止
    systemctl enable docker 开机自启
    docker ps -a
    docker start
    docker stop
## Docker参数
    -a stdin: 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项； 
    -d: 后台运行容器，并返回容器ID；
    -i: 以交互模式运行容器，通常与 -t 同时使用；
    -t: 为容器重新分配一个伪输入终端，通常与 -i 同时使用；
    –name=”nginx-lb”: 为容器指定一个名称；
    –dns 8.8.8.8: 指定容器使用的DNS服务器，默认和宿主一致；
    –dns-search example.com: 指定容器DNS搜索域名，默认和宿主一致；
    -h “mars”: 指定容器的hostname；
    -e username=”ritchie”: 设置环境变量；
    –env-file=[]: 从指定文件读入环境变量；
    –cpuset=”0-2” or –cpuset=”0,1,2”: 绑定容器到指定CPU运行；
    -m :设置容器使用内存最大值；
    –net=”bridge”: 指定容器的网络连接类型，支持 bridge/host/none/Container: 四种类型；
    –link=[]: 添加链接到另一个容器；
    –expose=[]: 开放一个端口或一组端口；
    -p 端口
    -e TZ="Asia/Shanghai" 设置时区
## Docker安装镜像
    sudo mkdir -p /etc/docker
    sudo tee /etc/docker/daemon.json <<-'EOF'
    {
        "registry-mirrors": [
        "https://wi134sj6.mirror.aliyuncs.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://mirror.baidubce.com",
        "https://reg-mirror.qiniu.com"
        ]
    }
    EOF
    重启
    systemctl daemon-reload
    systemctl restart docker  
## Docker相关错误

### 如果报证书或者时间错误
    #安装
    yum install ntpdate
    #同步时间
    ntpdate cn.pool.ntp.org
### vm和docker冲突问题：
    注销docker
    wsl --unregister docker-desktop
    wsl --unregister docker-desktop-data
    想玩docker的话：
    以管理员身份运行cmd：
    bcdedit /set hypervisorlaunchtype auto
    重启；
    想玩虚拟机的话：
    以管理员身份运行cmd：
    bcdedit /set hypervisorlaunchtype off
    重启。
### windows设置docker启动后占用内存
    打开docker 先报错让其下载内核
    https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi # X64/x32架构内核
    
    控制面板-程序-关闭功能- hyper-v 去掉勾 、虚拟机平台去掉勾（如果还报错，把勾勾上）
    
    windows设置docker启动后占用内存问题
    C:\Users\用户名, 创建一个  .wslconfig 的文件  注意前面有个点，别设置太小
    添加内容如下:
    
    
    [wsl2]
    processors=8
    memory=4GB
    swap=4GB
    localhostForwarding=true

    memory=内存大小 swap=交换空间 processors=CPU内核数量
    报错后重置wsl
    power shell 打开
    输入
    wsl --shutdown
    netsh winsock reset
    成功打开docker
   
## Docker可视化工具 Portainer
    安装docker可视化工具 Portainer
    
    portainer本身就是一个容器
    创建一个外链
    docker volume create portainer_data
    运行一个Portainer容器
    docker run -d --name portainer -p 9010:9000 --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
    
    安装汉化版Portainer容器（需要将文件先放到root下）
    docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data -v /root/public:/public portainer/portainer
    
    安装完需要重置Portainer密码
    先停掉Portainer容器
    拉取工具
    docker pull portainer/helper-reset-password
    运行工具
    docker run --rm -v portainer_data:/data portainer/helper-reset-password
    先启动Portainer容器 输入重置后的密码
## Docker安装Redis
    docker network create redis-net
    运行redis 设置端口
    docker run --name redis -d -h redis -p 6379:6379 --restart always --network redis-net redis redis-server --appendonly yes --requirepass "ztf123"

## Docker安装Nacos
    docker run -d  \
    --env MODE=standalone  \
    -e MODE=standalone  \
    -e PREFER_HOST_MODE=hostname  \
    -e SPRING_DATASOURCE_PLATFORM=mysql  \
    -e MYSQL_SERVICE_HOST=地址  \
    -e MYSQL_SERVICE_PORT=3306  \
    -e MYSQL_SERVICE_USER=账号  \
    -e MYSQL_SERVICE_PASSWORD=密码  \
    -e MYSQL_SERVICE_DB_NAME=nacos  \
    -e JVM_XMS=512m -e JVM_XMX=512m  \
    --platform linux/amd64  \
    -p 8848:8848  \
    --name nacos  \
    --restart=always  \
    nacos/nacos-server:1.4.1

## Docker安装Elasticsearch、Kibana和Logstash
    运行elasticsearch 设置端口和备用端口 设置内存
    mkdir -p /opt/elasticsearch/plugins
    mkdir -p /opt/elasticsearch/data
    授予权限chmod 777 /opt/elasticsearch/data
    
    docker run -p 9200:9200 -p 9300:9300 --name elasticsearch --restart=always \
    -e "discovery.type=single-node" \
    -e ES_JAVA_OPTS="-Xms1024m -Xmx1024m" \
    -v /opt/elasticsearch/plugins:/usr/share/elasticsearch/plugins \
    -v /opt/elasticsearch/data:/usr/share/elasticsearch/data \
    -d elasticsearch:7.14.1

    安装中文分词器
    #下载地址：https://github.com/medcl/elasticsearch-analysis-ik/releases
    1.下载elasticsearch-analysis-ik-7.14.1.zip
    2.上传解压：unzip elasticsearch-analysis-ik-7.14.1.zip -d /opt/ik-analyzer
    3.上传到es容器：docker cp /opt/ik-analyzer 容器id:/usr/share/elasticsearch/plugins
    4.重启es：docker restart 容器id

    运行kibana 设置端口
    docker run -d --name kibana --restart always --net elastic -p 5601:5601 kibana:7.14.1

    进入容器修改：docker exec -it kibana /bin/bash
    cd config
    vi kibana.yml
    elasticsearch.hosts: [ "http://地址:9200" ]
    docker restart kibana 重启kibana ！

    运行logstash 设置端口
    docker run --name logstash -p 5044:5044 --restart=always --link elasticsearch:es -v /mydata/logstash/logstash.conf:/usr/share/logstash/pipeline/logstash.conf -d logstash:7.14.1
    # 需要提前在linux服务器上环境 /mydata/logstash/logstash.conf
    logstash.conf
    input {
        tcp {
        mode => "server"
        host => "0.0.0.0"
        port => 5044
        codec => json_lines
        }
    }
    filter{
    
    }
    output {
        elasticsearch {
        hosts => "ip:9200"
        index => "gmall-%{+YYYY.MM.dd}"
        }
    }

## 安装Rabbitmq

    docker run -d --name rabbitmq -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=密码   rabbitmq:management
    
    运行一个rabbitmq 镜像 账号admin 密码ztf123
    
    rabbitmq:management是指rabbitmq的web管理端

    安装延迟队列插件
    1.首先下载rabbitmq_delayed_message_exchange-3.9.0.ez文件上传到RabbitMQ所在服务器，下载地址：https://www.rabbitmq.com/community-plugins.html
    2.切换到插件所在目录，执行 docker cp rabbitmq_delayed_message_exchange-3.9.0.ez rabbitmq:/plugins 命令，将刚插件拷贝到容器内plugins目录下
    3.执行 docker exec -it rabbitmq /bin/bash 命令进入到容器内部，并 cd plugins 进入plugins目录
    4.执行 ls -l|grep delay  命令查看插件是否copy成功
    5.在容器内plugins目录下，执行 rabbitmq-plugins enable rabbitmq_delayed_message_exchange  命令启用插件
    6.exit命令退出RabbitMQ容器内部，然后执行 docker restart rabbitmq 命令重启RabbitMQ容器




