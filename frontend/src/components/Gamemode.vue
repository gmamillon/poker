<template>
    <div class="gamemode">
        <form action="POST" class="gamemode__join">
            <label for="code" class="gamemode__label">Join a tournament</label>
            <input class="gameode__input" type="text" name="code" placeholder="Code"><button class="gamemode__btn">JOIN</button>
        </form>
        <button class="gamemode__btn" @click.prevent="createTournament">CREATE TOURNAMENT</button>
    </div>
</template>

<script>

export default {
    name:"Gamemode"
}
</script>