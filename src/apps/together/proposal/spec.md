---
layout: layout.hbs
---

# Specification

# Data

Our app uses the following structure for the database backend:

* User Key
  * Active (T/F)
  * VoteID (Sports)
    * Voted (T/F)
      * Timestamp 
  * VoteID (Politics)
    * Voted (T/F)
      * Timestamp 
  * VoteID (Other)
    * Voted (T/F)
      * Timestamp 


# Actions

The major actions of our app are:
* Login
* Categories
* Viewing Video 
* Voting

## Action: Login

* Case 1: A user of Polive can login using their GitHub account.

* Case 2:  A user of Polive, once logged in, can logout.

## Action: Categories

* Case 1: A user of Polive can select a category from a few given options. 

* Case 2: A user can change their selected category any time they want.

## Action: View Video

* Case 1: A user of Polive can view given video clips/debates dependant on which category they chose 

* Case 2: User can submit votes on Polive as they are watching a live debate. 

## Action: Voting

* Case 1: A user who has not voted and is logged into Polive can vote anytime and see what others are voting.

* Case 2: A user who has already voted and is logged into Polive can change his vote and see what others are voting.

* Case 3: A user who has not voted and is not signed can see what is being voted for but cannot vote until he signs in.




## Pseudo Code

### Login

* Case: First time user logging in

``` javascript
// given
userkey is
{
   null
}

// when
login(userkey.UserID = ‘GitHubID’)

// then
userkey.UserID should be
{
  'userID’: 'GitHubID'
  ‘active’: true
}

```

* Case: Login of User (Not first time voting)

``` javascript
// given
userkey is
{
  'userID': 'GitHubID'
  ‘active’: false
}

// when
logout(userkey.UserID = ‘GitHubID’)

// then
UserKey should be
{
  ‘userID’: 'GitHubID'
  ‘active’: true
}

```

* Case: Logout

``` javascript
// given
userkey is
{
  'userID': 'GitHubID'
  ‘active’: true
}

// when
logout(userkey.UserID = ‘GitHubID’)

// then
UserKey should be
{
  'userID': 'GitHubID'
  ‘active’: false
}

```

### Vote

* Case: Initial vote (logged in)

``` javascript
// given
UserKey is
{
  '-cadsace': 'a'
}

// when
vote_on(text = '1')

// then
UserKey.VoteID.Vote should be
{
  '-cadsace': '1'
}
```

* Case: Already Voted

``` javascript
// given
UserKey is
{
  '-cadsace': 'a'
}

// when
vote_on(text = '1')

// then
UserKey.VoteID.Vote should be
{
  '-cadsace': '1'
}
```

* Case: Not logged in

``` javascript
UserKey is
{
  '-cadsace': null
}

// when
vote_on(text = '1')

// then
continue;
```

## Other actions:
  * We only added cases for the actions that required one.

