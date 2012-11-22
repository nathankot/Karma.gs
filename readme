# Karma.gs Grid System

## Abstract

Heavily inspired by [semantic.gs](http://semantic.gs/), and [the Goldilocks Approach](http://goldilocksapproach.com/). Be sure to check them out if you haven't before.

## Requirements

You will need to be using [Stylus](http://learnboost.github.com/stylus/). If you haven't heard of it, Stylus is a _very_ powerful css preprocessor (like LESS or SASS). A lot of the features in Karma.gs can't be implemented in the other preprocessors.

- [Stylus](http://learnboost.github.com/stylus/)

## Features

- Written in stylus.
- Semantic grid, no more flurries of `.span{x}`.
- **Infinitely divisible** grid system.
- Conforms to the Goldilocks Approach.
- Very customizable, choose your own 'goldilocks' width.
- [Font awesome](http://fortawesome.github.com/Font-Awesome/) icons library ported for stylus.
- An assortment of default components for you to use.
- Pretty decent folder structure to get you started.
- Color scheme generator.

## Documentation

### Using the grid

#### Conventional Way
Usually using a grid means adding a whole lot of non-semantic styling nonsense in your markup.

```html
<div class="row profile">
	<div class="span4"></div>
	<aside class="span2"></aside>
</div>
```

#### Semantic way
With a semantic grid system, this nonsense is moved to your stylesheet where it belongs.

```stylus
.profile
	row()
	div
		columns(4)
	aside
		columns(2)
```

```html
<div class="profile">
	<div></div>
	<aside></aside>
</div>
```

#### Infinite Division
Karma.gs lets you divide your grid infinitely. Which means although you are inclined towards using whole numbers, you are not restricted to it. Useful for those times when you're making a page extra special (or something).

```stylus
.profile
	row()
	div
		columns(3.555)
	aside
		columns(2.445)
```

### Extra options

#### columns()

`columns()` actually takes _3_ arguments. `columns(span, expand_full, ignore_media)`.
Here's a breakdown of the additional two options:

*expand_full*: Defaults to `false`. If set to `true`, the grid element is forced to be resized to `width: 100%;` when the browser is shrinked to 'baby' (more on that later).

*ignore_media*: Defaults to `false`. If set to `true`, the grid element will _only_ use a percentage width, and _will not be affected by a change in screen size_. This is a useful option when you're using a grid within a grid.

#### offset()

Use `offset(number)` to, well, offset the grid element...

#### pull-right()

Pull to the right.

### Using the Goldilocks Approach

#### Intro
The goldilocks approach basically means that your page should cater to three different sizes - _too small_, _too big_ and _just right_. It also promotes a mobile-first design methodology. This too is reflected in Karma.gs. Mobile styles _are the default_, which means that older browsers without media query support will simply be shown the mobile view of the site. It is very important that in using this grid, **you are prepared to think mobile-first**.

#### Folder structure
There are _four key files_ you should take note of:

- `styl/layout/global.styl`: everything
- `styl/layout/baby.styl`: the baby (Mobile)
- `styl/layout/daddy.styl`: the daddy (Desktops)
- `styl/layout/mummy.styl`: the mummy (Tablets)

You should work through the files in this order:

1. Global: define things that will be present no matter the view port.
2. Baby: create a mobile view of the site
3. Daddy: extend the mobile view with changes that applied to desktops
4. Mummy: further extend the daddy view with changes that are applied to a smaller tablet

You should make use of `modules` and `components`. The adaptability of these elements should be contained within their own file, _not in the files above_. For example a `styl/modules/blog.styl` module might look like this:

```stylus
.blog
	/* Global styles */
	padding 6px
	/* Baby styles */
	margin 0
	@media daddy
		/* Daddy styles */
		margin 12px
	@media mummy
		/* Mummy Styles */
		margin 6px
```

### Generating a color scheme

Check out `styl/config.styl` for an assortment of configurations. It comes with the functionality to generate a 2-color complmentary color scheme if you give it a `baseColor`.

## Contribution

This is a young project. You are more than welcome, encouraged, to contribute. And any feedback would be greatly appreciated.
