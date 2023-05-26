class Point{
//   private x:number | undefined;
//  private  y:number | undefined;

  constructor(private x?: number,private  y?: number){
    // this.x = x;
    // this.y = y;
  }
  draw()
  {
    console.log('X:'+ this.x + 'Y:'+ this.y);
  }
  get X()
  { 
    return this.x;

  }
  setX(value)
  {
    if(value<0)
       throw new Error('value cannot be zero');
       this.x=value;
  }

}
let point=new Point(1, 2);
// point.x=1;
// point.y=2;
// point.x=3;
// let x=point.getX();
let point=point.X;
// point.setX(10);
point.X=10;
point.draw();