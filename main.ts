//M-1
function sumTwoSmallestNumbers(numbers:number[]):number {
        numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1]
}
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));



//M-2
function reverseNumber(n:number) :number{
  let reversN:number = +(Math.abs(n).toString().split('').reverse().join(''));
    
    return n < 0 ? -reversN : reversN;
}
// console.log(reverseNumber(123));



//M-3
function getDivisorsCnt(n:number):number{
     let count:number = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += (i * i === n) ? 1 : 2;
        }
    }
    return count;
}
// console.log(getDivisorsCnt(30));



//M-4
function firstNonRepeatingLetter(s:string):string {
   const lowerStr:string = s.toLowerCase();

    for (let i = 0; i < lowerStr.length; i++) {
        const char:string = lowerStr[i];

        if (lowerStr.indexOf(char) === lowerStr.lastIndexOf(char)) {
            return s[i];
        }
    }
    return "";
}
// console.log(firstNonRepeatingLetter('moonmen'));


//M-5
function digitize(n:number):number[] {
let numberArr:number[] = n
    .toString()
    .split("")
    .map((el) => +el);

  return numberArr;
}
// console.log(digitize(123));



//M-6
function doubleEveryOther(a:number[]) {
  return a.map((num, index) => {
    
    if (index % 2 !== 0) {
      return num * 2; 
    }
    
    return num;
  });
}
// console.log(doubleEveryOther([1,2,3,4]));



//M-7
function flickSwitch(arr:string[]):boolean[]{
    let newArr:boolean[] = []
    let check:boolean = true
    arr.forEach(word => {
        if (word === 'flick') check = !check
        newArr.push(check)
    });
    return newArr
}
// console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']));


//M-8
function solution(number:number):number{
  let res:number = 0
  for(let i = 0 ; i<number ; i++){
    if(i%5==0 || i%3==0){
      res +=i
    }
  }
  return res
}
// console.log(solution(6));


//M-9
function findNextSquare(sq:number):number{
    let n:number = Math.sqrt(sq);
    if (Number.isInteger(n)) {
        return Math.pow(n + 1, 2);
    } else {
        return -1;
    }
}
// console.log(findNextSquare(121));


//M-10
function toNumberArray(stringarray:string[]):number[]{
  return stringarray.map(num=>+num)
}
// console.log(toNumberArray(["1.1","2.2","3.3"]));



