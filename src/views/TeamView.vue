<script setup>
    import TeamMember from '@/components/Teams/TeamMember.vue';
    import TeamHeader from '@/components/Teams/TeamHeader.vue';
    import team from '@/team.json';

    // console.log(team.members[0])
</script>

<template>
    <TeamHeader :team="team" />

    <div class="place-self-center flex flex-col gap-y-3" style="width: 725px;">
        <table class="table-fixed border-spacing-2 border-separate">
            <thead>
                <th class="text-left px-6 py-2">Name</th>
                <th class="text-left px-6 py-2">Email</th>
                <th class="text-left px-6 py-2">Status</th>
            </thead>
            <tbody>

                <TeamMember 
                    v-for="member in team.members" 
                    :key="member.id" 
                    :name="member.name" 
                    :email="member.email" 
                    :status="member.status" 
                />
            </tbody>
        </table>
        <p 
            class="text-right text-gray-600 italic"
            v-show="team.members.length === team.spots"
        >
            There are no remaining team spots. Upgrade to add more.
        </p>
    </div>

    <footer class="mt-12 bg-gray-100 py-4 text-center">
        <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
    </footer>
</template>