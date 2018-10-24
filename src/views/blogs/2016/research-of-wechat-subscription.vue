<template>
    <div class="blog-container">
        <BlogHeader
            title="关于微信公众号的研究" subTitle=""
            date="2016-02-06" :tags="['微信']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>微信公众号的概念</h2>
                <p>
                    这里主要说一下，最常用的两种公众号：<code>服务号、订阅号</code>。
                </p>
                <p>
                    <strong>服务号</strong>：会显示在微信最外层的对话列表中，位置较订阅号更显著。但是每个月，关注该服务号的用户最多只会收到4条推送。收到推送消息时，会像对话那样提醒用户。
                </p>
                <p>
                    <strong>订阅号</strong>：在微信最外层的对话列表中，有一个名为“订阅号”的总入口。所有关注过的订阅号，会被收录其中藏起来。每天都可以推送给用户一条消息。但不会有明显的消息提醒，只是在最外层的“订阅号”的右上角出现一个小红点。进入“订阅号”，可以看到未被阅读过的订阅号的右上角，会有数字提醒。
                </p>

                <p>
                    服务号和订阅号，都可分为“认证”和“非认证”。认证过的公众号，微信会提供更多的api接口，以及权限。当然，认证过程中，所需要的材料和费用，是必不可少的。特别注意的是，提供的银行卡账号，必须是可用的，不然会被拒，之后就只能再申请一个新的公众账号，重新开始认证过程。因为认证过程是不可逆的（这个有点坑。。。）
                </p>

                <h2>订阅号的基本应用</h2>
                <p>
                    接下来，着重介绍订阅号的一些基本应用。假设有这样一个需求：有一个网站，入口依赖于微信订阅号，每个用户进入订阅号后，可点击自定义菜单（最下方的tab），进跳转至该网站，网站需要记录每个用户的基本信息，也就是相当于用户登录。
                </p>

                <p>具体的做法：</p>
                <h4>1.自定义菜单</h4>
                <p>
                    进入公众号，找到“自定义菜单”，新建一个tab，然后填写tab的标题，还有链接。（只有已通过认证的公众号才能添加外部链接）
                </p>

                <h4>2.链接的设置</h4>
                <p>
                    目的是要获取用户的openId和基本信息。对于订阅号，有2种方法。
                </p>

                <h5>2.1 服务端静默推送</h5>
                <p>
                    用户点击菜单跳转链接时会有一个事件推送，直接推送到server，当然需要先配好服务器设置，具体在“基本配置”中可以找到。用户的体验效果，就是直接跳转到设置好的链接，不会有其他感知。
                </p>
                <p>
                    推送XML数据包示例：
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">xml</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">ToUserName</span>&gt;</span>&lt;![CDATA[toUser]]&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">ToUserName</span>&gt;</span> // 开发者微信号<br>    <span class="hljs-tag">&lt;<span class="hljs-name">FromUserName</span>&gt;</span>&lt;![CDATA[FromUser]]&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">FromUserName</span>&gt;</span> // 发送方帐号（一个OpenID）<br>    <span class="hljs-tag">&lt;<span class="hljs-name">CreateTime</span>&gt;</span>123456789<span class="hljs-tag">&lt;/<span class="hljs-name">CreateTime</span>&gt;</span> // 消息创建时间 （整型）<br>    <span class="hljs-tag">&lt;<span class="hljs-name">MsgType</span>&gt;</span>&lt;![CDATA[event]]&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">MsgType</span>&gt;</span> // 消息类型，event<br>    <span class="hljs-tag">&lt;<span class="hljs-name">Event</span>&gt;</span>&lt;![CDATA[VIEW]]&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Event</span>&gt;</span> // 事件类型，view<br>    <span class="hljs-tag">&lt;<span class="hljs-name">EventKey</span>&gt;</span>&lt;![CDATA[www.qq.com]]&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">EventKey</span>&gt;</span> // 事件KEY值，设置的跳转URL<br><span class="hljs-tag">&lt;/<span class="hljs-name">xml</span>&gt;</span></code></pre>
                    其中的FromUserName就是用户的openId了。
                </p>

                <p>
                    然后使用access_token接口，请求获得全局Access Token
                    <pre class="hljs awk"><code style="word-break: break-word; white-space: initial;" class="">https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&amp;appid=APPID&amp;secret=APPSECRET</code></pre>
                </p>

                <p>
                    返回结果：
                    <pre class="hljs json"><code class="">{<br>    <span class="hljs-attr">"access_token"</span>: <span class="hljs-string">"NU7Kr6v9L9TQaqm5NE3OTPctTZx797Wxw4Snd2WL2HHBqLCiXlDVOw2l-Se0I-WmOLLniAYLAwzhbYhXNjbLc_KAA092cxkmpj5FpuqNO0IL7bB0Exz5s5qC9Umypy-rz2y441W9qgfnmNtIZWSjSQ"</span>,<br>    <span class="hljs-attr">"expires_in"</span>: <span class="hljs-number">7200</span><br>}</code></pre>
                </p>

                <p>
                    再使用全局ACCESS_TOKEN获取OpenID的详细信息
                    <pre class="hljs awk"><code style="word-break: break-word; white-space: initial;" class="">https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID</code></pre>
                </p>
                <p>
                    返回如下：
                    <pre class="hljs json"><code class="">{<br>    <span class="hljs-attr">"subscribe"</span>: <span class="hljs-number">1</span>,<br>    <span class="hljs-attr">"openid"</span>: <span class="hljs-string">"oLVPpjqs2BhvzwPj5A-vTYAX4GLc"</span>,<br>    <span class="hljs-attr">"nickname"</span>: <span class="hljs-string">"刺猬宝宝"</span>,<br>    <span class="hljs-attr">"sex"</span>: <span class="hljs-number">1</span>,<br>    <span class="hljs-attr">"language"</span>: <span class="hljs-string">"zh_CN"</span>,<br>    <span class="hljs-attr">"city"</span>: <span class="hljs-string">"深圳"</span>,<br>    <span class="hljs-attr">"province"</span>: <span class="hljs-string">"广东"</span>,<br>    <span class="hljs-attr">"country"</span>: <span class="hljs-string">"中国"</span>,<br>    <span class="hljs-attr">"headimgurl"</span>: <span class="hljs-string">"http://wx.qlogo.cn/mmopen/JcDicrZBlREhnNXZRudod9PmibRkIs5K2f1tUQ7lFjC63pYHaXGxNDgMzjGDEuvzYZbFOqtUXaxSdoZG6iane5ko9H30krIbzGv/0"</span>,<br>    <span class="hljs-attr">"subscribe_time"</span>: <span class="hljs-number">1386160805</span><br>}</code></pre>
                    至此，获得用户的基本信息。 以上方法，基本在服务端就可以搞定，不需要前端js的介入。
                </p>
                <p>
                    注：获取全局ACCESS_TOKEN的方法，每日的调用上限是2000次，所以服务端需要做缓存，因为2小时会失效，所以一般最多取12次就够了。
                </p>

                <h5>2.2 OAuth2.0</h5>
                <p>
                    通过OAuth2.0的方式弹出授权页面获取用户基本信息。订阅号是没有网页授权权限的，具体可以在“接口权限”中查到。但是，可以借助已认证的服务号，它是有此权限的。
                </p>
                <p>
                    首先到服务号，找到“接口权限”中的网页账号一栏，点击修改
                    <img src="~@/assets/blog/bg-20160206-01.png">
                    在弹出层中配置回调域名，注：不要加http(s)://之类的
                    <img src="~@/assets/blog/bg-20160206-02.jpg" class="m-l-0">
                    构造请求的url如下：
                    <pre class="hljs awk"><code style="word-break: break-word; white-space: initial;" class="">https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8888888888888888&redirect_uri=http://mascot.duapp.com/oauth2.php&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect</code></pre>
                    <code>页面URL中的scope=snsapi_userinfo 表示应用授权作用域为请求用户信息，此处的appId是服务号的。</code>
                </p>
                <p>
                    将该链接作为之前设置过的自定义菜单的url，用户点击该菜单后，会弹出应用授权界面
                    <img src="~@/assets/blog/bg-20160206-03.png" class="m-l-0">
                </p>
                <p>
                    回调页面得到链接如下，回调url中将包含参数code
                    <pre class="hljs awk"><code style="word-break: break-word; white-space: initial;" class="">http://mascot.duapp.com/oauth2.php?code=00b788e3b42043c8459a57a8d8ab5d9f&state=1</code></pre>
                </p>

                <p>
                    再使用code换取oauth2的授权access_token，url如下：
                    <pre class="hljs awk"><code style="word-break: break-word; white-space: initial;" class="">https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx8888888888888888&secret=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&code=00b788e3b42043c8459a57a8d8ab5d9f&grant_type=authorization_code</code></pre>
                </p>

                <p>
                    获得授权Access Token:
                    <pre class="hljs json"><code class="">{<br>    <span class="hljs-attr">"access_token"</span>: <span class="hljs-string">"OezXcEiiBSKSxW0eoylIeAsR0GmYd1awCffdHgb4fhS_KKf2CotGj2cBNUKQQvj-G0ZWEE5-uBjBz941EOPqDQy5sS_GCs2z40dnvU99Y5AI1bw2uqN--2jXoBLIM5d6L9RImvm8Vg8cBAiLpWA8Vw"</span>,<br>    <span class="hljs-attr">"expires_in"</span>: <span class="hljs-number">7200</span>,<br>    <span class="hljs-attr">"refresh_token"</span>: <span class="hljs-string">"OezXcEiiBSKSxW0eoylIeAsR0GmYd1awCffdHgb4fhS_KKf2CotGj2cBNUKQQvj-G0ZWEE5-uBjBz941EOPqDQy5sS_GCs2z40dnvU99Y5CZPAwZksiuz_6x_TfkLoXLU7kdKM2232WDXB3Msuzq1A"</span>,<br>    <span class="hljs-attr">"openid"</span>: <span class="hljs-string">"oLVPpjqs9BhvzwPj5A-vTYAX3GLc"</span>,<br>    <span class="hljs-attr">"scope"</span>: <span class="hljs-string">"snsapi_userinfo,"</span><br>}</code></pre>
                </p>

                <p>
                    再使用授权Access Token获取用户信息，url如下：
                    <pre class="hljs awk"><code style="word-break: break-word; white-space: initial;" class="">https://api.weixin.qq.com/sns/userinfo?access_token=OezXcEiiBSKSxW0eoylIeAsR0GmYd1awCffdHgb4fhS_KKf2CotGj2cBNUKQQvj-G0ZWEE5-uBjBz941EOPqDQy5sS_GCs2z40dnvU99Y5AI1bw2uqN--2jXoBLIM5d6L9RImvm8Vg8cBAiLpWA8Vw&openid=oLVPpjqs9BhvzwPj5A-vTYAX3GLc</code></pre>
                </p>

                <p>
                    返回结果如下：
                    <pre class="hljs json"><code class="">{<br>    <span class="hljs-attr">"openid"</span>: <span class="hljs-string">"oLVPpjqs9BhvzwPj5A-vTYAX3GLc"</span>,<br>    <span class="hljs-attr">"nickname"</span>: <span class="hljs-string">"刺猬宝宝"</span>,<br>    <span class="hljs-attr">"sex"</span>: <span class="hljs-number">1</span>,<br>    <span class="hljs-attr">"language"</span>: <span class="hljs-string">"zh_CN"</span>,<br>    <span class="hljs-attr">"city"</span>: <span class="hljs-string">"深圳"</span>,<br>    <span class="hljs-attr">"province"</span>: <span class="hljs-string">"广东"</span>,<br>    <span class="hljs-attr">"country"</span>: <span class="hljs-string">"中国"</span>,<br>    <span class="hljs-attr">"headimgurl"</span>: <span class="hljs-string">"http://wx.qlogo.cn/mmopen/utpKYf69VAbCRDRlbUsPsdQN38DoibCkrU6SAMCSNx558eTaLVM8PyM6jlEGzOrH67hyZibIZPXu4BK1XNWzSXB3Cs4qpBBg18/0"</span>,<br>    <span class="hljs-attr">"privilege"</span>: []<br>}</code></pre>
                    获取用户信息完成。
                </p>

                <p>
                    <code>注：网页授权过来的code是属于服务号的，所以接下来获取access_token的appId和appSecrect也是服务号的才行，不然会报错。得到的access_token是属于网页授权，与全局的Access_token是不同的，所以也没有调用次数上限。</code>
                </p>

                <h2>关于UnionId</h2>
                <p>
                    如果用户只关注了我们的订阅号，没有关注上面借用的服务号，那么是得不到openId和基本信息的，而让用户再去关注服务号显然又不现实，那怎么办？
                </p>
                <p>
                    所幸微信有个叫UnionId的机制，它可以打通服务号与订阅号，使得用户信息可以共享。这样就可以实现，即使用户只关注了订阅号，我们也可以拿到他的基本信息。
                </p>
                <p>
                    做法很简单，进入<a href="https://open.weixin.qq.com/" target="_blank">https://open.weixin.qq.com</a>，找到“公众号绑定”，将订阅号和服务号，进行绑定就可以了。
                </p>
                <p>
                    之后再回到获取用户基本信息的回调结果，会看到多了一个参数:
                    <pre class="hljs 1c"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-string">"unionid"</span>: <span class="hljs-string">" o6_bmasdasdsad6_2sgVt7hMZOPfL"</span></code></pre>
                </p>
                <p>
                    <strong>注：这个unionid的是作为用户的唯一标示用的，可以发现服务号和订阅号的openId是不同的，即使用户信息是相同的。</strong>
                </p>

                <h2>微信支付成功后推荐关注栏规则</h2>
                <p>
                    公众号可以接入微信支付的API，在支付成功之后的提示页，会默认勾选 关注XX公众号。最新规则如下：
                    <ul>
                        <li>刷卡支付默认有推荐关注</li>
                        <li>公众号支付和扫码支付需要5元以上才有推荐关注</li>
                        <li>APP支付默认没有，需要申请配置，需要有一定用户规模才可以申请</li>
                        <li>已经关注的不展示推荐栏</li>
                        <li>服务号未设置头像的在IOS不展示推荐关注栏</li>
                        <li>用户取消过关注的默认不勾选</li>
                        <li>服务商模式的，需要在特约商户开发配置页设置推荐关注appid</li>
                        <li>订阅号目前是不会有默认推荐关注的</li>
                    </ul>
                </p>

                <h2>参考文献</h2>
                <p>
                    <ul>
                        <li>
                            <a href="https://mp.weixin.qq.com/" target="_blank">具体的概念介绍</a>
                        </li>
                        <li>
                            <a href="http://mp.weixin.qq.com/wiki/home/index.html" target="_blank">相关的开发者文档</a>
                        </li>
                    </ul>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {
        created () {

        }
    };
</script>
