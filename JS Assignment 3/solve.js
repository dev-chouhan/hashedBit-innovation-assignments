// // Answer 01
let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
];

const result = states.filter((state) => (state.slice(0, 1) != 'A' && state.charAt(0) != 'E' && state.charAt(0) != 'I' && state.charAt(0) != 'O' && state.charAt(0) != 'U'));
console.log(result);

// states.forEach((state)=>{
//     if(state.slice(0, 1) != 'A'&& state.charAt(0) != 'E' && state.charAt(0) != 'I' &&state.charAt(0) != 'O' && state.charAt(0) != 'U'){
//         console.log(state);
//     };
// });



// // ANswer 02
let str = 'I love my India';
let txt = str.split(" ");
txt.reverse();
txt = txt.join(" ");
console.log(txt);


// // Answer 03
let str1 = 'INDIA';
let str2 = 'ONES';
var arr1 = str1.split('');
arr1.splice(3, 0, str2);
const opt = arr1.join("");
console.log(opt);


// // Answer 04
let str3 = "abcdefghijklmnopqrstuvwxyz";
let arr3 = str3.split("");
var vowels = 0;
arr3.forEach(fun);
let len = str3.length;
function fun(st) {
    if (st == 'a' || st == 'e' || st == 'i' || st == 'o' || st == 'u') vowels++;
}
console.log(`total of ${vowels} vowels in string`);
console.log(`total of ${len - vowels} consonant in string`);


// // Aaswer 05
const paragraph = "Nobody love's me! Nobody";
function replaceMe(v1, v2) {
    console.log(paragraph.replace(v1, v2));
}
replaceMe("Nobody", "Everybody");


// // Answer 06
function gret5() {
    const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
    // const opt = [];
    // inputArr.forEach((i)=>{if(i > 5) opt.push(i);});
    const opt = inputArr.filter((i) => i > 5);
    console.log(opt);
}
gret5();


// // ANswer 07
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(std => {
    const averageScore = std.scores.reduce((sum, score) => sum + score) / std.scores.length;
    return { name_: std.name, average: averageScore };
});

console.log(output);



// // Answer 08
function sum(n) {
    let s = 0;
    while (n > 0) {
        s += (n % 10);
        n /= 10;
    }
    return Math.floor(s);
}

function fun8(n) {
    while (Math.ceil(Math.log10(n + 1)) > 1) {
        const len = Math.ceil(Math.log10(n + 1));
        n = sum(n);
    }
    console.log(n - 1);
}

fun8(898);



// // ANswer 09
function countWords(para) {
    const words = para.split(/\s+/).filter(w => w.length > 0);
    return words.length;
}


const para = "The most common usage is to split a string into an array of substrings based on a specified separator. For example:";
const wordCount = countWords(para);
console.log(wordCount);


// // Answer 10
const name = "Dev Chouhan";
console.log(name.split('').reverse().join(''));


// // Answer 11
const studentsArr = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

const calculateAverages = (studentsArr) => {
    const result = {};

    for (const student in studentsArr) {
        const scores = Object.values(studentsArr[student]);
        const total = scores.reduce((sum, score) => sum + score, 0);
        const average = Math.floor(total / scores.length);
        result[student] = { average: average };
    }

    return result;
};

const averages = calculateAverages(studentsArr);
console.log(averages);
