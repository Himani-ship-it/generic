function make2Darray (cols, rows){
    let arr = new Array(cols);
    for(let i= 0; i< arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

let cols = 10;
let rows = 10;
let res = 20;
let next = make2Darray(cols, rows);
let grid = make2Darray(cols, rows);

for (let i=0; i< cols; i++){
    for(let j=0; j< rows; j++){
        grid[i][j] = Math.floor(Math.random()*2);
    }
} 

function setup() {
    createCanvas(res*cols,res*rows);
    background(255);
    stroke(255);
}

function draw() {
    for (let i=0; i< cols; i++){
        for(let j=0; j< rows; j++){
            if(grid[i][j] === 1){
                let x = i*res;
                let y = j*res;
                fill(0);
                rect(x,y,res, res);            
            }    
            else if(grid[i][j]===0){
                let x = i*res;
                let y = j*res;
                fill(255);
                rect(x,y,res, res); 
            }  
        }
    }
    ruleSet();
    grid = next;
}
    
let sum;
let edgeSum;
let cornerSum;

function ruleSet(){
    //countNeighbours();
    for(i=1; i<cols-1; i++)  {
        sum =  grid[i-1][0] + grid[i+1][0] + grid[i-1][1] + grid[i][1] + grid[i+1][1];
        edgeSum = grid[i-1][rows-2] + grid[i][rows-2] + grid[i+1][rows-2] + grid[i-1][rows-1] + grid[i+1][rows-1];

        if(sum==3) next[i][0] =1;
            else if(sum>3 || sum<2) next[i][0] = 0;
            else if(sum ==2 && grid[i][0] ==1) next[i][0]=1;
            else if(sum ==2 && grid[i][0] ==0) next[i][0]=0;

        if(edgeSum==3) next[i][rows-1] =1;
            else if(edgeSum>3 || edgeSum<2) next[i][rows-1] = 0;
            else if(edgeSum ==2 && grid[i][rows-1] ==1) next[i][rows-1]=1;
            else if(edgeSum ==2 && grid[i][rows-1] ==0) next[i][rows-1]=0;
        
    }
    for(j=1; j<rows-1; j++)  {
        sum = grid[0][j-1] + grid[1][j-1] + grid[1][j] + grid[0][j+1] + grid[1][j+1];
        edgeSum = grid[cols-2][j-1] + grid[cols-1][j-1] + grid[cols-2][j] + grid[cols-2][j+1] + grid[cols-1][j+1];
        
        if(sum==3) next[0][j] =1;
        else if(sum>3 || sum<2) next[0][j] = 0;
        else if(sum ==2 && grid[0][j] ==1) next[0][j]=1;
        else if(sum ==2 && grid[0][j] ==0) next[0][j]=0;

        if(edgeSum==3) next[cols-1][j] =1;
        else if(edgeSum>3 || edgeSum<2) next[cols-1][j] = 0;
        else if(edgeSum ==2 && grid[cols-1][j] ==1) next[cols-1][j]=1;
        else if(edgeSum ==2 && grid[cols-1][j] ==0) next[cols-1][j]=0
    }

    for(i=1; i<cols-1; i++){
        for(j=1; j<rows-1; j++){
            sum = grid[i-1][j-1]+ grid[i][j-1]+ grid[i+1][j-1]+ grid[i-1][j] + grid[i+1][j]+ grid[i-1][j+1] + grid[i][j+1]+ grid[i+1][j+1];
            if(sum==3) next[i][j] =1;
            else if(sum>3 || sum<2) next[i][j] = 0;
            else if(sum ==2 && grid[i][j] ==1) next[i][j]=1;
            else if(sum ==2 && grid[i][j] ==0) next[i][j]=0;          
            
        }
    }

    con1 = grid[1][0] + grid[0][1] + grid[1][1];
    con2 = grid[cols-2][0] + grid[cols-1][1] + grid[cols-2][1];
    con3 = grid[cols-2][rows-1] + grid[cols-2][rows-2] + grid[cols-1][rows-2];
    con4 = grid[0][rows-2] + grid[1][rows-2] + grid[1][rows-1];

    if(con1==3) next[0][0] =1;
    else if(con1>3 || con1<2) next[0][0] = 0;
    else if(con1 ==2 && grid[0][0] ==1) next[0][0]=1;
    else if(con1 ==2 && grid[0][0] ==0) next[0][0]=0;
    
    if(con2==3) next[cols-1][0] =1;
    else if(con2>3 || con2<2) next[cols-1][0] = 0;
    else if(con2 ==2 && grid[cols-1][0] ==1) next[cols-1][0]=1;
    else if(con2 ==2 && grid[cols-1][0] ==0) next[cols-1][0]=0;

    if(con3==3) next[cols-1][rows-1] =1;
    else if(con3>3 || con3<2) next[cols-1][rows-1] = 0;
    else if(con3 ==2 && grid[cols-1][rows-1] ==1) next[cols-1][rows-1]=1;
    else if(con3 ==2 && grid[cols-1][rows-1] ==0) next[cols-1][rows-1]=0;

    if(con4==3) next[0][rows-1] =1;
    else if(con4>3 || con4<2) next[0][rows-1] = 0;
    else if(con4 ==2 && grid[0][rows-1] ==1) next[0][rows-1]=1;
    else if(con4 ==2 && grid[0][rows-1] ==0) next[0][rows-1]=0;


    return next;
}
ruleSet();
