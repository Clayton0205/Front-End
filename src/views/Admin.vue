<template>
    <div id="page">
        <br>
        <div class="container" id="register">
            <h1>Don't have an acount? <br> Register here!!</h1>
            <br>
            <form action="">
                <div class="card" id="card">
                    <div class="row"><input type="text" placeholder="Fullname" id="fullname"></div>
                    <div class="row"><input type="text" placeholder="Email" id="email"></div>
                    <div class="row"><select id="role">
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select></div>
                    <div class="row"><input type="text" placeholder="Phone Number" id="number"></div>
                    <div class="row"><input type="text" placeholder="Password" id="password"></div>
                    <div class="row"><input type="date" id="join" placeholder="Join Date"></div>
                    <div class="row"><button type="submit" id="submit">Register</button></div>
                </div>
            </form>
        </div>
        <br>
        <div class="container" id="login">
            <h1>Already have an acount? <br> login here!!</h1>
            <br>
            <form action="">
                <div class="card" id="card">
                    <div class="row"><input type="text" placeholder="Fullname" id="fullname"></div>
                    <div class="row"><input type="text" placeholder="Password" id="password"></div>
                    <div class="row"><button type="submit" id="submit">Login</button></div>
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>
* {
    margin: 0;
    padding: 0;
}

#page {
    background-color: #7d1b56;
    width: 100vw;
    height: 100vh;
    font-family: 'Cinzel', serif;
    overflow: hidden;
    width: 1519px;
}

#register {
    margin: auto;
    width: 500px;
    text-align: center;
}

#card {
    font-size: 20px;
}

#fullname {
    text-align: center;
    height: 40px;
}

#email {
    text-align: center;
    height: 40px;
}

#role {
    text-align: center;
    height: 40px;
}

#number {
    text-align: center;
    height: 40px;
}

#password {
    text-align: center;
    height: 40px;
}

#join {
    text-align: center;
    height: 40px;
}

#submit {
    text-align: center;
    height: 40px;
}

#login {
    margin: auto;
    width: 500px;
    text-align: center;
}
</style>
