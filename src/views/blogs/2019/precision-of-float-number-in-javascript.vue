<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>

                </p>

                <p>
                    问：要把小数装入计算机，总共分几步？你猜对了，3 步。
                    <ul>
                        <li>第一步：转换成二进制</li>
                        <li>第二步：用二进制科学计算法表示</li>
                        <li>第三步：表示成 IEEE 754 形式</li>
                    </ul>
                    在上面的第一步和第三步都有可能 丢失精度。
                </p>

            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
