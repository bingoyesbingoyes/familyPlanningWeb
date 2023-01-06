<template>
    <main>
        <h1>
            <button @click="toggle">新生入学婚育信息填写</button>
        </h1>

        <div class="popup" v-if="assureShow == true" @click="cancel">
            <div class="notification" @click.stop="">
                <h1>新生入学婚育信息填写</h1>
                <p>Description</p>
                <div class="buttonBox">
                    <button @click="assure">确定</button>
                </div>
            </div>
        </div>

        <div class="popup" v-if="guideShow == 1 || guideShow == 2 || guideShow == 3">
            <div class="notification" v-if="guideShow == 1">
                <h2>个人信息</h2>
                <h3>工号/学号: {{ code }}</h3>
                <h3>姓名：{{ name }}</h3>
                <h3>单位: {{ deptName }}</h3>
                <h3>身份证号: <input v-model="idCardNo"></h3>
                <div>
                    <h3>性别: {{ gender }}</h3>
                    <input type="radio" id="male" value="男" v-model="gender" /><label>男</label>
                    <input type="radio" id="female" value="女" v-model="gender" /><label>女</label>
                    <h3>电话: <input v-model="mobilePhone"></h3>
                </div>
                <div>
                    <h3>婚姻状况: {{ maritalStatus }}</h3>
                    <input type="radio" id="married" value="已婚" v-model="maritalStatus" /><label>已婚</label>
                    <input type="radio" id="unmarried" value="未婚" v-model="maritalStatus" /><label>未婚</label>
                </div>
                <button @click="nextGuide">确定提交</button>
            </div>
            
            <div class="notification" v-if="guideShow == 2">
                <h2>配偶信息</h2>
                <h3>结婚时间: <input v-model="spouse.marriageDate"></h3>
                <h3 v-if="role != '学生'">结婚时间: <input v-model="spouse.marriageDate"></h3>
                <h3>配偶姓名: <input v-model="spouse.spouseName"></h3>
                <h3>配偶身份证号: <input v-model="spouse.spouseIdCard"></h3>
                <h3>配偶电话: <input v-model="spouse.spouseMobilePhone"></h3>
                <h3>配偶电话: <input v-model="spouse.spouseMobilePhone"></h3>
                <h3>配偶工作单位: <input v-model="spouse.spouseWorkPlace"></h3>
                <h3>配偶婚姻状况: <input v-model="spouse.spouseMaritalStatus"></h3>
                <button @click="nextGuide">添加子女</button>
                <button @click="guideShow = 0;nextGuide()">确定提交</button>
            </div>

            <div class="notification" v-if="guideShow == 3">
                <h2>子女信息</h2>
                <h3>已添加{{ childIndex }}名子女</h3>
                <h3>姓名: <input v-model="childArr[childIndex].childName"></h3>
                <h3>性别: <input v-model="childArr[childIndex].childGender"></h3>
                <h3>生日: <input v-model="childArr[childIndex].childBirthday"></h3>
                <h3>身份证号: <input v-model="childArr[childIndex].childIdCardNo"></h3>
                <div>
                    <h3>是否独生子女: {{ childArr[childIndex].isOnlyChild }}</h3>
                    <input type="radio" id="isOnlyChild" value="是" v-model="childArr[childIndex].isOnlyChild" /><label>是</label>
                    <input type="radio" id="notOnlyChild" value="否" v-model="childArr[childIndex].isOnlyChild" /><label>否</label>
                </div>
                <button @click="nextGuide">继续添加其他子女</button>
                <button @click="guideShow = 0;nextGuide()">确定提交</button>
            </div>
        </div>

        <h1>
            <button>学生办理《湖北省生育登记信息</button>
        </h1>
        <h1>
            <button>学生开婚育证明</button>
        </h1>
    </main>
</template>

<script>
export default {
    data() {
        return {
            assureShow: false,
            guideShow: 0,
            name: "",
            code: "",
            deptName: "",
            role: "",
            idCardNo: "",
            gender: "",
            mobilePhone: "",
            maritalStatus: "",
            spouse: {
                marriageDate: "",
                spouseCode: "",
                spouseName: "",
                spouseIdCard: "",
                spouseMobilePhone: "",
                spouseWorkPlace: "",
                spouseMaritalStatus: "",
            },
            child: {
                childName: "",
                childGender: "",
                childBirthday: "",
                childIdCardNo: "",
                isOnlyChild: "",
            },
            childArr: [],
            childIndex: 0
        }
    },
    methods: {
        toggle() {
            this.assureShow = !this.assureShow;
        },
        cancel() {
            this.assureShow = false;
        },
        assure() {
            this.assureShow = false;
            this.guideShow = 1;
        },
        nextGuide() {
            console.log(this.guideShow);
            if (this.guideShow == 0) {
                alert("提交成功");
            } else if (this.guideShow == 1) {
                if (this.maritalStatus == "已婚") {
                    this.guideShow = 2;
                } else {
                    alert("提交成功");
                    this.guideShow = 0;
                }
            } else if (this.guideShow == 2) {
                this.guideShow = 3;
                this.addChild();
            } else if (this.guideShow == 3) {
                this.addChild();
            }
        },
        addChild() {
            this.childArr.push(this.child);
            this.childIndex = this.childArr.length - 1;
        }
    },
    mounted() {
        this.name = localStorage.getItem("userName");
        this.code = localStorage.getItem("userCode");
        this.deptName = localStorage.getItem("deptName");
        this.role = localStorage.getItem("roleName");
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    width: 100%;
    min-height: 100%;
}

.popup {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .7);
}

.notification {
    background: #fff;
    width: 50%;
    height: 80%;
    padding: 1% 6% 1% 6%;
    border-radius: 3%;
}

.notification .buttonBox {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    top: 80%;
}

.notification .buttonBox button {
    width: 20%;
    height: 100%;
}
</style>