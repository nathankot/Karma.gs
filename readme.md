# Karma.gs Grid System

An opinionated Stylus Grid System for savvy front-end developers.

## Goldilocks Approach

Karma uses the [Goldilocks Approach][goldilocks]. This is a very organic
approach to thinking about responsive websites, it puts aside the battle to
accommodate every possible screen size, and lets you create something that is
truly flexible and will work with just about any screen size.

## Just a grid

Karma doesn't come with any fancy buttons or style definitions. In fact, **it 
only adds 3 css rules to your compiled css**. Karma is simply a collection of 
methods that helps you maintain the structure and rhythm of your creation.

Karma is extremely modular and will work well with components from other
front-end frameworks.

_Karma does not include a reset: you can choose your favorite one_.

## Who should use it?

You should use Karma if you enjoy creating your own components (buttons,
forms, inputs etc.) and just want a **minimal but powerful** grid system to
kick you off.

You should use Karma if you are interested in trying the Goldilocks Approach
to responsive design (and you won't regret it!)

You should use Karma if you are sick of bloated front-end frameworks and you
want to take control of how your project looks.

You should use Karma if you understand and care about typographic rhythm and scale.

You should use Karma if you're sick of seeing seeing stuff like `col-lg-4` in 
your markup.

You should use Karma if your sick of maintaining separate files for media
queries.

You should use Karma if you want to use Stylus.

## Two Grids

### Layout Grid System

Just your basic grid system:

``` stylus
.main
  container()

.info-section
  row()

.about
  columns(4)

.contact
  columns(2)
```

But you can use decimals!

``` stylus
.about
  columns(2.333)
.contact
  columns(3.666)
```

Offsets and pulls:

``` stylus
.about
  offset(1)
  pull_right()
  columns(1.333)
.contact
  columns(3.666)
```

Customize responsive behaviour:

``` stylus
.about
  always_expand() // Ignore **_grid_expand_min_proportion** setting
  columns(1)
.contact
  columns(5)
```

``` stylus
.about
  ignore_media_queries() // Just generate a % width
  columns(1)
.contact
  ignore_media_queries()
  columns(5)
```

``` stylus
.about
  expand_for 'mummy' // Expand on 'mummy' size
  columns(1)
.contact
  ignore_media_queries()
  columns(5)
```

### Typographical Grid System

[See here for an overview of typographic scale.][type]

Define the scale you want to use by overriding the defaults in
`defaults.styl`:

``` stylus
typographicScale = _sequence_traditional
```

To use a particular size:

``` stylus
.about
  scale_type 2
.contact
  scale_type -1
```

To maintain rhythm while spacing two blocks:

``` stylus
.info-section
  margin-bottom line_breaks(2)
```

## Composing via mobile-first

You should read [the Goldilocks Approach][goldilocks] before proceeding.

Karma comes with these core media query helpers:

- `@media daddy`
- `@media daddyOnly`
- `@media mummy`
- `@media baby`

Say you want to make a button have different font sizes according to the
screen size. First create the button defaulting to mobile:

``` stylus
.button
  scale_type(-1)
```

And then add the rule for how it would look on large screens (e.g desktop):

``` stylus
.button
  scale_type(-1)

  @media daddy
    scale_type(2)
```

Finally if it should look different on medium screen sizes (e.g iPad), then
add the mummy rule:

``` stylus
.button
  scale_type(-1)

  @media daddy
    scale_type(2)

  @media mummy
    scale_type(0)
```

Isn't it awesome how all of the relevant response rules are encapsulated in
the same class? No more messing around with multiple files.

The reason why we add the mummy rule last, is because the daddy rule can be
enough in most cases.

## How to use

You can install this with bower:

``` sh
bower install karma
```

Or simply download and put the files somewhere. And then import these files
individually:

``` stylus
@import "karma/defaults"
@import "karma/utilities"
@import "config" // YOUR OWN config file, these can override the defaults.
@import "karma/layouting" // Layouting Grid System
@import "karma/typography" // Typography Grid System
```

## License

Copyright 2012 Nathan Kot

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   <http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

[type]: http://lamb.cc/typograph/
[goldilocks]: http://goldilocksapproach.com/
