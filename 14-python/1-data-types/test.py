def recursive_string(str):
    print(str)
    if len(str) <= 1: return str
    return recursive_string(str[1:]) + str[0]

print(recursive_string("operationcode")) # civic
# print(recursive_string("refer")) # refer
# print(recursive_string("string")) # gnirts
# print(recursive_string("avocado")) # odacova
# print(recursive_string("application")) # noitacilppa