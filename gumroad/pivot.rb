# Challenge
# 
# 
# Write a method that returns the "pivot" index of a list of integers. 
# We define the pivot index as the index where the sum of the numbers on the 
# left is equal to the sum of the numbers on the right. Given [1, 4, 6, 3, 2], 
# the method should return 2, since the sum of the numbers to the left of index 2 is equal to the sum of numbers to the right of index 2 (1 + 4 = 3 + 2). 
# If no such index exists, it should return -1. If there are multiple pivots, you can return the left-most pivot.

equalPivot = [1, 4, 6, 3, 2]
noIndex = [4,7,3,2]

def pivot_this(arr)
  
  left_sum = -arr[-1]
  right_sum = arr.inject(:+)

  arr.each_index do |i|

    left_sum  += arr[i-1]
    right_sum -= arr[i]
    
    if left_sum == right_sum
      return i
    elsif right_sum < left_sum
      return -1
    end

  end

  return -1

end


puts "Eqaul pivot is : #{pivot_this( equalPivot)}"
puts "NoIndex Pivot is : #{pivot_this( noIndex )}"