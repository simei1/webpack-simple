<template>
    <label>
        <template v-if="label">{{label}}</template>
        <select v-on:input="update($event.target.value)" v-model="value">
            <option v-if="allowEmpty" :value="null"></option>
            <option
                    v-for="option in options"
                    v-bind:value="option.id"
            >
                {{option.name}}
            </option>
        </select>

        <template v-if="errors !== null && errors.length > 0">
            <ul class="form-errors">
                <li v-for="error in errors">
                    {{error}}
                </li>
            </ul>
        </template>
    </label>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
            options: {
                type: Object|Array,
                default: []
            },
            label: {
                type: String,
                default: ''
            },
            readonly: {
                type: Boolean,
                default: false
            },
            allowEmpty: {
                type: Boolean,
                default: false,
            },
            errors: {
                type: Object | Array,
                default: function () {
                    return {};
                }
            },
        },
        watch: {
            value: function(newVal) {
                this.update(parseInt(value.id));
                this.value = value.id;
            }
        },
        methods: {
            update(data) {
                this.errors = [];
                if (!this.readonly) {
                    this.$emit('input', data);
                }
            }
        }
    }
</script>
