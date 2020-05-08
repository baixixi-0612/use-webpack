import $ from 'jquery'
import './css/style.less'
import './css/style.css'
import './css/style.scss'
$(function () {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', 'lightblue')
})