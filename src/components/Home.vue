<template>
    <div>
        <isogd-document-card></isogd-document-card>
    </div>
</template>

<script>
import IsogdDocumentCard from './IsogdDocumentCard.vue';

export default {
    data() {
        return {
            results: [],
        }
    },
    components: {
        IsogdDocumentCard
    }
}
</script>