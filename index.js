// Add your Circle class here

class Circle {

    constructor(radius){
      this.radius = radius;
        }
        
        // set diameter(){
        //     this.diameter = diameter;
        // } 

        get diameter(){
            return `${this.radius}` * 2
        } 
       
        // set circumference(){
        //     this.circumference = this.circumference;
        // }
        get circumference(){
             return Math.PI * `${this.diameter}`
        }

        get area(){
            return Math.PI  * (this.radius)**2
        }

        set diameter(diameter) {
            this.radius = diameter / 2
        }
        // set radius(radius){
        //     this.radius = radius;
        // }
        set circumference(circumference) {
            this.radius = circumference / (Math.PI * 2)
        }
   }
   