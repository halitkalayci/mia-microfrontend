import {createApp} from "vue";

import './index.css'

import Counter from "./Counter.vue"

export default function(element)
{
    createApp(Counter).mount(element);
}