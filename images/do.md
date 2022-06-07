docker可以使用一个镜像创建多个容器，使用docker create可以创建容器，然后映射不同的端口和配置，代码示例如下：

`sudo docker create --name testdocker -p 5000:80 zhenlei1970/testdockernew`

上面的代码创建镜像名称为zhenlei1970/testdockernew的容器，名称为testdocker，将端口80映射为本地端口5000。
然后可以运行这个容器：

`sudo docker start -a testdocker`

使用同样的语句模式可以创建另一个容器：

`sudo docker create --name testdocker1 -p 5002:80 zhenlei1970/testdockernew`

使用的镜像一样，只是名称和端口不一样，启动方法相同：

`sudo docker start -a testdocker1`

这样我们就同时运行了一个镜像的两个容器，使用浏览器可以分别访问这两个实例。

列出所有容器
`docker ps -a`

启动停止的容器
`docker start containerName(container)`

启动镜像

`docker run -d -it ubuntu`

`docker run -d -it --name ubuntu4 -p 8005:22 ubuntu`

dokcer ps -a 查询正在运行的container

docker exec -it 容器ID /bin/bash 进入容器

exit 退出容器

查看ip地址 `hostname -I`

更新apt-get源

deb http://mirrors.aliyun.com/ubuntu/ trusty main multiverse restricted universe

deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main multiverse restricted universe

echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main multiverse restricted universe" >/etc/apt/sources.list && \

echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-security main multiverse restricted universe" >/etc/apt/sources.list && \

echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main multiverse restricted universe" >/etc/apt/sources.list && \

echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty main multiverse restricted universe" >/etc/apt/sources.list && \

echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main multiverse restricted universe" >/etc/apt/sources.list && \

echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main multiverse restricted universe" >/etc/apt/sources.list && \

echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main multiverse restricted universe" >/etc/apt/sources.list && \

echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main multiverse restricted universe" >/etc/apt/sources.list

```
mv /etc/apt/sources.list /etc/apt/sources.list.bak && \
    echo "deb http://mirrors.aliyun.com/ubuntu/ trusty main multiverse restricted universe" >/etc/apt/sources.list && \
    echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main multiverse restricted universe" >>/etc/apt/sources.list && \    echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main multiverse restricted universe" >>/etc/apt/sources.list && \
    echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-security main multiverse restricted universe" >>/etc/apt/sources.list && \
    echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main multiverse restricted universe" >>/etc/apt/sources.list && \
    echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty main multiverse restricted universe" >>/etc/apt/sources.list && \
    echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main multiverse restricted universe" >>/etc/apt/sources.list && \
    echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main multiverse restricted universe" >>/etc/apt/sources.list && \
    echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main multiverse restricted universe" >>/etc/apt/sources.list && \
    echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main multiverse restricted universe" >>/etc/apt/sources.list
```
```
mv /etc/apt/sources.list /etc/apt/sources.list.bak && \
    echo "deb https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse" >/etc/apt/sources.list && \
    echo "deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse" >/etc/apt/sources.list

    echo "deb https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse" >/etc/apt/sources.list && \
    echo "deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse" >/etc/apt/sources.list

    echo "deb https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse" >/etc/apt/sources.list && \
    echo "deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse" >/etc/apt/sources.list

    echo "deb https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse" >/etc/apt/sources.list && \
    echo "deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse" >/etc/apt/sources.list

```

安装vim
`apt-get update && apt-get intall vim -y`