districtCodes = {
                  'B': 'Boy',
                  'C': 'Charlie',
                  'D': 'David',
                  'E': 'Edward',
                  'F': 'Frank',
                  'G': 'George',
                  'H': 'Headquarters',
                  'J': 'John',
                  'K': 'King',
                  'L': 'Lincoln',
                  'M': 'Mary',
                  'N': 'Nora',
                  'O': 'Ocean',
                  'Q': 'Queen',
                  'R': 'Robert',
                  'S': 'Sam',
                  'U': 'Union',
                  'W': 'William',
                  '99': '99',
                  'NULL': 'NULL'
};

/* districtCode to region
   N = North
   E = East
   S = South
   SW = Southwest
   O = Other
*/

regionToColor = {'N':'#CA95D7',
                 'S':'#FACB73',
                 'E':'#9ABCDA',
                 'W':'#A9DD9C',
                 'SW':'#D78561',
                 'O': 'white'
};

districtColors = {
                  'Boy': regionToColor['N'],
                  'Charlie': regionToColor['E'],
                  'David': regionToColor['W'],
                  'Edward': regionToColor['E'],
                  'Frank': regionToColor['SW'],
                  'George': regionToColor['E'],
                  'Headquarters': regionToColor['O'],
                  'John': regionToColor['N'],
                  'King': regionToColor['W'],
                  'Lincoln': regionToColor['N'],
                  'Mary': regionToColor['W'],
                  'Nora': regionToColor['N'],
                  'Ocean': regionToColor['S'],
                  'Queen': regionToColor['W'],
                  'Robert': regionToColor['S'],
                  'Sam': regionToColor['S'],
                  'Union': regionToColor['N'],
                  'William': regionToColor['SW'],
                  '99': regionToColor['O'],
                  'NULL': regionToColor['O']
};


// colors from white to red
groupToColor = ['#fee5d9',
                '#fcae91',
                '#fb6a4a',
                '#de2d26',
                '#a50f15']

minsToCleared = ['0 to 39',
                 '40 to 79', 
                 '80 to 119',
                 '120 to 159',  
                 '160 to 199']

/* sorted in descending order of severity (ave. mins until cleared */
groupColors = {
              'HOMICIDE' : groupToColor[4],
              'PERSON DOWN/INJURY': groupToColor[4],
              'DRIVE BY (NO INJURY)': groupToColor[4],
              'ROBBERY': groupToColor[4],
              'ASSAULTS': groupToColor[3],
              'ARREST': groupToColor[3],
              'WEAPONS CALLS': groupToColor[3],
              'BURGLARY': groupToColor[3],
              'NARCOTICS COMPLAINTS': groupToColor[3],
              'LEWD CONDUCT': groupToColor[3],
              'HAZARDS': groupToColor[3],
              'THREATS, HARASSMENT': groupToColor[3],
              'PERSONS - LOST, FOUND, MISSING': groupToColor[2],
              'PROPERTY DAMAGE': groupToColor[2],
              'FRAUD CALLS': groupToColor[2],
              'PROWLER': groupToColor[2],
              'OTHER PROPERTY': groupToColor[2],
              'ACCIDENT INVESTIGATION': groupToColor[2],
              'MENTAL HEALTH': groupToColor[2],
              'AUTO THEFTS': groupToColor[2],
              'PROPERTY - MISSING, FOUND': groupToColor[2],
              'SHOPLIFTING': groupToColor[2],
              'CAR PROWL': groupToColor[2],
              'RECKLESS BURNING': groupToColor[2],
              'TRESPASS': groupToColor[2],
              'ANIMAL COMPLAINTS': groupToColor[2],
              'TRAFFIC RELATED CALLS': groupToColor[2],
              'PROSTITUTION': groupToColor[1],
              'DISTURBANCES': groupToColor[1],
              'SUSPICIOUS CIRCUMSTANCES': groupToColor[1],
              'MISCELLANEOUS MISDEMEANORS': groupToColor[1],
              'BIKE': groupToColor[1],
              'HARBOR CALLS': groupToColor[1],
              'FAILURE TO REGISTER (SEX OFFENDER)': groupToColor[1],
              'FALSE ALARMS': groupToColor[1],
              'NUISANCE, MISCHIEF': groupToColor[1],
              'LIQUOR VIOLATIONS': groupToColor[1],
              'OTHER VICE': groupToColor[0],
              'VICE CALLS': groupToColor[0],
};
