<template>
    <div class="newTour">
        <form action="POST" class="newTour__form" @submit.prevent="create">
            <label class="label" for="maxPlayer">Maximum number of players</label>
            <input class="nbInput" v-model="settings.maxPlayer" type="number" step="1" min="2" max="22" name="maxPlayer">
            <label class="label" for="bankroll">Players starting bankroll</label>
            <input class="nbInput" v-model="settings.bankroll" type="number" step="100" min="100" max="1000000" name="bankroll">
            <label class="label" for="blind">Starting little blind</label>
            <input class="nbInput" v-model="settings.blind" type="number" step="5" min="5" max="10000" name="blind">
            <button class="btn" type="submit">CREATE TOURNAMENT</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewTour',
    data() {
        return {
            settings: {
                maxPlayer: 6,
                blind: 10,
                bankroll: 1000,
            }
        }
    },
    methods: {
        create() {
            this.$store.dispatch('createTournament', this.settings)
        }
    }
}
</script>