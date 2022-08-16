<template>
    <div id="page">
        <br>
        <div id="title">
            <h1>We will get back to you when we can</h1>
        </div>
        <br>
        <form action="">
            <div class="container" id="contact">
                <div class="card">
                    <div class="row">
                        <label for="Fullname">Fullname</label>
                        <input type="text" id="name"></div>
                    <div class="row">
                        <label for="Email">Email</label>
                        <input type="text" id="email"></div>
                    <div class="row">
                        <label for="Message">Message</label>
                        <textarea name="message" id="message"></textarea></div>
                    <div class="row">
                        <button type="submit" id="send">Send</button></div>
                </div>
            </div>
        </form>
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
    overflow: hidden;
    width: 1519px;
    font-family: 'Cinzel', serif;
    color: #fb93ac;
}

#title {
    text-align: center;
}

#contact {
    margin: auto;
    width: 500px;
    font-size: 20px;
    color: #fb93ac;
}

#name {
    text-align: center;
    height: 40px;
}

#email {
    text-align: center;
    height: 40px;
}

#message {
    text-align: center;
    height: 100px;
}

#send {
    text-align: center;
    height: 40px;
    color: #fb93ac;
    background-color: #680d43;
}

label{
    text-align: center;
}

</style>