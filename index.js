const array=[
{
    name:"tika",
    age:10
},
{
    name:"ani",
    age:31
},
{
    name:"sofo",
    age:20
}
];


const arrayOfAges=array.map((element)=>{
return element.age;

})

array.forEach((element)=>{
    console.log(element)
});

//some არის ერთი ელემენტი თუ მაინც ემთხვევა ტრუა
const news= array.some((element)=>{
    return element.age>=25;

});
console.log(news)

// console.log(arrayOfAges);
const array1=[1,2,3];
const array2 =[7,5,6];
const array3=[];
// for (let index = 0; index < array1.length; index++) {
//     array3.push(array1[index])
    
// }
// for (let i = 0; i< array2.length; i++) {
//     array3.push(array2[i])
    
// }

// console.log(array3)
// გადავლა როგორც for 
array1.forEach((element)=>{
array3.push(element)
})
array2.forEach((element)=>{
    array3.push(element)
    })

    console.log(array3)

//ყვეა ელემენტი რომ დაემთხვევა ეს არის თრუ თუარა ფოლსი
const every =array.every((element)=>{
    return element.age>=25
});

console.log(every)

const newest={
    name:"quertu",
    age:12
}



const test =[1,2,3,4,8,100];
const testsum=[];

for (let index = 0; index < test.length; index++) {
   if(index%2==1){
       testsum.push(test[index])

   }
    
}

const newobj = {
    name:"ddd",
    age:41
}
//სპლაიტს შეუძლია წაშალოს მაგალითად მასივიდან ობიექტი ან ინდექსი,
// an ჩაამატოს ობიექტი ან მასივი ან ცვლადი

array.splice(2,0,newobj,testsum);

console.log(array)

