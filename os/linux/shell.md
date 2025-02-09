# How to Create and Execute Bash scripts
By naming convention, bash scripts end with .sh. However, bash scripts can run perfectly fine without the sh extension.
## Adding the Shebang

```shell
#! /bin/bash
```

You can find your bash shell path (which may vary from the above) using the command:

```shell
which bash
```

```shell
# "#" is used to comment
```

# datatype in bash

There are no data types in Bash. In Bash, a variable is capable of storing numeric values, individual characters, or strings of characters.
```shell
# Assign the value directly:
country=china
```

```shell
# Assign the value based on the output obtained from a 
# program or command, using command substitution. Note that $ is required to access an existing variable's value.
same_country=$country
```

```shell
# To access the variable value, append $ to the variable name.
zaira@Zaira:~$ country=Pakistan
zaira@Zaira:~$ echo $country
Pakistan
zaira@Zaira:~$ new_country=$country
zaira@Zaira:~$ echo $new_country
Pakista
```

# variables naming conventions
1. Variable names should start with a letter or an underscore (_).
2. Variable names can contain letters, numbers, and underscores (_).
3. Variable names are case-sensitive
4. Variable names should not contain spaces or special characters
5. Use descriptive names that reflect the purpose of the variable
6. Avoid using reserved keywords, such as if, then, else, fi, and so on as variable names

# Input and output in Bash scripts

In a bash script or function, $1 denotes the initial argument passed, $2 denotes the second argument passed, and so forth.
```shell
#!/bin/bash
echo "Hello, $1!"

./greeting.sh hua
Hello,hua
```

```shell
echo "something"
# print something to the termail
echo "This is some text." > output.txt
# This writes the text "This is some text." to a file named output.txt. Note that the >operator overwrites a file if it already has some content.
echo "More text." >> output.txt
# this append something to the end of output.txt

ls > files.txt
# This lists the files in the current directory and writes the output to a file named files.txt. You can redirect output of any command to a file this way.
```

```
basic bash commands
cd: Change the directory to a different location.
ls: List the contents of the current directory.
mkdir: Create a new directory.
touch: Create a new file.
rm: Remove a file or directory.
cp: Copy a file or directory.
mv: Move or rename a file or directory.
echo: Print text to the terminal.
cat: Concatenate and print the contents of a file.
grep: Search for a pattern in a file.
chmod: Change the permissions of a file or directory.
sudo: Run a command with administrative privileges.
df: Display the amount of disk space available.
history: Show a list of previously executed commands.
ps: Display information about running processes.
```

# if elif else

```shell
if [[ condition ]];
then
	statement
elif [[ condition ]]; then
	statement 
else
	do this by default
fi
```

```shell
# We can use logical operators such as AND -a and OR -o to
# make comparisons that have more significance.

if [ $a -gt 60 -a $b -lt 100 ]
```

# loop

## while loop

```shell
# this is an example

#!/bin/bash

echo "Please enter a number: "
read num

if [ $num -gt 0 ]; then
  echo "$num is positive"
elif [ $num -lt 0 ]; then
  echo "$num is negative"
else
  echo "$num is zero"
fi
```

## for loop

```shell
#!/bin/bash

for i in {1..5}
do
    echo $i
done

```

---
参考资料：
https://ryanstutorials.net/bash-scripting-tutorial/