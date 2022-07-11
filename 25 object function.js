array = [{x:  2, y: 3},{x: -1, y: 6},{x:  1, y: 8},];
console.log(array[0],array[1],array[2])
        
BaseObject = {x,
              y,
              sum: function (){ 
              return this.x + this.y;
              },
            };
        
for (let i = 0; i < array.length; i++){
    var{x, y} = array[i];
    console.log(x + ' + ' + y + ' =');
    BaseObject.x=x
    BaseObject.y=y
    console.log(BaseObject.sum());
};        