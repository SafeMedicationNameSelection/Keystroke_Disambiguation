//Medlist Search May 2022

//Start writing file
var fs = require("fs");
fs.writeFileSync('NameSearchDetails.txt', "FILE START\n", err => {
  if (err) {
    console.error(err);
  }
});

// Read medlist from file
var medListFromFile = fs.readFileSync("./medList.txt").toString('utf-8');
var medsByLine = medListFromFile.split("\n");

// Convert All Spaces in Drug Names to Underscores Instead
medsByLine.forEach((element, index) => {
  medsByLine[index] = element.replace(/[" "]+/g,"_");
});


// Identify length of longest medication name input from file
var cycles = getLongestElement(medsByLine);
function getLongestElement (array) {
  var longest = 0;
  for (const element of array) {
    if (element.length > longest) {
      longest = element.length;
    }
  }
  return (longest);
}

//CSV file header
console.log("characters,search_terms,search_space_size,names_by_length,unresolved_items,disambiguated_names,possible_misses");
fs.writeFileSync('NameSearchSummary.csv', "characters,search_terms,search_space_size,names_by_length,unresolved_items,disambiguated_names,possible_misses\n", err => {
  if (err) {
    console.error(err);
  }
});

var capturedUnresolveds = [];
var uniquesFound = [];

// Run analysis cycles for every relevant length of search term from 1 .. longest
for (var i = 1; i <= cycles; i++) {
  capturedUnresolveds.push(i);
  var result = overlapAnalysisProcess(medsByLine,i);
  console.log(result);
  fs.appendFileSync('NameSearchSummary.csv', result + "\n" , err => {
    if (err) {
      console.error(err);
    }
  });
}

fs.appendFileSync('NameSearchSummary.csv', "\n" + "Unresolved List" + "\n" , err => {
  if (err) {
    console.error(err);
  }
});

for (const element of capturedUnresolveds) {
  fs.appendFileSync('NameSearchSummary.csv', element + "\n" , err => {
    if (err) {
      console.error(err);
    }
  });
}

fs.appendFileSync('NameSearchSummary.csv', "\n" + "Ordered Uniques List" + "\n" , err => {
  if (err) {
    console.error(err);
  }
});

for (const element of uniquesFound) {
  fs.appendFileSync('NameSearchSummary.csv', element + "\n" , err => {
    if (err) {
      console.error(err);
    }
  });
}


function overlapAnalysisProcess (nameList, characterNum) {
  var prefixList = getAllSearchTerms(nameList, characterNum);
  var countsList = getAllPrefixCounts(prefixList, nameList);
  var namesThisLength = countMedNamesByLength (nameList, characterNum);
  var totalTimes = 0;
  var totalUniques = 0;
  for (const element of countsList) {
     //console.log(element);
     shortElement = element.split('names')[0].split('times')[1];
     elementTimes = Number((shortElement.replace(/\D/g,'')));
     totalTimes = totalTimes + elementTimes;
     if (elementTimes == 1) {
          totalUniques += 1;
          var singleMedName = element.match(/\[(.*)\]/)[1];
          if (!uniquesFound.includes(singleMedName)) {
            uniquesFound.push(singleMedName);
          }
     }
     if (elementTimes > 1) {
          var searchTerm = element.match(/string:(.*),times/)[1];
          var medNames = element.match(/\[(.*)\]/)[1];
          capturedUnresolveds.push(searchTerm + " | " + medNames);
     }
  }
  var unresolved = totalTimes - totalUniques;
  var possibleMispicks = totalTimes - countsList.length;
  var detail = countsList.toString().replace(/[}]+/g,'\n').replace(/[,{]+/g,' ').replace(/["\]\[]+/g,'').replace(/[:]+/g,' ').replace(/[ ]+/g,',').replace(/,string,/g,'string,');
  var summary = characterNum + "," + countsList.length + "," + totalTimes + "," + namesThisLength + "," + unresolved + "," + uniquesFound.length + "," + possibleMispicks;
  fs.appendFileSync('NameSearchDetails.txt', detail, err => {
    if (err) {
      console.error(err);
    }
  });

  return (summary);
}

function countMedNamesByLength (medNamesArr,numberChars) {
   answer = 0;
   for (const element of medNamesArr) {
     if (element.length == numberChars) {
       answer = answer+1;
     }
   }
  return (answer);
}

function getAllSearchTerms (medNamesArr,numberChars)
{
  searchTermsArray = [];
    for (const element of medNamesArr) {
      if (element != "" && element.length >= numberChars) {
       term = element.substring(0,numberChars);
       if (!searchTermsArray.includes(term)) {
         searchTermsArray.push(term);
       }
     }
    }
  //console.log(searchTermsArray);
  return (searchTermsArray);
}

function getAllPrefixCounts (prefixes, names) {
  countsArray = [];
  for (const element of prefixes) {
    countsArray.push(countNameStartMatches(element, names));
  }
  return (countsArray);
}

function countNameStartMatches (searchChars, medNamesArr)
{
  var matches = 0;
  var matchedWith = [];
  var outputObject = {};
  for (const element of medNamesArr) {
    if (element.startsWith(searchChars)) {
      matches = matches + 1;
      matchedWith.push(element);
    }
  }
  outputObject.string = searchChars;
  outputObject.times = matches;
  outputObject.names = matchedWith;
  var outputString = JSON.stringify(outputObject);
  outputString = outputString.replace(/['"]+/g,'');
  return outputString;
}
