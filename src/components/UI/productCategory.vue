<template>
    <div 
    class="game-type"
    :class="defineColor(text)"
    :style="{width: ((text.length + 1) * 6) + 30 + 'px'}"
    >
        <span>{{text}}</span>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    methods: {
        defineColor(text){
            const lowerCasedText = text.toLowerCase()
            switch(lowerCasedText){
                case 'action rpg' : return 'blue600 bg-blue50'
                case 'multiplayer rpg': return 'red600 bg-red50'
                case 'action': return 'orange600 bg-orange50'
                case 'shooter': return 'primary600 bg-primary50'
                case 'card game': return 'green600 bg-green50'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .game-type {
        padding: 2px 8px;
        border-radius:  $radius4;
        text-align: center;
        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            &::before {
                content: '.';
                transform: scale(3);
                display: flex;
                margin-top: -20px;
            }
        }
    }
</style>