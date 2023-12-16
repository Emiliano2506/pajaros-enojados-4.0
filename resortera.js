class Resortera extends PacajaPalitos{
    constructor(x,y,a,at){
        super(x,y,a,at);
        this.image = loadImage("./Imagenes/ResorteraBien.png");
    }
    display(){
        super.display();
        strokeWeight(4)
        line(68,300,85,300);
        line(55,300,68,300)
    }
}