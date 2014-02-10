a3-c1-bragg
===============

## Team Members

1. Christopher Lin c1@uw.edu
2. Jonathan Bragg bragg@uw.edu

## Crime in Seattle

We visualize police reports of 911 calls in Seattle, using the <a href="https://data.seattle.gov/Public-Safety/Seattle-Police-Department-911-Incident-Response/3k2p-39jp">the dataset</a> available on data.seattle.gov. We first present the user with two stacked area graphs. The first shows how the number of reports of each type of crime changes through time. The second shows how the number of reports of crime in each neighborhood of Seattle changes through time. Clicking on an area that represents a type of crime or a neighborhood allows the user to filter by that type or neighborhood. In the first case, the graph transitions into one that breaks down how that type of crime is ditributed among neighborhoods. In the second case, the graph transitions into one that breaks down how prevalent different kinds of crimes are in the given neighborhood.


## Running Instructions


Access our visualization at http://homes.cs.washington.edu/~chrislin/a3/a3-c1-bragg/viz.html. For optimal viewing, please use a screen that can display a width of 1400 pixels. An example of what our visualization should look like is here:  https://www.dropbox.com/s/4tu0oo3o6bsmhgp/screenshot.PNG


## Story Board

Our storyboard is here: https://www.dropbox.com/s/mrda6im2dvjf76m/storyboard.pdf

### Changes between Storyboard and the Final Implementation

In our storyboard, we imagined a single graph with which the user could interact. The initial graph presented to the user would show the total number of crime reports across time, with no subdivisions. The user would then be able to divide up the graph by crime type or neighborhood. However, we decided instead to just present these two graphs initially. This reduces the number of interactions the user must use to explore the data, and also allows for comparison between graphs. 

Our initial thought was to visualize each group or district using a separate color, but we realized that we could convey more information by restricting the set of colors. In the case of district, we map colors to the broader regions (N,E,W,S,SW) shown in the map to facilitate faster geographic lookup. For groups, we noticed that we can calculate the average number of minutes from when officers arrive on-scene until the event is cleared, and use that time as a proxy for severity of crime. We bin the crime types into five evenly-spaced bins of 40 minutes, with colors from white to red.

In the area charts, subdivisions are ordered alphebetically so that one can quickly find a specific district or crime group by name, rather than using color to get a sense of the aggregate trends.

We also realized we needed to provide some information about what view the user is currently looking at, to prevent confusion. So everytime the user clicks on an area to filter the dataset, we update the title of the graph to reflect the current filter.


## Development Process

Chris:
  -Coded the basic graphs and interactions.
  
Jonathan:
  -Prepared the dataset for easy reading.
  -Wrote code to read the dataset, analyze it, and put the results into convenient formats. 
  -Coded the coloring of the graphs to reflect patterns.
  -Created the legend.

 
We each spent roughly 20 hours developing our visualization. Learning d3 took a good chunk of the time, as well as dealing with svg and javascript. In particular, learning the behavior of enter() and exit() took some amount of time, and debugging svg and javascript took a significant amount of time.
