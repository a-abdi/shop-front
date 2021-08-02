<template>
    <div class="text-xs md:text-sm 2xl:text-lg w-full px-2 my-2 md:my-4">
        <Suspense>
            <template #default>
                <DetalsProduct />
            </template>
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
</template>
 
<script>
    import DetalsProduct from '../components/DetalsProduct.vue'
    import Loading from '../components/Loading.vue'

    export default {
        components: {
            DetalsProduct,
            Loading
        },
    }
</script>