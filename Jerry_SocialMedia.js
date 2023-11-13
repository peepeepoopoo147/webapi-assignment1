// Dummy data arrays to simulate storing posts, comments, likes and users
const posts = [
  //Sample post data
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
  //Sample comment data
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
  //Sample like data
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
  //Sample user data
  { 
    userId: 'Shrek', 
    name: 'ShrekIsAwesome', 
    password: 'Shrek1',
    profilePicUrl: 'https://images.app.goo.gl/V6etWLQJtk5q32kX9' 
  },
  { 
    userId: 'Monkey', 
    name: 'MonkeyDonkey', 
    password: 'Monkey1',
    profilePicUrl: 'https://images.app.goo.gl/T7YB2rrqLoAwzMqR8' 
  },
  { 
    userId: 'peepeepoopoo', 
    name: 'PeePeePooPoo', 
    password: 'peepeepoopoo1',
    profilePicUrl: 'https://images.app.goo.gl/oqNHap6yyv89nkoh9' 
  }
];

const session = {
  loggedInUser: null, // Object to store the currently logged-in user
};

// Function to generate a unique post ID
function generatePostId() {
   // Concatenate the current timestamp and a random string to create a unique ID
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Function to create a new user
function createUser(userId, name, password, profilePicUrl) {
  // Check if the user already exists
  const existingUser = users.find(user => user.userId === userId);

  if (existingUser) {
     // If the user already exists, return an error
    return {
      error: 'User already exists'
    };
  }

  // Create a new user
  const newUser = {
    userId,
    name,
    password,
    profilePicUrl
  };

  // Add the new user to the users array
  users.push(newUser);

  // Return the new user details
  return {
    userId: newUser.userId,
    name: newUser.name,
    profilePicUrl: newUser.profilePicUrl
  };
};

// Function to log in a user and store in the session
function login(userId, password) {
  // Find the user with the given userId
  const user = users.find(user => user.userId === userId);

  // Check if the user exists and the password is correct
  if (user && user.password === password) {
    //Store the logged-in user in the session
    session.loggedInUser = {
      userId: user.userId,
      name: user.name,
      profilePicUrl: user.profilePicUrl
    };
    // Return a success message along with the user details
    return {
      message: 'Login successful',
      user: session.loggedInUser
    };
  } else {
    // Return an error message for invalid credentials
    return {
      error: 'Invalid credentials'
    };
  }
};

// Function to log out the current user
function logout() {
  // Check if a user is currently logged in
  if (session.loggedInUser) {
    // Clear the logged-in user in the session
    session.loggedInUser = null;
    // Return a success message for logout
    return {
      message: 'Logout successful',
    };
  } else {
    // Return an error message if no user is currently logged in
    return {
      error: 'No user is currently logged in',
    };
  }
};

// Function to post messages and images to social media
function postToSocialMedia(message, imageUrl) {
  // Check if a user is logged in
  const loggedInUser = session.loggedInUser;
  if (!loggedInUser) {
    return {
      error: 'User not logged in'
    };
  };

  const postId = generatePostId();
  const timestamp = new Date();

  // Create a new post
  const post = {
    postId,
    userId: loggedInUser.userId,
    message,
    imageUrl,
    timestamp
  };

  // Add the new post to the posts array
  posts.push(post);

  // Return the post details
  return post;
};

// Function to add a comment to a post
function addCommentToPost(postId, comment) {
  // Check if a user is logged in
  const loggedInUser = session.loggedInUser;
    if (!loggedInUser) {
      return {
        error: 'User not logged in'
      };
    };

  // Simulate adding a comment to a specific post
  const timestamp = new Date();
  const newComment = {
    postId,
    userId: loggedInUser.userId,
    comment,
    timestamp
  };

  // Add the new comment to the comments array
  comments.push(newComment);

  // Return the added comment
  return newComment;
};

// Function to add a like to a post
function addLikeToPost(postId) {
  // Check if a user is logged in
  const loggedInUser = session.loggedInUser;
    if (!loggedInUser) {
      return {
        error: 'User not logged in'
      };
    };

  // Simulate adding a like to a specific post
  const newLike = {
    postId,
    userId: loggedInUser.userId,
  };

  // Add the new like to the likes array
  likes.push(newLike);

  // Return the added like
  return newLike;
};

// Function to search user profile
function searchUserProfile(userId) {
  // Find the user with the given userId
  const user = users.find(user => user.userId === userId);

  // Return the user information
  if (user) {
    return {
      userId: user.userId,
      name: user.name,
      profilePicUrl: user.profilePicUrl,
      posts: posts.filter(post => post.userId === userId)
    };
  } else {
    return null; // User not found
  }
};

// Function to retrieve the user's social media feed
function getUserFeed() {
  // Check if a user is logged in
  const loggedInUser = session.loggedInUser;
    if (!loggedInUser) {
      return {
        error: 'User not logged in'
      };
    };

  // Simulate getting posts from friends and followed accounts
  const userFeed = posts.filter(post => post.userId !== loggedInUser.userId);
  return userFeed;
};

// Function to look up comments for a specific post
function getPostComments(postId) {
  // Check if a user is logged in
  const loggedInUser = session.loggedInUser;
    if (!loggedInUser) {
      return {
        error: 'User not logged in'
      };
    };

  // Retrieve comments for a specific post
  const postComments = comments.filter(comment => comment.postId === postId);
  return postComments;
};

// Function to look up the list of users who liked a specific post
function getPostLikes(postId) {
  // Check if a user is logged in
  const loggedInUser = session.loggedInUser;
    if (!loggedInUser) {
      return {
        error: 'User not logged in'
      };
    };

  // Retrieve the list of users who liked a specific post
  const postLikes = likes.filter(like => like.postId === postId);
  return postLikes.map(like => like.userId);
};

// Function to view the logged-in user's own profile with posts, comments, and likes
function viewOwnProfile() {
  // Check if a user is logged in
  const loggedInUser = session.loggedInUser;
    if (!loggedInUser) {
      return {
        error: 'User not logged in'
      };
    };

  // Retrieve the user's own profile
  const user = users.find(user => user.userId === loggedInUser.userId);

  if (user) {
    // Filter posts, comments, and likes for the logged-in user
    const userPosts = posts.filter(post => post.userId === loggedInUser.userId);

    const userComments = comments.filter(comment => userPosts.some(post => post.postId === comment.postId));

    const userLikes = likes.filter(like => userPosts.some(post => post.postId === like.postId));

    return {
      userId: user.userId,
      name: user.name,
      profilePicUrl: user.profilePicUrl,
      posts: userPosts.map(post => {
        // Include comments and likes for each post
        const postComments = userComments.filter(comment => comment.postId === post.postId);
        const postLikes = userLikes.filter(like => like.postId === post.postId);

        return {
          ...post,
          comments: postComments.map(comment => comment.comment).join(', '),
          likes: postLikes.map(like => like.userId).join(', ')
        };
      })
    };
  } else {
    return null; // User not found
  }
}

// Exporting the module with the defined functions
module.exports = {
  createUser,
  login,
  logout,
  postToSocialMedia,
  addCommentToPost,
  addLikeToPost,
  searchUserProfile,
  getUserFeed,
  getPostComments,
  getPostLikes,
  viewOwnProfile
};
