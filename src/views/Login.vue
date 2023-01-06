<template>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
        }
    },
    mounted() {
        let token = localStorage.getItem("token");
        let ticket = localStorage.getItem("ticket");
        if (!token) {
            window.location.href = "https://cas.whu.edu.cn/authserver/login?service=http%3A%2F%2Fjhsy.whu.edu.cn%2FJhsy6WebCas%2FCasLogin.aspx";
            localStorage.setItem("ticket", window.location.href.slice(33, 999));
            if (ticket) {
                axios.get("http://jhsy.whu.edu.cn/jhsy6webservice/api/account/loginCas?ticket=" + ticket).then(
                    response => {
                        localStorage.setItem("token", response.data.result.token);
                        localStorage.setItem("userName", response.data.result.userName);
                        localStorage.setItem("userCode", response.data.result.userCode);
                        localStorage.setItem("deptName", response.data.result.deptName);
                        localStorage.setItem("roleName", response.data.result.roleName);
                    },
                    error => {
                        console.log("FAIL 1", error.message);
                    }
                )
            }
        } else {
            window.location.href = "http://localhost:8080/#/flowUserMobile/appCount";
        }
    },
};
</script>
<style>

</style>