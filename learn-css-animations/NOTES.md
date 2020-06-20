# Scrimba - Learn CSS Animation

# Transitions
```
.heading {
  color: darkblue;
  font-size: 15px;
  transition: all 0.5s;
}

.heading:hover {
  color: brown;
  font-size: 25px;
}
```

### Pseudo classes are the property names that appear after the colon in the css.

## transition-delay
- How long before a transition begins.
```
transition-delay: 1s;
```

## transition-property
- If you use this you must also use the **transition-duration** property.
- 

## transition-duration
- Specifies how long a transition effect should last.
```
transition-duration: 5s;
```

## transition-timing-function
- Specifies the speed curve of an animation.
- **linear**.- same speed from beginning to end (DEFAULT)
- **ease** - slow start and end
- **ease-in** - slow start
- **ease-out** - slow end
- **step-start** - equivalent to steps(1, start)
- **step-end** - equivalent to steps(1, end)
- **steps(int,start|end)** - stepping function with number of intervals (positive integer) followed by where the change occurrs in the interval, start or end.
- **cubic-bezier(n,n,n,n)** - defines a cubic-bezier function. Possible values are numeric values from 0 to 1
- **initial** - sets this property to its default value
- **inherit** - inherits this property from its parent element

## Transitions shorthand
1. property (Examples: *color*, *font-size*, *all*, etc.)
2. duration (Example: *1s*)
3. timing function (Example: *ease-in*)
4. delay (Example: *1s*) optional, default is *0s*
- Example:
```
transition: color 1s ease-in 1s;
```

---

# Animations
- Animations are defined stand alone from elements or properties. They aren't dependent of pseudo classes or anything like that.
- Once they are defined they can be applied to any element.
- You define two steps or you can use percentages to define multiple steps.
```
/* Example with two steps */
.box {
  width: 50px;
  height: 50px;
  background: red;
  border: 1px solid black;
  animation-name: grow;
  animation-duration: 2s;
}

@keyframes grow {
  from {
    width: 50px;
    height: 50px;
    background: red;
  }
  to {
    width: 50px;
    height: 100px;
    background: green;
  }
}
```
```
/* Example with percentages */
.box {
  width: 50px;
  height: 50px;
  background: red;
  border: 1px solid black;
  animation-name: grow;
  animation-duration: 2s;
}

@keyframes grow {
  0% {
    width: 50px;
    height: 50px;
    background: red;
  }
  50% {
    width: 100px;
    height: 50px;
    background: blue;
  }
  100% {
    width: 100px;
    height: 100px;
    background: green;
  }
}
```

## animation-name
- The name of the animation to run.
```
animation-name: grow;
```

## animation-duration
- How long the animation should take.
```
animation-duration: 2s;
```

## animation-delay
- How long to wait before starting the animation.
- When you are adding multiple animation on top of each other you will need to add them together.
```
animation-delay: 1s;
```

## animation-iteration-count
- How many times to run the animation.
- This should be an integer of the word **infinite**
```
animation-iteration-count: infinite;
```

## animation-timing-function
- Specifies the speed curve of an animation.
- **linear**.- same speed from beginning to end (DEFAULT)
- **ease** - slow start and end
- **ease-in** - slow start
- **ease-out** - slow end
- **step-start** - equivalent to steps(1, start)
- **step-end** - equivalent to steps(1, end)
- **steps(int,start|end)** - stepping function with number of intervals (positive integer) followed by where the change occurrs in the interval, start or end.
- **cubic-bezier(n,n,n,n)** - defines a cubic-bezier function. Possible values are numeric values from 0 to 1
- **initial** - sets this property to its default value
- **inherit** - inherits this property from its parent element

## animation-direction
- Defines whether an animation should be played forwards, backwards or in alternate cycles.
- **normal** - default value. The animation is played as normal (forwards)	
- **reverse** - the animation is played in reverse direction (backwards)	
- **alternate** - the animation is played forwards first, then backwards	
- **alternate-reverse** - the animation is played backwards first, then forwards	
- **initial** - sets this property to its default value. Read about initial	
- **inherit** - inherits this property from its parent element. Read about inherit

## animation-fill-mode
- Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).
- **none** - animation will not apply any styles to the element before or after it is executing (Default value)
- **forwards** - the element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count)
- **backwards** - element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period
- **both** - animation will follow the rules for both forwards and backwards, extending the animation properties in both directions
- **initial** - sets this property to its default value. Read about initial
- **inherit** - inherits this property from its parent element. Read about inherit

# Animation shorthand
1. name (Example: *grow*)
2. duration (Example: *1s*)
3. timing function (Example: *ease-in*)
4. delay (Example: *1s*)
5. iteration count (Example: *4*)
6. direction (Example: *alternate)
- Example:
```
animation: grow 1s eas2-in 1s 4 alternate;
```

# Transforms

## translate
- Moves an element along the x or y axis (or both).
- It can use any sizing unit, such as px and %.
- Values can be negative.
- - **translateX(w)**, **translateY(y)**, **translate(x, y)**
```
@keyframes transform {
  transform: translate(-50%, -50%);
}
```

## scale
- Scale an element by a multiple of it's size.
- **scaleX(w)**, **scaleY(y)**, **scale(x, y)**
- You can use multiple transforms on one line by separating them with spaces.
  - *transform: scaleX(2) scaleY(2)*
```
@keyframes transform {
  100% {transform: scaleX(2);}
}
```

## rotate
- Rotate an element.
- Values can be negative.
```
@keyframes transform {
  100% {transform: rotate(90deg);}
}
```

## skew
- Rotate an element along an axis.
- **skewX(w)**, **skewY(y)**, **skew(x, y)**
- Values can be negative.
```
@keyframes transform {
  100% {transform: skewX(50deg);}
}
```

# Prefixes
- You normally use prefixes for newer versions of css.
- For maximum browser compatibility prefixes are used with a fallback property.
- The most common prefixes are:
  - **webkit**
    - Mainly used to support iOS or tablet browsers.
  - **ms**
    - For Internet Explorer.
  - **moz**
    - For Firefox.
  - **o**
    - For Opera.
- Example:
```
.hover-text {
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
}

.hover-text:hover {
    color: #290000;
    font-size: 20px;
}

.box {
    position: fixed;
    width: 50px;
    height: 50px;
    background: red;
    border: 1px solid black;
    animation: size-down ease-out 0.5s infinite alternate both;
    -webkit-animation: size-down ease-out 0.5s infinite alternate both;
    -ms-animation: size-down ease-out 0.5s infinite alternate both;
    -moz-animation: size-down ease-out 0.5s infinite alternate both;
    -o-animation: size-down ease-out 0.5s infinite alternate both;
}

@keyframes size-down {
    100% {transform: scale(0.3, 0.3); background: #290000;}
}
```

# CSS variables
- A way of storing values in placeholders that you can use anywhere in css.
- In the css create a selector named *:root* and then name variables beginning with two dashes.
- To you the variable place the variable name inside the tag *var()*.
- Example:
```
:root {
  --box-unit: 50px;
}

.box {
  position: fixed;
  width: var(--box-unit);
  height: var(--box-unit);
  background: red;
  border: 1px solid black;
}
```

# Custom Timing Functions
### Cubic Bezier functions
- Two points from 0 to 1 used to define a curve
- Progression on y-axis, time on x-axis
- Curve deterimines progression based on time -> Timing function
- Vizualizer - [https://www.cubic-bezier.com](https://www.cubic-bezier.com)
- Example:
```
.box {
  position: fixed;
  width: 50px;
  height: 50px;
  background: red;
  border: 1px solid black;
  animation: size-down cubic-bezier(0.62, 0.15, 0.4, 0.9) 0.5s infinite
    alternate both;
}
```
- The order of the numbers are *cubic-bezier(x1, y1, x2, y2)
- Cubic-bezier functions aren't limited to animations, they can be used anywhere a transformation is used.