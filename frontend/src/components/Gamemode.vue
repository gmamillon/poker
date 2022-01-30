<template>
    <div class="gamemode">
        <form action="POST" class="gamemode__join" @submit.prevent="joinTournament">
            <label for="code" class="gamemode__label">Join a tournament</label>
            <input class="gameode__input" v-model="code" type="text" name="code" placeholder="Code"><button type="submit" class="gamemode__btn">JOIN</button>
        </form>
        <router-link to="/new-tournament" title="Create Tournament">CREATE TOURNAMENT</router-link>
    </div>
</template>

<script>

export default {
    name: 'Gamemode',
    data() {
        return {
            code: '',
        }
    },
    methods: {
        joinTournament() {
            this.$store.dispatch('joinTournament', this.code)
        },
    }
}
</script>