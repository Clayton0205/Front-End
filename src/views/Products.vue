<template>
    <div id="page">
        <div v-if="products">
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
                            <p id="price">R{{ product.price }}</p>
                        </div>
                    </div>
                </div>
            </router-link>

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
    height: 740px;
    border: 1px solid;
    border-radius: 10px;
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

#products {
    height: 150px;
    font-size: 13px;
}

#price {
    font-size: 80px;
}

#else {
    text-align: center;
}
</style>