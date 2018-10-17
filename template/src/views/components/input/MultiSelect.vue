<template>
    <div>
        <multiselect
                v-model="value"
                :track-by="id"
                :options="options"
                :multiple="multi"
                :custom-label="getLabelById"
                v-on:input="update"
        />
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect';

    export default {
        props: {
            value: {
                type: Object | Array,
                default: {}
            },
            options: {
                type: Object | Array,
                required: true
            },
            multi: {
                type: Boolean,
                default: false,
            }
        },
        components: {
            Multiselect
        },
        mounted() {
            this.update(this.value);
        },
        methods: {
            getLabelById(id) {
                if (typeof(id) === 'object') {
                    return id.name;
                }
                let selectedObject = this.options.filter(option => option.id === id);
                if (selectedObject[0]) {
                    return selectedObject[0].name;
                }
                return '';
            },
            update(data) {
                if (!this.multi) {
                    if (data.id) {
                        this.$emit('input', data.id);
                    } else {
                        this.$emit('input', null);
                    }
                } else {
                    console.log(data);
                    let parsedData = [];
                    if(data.length > 0) {
                        data.forEach(function (item) {
                            if (typeof(item) === 'object') {
                                parsedData.unshift(item.id);
                            } else {
                                parsedData.unshift(item);
                            }
                        });
                        this.$emit('input', Array.from(new Set(parsedData)));
                    } else {
                        this.$emit('input', parsedData);
                    }
                }
            }
        }
    }
</script>
