// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

if (function twoSum(nums, target_num) {
    var map = [];
    var indexnum = [];
    
    for (var x = 0; x < nums.length; x++)
    {
    if (map[nums[x]] != null)
    {
    var index = map[nums[x]];
    indexnum[0] = index;
    indexnum[1] = x;
    break;
    }
    else
    {
    map[target_num - nums[x]] = x;
    }
    }
    return indexnum;
    }) {
        console.log('true')
    } else {
        console.log('false')
    }
  
//console.log(twoSum([28, 43, -12, 30, 4, 0, 12],0));//
//to prove this code works & show the pair//
//remove the if statement//

 /*
    Different methods I saw used to find the pairs:

    Method 2: Brute Force

function bruteForceTwoSum(array, sum){
    let nums = []
    
    let prevNums = []

    for(let x in array){
        for(let y in array){
            if (array[x] + array[y] === sum){
                if(!!nums.length){ 
                    if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
                        prevNums.push(array[x])
                        nums.push([array[x], array[y]])
                    } 
                } else {
                    nums.push([array[x], array[y]])
                    prevNums.push(array[x])
                }
            }
        }
    }
   return nums
}

let array = [28, 43, -12, 30, 4, 0, 12]
let sum = 0
bruteForceTwoSum(array, sum)

Method 3: Hash Method

let hashTwoSum = (array, sum) => {
    let storageHash = {}
    let nums = []
    
    for(let i in array){
      let addend = sum - array[i]
        
        if (addend in storageHash){
            nums.push([addend, array[i]])
        }
        storageHash[array[i]] = i
    }
    return nums
}

let array = [28, 43, -12, 30, 4, 0, 12]

hashTwoSum(array, 0)

    */


