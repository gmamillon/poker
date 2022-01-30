<template>
    <div class="table">
        <Vilain/>
        <Hand/>
        <River/>

    </div>
</template>

<script>
import Vilain from '@/components/Vilain.vue'
import Hand from '@/components/Hand.vue'
import River from '@/components/River.vue'

export default {
    name: "Table",
    components: {
        Vilain,
        Hand,
        River,
    },
}
</script>