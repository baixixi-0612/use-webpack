import $ from 'jquery'
$(function () {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', 'lightblue')
})