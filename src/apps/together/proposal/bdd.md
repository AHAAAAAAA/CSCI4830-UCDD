---
layout: layout.hbs
---

# BDD - Together

# Features

## Feature: My App’s Feature 1 - Timestamp 

``` gherkin
Timestamps will be essential for our real-time voting platform
We will timestamp all votes.

Scenario 1: Timestamp graph should not be shown until polling session is finished
Scenario 2: Every time a user changes their vote, a timestamp is given to this update.
Scenario 3: As users vote, graphs generate revealing voter timestamp statistics

```

## Feature: My App’s Feature 2 - Generating the graph

``` gherkin
As a user of Polive
I want to be able to see a graph displayed in real-time
So that I can visually see my votes against others.

Scenario 1: Users and admin should be able to see all user’s votes according to when they were submitted.
Scenario 2: User votes and this is his first vote,
	       Vote is registered and the graph is updated to reflect the new vote
Scenario 3: User votes 
	       User now modifies the vote because he changed his mind
	       The graph is updated again in order to reflect the modified vote.

```

## Feature: My App’s Feature 3 - Real time polling

``` gherkin
As a user of Polive
I want to be able to vote and see my vote reflected in the results in real-time
So that I can see my vote against others.

Scenario 1: User should be able to change vote mid-polling session
Scenario 2: User’s vote can be influenced by peers
Scenario 3: If this is a one on one debate, a slide-y bar can be used to show users opinion.

```

## Feature: My App’s Feature 4 - Videos

``` gherkin
As a user of Polive
I want to be able to view a debate video
So that I can make informed decisions

Scenario 1: Users should be able to see an embedded video
Scenario 2: Video content should contain a debate on some topic for users to vote on
Scenario 3:  Users should be able to select from built in video debates to start a new vote

```