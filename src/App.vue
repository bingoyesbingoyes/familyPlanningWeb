<template>
    <header>
        <h1>计划生育</h1>
        <div>
            <h2 style="display:inline;">姓名：</h2><span>{{ userName }}</span>
        </div>
        <div>
            <h2 style="display:inline;">工号：</h2><span>{{ userCode }}</span>
        </div>
        <div>
            <h2 style="display:inline;">单位：</h2><span>{{ deptName }}</span>
        </div>
        <div>
            <h2 style="display:inline;">身份：</h2><span>{{ roleName }}</span>
        </div>
    </header>
    <nav>
        <router-link to="/NewApplication" class="top-bar-link">
            <span>新申请</span>
        </router-link>

        <router-link to="/NotSubmitted" class="top-bar-link">
            <span>未提交</span>
        </router-link>

        <router-link to="/InProcess" class="top-bar-link">
            <span>进行中</span>
        </router-link>

        <router-link to="/Completed" class="top-bar-link">
            <span>已完成</span>
        </router-link>

    </nav>
    <router-view />

</template>
<script>
export default {
    data() {
        return {
            userName: "",
            userCode: "",
            deptName: "",
            roleName: "",
        };
    },
    mounted() {
        // 获取四个对象
        this.userName = localStorage.getItem("userName");
        this.userCode = localStorage.getItem("userCode");
        this.deptName = localStorage.getItem("deptName");
        this.roleName = localStorage.getItem("roleName");
    },
};
</script>
 
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    width: 100%;
    height: 6%;
    background: green;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

header h2 {
    font-size: 120%;

}

nav {
    width: 100%;
    height: 4%;
    background: lightgreen;
    border: 2px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

nav a {
    text-decoration: none;
}

nav a:hover {
    color: red;
}
</style>