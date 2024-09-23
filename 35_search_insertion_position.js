// ------------------35_search_insertion_position---------------------

var searchInsert = function(nums, target) {
    let min=0;
    let max=nums.length-1
    while(min<=max){
        let mid=Math.floor((min+max)/2)
        if(nums[mid]<target||nums[mid]<target-1){
          min=mid+1
        }else if(nums[mid]>target||nums[mid]<target-1){
           max=mid-1
        }else{
            return mid
        }
    }
  return min
};