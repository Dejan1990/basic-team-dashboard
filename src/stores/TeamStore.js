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
                // let data = r.default;

                this.$state = r.default // replace the state entirely
                // this.$state = {
                //     name: data.name,
                //     spots: data.spots,
                //     members: data.members
                // }
            })
        }
    }
});