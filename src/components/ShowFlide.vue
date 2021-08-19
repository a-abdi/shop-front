<template>
    <div class="my-6 flex">
        <div class="text-gray-600 mr-4">
            <slot />
        </div>
        <div class="text-purple-600">
            {{ value }}
        </div> 
    </div>
</template>

<script>
export default {
    props: {
        value: String,
    }
}
</script>