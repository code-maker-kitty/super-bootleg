var canvas=new fabric.Canvas("myCanvas");
hero_x=10;
hero_y=10;
block_image_width=30;
block_image_height=30;
var hero_object="";
var block_image_object="";
function hero_update(){
    fabric.Image.fromURL("https://doc-00-0g-docs.googleusercontent.com/docs/securesc/197tm47srd56t2vncfhcl3lm67jhqpi6/rs0qgcm2d6h65sbm8a2qnvo445ajg6nr/1618092375000/12130465111352149128/02173251812393853356/1VDntS8HZKpir-9OIMrV7INLOQili4Pyz?authuser=0",function(Img){
        hero_object=Img;
        hero_object.scaleToWidth(150);
        hero_object.scaleToHeight(140);
        hero_object.set({
            top:hero_y,
            left:hero_x
        });
canvas.add(hero_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    })
}