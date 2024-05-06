# The Odin Project - Foundations

## Intro To CSS

### Introduction

A short task to practice using CSS selectors as specified in the CSS Foundations - Intro To CSS
[assignment](https://www.theodinproject.com/lessons/foundations-intro-to-css#assignment).

The task demonstrates class, group, chain and descendant selectors.

### Assignment

Go to the [CSS exercises repository](https://github.com/TheOdinProject/css-exercises) and read the README. Complete the
following exercises in order:

#### 01-css-methods

Using the html file provided add CSS to an HTML file using all three methods: external CSS, internal CSS, and inline
CSS. Only use type selectors for this exercise when adding styles via the external and internal methods. Also use
keywords for colors (e.g. "blue") instead of using RGB or HEX values.

The properties you need to add to each element are:

- `div`: a red background, white text, a font size of 32px, center aligned, and bold
- `p`: a green background, white text, and a font size of 18px
- `button`: an orange background and a font size of 18px


##### Desired Result

![Example of the desired result](https://github.com/TheOdinProject/css-exercises/raw/main/foundations/01-css-methods/desired-outcome.png)

#### 02-class-id-selectors

Using the HTML file provided, add either class or ID attributes, as noted in the outcome image below. Add rules in the
CSS file provided using the correct selector syntax. Look over the outcome image carefully to keep in mind which
elements look similarly styled (classes), which ones may be completely unique from the rest (ID), and which ones have
slight variations from others (multiple classes).

The focus is on being able to add the attributes and use the correct selector syntax to style elements. For the colors
in this exercise, try using a non-keyword value (RGB, HEX, or HSL). The properties you need to add to each element are:

- All odd numbered elements: a light red/pink background, and a list of fonts containing Verdana and DejaVu Sans with sans-serif as a fallback
- The second element: blue text and a font size of 36px
- The third element: in addition to the styles for all odd numbered elements, add a font size of 24px
- The fourth element: a light green background, a font size of 24px, and bold

##### Desired Result

![Example of the desired result](https://github.com/TheOdinProject/css-exercises/raw/main/foundations/02-class-id-selectors/desired-outcome.png)

#### 03-group-selectors

Using the html and css files provided give two elements each a unique class name then add rules for styles that both
elements share as well as their own unique styles.

The properties for each element are:

__The first element__: a black background, white text color, and a bold font weight
__The second element__: a yellow background
__Both elements__: a font size of 28px and a list of fonts containing Helvetica and Times New Roman, with sans-serif as
a fallback


##### Desired Result

![Example of the desired result](https://github.com/TheOdinProject/css-exercises/raw/main/foundations/03-grouping-selectors/desired-outcome.png)

#### 04-chain-selectors

Credits for the images in this exercise go to [Katho Mutodo](https://linktr.ee/photobykatho_) and
[Andrea Piacquadio](https://www.pexels.com/@olly?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels).

Using the provided files chain selectors of both elements so that each have a a unique style applied despite using a
shared class selector

The properties you need to add to each element are:

- Make the element with both the avatar and proportioned classes 300 pixels wide, then give it a height so that it
retains its original square proportions (don't hardcode in a pixel value for the height!).
- Make the element with both the avatar and distorted classes 200 pixels wide, then make its height twice as big as its
width (here you should hardcode in a pixel value).

##### Desired Result

![Example of the desired result](https://github.com/TheOdinProject/css-exercises/raw/main/foundations/04-chaining-selectors/desired-outcome.png)

#### 05-descendant-combinator

Using the provided files apply styles to elements that are descendants of another element while leaving elements that aren't descendants of that elements unstyled.

The HTML file does dot require editing, only apply changes to the CSS file.

The properties you need to add are:

- Only the `p` elements that are descendants of the div element should have a yellow background, red text, a font size of 20px, and center aligned.

##### Desired Outcome

![Example of the desired result](https://github.com/TheOdinProject/css-exercises/raw/main/foundations/05-descendant-combinator/desired-outcome.png)
