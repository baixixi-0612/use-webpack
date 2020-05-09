import $ from 'jquery'
import './css/style.less'
import './css/style.css'
import './css/style.scss'
import App from './components/App.vue'
import Vue from 'vue'
$(function () {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', 'lightblue')
})

const vm = new Vue({
    el: '#box',
    render: h => h(App),
})