<template>
    <div>
        Компонент кард +
        Аттрибуты:
        {{ attributes }}
        <isogd-document-attributes
            :attributes="attributes"
        />
    </div>
</template>

<script>
import IsogdDocumentAttributes from './IsogdDocumentAttributes.vue';

export default {
    data() {
        return {
            attributes: {
                name: '',
                surname: ''
            }
        }
    },
    components: {
        IsogdDocumentAttributes
    }
}
</script>