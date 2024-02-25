// const reverseString=(str)=>{
//     return str.split("").reverse().join("")
// }

const reverseString = (str) => {
  // let reversed = ""
  // for (let i = str.length - 1; i >= 0; i--) {
  //     reversed += str[i]
  // }
  // return reverse,


  const reverse = (start: number, end: number, arr: any[]) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    return arr;
  };

  return reverse(0, str.length - 1, Array.from(str));
};

console.log(reverseString("hello"));
module.exports = reverseString;