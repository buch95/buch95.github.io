$("#flipbook").turn({
    width: 1000,
    height: 500,
    autoCenter: true,
    gradients: true,
}, "center");

$('#next').click(function() {
    $("#flipbook").turn("next");
})

$('#prev').click(function() {
    $("#flipbook").turn("previous");
})