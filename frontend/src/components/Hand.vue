<template>
    <div class="hand">
        <div class="hand__cards"></div>
    </div>
</template>

<script>
export default {
    name: 'Hand',
    props: {
        hand: {
            type: Object,
            required: true
        }
    }
}
</script>