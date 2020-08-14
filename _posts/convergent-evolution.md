---
title: 'Convergent Evolution'
presenter: 'Evan Czaplicki'
presenterTwitter: 'https://twitter.com/evancz'
conference: 'React Rally 2017'
excerpt: 'Sometimes two similar things can evolve at the same time, without any influence. Elm and React are two such things. The creator of Elm breaks down some similarities, and ultimately differences, between Elm and React. This is a great talk for Elm lovers, React lovers, and people who like bees.'
date: '2020-08-13'
embed: 'https://www.youtube.com/embed/jl1tGiUiTtI'
---

This talk came on my radar when [Shawn Wang](https://mobile.twitter.com/swyx) [tweeted about it](https://mobile.twitter.com/swyx/status/1291021155818643456). He said it was one of his favourite talks from React Rally 2017 so that seemed right up my alley.

I'd be lying to you if I said I knew <span class="line-through">much</span> anything about Elm. I've heard of it, sure. But that's about it. So what better than an introduction from the creator himself?

Evan takes us through a comparison between React and Elm. I _am_ familiar with React, so the comparison helped me a lot.

## Convergent Evolution (Who Did It Better?)

Before we get into the React/Elm comparison, Evan introduces the concept of convergent evolution. So what is that exactly? It's the independent evolution of similar traits in different organisms.

In the wild we can compare birds and bees. Both of these organisms have wings. They both can fly but the similarities mostly stop there.

As developers we often look at two similar things and start to ask ourselves, which is better? We look at the implementation details and we start to pick sides. Evan prefers to take a step back and look at the design as a whole. How well do the features serve the overall design?

## Elm vs. React

While the folks at Facebook were being inspired by XHP, Evan was working on his thesis. They separately came to a lot of the same conclusions. Convergent evolution. One is not necessarily better than the other. Remember, it's not about the implementation details.

So let's take a look at some of these converging ideas.

### Style

React, or at least JavaScript, uses a syntax that is similar to C. Evan makes a good point when he says they chose to onboard folks with familiarity. People are comfortable with the syntax so it makes it easier to adopt.

Elm uses a syntax that is more like [ML (Meta Language)](https://en.wikipedia.org/wiki/ML_%28programming_language%29). There was a deliberate choice in the style. It fit better with the overall design of Elm. The tradeoffs for onboarding with familiarity were worth it for Evan.

During the talk I saw Elm code for the first time and it wasn't much like any programming language I'd seen, or at least worked with. While I do prefer the C-like syntax (because I'm used to it) [there is a nice comparison with JavaScript on the Elm site](https://elm-lang.org/docs/from-javascript).

### Virtual DOM

A virtual DOM is a tree of custom objects that represent a real DOM. We utilize a virtual DOM because we can manipulate these custom objects much faster than we can manipulate the DOM itself. We can change our virtual DOM and then use a [reconciliation algorithm](https://reactjs.org/docs/reconciliation.html) to update the real DOM with just the changes we've made.

Both React and Elm are able to incrementally update the DOM because of this technique. It allows us to build our reactive user interfaces. [Elm boasts better performance](https://elm-lang.org/news/blazing-fast-html) because of how it does diffing. The purity and immutability helps—we'll touch on that later.

I've seen a lot of complaints about JSX. If you're in the anti-JSX camp, perhaps you'd prefer to play with Elm. There's no special syntax when it comes to working with Elm's virtual DOM! It's Elm all the way down. I don't mind having HTML in my JavaScript but I can understand the appeal.

### Unidirectional Flow

It's very common to see unidirectional flow in React. It's encouraged. In Elm, it's a first class citizen. Legend has it that early Elm programmers kept seeing the same patterns in their code. The unidirectional flow naturally arose from the language itself.

<figure>
    <img src="/assets/posts/convergent-evolution/elm-architecture.svg" />
    <figcaption>The Elm Architecture</figcaption>
</figure>

In the Elm Architecture you can clearly see the unidirectional flow. It's a very functional pattern. Inside of Elm there is a `model`. It captures all the details about your application as data. We also have the `view`. This is a function that outputs your HTML. When users interact with the HTML, messages are sent and an `update` function handles changing the `model`.

At Facebook they were using a similar architecture pattern called [Flux](https://facebook.github.io/flux). The popular library Redux even [got inspiration from Elm](https://redux.js.org/introduction/prior-art/#elm).

<figure>
    <img src="/assets/posts/convergent-evolution/flux.svg" />
    <figcaption>Flux Application Architecture</figcaption>
</figure>

Both of these patterns have similarities. [André Staltz](https://twitter.com/andrestaltz) has [written a great blog post](https://staltz.com/unidirectional-user-interface-architectures.html) about unidirectional architectures so I recommend you give that a read. A major difference between Flux and the Elm Architecture is the fact that everything in the Elm Architecture is hierarchical. Components aren't just on the "View" layer.

### Functional OOP

The unidirectional flow is a very functional pattern. In React however, we can almost think of components as objects. They hold their own local state. They have methods for updating that state. This can lead to some OOP patterns that simply can't exist in Elm because it is a functional language.

### Immutability

Immutability is another area where Elm simply shines. When your data cannot be changed it is easier to write programs that behave as we expect. This leads to more maintainable code. In Elm's case, it also makes it very cheap to determine if two things are the same. Combined with purity (functions always return the same output, given a certain input) this lets Elm applications avoid extra work. That's one reason Elm is so fast.

React will let you use any style of data management you want, including mutation. That means these performance benefits don't come baked in. [There are tools](https://github.com/kolodny/immutability-helper#overview) to help with this but again, Elm just makes it simple and pleasant to work with.

### Static Analysis

The last thing we'll look at is static analysis. With React there isn't much to talk about. If you are familiar with linters that's just about the best you get with React.

Elm is a language so there is so much more to offer you out of the box. The [compiler is an assistant](https://elm-lang.org/news/compilers-as-assistants). It helps you find edge cases you might have missed. The compiler will even give beginner friendly hints!

<figure>
    <img src="/assets/posts/convergent-evolution/compiler-error.png" />
    <figcaption>An Elm Compiler Error</figcaption>
</figure>

## A Tale of Two Organisms

I'm really excited to take a closer look at Elm and see what it has to offer. The compiler looks extremely promising and there are a lot of other wonderful features (like enforced semantic versioning). The ecosystem seems very tight to an outsider. I think the opinions of Evan have shaped a language with great features that keep the big picture in mind.

Some might argue that it's unfair to compare a _library_ to a _language_. That said, it's an interesting comparison. I've always found it fascinating when scientific achievements are made at the same time across the globe. I love when different ideas are shared, remixed, and discussed within the tech industry.

Birds and bees might fly differently but there is no way you can argue that flying isn't _good_. React and Elm achieve similar things in different ways. Neither is necessarily better than the other; just different.