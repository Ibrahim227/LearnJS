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

def f():
    excs = [OSError('an OSError Occurred'), SystemError('A SystemError occurred')]
    raise ExceptionGroup('there were problems', excs)

f()