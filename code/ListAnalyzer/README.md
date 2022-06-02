# Keystroke Disambiguation

## What is the MedNameListAnalyzer?

The MedNameListAnalyzer is a javascript tool that runs in the Node environment and processes lists of drug product and medication names of any length to arrive at keystroke disambiguation data.

### Inputs to MedNameListAnalyzer

There are 2 input files to the MedNameListAnalyzer. 

1. The first input is a text file called "medList.txt". This is where users put there own lists of drug product and medication names for analysis.
2. The second input is a text file called "tagList.txt". This file can be left empty. To assist with analyzing results, the MedNameListAnalyzer will tag every drug product and medication name in both this file and the medList.txt file with an *.

### Outputs from MedNameListAnalyzer

There are 2 output files generated from running the MedNameListAnalyzer. Examples of each can be found in the Example_Output folder.

1. The "raw" or complete output is found in the NameSearchDetails.txt file. 
2. Numeric counts and summary data is found in the NameSearchSummary.csv file.

### Running the MedNameListAnalyzer

To run the MedNameListAnalyzer, first download and install Node JS. Once that is done, from within a folder with the MedNameListAnalyzer.js file and its two input files, simply run this command:

```
>node MedNameListAnalyzer.js
```

### Understanding the Summary Data

When processing medication lists with or without tag lists, MedNameAnalyzer produces a CSV file that can quickly be imported into a spreadsheet as a table. Here is what the comma delimited Summary Data output looks like:

characters,search_terms,search_space_size,names_by_length,unresolved_items,disambiguated_names,possible_misses,raw_keystroke_power,percent_keystroke_power,unresolved_tagged_names,disambiguated_tagged_names
0,0,462,0,462,0,461,NA,NA,11,0
1,23,462,0,461,1,439,22,4.8,10,1
2,143,462,3,407,55,319,120,26,9,2
3,312,459,6,232,229,147,172,37.2,4,7
4,384,453,9,113,346,69,78,16.9,0,11
5,399,444,14,74,385,45,24,5.2,0,11
6,402,430,39,48,411,28,17,3.7,0,11
7,371,391,72,38,421,20,8,1.7,0,11
8,303,319,72,31,426,16,4,0.9,0,11
9,233,247,68,27,428,14,2,0.4,0,11
10,169,179,56,20,431,10,4,0.9,0,11
11,116,123,36,14,435,7,3,0.6,0,11
12,82,87,19,10,437,5,2,0.4,0,11
13,64,68,18,8,439,4,1,0.2,0,11
14,48,50,12,4,441,2,2,0.4,0,11
15,37,38,7,2,442,1,1,0.2,0,11
16,30,31,6,2,442,1,0,0,0,11
17,24,25,2,2,442,1,0,0,0,11
18,23,23,3,0,443,0,1,0.2,0,11
19,20,20,2,0,443,0,0,0,0,11
20,18,18,3,0,443,0,0,0,0,11
21,15,15,4,0,443,0,0,0,0,11
22,11,11,3,0,443,0,0,0,0,11
23,8,8,3,0,443,0,0,0,0,11
24,5,5,0,0,443,0,0,0,0,11
25,5,5,1,0,443,0,0,0,0,11
26,4,4,0,0,443,0,0,0,0,11
27,4,4,0,0,443,0,0,0,0,11
28,4,4,2,0,443,0,0,0,0,11
29,2,2,1,0,443,0,0,0,0,11
30,1,1,0,0,443,0,0,0,0,11
31,1,1,0,0,443,0,0,0,0,11
32,1,1,0,0,443,0,0,0,0,11
33,1,1,0,0,443,0,0,0,0,11
34,1,1,1,0,443,0,0,0,0,11

As an example and to explain what these summary data mean, consider the second row of data after the header row:

1,23,462,0,461,1,439,22,4.8,10,1

From left to right, these summary data indicate

1, - that one character search was conducted to generate this row of data, e.g., searching for 'a', 'b', 'c', etc.
23, - that there are twenty-three one-charcter search terms since names in medList.txt start with 23 different characters 
462, - that there are 462 names still in the search space after typing 1 character (i.e., there are no one-character names)
0, - that the number of names with 1 character is 0
461, - that there remain 461 unresolved names after searching with 1 character
1, - that one name has been disambiguated from all others by searching with 1 character
439, - that there remain 439 possible ways of making a mis-selection or mis-pick when only 1 character is used to search
22, - that the number of possible ways of making a mis-selection has decreases by 22 after searching with 1 character
4.8, - that, out of 100% of available power, the first character has 4.8% of the power to disambiguate the names on the list
10, - that of the names on the tagList, 10 of them remain unresolved after searching with 1 character
1, - that of the names on the tagList, 1 of them has been disambiguated by searching with 1 character

The headers that are part of the output provide relevant labels for these 11 summary data results.

That's it!
