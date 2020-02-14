
// // OBJECT



// // //1

// let testObj = {};
// testObj.prop = "test property";
// testObj.pi = Math.PI;
// console.log(testObj.prop, testObj['prop']);
// delete testObj.prop;


// testObj.sumOfTwo = (a, b) => a + b;
// let res = testObj.sumOfTwo("40", 150);
// console.log(res, typeof (res))


// let newObj = Object.assign({}, testObj, { newProp: { x: 10 } });
// for (let key in testObj) {
//     delete testObj[key];
// }

// let copiedObj = { ...newObj };
// console.log(newObj, copiedObj)
// copiedObj.newProp.x = 100;
// console.log(newObj.newProp, copiedObj.newProp)

// let copiedArray = [];
// copiedArray = [...Object.keys(copiedObj), ...Object.values(copiedObj)];
// console.log(copiedArray)



// // //2

// const constructObject = (objectName = "noName", objectNumber = 0, objectString = "") => {
//     return {
//         objectName,
//         objectNumber,
//         objectString,
//         greet: () => "hello",
//     }
// }

// console.log(constructObject, typeof (constructObject))

// let constructObjectFirst = constructObject();
// let constructObjectSecond = constructObject('test', 10, 'i\'m a string');
// let massiveFirst = [],
//     massiveSecond = [];

// for (let key of Object.keys(constructObjectFirst)) {
//     massiveFirst.push(constructObjectFirst[key])
// }

// for (let key of Object.keys(constructObjectSecond)) {
//     massiveSecond.push(constructObjectSecond[key])
// }

// console.log(massiveFirst, massiveSecond)





// // //3

const targetObj = {
    x: 1,
    y: {
        w: 'test',
        q: {
            a: true,
            b: () => console.log('useless'),
            c: {
                d: ['a', 'b', 'c']
            }
        }
    },
    z: [1, 2, 3, 4, 5]
}
function deepCopy(obj) {
    let copied = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            if (Array.isArray(obj[key])) {
                copied[key] = [...obj[key]];
            } else {
                copied[key] = deepCopy(obj[key]);
            }
        } else {
            copied[key] = obj[key];
        }
    }
    return copied;
}
const copiedObj = deepCopy(targetObj);
console.log(targetObj, copiedObj)

targetObj.y.q.c.d[0] = 100;
const areElementsEqual = targetObj.y.q.c.d[0] === copiedObj.y.q.c.d[0];
console.log(areElementsEqual)