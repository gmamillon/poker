<template>
    <div class="table">
        <Vilain v-for="vilain in vilains" :key="vilain.name" :vilain="vilain"/>
        <Hand :hand="hand"/>
        <River :river="river"/>

    </div>
</template>

<script>
import {mapState} from 'vuex'
import Vilain from '@/components/Vilain.vue'
import Hand from '@/components/Hand.vue'
import River from '@/components/River.vue'

export default {
    name: 'Table',
    components: {
        Vilain,
        Hand,
        River,
    },
    computed: {
        ...mapState['vilains', 'hand', 'river']
    }
}
</script>