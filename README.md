# jQuery image animation

jQuery image animation

## 의존파일

```html
<script src="jquery-1.11.3.js"></script> <!-- jQuery 필수-->
<script src="jquery.animationjs-1.0.js"></script>
```

## 실행

html

```html
<img src="../images/animation_0000.png" class="animation_img">
```

javascript

```javascript
$(document).ready(function(){
    $('.animation_img').animationImg(9,100,'repeat',3000);
});
```
