# jQuery image animation

jQuery image animation

## Defining Image File Format

Make file name what from 0000 to 9999. (Image files name increase from 0000 to 9999 [Four digits])

> imgname0000.jpg | imgname-0001.gif | imgname_0002.png...

The image files extension shall be png/gif/jpg.

## How to install

#### Step 1: Link required files

```html
<!-- jQuery library -->
<script src="jquery-1.11.3.js"></script>
<!-- animationImg Javascript file -->
<script src="jquery.animationImg.js"></script>
```

#### Step 2: Create HTML markup

Specify target!

```html
<img src="../images/animation_0000.png" class="animation_img">
```

#### Step 3: Call the animationImg

Call `.animationImg()` on `<img class="animation_img">`. Note that the call must be made inside of a `$(document).ready()` call, or the plugin will not work!

```javascript
$(document).ready(function(){
  $('.animation_img').animationImg({
    steps: 45,
    repeat: false
  });
});
```

## Options

|Option   |Type     |Default  |Description                  |
|---------|---------|---------|-----------------------------|
|start    |number   |0        |Start image number           |
|steps    |number   |10       |Total image length           |
|duration |number   |30       |Animation duration           |
|repeat   |boolean  |true     |Repeat animation             |
|delay    |number   |0        |Delay before start anmation  |

## Method

~~#### Destroy animation~~

```javascript
// $('.animation_img').animationImg.destroy();
```

## Demo

* [animationJS Demo](https://gutmate.github.io/animationJS/animation.html)
