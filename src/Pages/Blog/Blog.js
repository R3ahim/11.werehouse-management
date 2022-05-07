import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='blog-cotnianer'>
                <div className='quest-contianer'>
                    <h1>WHAT IS DIFFERENT BETWEEN JAVASCRIPT AND NODEJS</h1>
                    <div>
                        <h5>By: <span className='name-blog'>Alex Harry</span> <span className='date-blog'>Mar 20, 2021</span></h5>
                    </div>
                    <img src={'data:image/jpeg;base64,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'} alt="" />

                </div>
                <h2>Answer: </h2>  <p>Java script is a programming language, Java script can run on any browser, you just need to have a proper browser engine.

We use Java script to perform client side activities in any web application. Such as validation of any attribute (ex: any field of the form), or refreshing the page at different intervals. To perform any dynamic activity without refreshing the page.
Java script can be run on any browser, such as Spider Monkey (Firefox), Java Script Core (safari), and V8 (google Chrome).
The Java script language follows the standard of the Java programming language, while the Java script language may have its own way of writing code, but its base is always inspired by the Java programming language.
                </p>
            </div>
            <div className='blog-cotnianer'>
                <div className='quest-contianer'>
                    <h1>What is differnet between inline and inline blok</h1>
                    <div>
                        <h5>By: <span className='name-blog'>Aman Datter Wala</span> <span className='date-blog'>Mar 9, 2022</span></h5>
                    </div>
                 <img src={"#"} alt="" />

                </div>
                <h2>Answer: </h2>  
                <p>
                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web developm
               
              
                </p>
            </div>
            <div className='blog-cotnianer'>
                <div className='quest-contianer'>
                    <h1> Differences between sql and nosql databases.</h1>
                    <div>
                        <h5>By: <span className='name-blog'>Janker Mahbub</span> <span className='date-blog'>Mar 9, 2022</span></h5>
                    </div>
                 <img src={"#"} alt="" />

                </div>
                <h2>Answer: </h2>  

                <p>
                    <span className="fs-4">SQL:</span> SQL databases have fixed or static or predefined schema	.   SQL databases are not suited for hierarchical data storage. These databases are best suited for complex queries and Vertically Scalable
             
                </p>
                <p>
                    <span>NSQL:</span>They have dynamic schema. hierarchical data storage.	These databases are best suited for hierarchical data storage.These databases are not so good for complex queries
                    Horizontally scalable

                </p>
            </div>
        </div>
    );
};

export default Blog;