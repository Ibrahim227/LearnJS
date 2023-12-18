# import sys

# try:
#     f = open('myfile.txt')
#     s = f.readline()
#     i = int(s.strip())
# except OSError as err:
#     print("OS error:", err)
# except ValueError:
#     print("Could not convert data to an integer.")
# except Exception as err:
#     print(f"Unexpected {err=}, {type(err)=}")
#     raise

# try:
#     raise NameError('HiThere')
# except NameError:
#     print('An exception flew by!')
#     raise

# def f():
#     excs = [OSError('an OSError Occurred'), SystemError('A SystemError occurred')]
#     raise ExceptionGroup('there were problems', excs)

# f()

try:
    driOp = open('mydata2.txt', 'r')
except FileNotFoundError:
    print('file not found!!')
else:
    print(f" the file contains {driOp.readlines()}")
    driOp.close()
finally:
    print("\nPrint a finally message")
    
try:
    testFile = open('mydata4.txt', 'r')
    print(testFile.readlines())
    testFile.close()
except:
    print("the file doesn't exist")