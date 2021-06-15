let finobacci = [1,1];
let a=0,suma = 0;
while(a<4000000){
   a =  finobacci[finobacci.length-1] + finobacci[finobacci.length-2];
   finobacci.push(a);
   if(a%2===0){
       suma +=a;
   }
   
}
console.log(suma);

