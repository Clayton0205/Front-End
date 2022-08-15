<template>
    <div id="page">
        <div v-if="products">
            <div v-for="product in products" :key="product">
                <h1>{{ product.title }}</h1>
                <p>{{ product.description }} AND {{ product.price }}</p>
            </div>
        </div>
        <div v-else>
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
    height: 100vh;
    overflow: hidden;
    width: 1519px;
}
</style>