# Jerry Social Media Module

This Node.js module simulates social media interactions, allowing users to create accounts, post messages and images, interact with posts through comments and likes, and more.

## Installation

There's no specific installation process required for this module. Simply include the module in your project and require it as follows:

```javascript
const socialMediaModule = require('./Jerry_SocialMedia.js');
```

# Usage

To utilize the functionalities of the Social Media Module, follow the examples below:

## Create new user

This function creates a new user with the specified details and returns the user's information.<br>
Takes in userId, name, password, and profilePicUrl as parameters.

```javascript
const newUser = socialMediaModule.createUser('User1', 'Name', 'User1', 'https://google.com');
console.log('New User:', newUser);
``` 

## Login

The login function is used to log in a user. <br>
Takes userId and password as parameters and returns the result of the login attempt.

```javascript
const login = socialMediaModule.login('Shrek', 'Shrek1');
console.log('Login Result:', login);
``` 

## Get user feed

### **_Note : This function requires the user to be logged in before usage_**
This function retrieves the social media feed of the currently logged-in user. <br>
It returns an array of posts from friends and followed accounts.

```javascript
const getFeed = socialMediaModule.getUserFeed();
console.log('Your Feed:', getFeed);
``` 

## Post to social media

### **_Note : This function requires the user to be logged in before usage_**
This function allows the logged-in user to create a new post with a message and an image URL. <br>
Takes in message and imageUrl as parameters.

```javascript
const newPost = socialMediaModule.postToSocialMedia('Hi', 'https://pic.url');
console.log('New post:', newPost);
``` 

## Search user profile
This function searches for a user profile based on the provided userId and returns information about the user, including their posts. <br>
Takes in userId as paramater.

```javascript
const searchUser = socialMediaModule.searchUserProfile('Shrek');
console.log('Search Results:', searchUser);
``` 

## Add comment to post

### **_Note : This function requires the user to be logged in before usage_**
This function allows the logged-in user to add a comment to a specific post identified by the postId.<br>
Takes in postId as the parameter.

```javascript
const newComment = socialMediaModule.addCommentToPost(searchUser.posts[0].postId, 'Hi');
//An alternative
//const newComment = socialMediaModule.addCommentToPost(getFeed[0].postId, 'Hi');
console.log('New Comment:', newComment);
``` 

## Add like to post

### **_Note : This function requires the user to be logged in before usage_**
This function adds a like to a specific post identified by the postId.<br>
Takes in postId as the parameter.

```javascript
const newLike = socialMediaModule.addLikeToPost(searchUser.posts[0].postId);
//An alternative
//const newLike = socialMediaModule.addLikeToPost(getFeed[0].postId);
console.log('New Like:', newLike);
``` 

## Get post comments

### **_Note : This function requires the user to be logged in before usage_**
This function retrieves comments for a specific post identified by the postId.<br>
Takes in postId as the parameter.

```javascript
const getComment = socialMediaModule.getPostComments(searchUser.posts[0].postId)
//An alternative
//const getComment = socialMediaModule.getPostComments(getFeed[0].postId);
console.log('Post Comments:', getComment);
``` 

## Get post likes

### **_Note : This function requires the user to be logged in before usage_**
This function retrieves the list of users who liked a specific post identified by the postId.<br>
Takes in postId as the parameter.

```javascript
const getLikes = socialMediaModule.getPostLikes(searchUser.posts[0].postId);
//An alternative
//const getLikes = socialMediaModule.getPostLikes(getFeed[0].postId);
console.log('Post Likes:', getLikes);
``` 

## View own profile

### **_Note : This function requires the user to be logged in before usage_**
The viewOwnProfile function allows the logged-in user to view their own profile, including posts, comments, and likes.

```javascript
const viewProfile = socialMediaModule.viewOwnProfile();
console.log(`${viewProfile.userId}:`, viewProfile);
``` 

## Log out 
This function logs out the currently logged-in user.

```javascript
const logout = socialMediaModule.logout();
console.log('Logout Result:', logout);
``` 