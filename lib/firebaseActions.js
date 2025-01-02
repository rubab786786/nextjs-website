/**
 * Firebase Actions
 *
 * This module contains a collection of functions for interacting with Firebase services
 * such as Firestore, Authentication, and Realtime Database.
 *
 * @version 2.0.0
 *
 * @module FirebaseActions
 */

import { getAuth } from 'firebase/auth';
import app from './firebaseConfig';
import db from './firestore'
import { collection, query, where, getDocs, orderBy, limit, setDoc, deleteDoc, getDoc, doc, addDoc, Timestamp, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { convertFirestoreTimestampToDate } from './utils';

function custom_sort(a, b) {
  return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
}

/**
 * Function to get posts from Firestore ordered by date.
 * @returns {Promise<Array>} An array of posts.
 */
export const getPostsOrderByDate = async () => {
  const q = query(collection(db, 'posts'), orderBy('publishDate'));
  const postSnap = await getDocs(q);

  const filteredPosts = postSnap.docs.map(function (post) {
    return ({
      slug: post.get('slug'),
      title: post.get('title'),
      coverImageAlt: post.get('coverImageAlt'),
      IndexImage: post.get('IndexImage'),
      publishDate: post.get('publishDate')
    });
  });
  return filteredPosts.sort(custom_sort).reverse()
};

/**
 * Function to get all posts from Firestore.
 * @returns {Promise<Array>} An array of posts.
 */
export const getPosts = async () => {
  const q = query(collection(db, "posts"));
  const postSnap = await getDocs(q);
  return postSnap.docs.map(postSnap => postSnap.data());
};

/**
 * Function to get post content from Firestore.
 * @returns {Promise<Array>} An array of post content.
 */
export const getPostContent = async () => {
  const q = query(collection(db, "post_contents"));
  const postSnap = await getDocs(q);
  return postSnap.docs.map(docSnap => docSnap.data());
}

/**
 * Function to get post slugs from Firestore.
 * @returns {Promise<Array>} An array of post slugs.
 */
export const getPostSlugsOnly = async () => {
  const posts = await getPosts();
  return posts.map(post => post.slug);
}

/**
 * Function to get posts by date from Firestore.
 * @returns {Promise<QuerySnapshot>} A Firestore QuerySnapshot of posts ordered by date.
 */
export const getPostsByDate = async () => {
  const snapshot = await getDocs(query(collection(db, 'posts')));
  return snapshot.docs.orderBy('dateCreated');
};

/**
 * Function to get resources from Firestore.
 * @returns {Promise<Array>} An array of resource objects.
 */
export const getResources = async () => {
  const snapshot = await getDocs(query(collection(db, 'resources')));
  return snapshot.docs.map(dataSnap => dataSnap.data());
};

/**
 * Function to get resources by slug from Firestore.
 * @param {string} slug - The slug of the resource to retrieve.
 * @returns {Promise<Object|null>} The resource object matching the provided slug or null if not found.
 */
export const getResourcesBySlug = async (slug) => {
  const snapshot = await getDocs(query(collection(db, 'resources'), where('slug', "==", slug)));
  const resourceData = snapshot.docs.map(docSnap => docSnap.data());
  return resourceData[0];
};

/**
 * Function to get resource slugs from Firestore.
 * @returns {Promise<Array>} An array of resource slugs.
 */
export const getResourceSlugs = async () => {
  const resources = await getResources();
  return resources.map(resource => resource.slug);
};

/**
 * Function to get posts for the sidebar from Firestore.
 * @returns {Promise<Array>} An array of post objects for the sidebar.
 */
export const getPostsSidebar = async () => {
  const q = query(collection(db, 'posts'), orderBy('publishDate'));
  const postSnap = await getDocs(q);

  const filteredPosts = postSnap.docs.map(function (post) {
    // console.log([post.get('publishDate')])
    return ({
      slug: post.get('slug'),
      title: post.get('title'),
      coverImageAlt: post.get('coverImageAlt'),
      IndexImage: post.get('IndexImage'),
      publishDate: post.get('publishDate')
    });
  });
  return filteredPosts.sort(custom_sort).reverse()
};

/**
 * Function to create a new post in Firestore.
 * @param {Object} post - The post object to create.
 * @returns {Promise<void>} A Promise indicating the success of the operation.
 */
export const createPost = async (post) => {
  const dateCreated = new Date().getTime();
  post.dateCreated = dateCreated;
  return await setDoc(doc(db, "posts", post.slug), post);
};

/**
 * Function to retrieve data for a single post by its slug from Firestore.
 * @param {string} slug - The slug of the post to retrieve.
 * @returns {Promise<Object|null>} The post object matching the provided slug or null if not found.
 */
export const getPostBySlug = async (slug) => {
  const snapshot = await getDoc(doc(db, 'posts', slug))
  return snapshot.data();
};


/**
 * Function to retrieve post content by its slug from Firestore.
 * @param {string} slug - The slug of the post content to retrieve.
 * @returns {Promise<Object|null>} The post content object matching the provided slug or null if not found.
 */
export const getPostContentBySlug = async (slug) => {
  const snapshot = await getDoc(doc(db, 'post_contents', slug))
  // console.log(snapshot.data())
  return snapshot.data();
};

export const getPagesBySlug = async (slug) => {
  console.log("Slug:" + slug)
  const snapshot = await getDoc(doc(db, 'pages', slug))
  console.log(snapshot.exists())
  return snapshot.data()
};

export const getPageSlugs = async () => {
  const snap = await getDocs(collection(db, 'pages'))
  console.log(snap.docs.map(doc => doc.id))
  return snap.docs.map(doc => doc.id)
}

/**
 * Function to retrieve FAQs from Firestore.
 * @returns {Promise<Array>} An array of FAQ objects.
 */
export const getFaqs = async () => {
  const faqSnap = await getDocs(collection(db, 'faqs'))
  return faqSnap.docs.map(docSnap => docSnap.data());
};

/**
 * Function to retrieve FAQs by their unique ID from Firestore.
 * @param {string} id - The ID of the FAQ to retrieve.
 * @returns {Promise<Array>} An array of FAQ objects matching the provided ID.
 */
export const getFaqsById = async (id) => {
  const query = query(collection(db, 'faqs'), where('id', '==', id));
  const faqSnap = await getDocs(query);
  return faqSnap.docs.map(docSnap => docSnap.data());
};

/**
 * Function to create a new comment in Firestore.
 * @param {Object} comment - The comment object to create.
 * @returns {Promise<void>} A Promise indicating the success of the operation.
 */
export const createComment = async (comment) => {
  comment.date = new Date().getTime();
  return await addDoc(collection(db, 'comments'), comment);
};

/**
 * Function to delete a comment by its ID from Firestore.
 * @param {string} id - The ID of the comment to delete.
 * @returns {Promise<void>} A Promise indicating the success of the operation.
 */
export const deleteCommentById = async (id) => {
  return await deleteDoc(doc(db, 'comments', id));
};

/**
 * Function to retrieve all comments from Firestore.
 * @returns {Promise<Array>} An array of comment objects.
 */
export const getAllComments = async () => {
  const commentSnap = await getDocs(collection(db, 'comments'));
  return commentSnap.docs.map(docSnap => docSnap.data());
};

/**
 * Function to retrieve a comment by its ID from Firestore.
 * @param {string} id - The ID of the comment to retrieve.
 * @returns {Promise<Array>} An array of comment objects matching the provided ID.
 */
export const getCommentById = async (id) => {
  const query = query(collection(db, 'comments'), where('id', '==', id));
  const commentSnap = await getDocs(query);
  return commentSnap.docs.map(docSnap => docSnap.data());
};

/**
 * Function to retrieve all news articles from Firestore.
 * @returns {Promise<Array>} An array of news article objects.
 */
export const getAllNews = async () => {
  const newsSnap = await getDocs(collection(db, 'news'));
  return newsSnap.docs.map(docSnap => docSnap.data());
};

/**
 * Function to retrieve a news article by its unique ID from Firestore.
 * @param {string} id - The ID of the news article to retrieve.
 * @returns {Promise<Array>} An array of news article objects matching the provided ID.
 */
export const getNewsById = async (id) => {
  const query = query(collection(db, 'news'), where('id', '==', id));
  const userSnap = await getDocs(query);
  return userSnap.docs.map(docSnap => docSnap.data());
};


export const isUserExists = async (email) => {
  const q = query(collection(db, 'crm_users'), where('email', '==', email))
  const userSnap = await getDocs(q)

  return userSnap.empty ? false : true
}

export const isUserUUIDExists = async (uuid) => {
  const q = query(collection(db, 'crm_users'), where('uuid', '==', uuid))
  const userSnap = await getDocs(q)
  return userSnap.empty ? false : true
}

// empty -> true : no user exists
// empty->false : users exist 

export const isUserEmailVerified = async (email) => {
  return await isEmailVerifiedUserCRM(email)
}

export const isEmailVerifiedUserCRM = async (email) => {
  const { data } = await getUserInCRMByEmail(email)
  // console.log(data);
  if (!data) {
    return false
  }
  return (data[0].isEmailVerified === true)

}

export const createUserInCRM = async (user) => {
  user.created = Timestamp.fromDate(new Date())
  user.uuid = uuidv4()
  user.isEmailVerified = false
  try {
    await setDoc(doc(db, 'crm_users', user.uuid), user);
    return { uuid: user.uuid, email: user.email, firstName: user.firstName }
  } catch (error) {
    console.log(error)
  }
}

export const verifyUserUUIDAndEmail = async (uuid) => {
  const userRef = doc(db, "crm_users", uuid);
  return await updateDoc(userRef, { isEmailVerified: true })
}

export const updateUserEmailVerificationStatus = async (uuid, status) => {
  const userRef = doc(db, "crm_users", uuid);
  return await updateDoc(userRef, { isEmailVerified: status })
}

export const updateUserPPM = async (uuid, data) => {
  const userRef = doc(db, "crm_users", uuid);
  return await updateDoc(userRef,
    {
      requiredGuides: data.requiredGuides,
      status: data.status,
      isPPM: data.isPPM
    })
}

export const getUserInCRMByEmail = async (email) => {
  const q = query(collection(db, 'crm_users'), where('email', '==', email));
  const userSnap = await getDocs(q);

  if (userSnap.empty) {
    return { code: 'EMAIL_NOT_EXIST', message: 'User with this email does not exist.', data: undefined }
  }
  return { data: userSnap.docs.map(doc => doc.data()) };
}

export const getUserInCRMById = async (uuid) => {
  // const query = query(collection(db, 'crm_users'), where('uuid', '==', uuid));
  const userSnap = await getDoc(uuid);
  if (!userSnap.exists) {
    return { code: 'UUID_NOT_EXIST', message: 'User with this UUID does not exist.', data: undefined }
  }
  return userSnap.data();
}

export const updateUserInCRM = async (user) => {
  return await setDoc(doc(db, 'crm_users', user.uuid), user);
}

/**
 * Function to listen for changes in the authentication state using Firebase Auth.
 * @param {Function} callback - The callback function to execute when the authentication state changes.
 * @returns {function} The Firebase Auth unsubscribe function.
 */
export const onAuthStateChanged = async (callback) => {
  return getAuth(app).onAuthStateChanged((user) => callback(user));
};

/**
 * Function to attempt authentication of a user with a given email and password using Firebase Auth.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<firebase.auth.UserCredential>} A Promise containing user authentication credentials.
 */
export const signIn = async (email, password) => {
  return getAuth(app).signInWithEmailAndPassword(email, password);
};

/**
 * Function to sign out the authenticated user using Firebase Auth.
 * @returns {Promise<void>} A Promise indicating the success of the sign-out operation.
 */
export const signOut = async () => {
  return getAuth(app).signOut();
};

/**
 * Function to update the data for a given post in Firestore.
 * @param {Object} post - The updated post object to save.
 * @returns {Promise<void>} A Promise indicating the success of the update operation.
 */
export const updatePost = async (post) => {
  return await setDoc(doc(db, 'posts', post.slug), post);
};

/**
 * Function to delete a post by its slug from Firestore.
 * @param {string} slug - The slug of the post to delete.
 * @returns {Promise<void>} A Promise indicating the success of the delete operation.
 */
export const deletePost = async (slug) => {
  return await deleteDoc(doc(db, 'posts', slug));
};
