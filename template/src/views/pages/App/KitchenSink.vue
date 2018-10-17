<template>
    <div>
        <h1>Kitchen Sink</h1>

        <input-multi-select
            :options="[{id: 1, name: 'text'}, {id: 2, name: 'text1'}]"
            v-model="valueSingle"
        />

        <input-multi-select
                :multi="true"
                :options="[{id: 1, name: 'text'}, {id: 2, name: 'text1'}]"
                v-model="valueMulti"
        />
    </div>
</template>

<script>
    import InputMultiSelect from '../../components/input/MultiSelect';

    export default {
        components: {
            InputMultiSelect
        },
        data() {
            return {
                valueSingle: {id: 2, name: 'text1'},
                valueMulti: [{id: 2, name: 'text1'}],
            }
        }
    }
</script>