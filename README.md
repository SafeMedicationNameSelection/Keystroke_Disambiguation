# Keystroke Disambiguation

## What is keystroke disambiguation for drug product and medication names?

Keystroke disambiguation is the process of typing one character at a time as a method of searching over a namespace to find and select a single drug product or medication name. As each new character is entered the search is focused towards a smaller and smaller group of possible candidate names until finally enough characters are typed in to arrive at only one name. This process simply removes drug product and medication ambiguity keystroke by keystroke.

Unfortunately, many medication errors, including some that have led to harm and death, have involved inadequate keystroke disambiguation.

To minimize the risk of more of this type of medication error, since 2019 the Institute for Safe Medication Practices has recommended the entry of a minimum of the first five characters of a drug name (unless the name has fewer than five letters) during keystroke searches.

This repository provides software scripts and results for studies of keystroke disambiguation for drug product and medication names.

## Understanding the "Top 200" Keystroke Disambiguation Analysis

To understand the thrust of this work, download and take a look at the Excel file called "Top200KeystrokeDisambiguationAnalysis".

The first tab in the file provides a list of commonly used medications and drug product names from the Pharmacy Technician Certification Board. When brand names and combination products are accounted for, a list of 224 names results.

The second tab lists 224 generic medication names plus brand names when the brand names are for combination products. 

The third tab shows and graphs the numeric results of a keystroke disambiguation analysis performed on the list 224 names in the second tab. 

In the third tab data, the 7 columns are as follows:

1. Column A - characters: This is number of keystrokes per round of analysis from 1 to 22. It is also the length of the search terms for each round.
2. Column B - search_terms: This is the number of search terms per round of analysis. Every search term is derived from the names list is the second tab. For example, the names list has names that start with 24 different characters, so in round 1 there are 24 different search terms, all letters of the alphabet. (Since there are no drug product and medication names in the list that start with the letters J or X, those two letters are not included as search terms in round 1.) The length of search terms matches the number of keystrokes per round. All search terms in round two have two characters, all in round 3 have 3 characters, and so on.
3. Column C - search_space_size: This is the number of names on the list that are searched over in each round. As the number of keystrokes and characters (same thing) increases this number eventually becomes greater than the length of the names. Names are removed from the search space when that happens, making the search space smaller and smaller as the number of keystrokes and characters grows by one each round.
4. Column D - names_by_length: This is the number of names in each round that have the same length as the number of characters for that round. This number of names is removed from the search_space for the following round. For example, in round 3, where 3 characters are used for all search terms, the names_by_length column shows a "1". This "1" represents the only name with a length of 3 characters in the list, which is the name "Yaz". Notice in round 4, the search_space_size decreases by 1 from 224 to 223. This is because, since "Yaz" has only 3 characters it is no longer included in the search space after round 3. The names_by_length column data makes it clear that most names on the list are between 9 and 14 characters in length (n=185 , 83%).
5. Column E - unresolved_items: This is the number of names that have yet to be either disambiguated or removed due to their length being exceeded by the number of characters in each search term.
6. Column F - disambiguated names: This is the number of names that have been resolved by increasing the characters by one each round. Note that because some names my wholly overlap with other longer names, not all names can be resolved and fully disambiguated by keystroke disambiguation alone. The one example of this in the Top 200 list are the names Fluticasone and Fluticasone Propionate. Because the former one, Fluticasone, is shorter and overlaps completely letter-by-letter with the latter, it is never disambiguated by keystrokes, nor can it be.
7. Column G - possible_misses: The data in this column tell an important part of the safety story as it relates to disambiguating the 224 names in list. For each round and row in the table, the possible misses are the number of potential mis-picks or mis-selections that could occur if only that row's number of characters was used for searching to find a single name. For example, in the row where Characters = 1, meaning the case when there are 24 single-character search terms, there remain 224-24 (200) ways to make a mistake and select the wrong name. Only after entering 12 characters with 12 keystrokes are all the possible misses eliminated. As another indicator of this, it is in round 12 when, for the first time, the search_space_size comes to match the number of search_terms. 

In the third tab graph, note that there are NO curves. Instead, the Y-axis plots discrete keystrokes from 1 to 22. The Y-max of 22 reflects the longest medication names in list analyzed, of which there are two: Fluticasone_propionate and Isosorbide_mononitrate. On the graph, the Blue Triangles represent the number of drug product and medication names that are disambiguated and become clear for each increasing keystroke. The point of Maximum Disambiguity is reached after 12 keystrokes when 223 of the 224 medication names have been uniquely identified by keystroke disambiguation. One of the names, Fluticasone, overlaps completely with another longer name, Fluticasone_propionate, making it impossible to disambiguate only by keystrokes.

The fourth tab shows more details about the keystroke disambiguation process in this case. For each keystroke by count, starting with 1, relevant pools of drug product and medication names for all instances when disambiguation remains incomplete and more than one name is found by searching. The data on the fourth tab make it easy to see which names could still be confused as they keystrokes are increased. 

The fifth tab provides a blank pre-formatted Medication Name Disambiguation (MND) chart without any data. This MND chart can be used as a template by copying its tab into other speadsheets and adding other keystroke disambiguation data there.

## Problems Keeping Drug Product and Medication Names Straight

For approved drug products, our drug product and medication namespace is a crowded, confusing, constantly changing mashup. Here is a quick tour through some of the many issues that pertain to keeping the names straight and selecting the correct drug product. The biggest issue of all is SAFETY. With several thousand or more drug products containing various medications already on the market, and more coming to market all the time, people regularly confuse the names in this namespace or overlook their differences. Confusing and misperceiving these names leads to medication errors, some of which have resulted in lasting harm, even death.

The first issue is that we call the same medication by multiple names. Approved drug products contain medications with generic names, however the drug products themselves can have one or more brand names in the marketplace (e.g., aspirin versus Ecotrin and Zorprin). 

The second issue is that drug products are often referred to in a shorthand way by using only the generic names of the medications they carry (e.g., “May I have an aspirin?”). The drug product in this case might be an ‘aspirin 81 mg oral tablet’ or an ‘aspirin 325 mg oral tablet’ or something else. Using generic names this way can cause confusion and may lead to errors. 

The third issue is that multiple medications can be found inside single drug products. These “combination” drug-products are very common and often used. Examples include Vicodin, which contains the generic medications acetaminophen and hydrocodone, and Hyzaar, which contains hydrochlorothiazide and losartan. 

A fourth issue is like the second. Brand name drug products, whether they are combinations or not, are often referred to in a shorthand way (e.g., “I use Advair to control my asthma.”). Advair is the brand name for a delivery device with an inhalable powder containing salmeterol and fluticasone. 

At this point in our tour, we have only covered four issues but perhaps you are beginning to see why people have problems keeping drug product and medication names straight. There are many more issues.

A fifth issue is that many drug product or generic medication names look-alike. Examples include Actos and Actonel, chlorpromazine and chlorpropamide, prednisone and prednisolone. These and other examples appear on lists of confused names.

A sixth issue is that even drug product or generic medication names that do not look alike sometimes still sound alike. Similar sounding names can cause confusion in conversation. Examples of this issue are cetirizine and sertraline, Lodine and iodine, Os-Cal and Asacol.  

A seventh issue has to do with “salt forms.” Chemically speaking, active ingredients are sometimes produced using different counterions. When this happens, the generic medication is given two or more similar names, the only difference being the counterion. For example, metoprolol tartrate has a different salt form than metoprolol succinate. Metoprolol tartrate is only used in immediate release oral drug products whereas metoprolol succinate is instead used in sustained release products. A good example of many salt forms comes from calcium, which is provided as an acetate, carbonate, chloride, gluceptate, gluconate, metrizoate, or oxybate. 

More issues to be added ... 
