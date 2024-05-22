# :book:Git 同一电脑配置多个远程仓库

> 当一台电脑需要连接多个远程仓库的时候如何配置。如一个仓库需要连接 github、一个仓库需要连接 gitee 等。

## :bookmark:配置一个远程仓库

#### 生成 ssh-key

- 输入如下代码生成一个 ssh-key  
  `ssh-keygen -t rsa -C "yourmail@email.com"`
- 一般情况下连续三个回车直接生成 ssh-key，windows 电脑，文件所在目录：  
  `C:\Users\用户名\.ssh`  
  在该目录下有两个文件`id_rsa`和`id_rsa.pub`，一个是私钥，另外一个是公钥，公钥用于添加对应的远程仓库账号中。

#### 添加公钥内容到对应的 远程仓库账户中

以下示例是添加公钥到码云中步骤：

1. 个人头像->设置  
   ![](/img/articles/gitee_01.jpg)
2. 左侧菜单->SSH 公钥  
   ![](/img/articles/gitee_02.jpg)

## :bookmark:配置多个远程仓库

#### 生成不同的 ssh-key

命令：  
`ssh-keygen -t rsa -C "yourmail@email.com" -f ~/.ssh/id_rsa_github`  
该命令会生成以`id_rsa_github`命名的私钥和公钥。

#### 在 ~/.ssh/ 文件夹下创建一个 config 文件

编辑 config 文件，配置不同的仓库指向不同的密钥文件，文件内容如下：

```sh
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile C:/Users/d/.ssh/id_rsa
User jiangxj

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile C:/Users/d/.ssh/id_rsa_github
User jiangxj
```

## :bookmark:测试 ssh 链接

命令：

```sh
ssh -T git@gitee.com
ssh -T git@github.com
```

出现以下提示则说明配置成功，你就可以推送相关代码了。  
![](/img/articles/gitee_03.jpg)
