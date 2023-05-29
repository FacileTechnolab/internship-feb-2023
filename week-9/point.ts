export class Point{
    //   private x:number | undefined;
    //  private  y:number | undefined;
    
      constructor(private _x?: number,private  _y?: number){
        // this.x = x;
        // this.y = y;
      }
      draw()
      {
        console.log('X:'+ this._x + 'Y:'+ this._y);
      }
      //property
      // get x()
      // { 
      //   return this._x;
    
      // }
      // set x(value)
      // {
      //   if(value < 0)
      //      throw new Error('value cannot be zero');
      //      this._x=value;
      // }
    
    }