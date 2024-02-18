<script setup>
    import TeamHeader from '@/components/Teams/TeamHeader.vue';
    import TeamMembers from '@/components/Teams/TeamMembers.vue';
    import TeamFooter from '@/components/Teams/TeamFooter.vue';
    // import team from '@/team.json';
    import {provide} from 'vue'
    import { useTeamStore } from '@/stores/TeamStore';

    let team = useTeamStore();

    provide('team', team)

    // console.log(team.members[0])

    team.fill()
</script>

<template>
    <TeamHeader />

    <div class="place-self-center flex flex-col gap-y-3" style="width: 725px;">
        <TeamMembers />
    </div>

    <TeamFooter />
</template>