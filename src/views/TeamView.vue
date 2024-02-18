<script setup>
    import TeamHeader from '@/components/Teams/TeamHeader.vue';
    import TeamMembers from '@/components/Teams/TeamMembers.vue';
    import TeamFooter from '@/components/Teams/TeamFooter.vue';
    import team from '@/team.json';
    import {provide} from 'vue'

    provide('team', team)

    // console.log(team.members[0])
</script>

<template>
    <TeamHeader />

    <div class="place-self-center flex flex-col gap-y-3" style="width: 725px;">
        <TeamMembers />
    </div>

    <TeamFooter />
</template>