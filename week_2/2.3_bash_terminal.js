//pwd=print working directory
//cd=change directory      cd .. take back ot two back cd ../..
//cd ../.. multiple hops are done

//ls=list all the item  we can see inside the folder too like ls newdir
//detail about with directory ls -l (like owner, modified date)
///ls -l    (detail about directory, prems (preceded by d), owner of directory, last modified, sub owner )
//ls -l newdir (detail of directory of newdir)
//ls -R (gives details of sub directories)
//ls -lt newdor   (last modified first)
//ls -la    (to see hidden files, the files that are preceded by . are the hidden files)
//ls -lRa (recursively prints all the hidden files)
//ls -lr  (gives you all the files in reverse order modified on)
////ls -s (listing all directory by size)
//ls -lR | grep .json  pulling out all the json files recursively
//ls *.json  (list all the jsoon files)
//ls Zoo*  looking for zoom based directory
//ls .. (give me all directory)
//for subdirectories under a folder ls -R newdir
//ls -lt newidr --gives you the last modfied file with time stamp
//see hidden files ls -la newdir
//ls -lRa newdir
//ls -lr newdir
//ls -s newdir --according to size
//using grep with list ls-lR |grep.json

//mkdir=create new directory  ex:- mkdir test
//we can combine the command alltogether 
//mkdir test && cd test
//we can create recursiveley directory 
//mkdir -p frontend/scripts  ---create recursively directory 
//mkdir -p frontend/css
//mkdir/frontend/img


//touch=used to create empty file   ex:- touch index.js

//mv=move   ex:- mv a2.txt new-folder,   
//mv script.js runtime_script.js---renaming the file
//mv script.js zk-dapp/frontend/hii.js --we moved the file and also renamed it to hii.js


//cp=copy   ex:- cp a3.js test2

//to cp folders cp -r test3 test2     cp -r circuits/test contracts

//cat=use to show the content of the file  ex:- cat index.js or cat test/index.js
//cat command also help to add data concatenate data into the file
//cat>newfile.txt --to add data on the file.
//cat>>newfile.txt  --to append the data on the file.

//vi= edit files, vi a.txt   press i to get into insert, delete basically it is a vscode for terminal    esc :q!--not save esc:wq!--sve and exit

//terminal is an interface to do things on your machine

//node related command
//nvm-- node version manager--used to install node
//node-- you will get a shell if you only run node, to run a file of js use node filename.extension
//npm-- node package manager, basically it consist of external packages like express like node install express.

//rm readme.md  --removed readme.md
//rm -r frontend --it wipes out entire folders


//how to intreact the files in greater details
//rw--r--r--        --first set is for users, then group, then for others
//there are two ways to decide the patiicular permisions

//chmod--modify the read, write and execute permissions of a file
//chmod (who you are seeting perms for)  (what are you doing you setting or revoking perms) (what kinds of perms you addng)
//chmod ugo-rwx 
//chmod -ugo-rwx (if it is folder)
//chmod u+x newcript.sh --execute perms added 
//chmod g+wx newscript.js --write and execute for group
//chmod u-x file1.txt --revokes execute perms 

//another way to do same is number
//each digit represents the perms-- 4-read, 2 is for write, 1 is for execute. 
//chmod 664 text.js                (no changes -6  rw-6 r-6 w-4)
//chmod 777 text.js                 (they have all the perms for u,g,o  rwxrwxrwx)


//echo "hello world"      --dispay particular message
//echo $PATH             --simply interacts with environment varaiable, here we are interacting with path variable 


//head newfile.txt   --gives the first 10 rows of file
//tail newfile.txt   --gives the last 10 rows of file
//head -20 newfile.txt  --we see top 20 rows of file (same for tail)

//tail -n +25 newfile.txt| head +5   viewing the certain section of the 
//file--line 25-29 command 1|command 2 -whatever output comes from command number 1 flows through command 2 

//wc newfile.txt --wordcount  line, word, characters
//grep "one" newfile.txt       --find occurences of certain word give the occurence of one 
//grep "one" newfile.txt | wc -l
//grep -c "one" newfile.txt   (only print the count in which the occurence happen )
//grep -h "one" newfile.txt  (gives the matching value from file it matches cases)
//grep -hi "one" newfile.txt (ignore case and give me all the things that have one)
//grep -hir "one" .     (look occurence of one not in this file but around the directory   .-> present directory)
//grep -hin "one" newfile.txt      (lines number more line properly)
//grep -o "one" newfile.txt    (it gonna look for only matched part)
//grep -w "one" newfile.txt

//history 0 --gives history of all the commands

//we can put commands in a file and then we can execute it, 
// to define that this file contain bash command you have to put
//#!/bin/bash
// and to run it use bash command----> bash newscript.txt


//nodejs is an server environment uses js, provide async

//grep "ERROR" log.txt --print all the error fields
//grep -v "INFO" log.txt --look everything apart from info
//grep -A 5 ERROR log.txt  --all the lines after the occurence of error
//grep -B 5 ERROR log.txt  --all the lines before the occurence of error
//grep -C 5 ERROR log.txt  --all the lines after and before the occurence of error


//sed-similar proccessing ooperation, foor each line we have to define the script
//s/pattern/replacement --s is the word that we are looking to replace and what pattern we are looking for and how to replace it

//sed -n '/ERROR/p' log.txt  --sed will print all of the ouutput so we don't want that so that's why we used -n word p is for printout
//sed 's/ERROR/CRITICAL' log.txt --occurence of error is replaced with critical
//sed ibackup 's/ERROR/critical' log.txt --so it gonna create a backuup file and then work on the file
//sed '3 s/ERROR/CRITICAL/' log.txt ==for specific lines i.e line 3
//sed '3,5 s/Critical/Verycritical' log.txt --line number 3-5


//awk --scripting language
//awk '/CRITICAL/{print $0}' log.txt 
//awk '{gsub(/CRITICAL/,"ERROR")}{PRINT}' log.txt ---find critical and replace it witth error and print
//awk 'BEGIN {print "LOG SUMMARY\n-------------"}{print "-------------\nEND OF LOG SUMMARY"}' log.txt --text added at begin and end
//awk '{print $1, $2}'  log.txt  --pick data and do operation we pick and 1st and 2nd column
//awk -F "," {print $1, $2}' log.txt --pick the delimeter
//awk '{count[$2]++} END{print count["ERROR"]}' log.txt -- count error
//awk '{if ($1>1598886388) {print $0}}' log.txt is look for the record older then this  time

