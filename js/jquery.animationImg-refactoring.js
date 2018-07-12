/**
 * jQuery.animationImg
 * @author Jinhyung Park
 * @date 2017-03-23
 */
;(function(global, $){
    'use strict';

    var plugin_name = 'animationImg';

    var ConstructorFn = function(el, options) {
        this.init(el, options);
    };

    ConstructorFn.fn = ConstructorFn.prototype = {
        run: false,
        init: function(el, options) {
            // 사용자 정의 옵션 >> 기본 옵션 = 병합
            options = $.extend({}, $.fn[plugin_name].defaults, options);

            // 이벤트 메소드 실행
            this.events(el, options);
        },
        events: function(el, options) {

            // 플러그인 코드
            if(!el.run) { //실행여부 체크
                el.run = true;
                var $this = $(el);
                var path = $this.attr('src');
                var rePath = /.+(?=[0-9]{4}.)/gm; //[첫번째 문자] ~ [4자리 숫자.] 전까지의 값을 반환 (4자리 숫자.png/jpg/gif (0000.jpg) 는 반환값에 포함되지 않는다.)
                var matchPath = path.match(rePath); //4자리 숫자.확장자를 제외한 경로부분 반환
                var reversePath = path.replace(rePath, ''); //4자리 숫자.확장자 반환
                matchPath = matchPath || ['null']; //에러 방지
                var imgPath = matchPath[0]; //배열에서 값 가져오기
                var reExtn = /[0-9]+/gm; //모든 숫자 선택
                var imgExtn = reversePath.replace(reExtn, ''); //4자리숫자.확장자 값에서 확장자만 반환
                var arrImg = [];
                var i;
                var anim;

                console.log(reversePath);
                console.log(imgExtn);

                //이미지 담아두기
                for (i = options.start; i < options.steps + 1; i++) {
                    if (i < 10) {
                        arrImg.push(imgPath + '000' + i + imgExtn);
                    } else if (i < 100) {
                        arrImg.push(imgPath + '00' + i + imgExtn);
                    } else if (i < 1000) {
                        arrImg.push(imgPath + '0' + i + imgExtn);
                    } else {
                        arrImg.push(imgPath + i + imgExtn);
                    }
                }

                if (matchPath[0] !== 'null') { //올바른 값일때만 실행
                    setTimeout(function () {
                        anim = setInterval(aniImg, options.duration);

                        function aniImg() {
                            options.start = options.start + 1;

                            if (options.start > options.steps) {
                                if (options.repeat) {
                                    options.start = 0; //반복
                                } else {
                                    clearInterval(anim); //정지
                                }
                            } else {
                                $this.attr('src', arrImg[options.start]);
                            }
                        }

                    }, options.delay);
                }

            } else {
                alert('중복실행은 되지 않아요!! >_<');
            }
        }
    };

    if ( !$.fn[plugin_name] ) {
        // options - 사용자 정의 옵션 설정
        $.fn[plugin_name] = function(options) {
            var $this = this;

            return $.each($this, function(index, el){
                // var _$item = $this.eq(index);

                // 생성자 함수에 options 전달
                new ConstructorFn(el, options);

            });
        };

        // 플러그인 초기 옵션 설정
        $.fn[plugin_name].defaults = {
            start: 0,         //시작 이미지 위치
            steps: 10,        //총 이미지 개수
            duration: 30,     //애니메이션 실행 속도
            repeat: true,     //반복
            delay: 0          //첫 시작 애니메이션 지연시간
        };

        $.fn[plugin_name].destroy = function () {
            console.dir('STOP!!');
        };


    }

})(window, window.jQuery);
