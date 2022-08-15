<template>
    <div id="page">
        <div v-if="products">
            <div class="container-fluid">
                <div v-for="product in products" :key="product" id="box">
                    <div class="row">
                        <h3>{{ product.title }}</h3>
                        <img :src="product.image" id="image">
                        <br>
                        <p>{{ product.description }}</p>
                        <p>R{{ product.price }}</p>
                    </div>

                </div>
            </div>
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
}

.container-fluid {
    display: flex;
    flex-flow: row wrap;
}


#box {
    background-color: white;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 500px;
    height: 580px;
    border: 1px solid black;
    text-align: center;
}

#image {
    margin: auto;
    margin-bottom: 20px;
    width: 400px;
    height: 400px;
}

#else{
    text-align: center;
}
</style>