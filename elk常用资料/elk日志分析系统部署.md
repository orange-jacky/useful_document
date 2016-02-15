#ELK日志分析系统部署
软件版本列表：
| software      |    version       | 
| ------------- |:-------------:| -----:|
| centos   | 6.6 | 
| redis	   | 2.4.10 |
| jdk     | jdk-8u51-linux-x64 |     
| elasticsearch | elasticsearch |  
| kibana  | kibana-4.1.1  |
| logstash | logstash-1.5.3 |
##安装elk
1.redis软件安装
```
#yum -y install epel-release
#yum makecache
#yum -y install redis
#chkconfig redis on
```
2.jdk安装
jdk从官网下载，版本新一点比较好
```
#rpm -ivh jdk-8u51-linux-x64.rpm
```
3.安装logstash
从官网下载源码包
```
#mkdir -p /usr/local/elk/
#tar zxvf logstash-1.5.3.tar.gz
#mv logstash-1.5.3 /usr/local/elk/logstash
```
4.安装es
从官网下载源码包
```
#unzip elasticsearch-1.7.0.zip
#mv elasticsearch-1.7.0 /usr/local/elk/es
```
5.安装kibana
从官网下载源码包
```
#tar zxvf kibana-4.1.1-linux-x64.tar.gz
#mv kibana-4.1.1-linux-x64 /usr/local/elk/kibana
```
##配置elk
1.启动es
```
#/usr/local/elk/es/bin/elasticsearch -d
```
2.配置并启动logstash
创建配置文件目录
```
#mkdir /usr/local/elk/logstash/etc
```
创建一个从日志文件读取，并写入redis的配置文件(本文件采用默认方式进行输入，输出)
```
#cat agent.conf
input {
	file {
		path => "/var/log/httpd/access_log"    //设置读取的日志路径
		sincedb_path => "../.sincedb"
		type => "httpd"
		start_position => "beginning"
	}
}
output {
	redis {
		host => ["127.0.0.1"]
		port => 6379
		batch => true
    		batch_events => 5
    		data_type => "list"
    		key => "logstash:redis"
	}
}
```
配置一个从redis读取日志并输出到es的配置文件
```
#cat index.conf
input {
  redis {
    host => ["127.0.0.1"]
    port => 6379
    data_type => "list"
    key => "logstash:redis"
  }
}

output {
        elasticsearch {
        host => "127.0.0.1"
        protocol => "http"
        index => "logstash-%{type}-%{+YYYY.MM.dd}"
        index_type => "%{type}"
        }
}
```
启动logstash
```
#/usr/local/elk/logstash/bin/logstash -f /usr/local/elk/logstash/etc/agent.conf -l /var/log/elk/logstash/logstash.log &

#/usr/local/elk/logstash/bin/logstash -f /usr/local/elk/logstash/etc/index.conf -l /var/log/elk/logstash/logstash.log &
```
启动kibana
```
/usr/local/elk/kibana/bin/kibana &
```
写入开机启动
```
#cat /etc/rc.d/rc.local
/usr/sbin/ntpdate ntp.sjtu.edu.cn

/usr/local/elk/es/bin/elasticsearch -d

/usr/local/elk/logstash/bin/logstash -f /usr/local/elk/logstash/etc/agent.conf -l /var/log/elk/logstash/logstash.log &

/usr/local/elk/logstash/bin/logstash -f /usr/local/elk/logstash/etc/index.conf -l /var/log/elk/logstash/logstash.log &

/usr/local/elk/kibana/bin/kibana &
```
##测试访问elk
http://ip:5601
