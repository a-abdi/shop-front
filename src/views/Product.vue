<template>
    <div class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xls w-full px-2">
        <Suspense>
            <template #default>
                <InfoProduct />
            </template>
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
</template>
 
<script>
    import InfoProduct from '../components/InfoProduct.vue'
    import Loading from '../components/Loading.vue'

    export default {
        components: {
            InfoProduct,
            Loading
        },

        setup () {
            
            return {

            }
        }
    }
</script>