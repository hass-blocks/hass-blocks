# About this project

## Why?

In my years of automating my home with Home Assistant, I've built up an array of automations for my home that have increasingly become critical to my quality of life. Over time, I've switched between native Home Assistant automations and Node Red (where my automations currently live), however I've never been properly satisified.

Node Red is incredibly powerful, but because of its power and flexibility it is *extremely* fragile and very hard to test in any other way than manually. Home Assistant native automations are less fragile, but probably less powerful and I'm either stuck with using a UI that I dislike, or a cumbersome YAML configuration language that is extremely hard to read with complex automations.

## Enter Hass-Blocks

The goal of this project is to take inspiration from the things I like about the tools I'm currently using and combine it with the power of a strongly Typed programming language, in order to build that is easy to build and understand, hard to get wrong, and easy to test. With that in mind, the things I don't want to throw out were:

- The *declarative* nature of YAML configuration, though it should be much more readable than Hass YAML
- The ability to compose together blocks and have data flow from one to the next as my automation is triggered

