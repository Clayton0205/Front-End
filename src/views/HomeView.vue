<template>
    <div id="page">
        <div id="blurr">
            <div id="title">
                <h1 id="HomeTitle">Home of Stans</h1>
            </div>
            <div id="pic">
                <img src="../assets/de268hn-0a55c704-06de-4ae7-ab7f-4d87a1dd093e.png" id="crown">
            </div>
        </div>

    </div>
</template>

<style scoped>
*a {
    margin: 0;
    padding: 0;
}

#page {
    background: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(../assets//aesthetic-pink.jpg);
    width: 100%;
    height: 705px;
}

#pic {
    display: flex;
    justify-content: center;
}

#crown {
    margin-top: 8px;
    width: 500px;
    height: 590px;

}

#title {
    text-align: center;
}

#blurr {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100%;
}

#HomeTitle{
    padding-top: 20px;
    /* font-family: 'Roboto', sans-serif; */
    color: #fb93ac;
    font-family: Gabriola;
    font-size:  50px;
    font-family: 'Cinzel', serif;
}
</style>