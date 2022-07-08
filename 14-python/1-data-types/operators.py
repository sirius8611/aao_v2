# Write your function, here.

def first_before_second(s, first, second):
  lastOfFirstPos = 0
  foundPos = 0
  while(foundPos >= 0):
    foundPos = s.find(first, foundPos, -1)
    if(foundPos != -1):
      foundPos += 1
      lastOfFirstPos = foundPos
    
  return lastOfFirstPos < s.find(second, 0, -1)

print(first_before_second("a rabbit jumps joyfully", "a", "j"))
# > True
# Every instance of "a" occurs before every instance of "j".

print(first_before_second("knaves knew about waterfalls", "k", "w"))
#> True

print(first_before_second("happy birthday", "a", "y"))
#> False
# The "a" in "birthday" occurs after the "y" in "happy".

print(first_before_second("precarious kangaroos", "k", "a"))
#> False