<template>
    <div>
        <multiselect
                v-model="value"
                :track-by="id"
                :options="realOptions"
                :multiple="multi"
                :custom-label="getLabelById"
                v-on:input="update"
                :taggable="taggable"
                @tag="addTag"
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
            },
            addApiUrl: {
                type: String,
                default: ''
            },
            addApiResponseKey: {
                type: String,
                default: ''
            },
            taggable: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                realOptions: {

                }
            }
        },
        components: {
            Multiselect
        },
        mounted() {
            this.update(this.value);
            this.realOptions = this.options;
        },
        methods: {
            getLabelById(id) {
                if (typeof(id) === 'object') {
                    return id.name;
                }
                let selectedObject = this.realOptions.filter(option => option.id === id);
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
                    let parsedData = [];
                    if (data.length > 0) {
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
            },
            addTag(newTag) {
                this.$http.post(this.addApiUrl, {name: newTag}).then(response => {
                    let newEnrichTag = response.data[this.addApiResponseKey];
                    this.realOptions.push(newEnrichTag);
                    if(!this.multi) {
                        this.value = newEnrichTag;
                    } else {
                        this.value.unshift(newEnrichTag);
                    }
                    this.update(this.value);
                }, response => {

                });

            },
        }
    }
</script>
