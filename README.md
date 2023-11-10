# Jerry Social Media Module

This Node.js module provides functionalities to simulate social media interactions such as posting messages and images, retrieving user profiles, and managing comments and likes.

## Installation

There's no specific installation process required for this module. Simply include the module in your project and require it as follows:

```javascript
const socialMediaModule = require('./Jerry_SocialMediaModule.js');
```

# Usage

To utilize the functionalities of the Social Media Module, follow the examples below:

## Post Messages and Images to Social Media

```javascript
const newpost = socialMediaModule.postToSocialMedia('Shrek', 'Watch Shrek', 'https://images.app.goo.gl/7WRoYL5KxiKLfEGx7');
console.log('New Post:', newpost);

```
### Parameters:
- **_'Shrek'_** : User ID of the person making the post.<br>
- **_'Watch Shrek'_** : Message content of the post.<br>
- **_'https://images.app.goo.gl/7WRoYL5KxiKLfEGx7'_** : URL of the image attached to the post.

## Get User Profile

```javascript
const finduser = socialMediaModule.getUserProfile('Shrek');
console.log('User:', finduser);
```

### Parameters:
- **_'Shrek'_** : User ID for which the profile is retrieved.

## Get User Feed

```javascript
const getuserfeed = socialMediaModule.getUserFeed('Shrek');
console.log(`${finduser.userId}s Feed:`, getuserfeed);
```

### Parameters:
- **_'Shrek'_** : User ID for which the feed is retrieved.

## Get Post Comments

```javascript
const firstpost = getuserfeed[0];
const getpostcomment = socialMediaModule.getPostComments(firstpost.postId);
console.log('Comments:', getpostcomment);
```

### Parameters:
- **_firstpost.postId_** : Post ID for which comments are retrieved.

## Get Post Likes

```javascript
const getpostlike = socialMediaModule.getPostLikes(firstpost.postId);
console.log('Likes:', getpostlike);
```

### Parameters:
- **_firstpost.postId_** : Post ID for which likes are retrieved.

## Search User Posts

```javascript
const search = socialMediaModule.searchUserPosts('Shrek', 'green');
console.log('Search Results:', search);
```

### Parameters:
- **_'Shrek'_** : User ID whose posts are being searched.
- **_'green'_** : Search term.

## Add Comment to Post

```javascript
const addcomment = socialMediaModule.addCommentToPost(newpost.postId, 'Monkey', 'Support Shrek');
console.log('New Comment:', addcomment);
```

### Parameters:
- **_newpost.postId_** : Post ID to which the comment is added.
- **_'Monkey'_** : User ID adding the comment.
- **_'Support Shrek'_** : Comment content.

## Add Like to Post

```javascript
const addlike = socialMediaModule.addLikeToPost(newpost.postId, 'Monkey');
console.log('New Like:', addlike);

```

### Parameters:
- **_newpost.postId_** : Post ID to which the like is added.
- **_'Monkey'_** : User ID adding the like.
