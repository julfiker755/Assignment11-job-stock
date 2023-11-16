import React from 'react';
import {Helmet} from 'react-helmet-async'

const Blogs = () => {
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-10 !text-black'>
            <Helmet>
                <title>Job | Blog</title>
            </Helmet>
            <h1 className='text-2xl lg:text-3xl font-semibold text-center mb-3'>Blogs</h1>

            <div>
            <div>
                <h1 className='text-xl font-semibold'>Question: What is an access token and refresh token? How do they work and where should we
                  store them on the client-side</h1>
                  <p className='text-base'>Answer: Access tokens and refresh tokens are commonly used in authentication systems, especially in the context of OAuth 2.0 and similar protocols. They are used to secure access to resources and provide a way for clients (e.g., applications or services) to interact with protected APIs or services on behalf of a user. </p>
            </div>
            <div className='mt-10'>
                <h1 className='text-xl font-semibold'>Question: What is express js?</h1>
                  <p className='text-base'>Answer:Express.js, often simply referred to as Express, is a minimal and flexible Node.js web application framework. It provides a set of features for building web and mobile applications and APIs.</p>
                  <h1 className='font-bold'>Explain of code</h1>
                  <p className='text-sm'>npm install express</p>
                  <p className='text-sm'>This is used to install the express JS</p>
                  <h1>Import Express::</h1>
                  <p className='text-sm'>importing the Express.js library in our Node.js project using require(express).</p>
                  <h1>Create an Express Application::</h1>
                  <p className='text-sm'>Create an instance of the Express application using const app = express().</p>
                  <h1>Define Routes:</h1>
                  <p className='text-sm'>Define routes to handle different HTTP requests like GET, POST, PUT, DELETE. We can specify the URL path and a callback function that gets executed when that route is accessed</p>
            </div>
            <div className='mt-10'>
                <h1 className='text-xl font-semibold'>Question:What is Nest JS (google it)?</h1>
                  <p className='text-base'>Answer:Nest.js is a more opinionated and full-featured framework for building scalable and maintainable server-side applications, particularly in the context of Node.js and TypeScript.</p>
                  <h1 className='font-bold'>Explain of code Nest JS js</h1>
                  <h1>Application Entry Point:</h1>
                  <p className='text-sm'>The entry point file sets up and bootstraps the Nest.js application.It often imports the root module and starts the server.</p>
                  <h1>Modules:</h1>
                  <p className='text-sm'>Modules encapsulate different parts of your application, such as features or components.</p>
                  <h1>Controllers::</h1>
                  <p className='text-sm'>Controllers define routes and handle HTTP requests. They are responsible for processing incoming requests and returning responses</p>
            </div>
            </div>
        </div>
    );
};

export default Blogs;