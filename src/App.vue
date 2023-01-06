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
        <router-link to="/flowUserMobile/bussinessList" class="top-bar-link">
            <h2>业务申请</h2>
        </router-link>
        <h2>未提交（{{ uncommitCount }}）</h2>
        <h2>已提交（{{ committedCount }}）</h2>
        <h2>已完成（{{ finishCount }}）</h2>
    </nav>
    <router-view />

</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            userName: "",
            userCode: "",
            deptName: "",
            roleName: "",
            uncommitCount: 0,
            committedCount: 0,
            finishCount: 0,
        };
    },
    mounted() {
        this.userName = localStorage.getItem("userName");
        this.userCode = localStorage.getItem("userCode");
        this.deptName = localStorage.getItem("deptName");
        this.roleName = localStorage.getItem("roleName");
        axios.get("http://jhsy.whu.edu.cn/jhsy6webservice/api/flowUserMobile/appCount").then(
            response => {
                this.uncommitCount = response.data.result.uncommit;
                this.committedCount = response.data.result.committed;
                this.finishCount = response.data.result.finish;
            },
            error => {
                console.log("FAIL 2", error.message);
            }
        )
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