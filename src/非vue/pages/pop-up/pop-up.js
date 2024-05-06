var player = new SVGA.Player('#demoCanvas');
var parser = new SVGA.Parser('#demoCanvas');
parser.load('your_svga_file.svga', function (videoItem) {
    player.setVideoItem(videoItem);
    player.startAnimation();
});