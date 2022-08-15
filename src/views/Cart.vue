<template>
    <div id="page">
        <div id="carttitle">
            <h1>Your Cart</h1>
        </div>
        <div id="cartitself" class="container">
            <div class="row" id="rayman">
                <div id="itembox">
                    <h1 id="ccc">Her Broken Heart</h1>
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
}

#carttitle {
    margin: auto;
    width: 200px;
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
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>