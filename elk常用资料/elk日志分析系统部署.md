#ELK��־����ϵͳ����
����汾�б�
| software      |    version       | 
| ------------- |:-------------:| -----:|
| centos   | 6.6 | 
| redis	   | 2.4.10 |
| jdk     | jdk-8u51-linux-x64 |     
| elasticsearch | elasticsearch |  
| kibana  | kibana-4.1.1  |
| logstash | logstash-1.5.3 |
##��װelk
1.redis�����װ
```
#yum -y install epel-release
#yum makecache
#yum -y install redis
#chkconfig redis on
```
2.jdk��װ
jdk�ӹ������أ��汾��һ��ȽϺ�
```
#rpm -ivh jdk-8u51-linux-x64.rpm
```
3.��װlogstash
�ӹ�������Դ���
```
#mkdir -p /usr/local/elk/
#tar zxvf logstash-1.5.3.tar.gz
#mv logstash-1.5.3 /usr/local/elk/logstash
```
4.��װes
�ӹ�������Դ���
```
#unzip elasticsearch-1.7.0.zip
#mv elasticsearch-1.7.0 /usr/local/elk/es
```
5.��װkibana
�ӹ�������Դ���
```
#tar zxvf kibana-4.1.1-linux-x64.tar.gz
#mv kibana-4.1.1-linux-x64 /usr/local/elk/kibana
```
##����elk
1.����es
```
#/usr/local/elk/es/bin/elasticsearch -d
```
2.���ò�����logstash
���������ļ�Ŀ¼
```
#mkdir /usr/local/elk/logstash/etc
```
����һ������־�ļ���ȡ����д��redis�������ļ�(���ļ�����Ĭ�Ϸ�ʽ�������룬���)
```
#cat agent.conf
input {
	file {
		path => "/var/log/httpd/access_log"    //���ö�ȡ����־·��
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
����һ����redis��ȡ��־�������es�������ļ�
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
����logstash
```
#/usr/local/elk/logstash/bin/logstash -f /usr/local/elk/logstash/etc/agent.conf -l /var/log/elk/logstash/logstash.log &

#/usr/local/elk/logstash/bin/logstash -f /usr/local/elk/logstash/etc/index.conf -l /var/log/elk/logstash/logstash.log &
```
����kibana
```
/usr/local/elk/kibana/bin/kibana &
```
д�뿪������
```
#cat /etc/rc.d/rc.local
/usr/sbin/ntpdate ntp.sjtu.edu.cn

/usr/local/elk/es/bin/elasticsearch -d

/usr/local/elk/logstash/bin/logstash -f /usr/local/elk/logstash/etc/agent.conf -l /var/log/elk/logstash/logstash.log &

/usr/local/elk/logstash/bin/logstash -f /usr/local/elk/logstash/etc/index.conf -l /var/log/elk/logstash/logstash.log &

/usr/local/elk/kibana/bin/kibana &
```
##���Է���elk
http://ip:5601
