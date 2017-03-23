# jQuery image animation

jQuery image animation

## How to install

#### Step 1: Link required files

```html
<script src="jquery-1.11.3.js"></script> <!-- jQuery library -->
<script src="jquery.animationImg-1.0.js"></script> <!-- animationImg Javascript file -->
```

#### Step 2: Create HTML markup

Setting class name!

```html
<img src="../images/animation_0000.png" class="animation_img">
```

#### Step 3: Call the animationImg

Call `.animationImg()` on `<img class="animation_img">`. Note that the call must be made inside of a $(document).ready() call, or the plugin will not work!

```javascript
$(document).ready(function(){
  $('.animation_img').animationImg({
    startNum: 0,
    steps: 10,
    duration: 30,
    repeat: true,
    delay: 0
  });
});
```

## Options

|Option   |Type     |Default|Description                  |
|---------|---------|-------|-----------------------------|
|startNum |number   |0      |Start image number           |
|steps    |number   |10     |Total image length           |
|duration |number   |30     |Animation duration           |
|repeat   |boolean  |true   |Repeat animation             |
|delay    |number   |0      |Delay before start anmation  |
