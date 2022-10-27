import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import './Blog.css'

const Blog = () => {
  const {user} = useContext(AuthContext)
  return (
<div className='blog'>
<h2> What is cors?</h2> 
<p>Cross-origin resource haring (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>

<h2>Why are using firebase?</h2>
<p>What other Options do you have ti implement authentication
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Options are Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>

<h2>How does the Private Route?</h2>
<p>He private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>

<h2>What is node?How Dose Node Work?</h2>
<p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return</p>

 </div>
  );
};

export default Blog;