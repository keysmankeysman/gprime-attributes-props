<template>
    <div v-if="attributes">
        <h1>Компонент аттрибутес</h1>
        <p>Имя</p>
        <input type="text" v-model="attributes.name">
        <p>Фамилия</p>
        <input type="text" v-model="attributes.surname">
    </div>
</template>

<script>

export default {
    data() {
        return {
            // attributes: {
            //     name: '',
            //     surname: ''
            // }
        }
    },
    props: {
        attributes: Object,
    },
    components: {
        
    }
}
</script>