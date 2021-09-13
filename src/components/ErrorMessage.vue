<template>
     <div v-if="error" class="text-center py-1 px-2 rounded-md text-white bg-red-600">
        {{ error.message }}
    </div>
</template>

<script>
export default {
    props: {
        error: Object
    }
}
</script>