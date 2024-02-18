import {defineStore} from 'pinia'

export let useTeamStore = defineStore('team', {
    state() {
        return {
            name: '',
            spots: 0,
            members: []
        }
    },

    actions: {
        fill() {
            import('@/team.json').then(r => {
                // console.log(r.default)
                let data = r.default;

                this.$patch({ // with $patch we can update multiple state properties at once
                    name: data.name,
                    spots: data.spots,
                    members: data.members
                });
            })
        }
    }
});