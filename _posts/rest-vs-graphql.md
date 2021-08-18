---
title: 'Rest vs. GraphQL: A Critical Review'
presenter: 'Zdenek "Z" Nemec'
presenterTwitter: 'https://twitter.com/zdne'
conference: 'Nordic APIs Platform Summit 2018'
excerpt: "When designing APIs, these days you have more options than ever before. So what's the right tool for the job? It's complicated. In this talk, Z gives us a critical comparison of the tried and true, REST, and the new hotness, GraphQL."
date: '2021-08-18'
embed: 'https://www.youtube.com/embed/yLf0rIaRtRc'
---

This week at [work](https://monthly.com), an engineer proposed that we start putting effort into ensuring our backend endpoints follow RESTful practices. The team was excited by the idea. Our endpoints don't currently follow any spec, RESTful or otherwise. You never know what you're going to get.

This proposal reminded me that I've had a talk on my YouTube watchlist for a while. An opinionated, critical view comparing REST and GraphQL. I've enjoyed the GraphQL developer experience in the past. I may be susceptible to [shiny object syndrome](https://en.wikipedia.org/wiki/Shiny_object_syndrome), but there's clear pros to using GraphQL... right?

REST and GraphQL aren't actually the same thing. Z points out that REST is an **architectural style** while GraphQL is a **language and framework**. One is more like a suggestion while the other strict and tangible. Both of them help us create a communication layer between our distributed systems. Or, as Z suggests, we'll call them API paradigms for now.

## A World of Constraints

One of my favourite parts of Z's talk is when he talks about constraints. When making any technical decision we should be looking at the constraints of our system. It seems obvious but defining your constraints can be quite challenging. They're bound to evolve as your systems do as well.

No matter what solutions we decide on, our choice should always a be a function of our constraints. Z gives a great example of someone who builds a colonial home simply because they like colonial houses. Well, those houses were built because of colonial constraints. Just because you can do something doesn't mean you should.

### Constraints Imply Properties

Whatever constraints we build _into_ our system, we can derive certain properties.

Having a decoupled client and server *implies* two codebases that can evolve separately. Having a stateless server *implies* that your server is reliable and scaleable. Having a stateless server decoupled from our client will ultimately give us a codebase with reliability, scalability, and evolvability built in.

## Properties of Distributed Systems and Ecosystems

So, if constraints imply properties, what properties should we care about? This will also depend on your situation. Z does suggest a few properties to consider.

### Distributed System Properties

1. Performance
2. Scalability
3. Simplicity
4. Modifiability
5. Visibility
6. Portability
7. Reliability
8. Discoverability
9. Type-safety
10. Developer experience
11. Cost effectivity

### Distributed Ecosystem Properties

1. Community
2. Tooling
3. Ecosystem maturity
4. Resources
5. Enterprise readiness

For any system you're architecting, you'll want to pick the properties you care most about and optimize for those. It's rare that any one solution checks all the boxes.

Every team is going to have different types of constraints. From business (customer or product requirements) to cultural (resources or knowledge). They will also be optimizing for different properties. Because of this, there will never be a clear winner for arguments like REST vs. GraphQL.

That won't stop us from arguing about it though, will it? Let the battle commence!

## The Weigh In

There are two contenders in this fight. REST is old. Tried and true but starting to show its age in the ring. GraphQL has a spring in its step. But sometimes rookies make simple mistakes. This is what Z has to say about the pros and cons for each solution.

### REST

**Pros**

- Scales indefinitely
- Great performance (thanks HTTP2)
- Tried and true
- Affordance-centric (API is expressed as structured messages)
- Server-driven
- Decoupled client and server

**Cons**

- Huge barrier to entry (difficult to master, etc.)
- Challenging mindset shift from SOAP to REST
- Poor (or no) tooling for clients
- No framework or tooling guidance
- Requires discipline
- Even hard for experts to get it right
- Hard to keep consistent
- Hard to govern

### GraphQL

**Pros**

- Easy to start with
- Easy to produce and consume
- Lots of hand-holding
- Contract-driven
- Built-in introspection
- Easy to keep consistent
- Easy to govern
- Closer to SOAP

**Cons**

- Ignores problems of distributed systems
- Queries can be suboptimal
- Bikeshedding age old solutions (caching, etc.)
- DIY scaling and performance
- Ignores hard work done by HTTP (`POST` for everything!)
- JSON all the things
- Lack of ecosystem maturity

## The Clear Winner

There isn't one. Both of the options have plenty of pros and cons. Like everything in the world of software, there are many ways to skin an eggplant.

If you're looking to make a decision between REST and GraphQL, it might not be an easy one. Start by narrowing down the properties that are most important to you and work your way back.

### Where REST Wins

If you're looking to build a system for the long term. REST isn't a new idea. It's been battle tested. There are standards built around important things like authentication, caching, and rate limiting. It has scalability in mind.

### Where GraphQL Wins

The communication between your frontend and backend are simple. Or if you want a data-driven approach to the API paradigm. Also, the developer experience is pretty darn enjoyable.

## So-Called REST

All of the information covered this far is useful, but it wasn't the most mind blowing for me. You probably don't have to search to hard to see a lot of this covered elsewhere on the interwebs.

One of the cons Z listed for REST piqued my curiosity. It was the fact that there is a huge barrier to entry. I've seen "RESTful practices" used a lot in my career so far. I thought I *knew* REST. It turns out, I've seen more *so-called* REST than anything else.

Here's a quote written in 2008 by [Roy Fielding](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven)(he created REST by the way):

> What needs to be done to make the REST architectural style clear on the notion that hypertext is a constraint? In other words, if the engine of application state (and hence the API) is not being driven by hypertext, then it cannot be RESTful and cannot be a REST API. Period. Is there some broken manual somewhere that needs to be fixed?

I've never actually seen a REST API that reached [level three on the Richardson Maturity Model](https://restfulapi.net/richardson-maturity-model/#level-three). One that has true discoverability and uses [hypermedia as the engine of application state](https://restfulapi.net/hateoas/).

But does that matter?

Z argues that GraphQL is far better than a so-called REST API. The proposal at work this week was for a *so-called* REST API and I'm not mad about it. We're optimizing for properties like simplicity, portability, discoverability, and developer experience. In our current system, those properties are sadly lacking.

There's a lot of tooling out there that makes REST more accessible these days too. From the [OpenAPI specification](https://swagger.io/specification/) to things like [Flaks RESTful](https://flask-restful.readthedocs.io/en/latest/).

Even with that in mind, I can't help but think about GraphQL. Can we optimize for the properties listed about while solving other problems clients face like slow and spotty internet?

## Microservices

When mentioning microservices, I was surprised to hear Z recommend REST. He says it is almost as if they were born to be used together. What about [gRPC](https://grpc.io/)? Or an [event-driven architecture](https://en.wikipedia.org/wiki/Event-driven_architecture)? I think there's more to the story here.

## No Contest

This talk hasn't made me more confident in my ability to implement a RESTful API. It hasn't shown me that either option is the obvious solution for my API communication woes.

We will forever have to decide between many options to solve our problems. Framing these decisions based on the constraints and desired properties of our systems will always lead to better results.

Even though there's no clear winner to this fight, there are a ton of great resources about REST, GraphQL, and APIs. Here are a few worth looking at:

- [REST API Tutorial](https://restfulapi.net/)
- [Introduction to GraphQL](https://graphql.org/learn/)
- [GraphQL vs. REST from Apollo GraphQL](https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/)
- [The so-called 'RESTful' web in 2018 and beyond](https://www.philosophicalhacker.com/post/rest-in-2018)
- [GitHub's GraphQL documentation](https://docs.github.com/en/graphql)
- [adidas' API Guidelines*](https://adidas.gitbook.io/api-guidelines)
- [Z's own writeup about his talk](https://medium.com/good-api/rest-vs-graphql-a-critical-review-5f77392658e7)

<div class="text-sm">*I never thought I'd be reading API guidelines from a shoe/fashion company. It turns out <a href="https://github.com/adidas" target="_blank" rel=”noreferrer noopener”>they have a decent amount of open source projects</a>!</div>
