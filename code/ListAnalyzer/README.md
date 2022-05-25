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
