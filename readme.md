# Karma.gs Grid System

### An opinionated Stylus Grid System for savvy frontend developers.

## Abstract

Semantic, fully customizable grid system that employs the Goldilocks Approach. Heavily inspired by [semantic.gs](http://semantic.gs/), and [the Goldilocks Approach](http://goldilocksapproach.com/).

This is still a work in progress. I use Karma.gs heavily for personal stuff, but haven't had much time to clean this repo up. If you need any help with setup feel free to let me know :)

## Requirements

- This grid is written in [Stylus](http://learnboost.github.com/stylus/). And that's the language you would be working with. It is very powerful, and many of its features can't be implemented through other pre-processors (I believe.)

- You will need to know how to _compile_ or _pre-process_ the Stylus. I recommend using [Codekit](http://incident57.com/codekit/). Or use [this gem](https://github.com/lucasmazza/ruby-stylus) and the Asset Pipeline for integrating with Rails. Or if you use Node, you'll know what to do ;)

- You should be familiar with the [Goldilocks Approachh](http://www.designbyfront.com/demo/goldilocks-approach/)

- You will need to adopt a Mobile-first design approach.

## Overview

### Folder Structure

- **assets/stylus/stylesheet.styl** : This is the file that you _compile_. It imports all other necessary files. *If you create a new file*, you must import it in this file for changes to take effect.
- **assets/stylus/config.styl** : This is where you start, take a look and make adjustments suitable to your app. Some of the key configurations will be detailed below.
- **assets/stylus/dependencies/** : Generally you don't need to touch this folder, it includes the cogs that make Karma.gs work.
- **assets/stylus/classes/** : These are **extensible** classes such as `.clearfix`. Much like abstract classes in OOP, they must only be extended by your styles via `@extends`
- **assets/stylus/layout** : These styles control the layouting (spacing between objects.) It has a `baby.styl`, `mummy.styl`, and `daddy.styl`. More on that later.
- **assets/stylus/components** : Components are reusable pieces of styles that form a tangible and sever-able component within the view. Put them in here.
- **assets/stylus/modules** : Modules are non-reusable styles related to a specific page or purpose. The styles that it applies need not be contained within an element and can be broad.
- **assets/stylus/vendor** : You can place external styles, dependencies here.

### The Grid

#### Configuring

The grid is totally configurable. Configuration parameters as follows:

- **_goldilocks** : This is the line length that maximizes readability. And the entire grid will be based upon this. 'Desktop' view will be twice this size, 'Tablet' view will be equal to this size.
- **_goldilocks_padding** : This dictates the padding that goes around your content when the view-port is too small.
- **_grid_columns** : The number of grid columns that you want to work with. I suggest keeping it at `6` because it doesn't really matter, more on that below.
- **_gutter_width** : The gutter you want between your grid columns.
- **_grid_expand_min_proportion** : This determines whether your columns will fully expand or retain their size when they break and are pushed down. If set to `0` (default,) all columns will expand fully. If for example this is set to `.5`, only columns that are larger than _half the container size_ will fully expand.

#### Using

This is a *semantic grid system*. Which means you don't need to add classes to your markup to make it work.

#### Example: 2-column grid

Markup:

```html
<div class="container">
	<article class="news-item">
		<section class="content">
			<p>Article content.</p>
		</section>
		<aside class="related">
			<ul>
				<li>Related 1</li>
				<li>Related 2</li>
				<li>Related 3</li>
			</ul>
		</section>
	</article>
</div>
```

Stylus:

```stylus
.news-item
	row()
	.content
		columns(4)
	.related
		columns(2)
```

### Responsivity

#### Lots of Media Queries!

It is highly recommended that you **don't keep your media queries in one place**. What!?! Well, for maintainability and readability, you should keep your media queries where it is _most relevant_.

If you think having too many queries is a bad idea, [check this out](http://css-tricks.com/lark-queries/).

_But writing media queries over and over again?!? No way!_

You don't have to. Take a look at this example, and see what Stylus can do for you ;)

```stylus
.heading
	/* We define the size we want for small screens first, mobile-first remember? */
	font-size 1.5em

	/* And then we decide how big we want it for the biggest screen. */
	@media daddy
		font-size 4em

	/* Finally we decide for medium sized screens, just to tie the knot. */
	@media mummy
		font-size 3.2em
```

The variables `baby`, `mummy`, `daddy` and `daddyOnly` are automatically generated for you to use as media queries.

#### The Exception

There is an exception. For layout-specific styles (that propagate throughout your app), it's recommended to keep them in `assets/layouts/[baby|mummy|daddy|global].styl`. It is important to distinguish between them:

- **global** : Global layout styles _don't need to be adjusted for different view-ports_.
- **baby**   : Put your default (yet adjustable) layout styles here, remember, with mobile first, these are the styles that will be shown to legacy browsers.
- **daddy**  : After you've got your baby styles sussed, adjust them for the big-screen here.
- **mummy**  : Sometimes the Daddy+Baby combo just isn't enough to cover everything. Tie the knot here.

### Typographic Scale & Rhythm

This grid system _employs the use of typographic scales_. And it is highly recommended that you follow this for readability. You can read up about the subject [here](http://lamb.cc/typograph/).

Karma.gs gives you two very useful helpers for maintaining the correct scale and rhythm.

#### Scale

Text size should be consistent and with a certain pattern. First you'll need to configure the scale that you want to use in `config.styl`. These are the relevant configuration options:

- **baseSize** : This is the base font-size you want to use. You can either specify it as a percentage (of client default font-size) or as a pixel. Currently, both ways have advantages and disadvantages. Using a percentage is more 'adaptive', however the `line_breaks()` details below is more prone to breaking as it assumes a default size of `16px`. _Please let me know if you find a solution_.
- **\*_sequence** : I've included a variety of common typographic sequences. You can define your own sequence, just make sure that they all contain the same amount of levels so that changes are easier down the road.
- **sequence_center** : What should be the center of the sequence? I.E what is the default body text size? This should be set to the index of the sequence that is `1em`
- **typographicScale** : Assign your chosen sequence to this variable.

`scale_type(pos)` is the helper you need for typographic scaling. It takes a `position` argument. `0` being the default font size. `1` being one level larger, up the sequence. `-1` being one level smaller, down the sequence. And so on...

- **scale_type(pos)** : Scales the font-size and line height to conform to the given typographic position.

It is important to use this to scale type within your main content. Not only does it generate the correct font-size according to the typographic scale you chose, it also chooses the correct line-height according to your `lineHeight` option, which will preserve a consistent Rhythm. More on the Rhythm below.

#### Rhythm

The reason why we write better (and more legibly) on pieces of refill as opposed to plain paper, is because the horizontal lines give us rhythm. When we write headers, we make sure that the text is centered between a set amount of lines. This Rhythm is also important in web type, and can greatly enhance legibility when preserved.

`scale_type()` shown above helps you with rhythm. However sometimes you may simply want to know 'how many pixels tall is 3 lines?'. `line_breaks(n)` will answer that. You'll find yourself primarily using it for margin-bottom's.

- **line_breaks(n)** : Returns the height of **n** lines in *pixels*.

### Other Features

#### Integrating with Rails

Use the [Stylus Gem](https://github.com/lucasmazza/ruby-stylus) and the provided application.css.erb.styl.

In `config.styl` you'll find a `is_rails` setting. Change this to `true`. This will enable `image_path(basename)` which will return something like `<%= image_path({base_name}) %>`.

This will also modify the helper `image_background(path_tuple, relative_path = false, scale = 1)` to use the asset pipeline.

#### Retina Images

You can `turn_on_retina_image_alternatives` in `config.styl` to true. And the `image_background()` will automatically create a `@2x` rule for retina-displays only (by using `@media retina`).

### Float-center

You can use `float_center()` to create a centered float (useful for menus.).

- **float_center(one, two, three)** : `three` selector for items. It will require two wrappers — `one` and `two`.

For example:

```stylus
.example
	float_center('.centered', 'ul', 'li')
```

```html
<div class="example">
	<nav class="centered">
		<ul>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</nav>
</div>
```

### Sticky Footer

Sticky footers become easy to create with the helper `sticky_footer(wrapper, push, footer, footer_height)`.

By example:

```stylus
html
	sticky_footer('.wrapper', '.foot-stool', '.footer', 250px)
```

```html
<html>
	<head></head>
	<body>
		<div class="wrapper">
			<div class="foot-stool"></div>
		</div>
		<div class="footer"></div>
	</body>
</html>
```

## Full Documentation

Full documentation will be written once the project matures.

## Contribution

You are more than welcome to contribute.
