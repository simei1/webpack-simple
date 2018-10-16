<template>
    <label>
        <template v-if="label">{{label}}</template>

        <input v-if="type === 'text' || type === 'password' || type === 'email' || type === 'number'"
               v-bind:type="type"
               v-bind:placeholder="placeholder"
               v-on:input="update($event.target.value)"
               v-model="value"
               v-bind="{'readonly': readonly}"
        >

        <textarea
                v-if="type === 'textarea'"
                v-model="value"
                v-on:input="update($event.target.value)"
                v-bind="{'readonly': readonly}"
        >
        </textarea>

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
            type: {
                type: String|Text,
                default: 'text',
            },
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            readonly: {
                type: Boolean,
                default: false
            },
            errors: {
                type: Object | Array,
                default: function() {
                    return {};
                }
            },
        },
        methods: {
            update(data) {
                this.errors = [];
                if(!this.readonly) {
                    this.$emit('input', data);
                }
            }
        }
    }
</script>