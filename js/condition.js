/*let a = 0, b = 6
//if statment
if(a!== 0){
    let c = b / a
    console.log("b/a is:",c)
}else {
    console.log('Division par zero est impossible')
}
let a = 0, b = 6
//if statment
if(a!== 0){
    let c = b / a
    console.log("b/a is:",c)
}else if(a < 0) {
    console.log('A doit etre un entier possitive')
}else{
    console.log('Division par zero est impossible')
}*/
/*// declarer un tableau
let tab = (1,2,3,4,5,6,7,8,9,10)
for (let i =0; i <= 9 ; i++){
    console.log(tab(i))
        
    }
    let tab = (1,2,3,4,5,6,7,8,9,10)
for (let i =0; i <= tab,length-1; i++){
    console.log(tab(i))
    }
// For loop
for(let i=0;i<tab1.length;i++){
    som = som +tab(i) // som +=tab(i)
    console;log("i= ",i,"som =",som)
}
console.log("som is :",som)
//pour chercher la moyenne
console.log("la moyenne est :",som/tab1.length)*/

// while loop
/*let som = 0
let i = 0
let tab1 =[0,1,5,8]
while(i < tab1.length) {
    som = som + tab1[i] // som +=tab1[i]
    i++ //  i+=1 ou i=i+i
    console.log("i=",i,"som =", som)
}
console.log("som is:",som)*/

/*let i = 0
let som = 0
let tab1 =[0,1,5,8]
do{
    console.log("i =",i)
    som = som + tab1[i] // som +=tab1[i]
     console.log("som =", som)
     i++
}while(i< tab1.length)
console.log("som is:",som)
//edabite.js*/
//Are the Numbers equal?
//exo1
/*function isSamNum(num1,num2 ){
    //if(num1===num2){ 
        //return true
    //}else return false
    return num1 === num2
}
console.log(isSamNum(4,6))
//exo2
function equal(a,b,c){
    if(a === b && c === b && a == c){
        return true
    }else return false
}
console.log(equal(1,2,3))
//exo3
function getAbsSum(tab){
    let som =0
    let i = 0

    for( i=0 ;i < tab.length ;i++ ){
        if(tab[i]<0){
            tab[i]=tab[i]*-(1)
        }
         som= som+tab[i]
         console.log("i=",i,"sum =", som)
    }
    return som
}
    let tab1 =[2,-1,4,8,10]
    console.log("getAbsSum (tab):", getAbsSum(tab1))

    let tab2 =[-3,-4,-10,-2,-3]
    console.log("getAbsSum (tab):", getAbsSum(tab2))

    let tab3 =[2,4,6,8,10]
    console.log("getAbsSum (tab):", getAbsSum(tab3))

    let tab4 =[-1]
    console.log("getAbsSum (tab):", getAbsSum(tab4))*/
//exo4

function minuteConvert(m){
    return m * 60

}
console.log(minuteConvert(3))
 //exo 5
function area(h,w){
    return h * w
}
console.log(area(2,7))

//exo 6
function neXt(a){
    return a+1
}
console.log(neXt(5))

//exo 7 
function circuitPower(voltage, current) {
    return voltage * current
    }
console.log(circuitPower(voltage,current))

//exo 8
function minMax(arr) {
    return[Math.min.apply(null, arr), Math.max.apply(null, arr)];
  }
