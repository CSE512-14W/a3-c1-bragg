a3-c1-bragg
===============

## Team Members

1. Christopher Lin c1@uw.edu
2. Jonathan Bragg bragg@uw.edu

## Crime in Seattle

We visualize police reports of 911 calls in Seattle. We first present the user with two stacked area graphs. The first shows how the number of reports of each type of crime changes through time. The second shows how the number of reports of crime in each neighborhood of Seattle changes through time. Clicking on an area that represents a type of crime or a neighborhood allows the user to filter by that type or neighborhood. In the first case, the graph transitions into one that breaks down how that type of crime is ditributed among neighborhoods. In the second case, the graph transitions into one that breaks down how prevalent different kinds of crimes are in the given neighborhood.


## Running Instructions


Access our visualization at http://homes.cs.washington.edu/~chrislin/a3/a3-c1-bragg/viz.html.


## Story Board

Our storyboard is here: https://www.dropbox.com/s/mrda6im2dvjf76m/storyboard.pdf

### Changes between Storyboard and the Final Implementation

In our storyboard, we imagined a single graph with which the user could interact. The initial graph presented to the user would show the total number of crime reports across time, with no subdivisions. The user would then be able to divide up the graph by crime type or neighborhood. However, we decided instead to just present these two graphs initially. This reduces the number of interactions the user must use to explore the data, and also allows for comparison between graphs. 

## Development Process

Include:

Chris:
  -Coded the basic graphs and interactions.
  
Jonathan:
  -Prepared the dataset for easy reading.
  -Wrote code to read the dataset, analyze it, and put the results into convenient formats. 
  -Coded the coloring of the graphs to reflect patterns.
  -Created the legend.

 
We each spent roughly 20 hours developing our visualization. Learning d3 took a good chunk of the time, as well as dealing with svg and javascript. In particular, learning the behavior of enter() and exit() took some amount of time, and debugging svg and javascript took a significant amount of time.
