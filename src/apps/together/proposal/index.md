---
layout: layout.hbs
---

# Proposal

## Team Members
  * Russell Mehring
  * Sigrunn Sky
  * Ahmed Almutawa
  * Juan Carlos Herrera

## Ideation

These ideation questions are the same as before. Your answers should represent
the integration of creative ideas from every team member.

** What is the name of your app? **

Polive

** What collaborative activity can people do together using your app? **

Voting together on a debate between two sides of an issue.  So for example users can create 
a debate page on an issue, then there will be real time polling data where users can track
progress/ how other users feel in support of, or against one side. This could be used for any topic
for example camping supplies, a coding idea, or political candidates etc. 

** What is the ideal number of concurrent users (must be at least 10 but no more than 40)? **

2 to set up the debate (one for each side), then 10-40 to handle the voting/participating

** What skills do people need in order to do this activity? **

Users need to be able to form an opinion on the spot and vote as time progresses

** Is this activity for fun or for something practical? **

Practical AND for fun -- practical for when trying to accomplish a common goal that is in flux, 
and for fun when wanting to how people stand on an issue that doesn't really matter (like what game should
we all play)

** How can a person see what everyone else is doing? **

A chronological graph and a live chart will be generated as people are voting that will be updated with 
current results based on firebase timestamps to show how users are currently feeling on an issue--this 
will allow users to see what everyone else is doing.

** How can a person see the most recent result of everyone's collaborative effort? **

At the end of voting, the final charts will be available to see the final vote/ feelings of voters.
A third graph will also be generated that averages out results. 

** What can an admin see (i.e., God's mode)? **

Admin can see:
 * All ongoing debates
   * They can enter the debate and see how results are coming in
 * Results of debates -- final results
 * How many users online -- log
 * Time remaining in debates

## Contributions

For each person on the team, jot down a list of ideas credited to that person.
It's okay to credit multiple people for the same idea. The rationale of this
section of the proposal is to demonstrate that everyone on the team contributes
useful ideas.

* ** Russ Mehring **
  * Combining all 4 ideas into one polling app
  * Having 2 people debate ANY issue rather than one type
  * Letting users generate a page for a debate
* ** Sigrunn Sky **
  * Combining all 4 ideas into one polling app
  * Not make it political only, generalize the debates
  * Having one video to watch/vote on
* **Ahmed Almutawa **
  * Combining all 4 ideas into one polling app
  * Instead of users creating new pages/debates just have 5 built in debates
  * Using timestamps to be able to generate a chronological chart of feelings
* ** Juan Carlos Herrera **
  * Integrating essential feautures from all four ideas  
  * Using Google's realtime engine to manage syncronization 
  * Having a chat system so users can discuss before polling 

## Plan

A reasonable way to implement a functional prototype of your together app
is to build upon the service-matching app (i.e. uber). Discuss what additional
efforts may be required from your team to develop the together app.

** What existing components of the uber app your team can reuse? **

 * Github login
 * Database structure
 * Maybe having heroku host the webpages rather than firebase
 * React components to get virtual DOM benefits such as showing who's online

** What new components and features your team may need to build? **

 * Implement real-time chart generation
 * Real-time voting without reloading whole page
 * Might need ot change database
 * Might need to host on Heroku instead of firebase

** What new skills your team will still need to acquire? **

 * Live charts
 * More React
 * How to parse charts to page
 * If time, auto generating new pages for new debates

## What's Next?

This is a preliminary proposal. Next week, your team will receive feedback and
will work on building a _mockup_ of this app. The week after that, your team
will start implementing the app.