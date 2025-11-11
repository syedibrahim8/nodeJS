// The beginning - 2009, Ryan Dahl's Vision
/*
In 2009, a software engineer named Ryan dahl from the U.S. created Node.js.

At that time:
Javascript was only used in browsers.
Servers were built using PHP, Python, or java.
Each request on the server would create a new thread, consuming memory and slowing things down under heavy load
*/
/*
Ryan found this inefficient, especially after seeing how web browsers handled asynchronous events (non-blocking operations)

He wanted the same non-blocking behavior on the server.
That's how Node.js was born - to bring Javascript to the backend, but in a faster and more scalable way.
*/

// The core Idea - Event-Driven & Non-Blocking I/O
/*
Ryan built Node.js using:
Google's V8 Engine (the same engine that powers Chrome)
libuv (a C library for asynchronous I/O)

This combination allowed Node.js to:
handle many requests at once using a single threac
Avoid blocking while waiting for tasks like file reading or database queries

Node.js introduced a single-threaded, event-driven architecture that made servers lightweight and fast.
*/

/*
Early Days(2009-2011)
2009: Node.js was released at the JSConf EU conference.
2010: npm (Node Package Manager) was introduced - the game changer
Developers could easily install and share reusable packages.
2011: Companies like Linkedln and Uber started using Node.js for their backends due to its speed and scalability.

Example:
linkedIn moved from Ruby on Rails to Node.js and saw their servers handle 10x more traffic with fewer machines
*/

// Rise in Popularity(2012-2025)
/*
Node.js rapidly became the go-to choice for building:
APIs
Real time applications
Command line tools
Developer utilities

Big companies joined:
Netflix(for streaming)
PayPal(for faster APIs)
eBay, Walmart, and NASA adopted Node.js in production.

However, around 2014, there was community tension - development was slow and contributors were frustated
*/

// Today's Ecosystem
/*
Over 2 million+ packages on npm
Used by 90% of modern web developers
Foundation for frameworks like Express.js, Fastify, and AdonisJS

It's no longer "just Javascript on the server"
it's the backbone of the modern web, connecting APIs, microservices, and tools
*/

// Summary timeline
/*
Year                         Event
2009                         Ryan Dahl creates Node.js
2010                         npm (Node Package Manager) is launched
2011                         LinkedIn & Uber adopt Node.js
2014                         io.js fork due to governance issues
2015                         io.js merges back-> Node.js Foundation formed
2017+                        Async/await, ES modules, and major improvements
2020s                        Node.js becomes a global standard for web servers
*/