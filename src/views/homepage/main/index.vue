<template>
    <el-container class="homepage" direction="vertical">
        <Header :naviList="naviList" @navActived="handleNavActived"></Header>

        <el-main class="main-container">
            <div id="test1" style="background-color: red; height: 200px; width: 100%;">1</div>
            <div id="test2" style="background-color: blue; height: 200px; width: 100%;">2</div>
            <div id="test3" style="background-color: yellow; height: 200px; width: 100%;">3</div>
            <div id="test4" style="background-color: grey; height: 200px; width: 100%;">4</div>
            <div id="test5" style="background-color: black; height: 200px; width: 100%;">5</div>
        </el-main>

        <Footer></Footer>
    </el-container>
</template>
<style lang="scss" src="./style.scss"></style>
<script src="./script.js"></script>
