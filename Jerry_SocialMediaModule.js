// Dummy data arrays to simulate storing posts, comments, likes and users
const posts = [
  {
    postId: generatePostId(),
    userId: 'Shrek',
    message: 'I am green',
    imageUrl: 'https://images.app.goo.gl/7WRoYL5KxiKLfEGx7',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
  },
  {
    postId: generatePostId(),
    userId: 'Monkey',
    message: 'Planet of the apes',
    imageUrl: 'https://images.app.goo.gl/DW1y7d25Bo8NqsqY9',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
  }
];
  
const comments = [
  {
    postId: posts[0].postId,
    userId: 'Monkey',
    comment: 'I love shrek!!',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  },
  {
    postId: posts[1].postId,
    userId: 'peepeepoopoo',
    comment: 'I am a monkey too',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  }
];
  
const likes = [
  { 
    postId: posts[0].postId, 
    userId: 'peepeepoopoo' 
  },
  { 
    postId: posts[1].postId, 
    userId: 'Shrek'
  },
  { 
    postId: posts[1].postId, 
    userId: 'peepeepoopoo'
  }
];

const users = [
  { 
    userId: 'Shrek', 
    name: 'ShrekIsAwesome', 
    profilePicUrl: 'https://images.app.goo.gl/V6etWLQJtk5q32kX9' 
  },
  { 
    userId: 'Monkey', 
    name: 'MonkeyDonkey', 
    profilePicUrl: 'https://images.app.goo.gl/T7YB2rrqLoAwzMqR8' 
  },
  { 
    userId: 'peepeepoopoo', 
    name: 'PeePeePooPoo', 
    profilePicUrl: 'https://images.app.goo.gl/oqNHap6yyv89nkoh9' 
  }
];

// Function to generate a unique post ID
function generatePostId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Function to post messages and images to social media
function postToSocialMedia(userId, message, imageUrl) {
  const postId = generatePostId();
  const timestamp = new Date();

  const post = {
    postId,
    userId,
    message,
    imageUrl,
    timestamp
  };

  posts.push(post);

  // Return the post details
  return post;
};

// Function to get user profile
function getUserProfile(userId) {
  const user = users.find(user => user.userId === userId);

  // Return the user information
  if (user) {
    return {
      userId: user.userId,
      name: user.name,
      profilePicUrl: user.profilePicUrl
    };
  } else {
    return null; // User not found
  }
};

// Function to retrieve the user's social media feed
function getUserFeed(userId) {
  // Simulate getting posts from friends and followed accounts
  const userFeed = posts.filter(post => post.userId !== userId);
  return userFeed;
};

// Function to look up comments for a specific post
function getPostComments(postId) {
  // Retrieve comments for a specific post
  const postComments = comments.filter(comment => comment.postId === postId);
  return postComments;
};

// Function to look up the list of users who liked a specific post
function getPostLikes(postId) {
  // Retrieve the list of users who liked a specific post
  const postLikes = likes.filter(like => like.postId === postId);
  return postLikes.map(like => like.userId);
};

// Function to search for posts based on keywords
function searchUserPosts(userId, searchTerm) {
  // Simulate searching for posts based on keywords 
  const matchingPosts = posts.filter(
    post => post.message.includes(searchTerm) && post.userId === userId
  );

  return matchingPosts;
};

// Function to add a comment to a post
function addCommentToPost(postId, userId, comment) {
  // Simulate adding a comment to a specific post
  const timestamp = new Date();
  const newComment = {
    postId,
    userId,
    comment,
    timestamp
  };

  comments.push(newComment);

  // Return the added comment
  return newComment;
};

// Function to add a like to a post
function addLikeToPost(postId, userId) {
  // Simulate adding a like to a specific post
  const newLike = {
    postId,
    userId
  };

  likes.push(newLike);

  // Return the added like
  return newLike;
};

// Exporting the module with the defined functions
module.exports = {
  postToSocialMedia,
  getUserProfile,
  getUserFeed,
  getPostComments,
  getPostLikes,
  searchUserPosts,
  addCommentToPost,
  addLikeToPost
};
