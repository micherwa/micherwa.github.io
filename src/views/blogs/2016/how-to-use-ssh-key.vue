<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="false">
            <div slot="content">
                <p>
                    在github上遇到感兴趣的项目，想clone下来具体地看一下。这时，有2种clone方式可供选择。第一种Https，其实就是当前的github地址。另一种则是SSH，形如：<strong>git@github.com:xxx/xxx</strong>。
                </p>
                <p>
                    ssh key是什么？有什么用呢？该怎么用？本文将对这些问题一一解答。
                </p>

                <h4>ssh key的作用</h4>
                <p>
                    ssh是一种安全的传输模式。github要求推送代码的用户是合法的，所以每次（真的是每次，特麻烦）推送时候都要输入账号密码，用以验证你是否为合法用户。
                </p>
                <p>
                    为了省去每次都要输入密码的步骤，则出现了ssh模式。它有一组公钥和私钥，在你的电脑里生成唯一的ssh公钥和私钥之后，把公钥放到github上面进行绑定。之后的每次推送，github会校验ssh key是否合法，也就相当于做了账户验证。这样就不用每次推送的时候，都手输密码了。
                </p>

                <h4>ssh key的生成</h4>
                <p>
                    以mac为例，打开终端。输入<pre>ssh-keygen -t rsa -C "youremail@example.com"</pre>
                </p>
                <p>
                    密钥类型可以用 -t 选项指定。如果没有指定则默认生成用于SSH-2的RSA密钥。这里使用的是rsa。
                </p>
                <p>
                    同时在密钥中有一个注释字段，用-C来指定所指定的注释，可以方便用户标识这个密钥，指出密钥的用途或其他有用的信息。所以在这里输入自己的邮箱或者其他都行。
                </p>
                <p>
                    接着会让输入2次口令(password)，空表示没有口令。3次回车即可完成当前步骤。最后得到了两个文件：id_rsa和id_rsa.pub。
                </p>

                <h4>github的绑定</h4>
                <p>
                    访问id_rsa.pub，拷贝里面的公钥<pre>open -e ~/.ssh/id_rsa.pub</pre>
                </p>
                <p>
                    登录github，打开 Settings -> SSH and GPG keys，将刚才拷贝的公钥添加进去，就ok了。
                </p>

                <h4>关于使用sourcetree的修改小建议</h4>
                <p>
                    sourcetree是一个git的可视化工具。如果一开始用了https模式推送，觉得不爽，想改为ssh模式，除了以上的步骤以外，还有一个很重要的环节：修改远程仓库的地址。
                </p>
                <p>
                    sourcetree在加入一个本地git项目之后，会默认导入当初的配置，所以即使绑定了ssh key之后，推送时还是要输密码。
                </p>
                <p>
                    修改步骤也很简单。打开 仓库->仓库设置，选择 远程仓库 的选项卡，编辑当前的那条远程仓库路径，形如<strong>git@github.com:xxx/xxx</strong>。保存后再推送，就ok了。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
