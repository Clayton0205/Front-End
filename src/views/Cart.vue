<template>
    <div id="page">
        <div id="carttitle">
            <h1>Your Cart</h1>
        </div>
        <div id="cartitself" class="container">
            <div class="row">
                <div id="itembox">
                    <div id="item">
                        <p>Broken Heart</p>
                    </div>
                    <button type="button" class="button" id="edit"><i class="bi bi-pencil-fill"></i></button>
                    <button type="button" class="button" id="delete"><i class="bi bi-trash-fill"></i></button>
                </div>
            </div>
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
    overflow: hidden;
    width: 1519px;
    font-family: 'Cinzel', serif;
    color: #fb93ac;
}

#carttitle {
    margin: auto;
    text-align: center;
    border-bottom: 1px solid white;
}

#cartitself {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.row {
    margin: auto;
}

#itembox {
    background-color: white;
    margin: auto;
    width: 750px;
    height: 50px;
    border-left: 2px solid;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-bottom-left-radius: 5px;
    display: flex;
}

#item {
    font-size: 30px;
    text-align: center;
    width: 500px;
    border-right: 1px solid;
}

.button{
    background-color: #7d1b56;
    color: pink;
    text-decoration: none;
}

#edit {
width: 125px;
background-color: #680d43;
}

#delete {
width: 125px;
background-color: #680d43;
}
</style>