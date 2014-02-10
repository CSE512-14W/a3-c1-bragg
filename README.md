a3-c1-bragg
===============

## Team Members

1. Christopher Lin c1@uw.edu
2. Jonathan Bragg bragg@uw.edu

## Crime in Seattle

We visualize <a href="https://data.seattle.gov/Public-Safety/Seattle-Police-Department-911-Incident-Response/3k2p-39jp">police reports of 911 calls in Seattle</a>, a public dataset available on data.seattle.gov. We first present the user with two stacked area graphs. The first shows how the number of reports of each type of crime changes through time. The second shows how the number of reports of crime in each neighborhood of Seattle changes through time. Clicking on an area that represents a type of crime or a neighborhood allows the user to filter by that type or neighborhood. In the first case, the graph transitions into a filtered graph that breaks down how that type of crime is distributed among neighborhoods. In the second case, the graph transitions into one that breaks down how prevalent different kinds of crimes are in the selected neighborhood.

## Running Instructions


Access our visualization at http://homes.cs.washington.edu/~chrislin/a3/a3-c1-bragg/viz.html. For optimal viewing, please use a screen that can display a width of 1400 pixels. An example of what our visualization should look like is here: https://www.dropbox.com/s/4tu0oo3o6bsmhgp/screenshot.PNG.


## Data Domain Description and Storyboard

Our storyboard, available at the following link, describes the interactions we envisioned: https://www.dropbox.com/s/mrda6im2dvjf76m/storyboard.pdf.

Before creating the storyboard, we explored the data using Tableau. We decided to filter the dataset to include the three complete years of data available, 2011 through 2013. Our visualization shows both long-term trends over this period of time, as well as the interesting periodic nature of crime with respect to time of year.

### Changes between Storyboard and the Final Implementation

In our storyboard, we imagined a single graph with which the user could interact. The initial graph presented to the user would show the total number of crime reports across time, with no subdivisions. The user would then be able to divide up the graph by crime type or neighborhood. However, we decided instead to just present these two graphs initially. This reduces the number of interactions the user must use to explore the data, and also allows for comparison between graphs. 

Our initial thought was to visualize each group or district using a separate color, but we realized that we could convey more information by restricting the set of colors. In the case of district, we map colors to the broader regions (N,E,W,S,SW) shown in the map to facilitate faster geographic lookup. For groups, we noticed that we can calculate the average number of minutes from when officers arrive on-scene until the event is cleared, and use that time as a proxy for severity of crime. We bin the crime types into five evenly-spaced bins of 40 minutes, with colors from white to red.

In the area charts, subdivisions are ordered alphabetically so that one can quickly find a specific district or crime group by name, rather than using color to get a sense of the aggregate trends.

We also realized we needed to provide some information about what view the user is currently looking at, to prevent confusion. Thus, every time the user clicks on an area to filter the dataset, we update the title of the graph to reflect the current filter.


## Development Process

Chris:
- Coded the basic graphs and interactions.
- Contributed to writeup.
  
Jonathan:
- Wrote preprocessing code.
- Coded the coloring of the graphs to improve lookup time and comprehension.
- Created the legend.
- Contributed to writeup.

 
Our preprocessing code reads the original dataset and puts the results into convenient formats. We preprocessed the data into aggregate counts for each district-group pair so that we could efficiently aggregate those pairs further on demand (including only relevant data fields). This preprocessing drastically reduced query time and reduced the dataset size from over 200 megabytes to under 1 megabyte.

We each spent roughly 20 hours developing our visualization. Learning d3 took a good chunk of the time, as well as dealing with svg and javascript. In particular, learning the behavior of enter() and exit() took some amount of time, and debugging svg and javascript took a significant amount of time.
