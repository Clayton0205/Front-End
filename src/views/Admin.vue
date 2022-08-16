<template>
    <div id="page">
        <br>
        <div class="container" id="register">
            <h1>Don't have an acount? <br> Register here!!</h1>
            <br>
            <form>
                <div class="card" id="card">
                    <div class="row">
                        <label for="Fullname">Fullname</label>
                        <input type="text" id="fullname" v-model="fullname">
                    </div>
                    <div class="row">
                        <label for="Email">Email</label>
                        <input type="text" id="email" v-model="email">
                    </div>
                    <div class="row">
                        <label for="Role">Role</label>
                        <select id="role" v-model="userRole">
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <div class="row">
                        <label for="Number">Phone Number</label>
                        <input type="text" id="number" v-model="phone_number">
                    </div>
                    <div class="row">
                        <label for="Password">Password</label>
                        <input type="text" id="password" v-model="userpassword">
                    </div>
                    <div class="row">
                        <label for="Date">Date Joined</label>
                        <input type="date" id="join" placeholder="Join Date" v-model="join_date">
                    </div>
                    <div class="row">
                        <button type="button" @click="userRegister" id="register">Register</button>
                    </div>
                </div>
            </form>
        </div>
        <br>
        <div class="container" id="login">
            <h1>Already have an acount? <br> login here!!</h1>
            <br>
            <form @submit="login">
                <div class="card" id="card">
                    <div class="row">
                        <label for="Email">Email</label>
                        <input type="text" id="email" v-model="email">
                    </div>
                    <div class="row">
                        <label for="Password">Password</label>
                        <input type="text" id="password" v-model="userpassword">
                    </div>
                    <div class="row">
                        <button type="button" @click="userLogin()" id="login">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
          userpassword: '',
          email: '',
          fullname: '',
          userRole: '',
          phone_number: '',
          join_date: ''
        }
    },
    methods: {
        userLogin() {
            let payload = {
                email: this.email,
                userpassword: this.userpassword,
            }
            this.$store.dispatch('userLogin',payload)
        },
        userRegister() {
            let payload = {
                fullname: this.fullname,
                email: this.email,
                userpassword: this.userpassword,
                userRole: this.userRole,
                phone_number: this.phone_number,
                join_date: this.join_date
            }
            this.$store.dispatch('userRegister',payload)
        }
    },
    computed: {
        users() {
            return this.$store.state.user
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#page {
    background-color: #7d1b56;
    padding-bottom: 10px;
    width: 100vw;
    font-family: 'Cinzel', serif;
    overflow: hidden;
    width: 1519px;
    color: #fb93ac;
}

#register {
    margin: auto;
    width: 500px;
    text-align: center;
    color: #fb93ac;
}

#card {
    font-size: 20px;
    color: #fb93ac;
}

#fullname {
    text-align: center;
    height: 40px;
    color: #fb93ac;
}

#email {
    text-align: center;
    height: 40px;
    color: #fb93ac;
}

#role {
    text-align: center;
    height: 40px;
    color: #fb93ac;
}

#number {
    text-align: center;
    height: 40px;
    color: #fb93ac;
}

#password {
    text-align: center;
    height: 40px;
    color: #fb93ac;
}

#join {
    text-align: center;
    height: 40px;
    color: #fb93ac;
}

#submit {
    text-align: center;
    height: 40px;
    background-color: #680d43;
}

#login {
    margin: auto;
    width: 500px;
    color: #fb93ac;
    text-align: center;
}
</style>
