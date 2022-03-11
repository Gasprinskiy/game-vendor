export default {
    props: {
        chosenOptions: {
            type: Array,
            required: true
        },
    },
    methods: {
        removeOpt(option){
            let deletedOption;
            if(Array.isArray(option)) {
                deletedOption = option;
            } else {
                deletedOption = this.options
                    .filter(opt => opt.value === option)
                    .map(opt => opt.value)
            }

            const set = new Set(deletedOption)
            this.$emit('update:chosenOptions', this.chosenOptions.filter(opts => !set.has(opts)))

            deletedOption.forEach(element => {
                this.options.forEach(opt => {
                    if(opt.value === element){
                       opt.isChosen = false
                       this.$emit('update:options', this.options)
                    }
                })
            });
            
        },
        pushchosenOptions(opt){
            opt.isChosen = !opt.isChosen
            if(opt.isChosen){
                this.chosenOptions.push(opt.value)
                this.$emit('update:chosenOptions', this.chosenOptions)
            } else {
                this.$emit('update:chosenOptions', this.chosenOptions.filter(opts => opts !== opt.value))
            }
            this.$emit('update:options', this.options)
        },
    }
}