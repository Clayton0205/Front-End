<template>
    <div id="page">
        <div v-if="products">
<<<<<<< HEAD
            <router-link to="/">
                <div class="container-fluid">
                    <div v-for="product in products" :key="product" id="box">
                        <div class="row">
                            <h3 id="title">{{ product.title }}</h3>
                        </div>
                        <div class="row"></div>
                        <img :src="product.image" id="image">
                        <div class="row">
                            <p id="products">{{ product.description }}</p>
                        </div>
                        <div class="row">
=======
            <router-link to="/about">
                <div class="container-fluid">
                    <div v-for="product in products" :key="product" id="box">
                        <div class="row">
                            <div id="title">
                                <h3>{{ product.title }}</h3>
                            </div>
                            <img :src="product.image" id="image">
                            <br>
                            <div id="desc">
                                <p>{{ product.description }}</p>
                            </div>
>>>>>>> 7f7881bc146047b3e96a4412c34ec6e4a77f6434
                            <p id="price">R{{ product.price }}</p>
                        </div>
                    </div>
                </div>
            </router-link>
<<<<<<< HEAD

=======
>>>>>>> 7f7881bc146047b3e96a4412c34ec6e4a77f6434
        </div>
        <div v-else id="else">
            <h1>Mental Breakdown</h1>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('getProducts')
    },
    computed: {
        products() {
            return this.$store.state.products
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
    width: 100vw;
    overflow: hidden;
    width: 1519px;
    font-family: 'Cinzel', serif;
    color: #fb93ac;
}

a{
    text-decoration: none;
    color: rgb(255, 111, 135);
}

.container-fluid {
    display: flex;
    flex-flow: row wrap;
}


#box {
    background-color: white;
    margin: auto;
    margin-top: 10px;
    width: 500px;
<<<<<<< HEAD
    height: 740px;
    border: 1px solid;
    border-radius: 10px;
=======
    height: 650px;
    border: 1px solid black;
>>>>>>> 7f7881bc146047b3e96a4412c34ec6e4a77f6434
    text-align: center;
}

#title {
    text-decoration: underline;
    height: 70px;
}

#image {
    margin: auto;
    margin-bottom: 20px;
    width: 400px;
    height: 400px;
}

<<<<<<< HEAD
#products {
    height: 150px;
    font-size: 13px;
}

#price {
    font-size: 80px;
}

=======
>>>>>>> 7f7881bc146047b3e96a4412c34ec6e4a77f6434
#else {
    text-align: center;
}

a {
    text-decoration: none;
    color: #fb93ac;
}

#title {
    text-decoration: underline;
    height: 70px;
}

#desc{
    height: 100px;
    font-size: 11px;
    margin-bottom: 20px;
}

#price{
    font-size: 30px;
}
</style>