/**
 * @param {number} steps //이미지 컷 수
 * @param {number} duration //애니메이션 전환 속도
 * @param {string} repeat //반복 설정 default: no-repeat
 * @param {number} delay //애니메이션 시작 대기시간
 */
;(function($){

  $.fn.animationImg = function(settings) {
    var $this = $(this);
    var path = $this.attr('src');
    var rePath = /.+(?=[0-9]{4}.)/gm;
    var matchPath = path.match(rePath); //4자리 숫자.확장자를 제외한 경로부분 반환
    var reversePath = path.replace(rePath,''); //4자리 숫자.확장자 반환
    matchPath = matchPath || ['null']; //에러 방지
    var imgPath = matchPath[0]; //배열에서 값 가져오기
    var reExtn = /[0-9]+/gm; //모든 숫자 선택
    var imgExtn = reversePath.replace(reExtn,''); //4자리숫자.확장자 값에서 확장자만 반환
    var arrImg = [];

    //기본값 설정 & 사용자 설정과 병합
    var option = $.extend({
      startNum: 0,
      steps: 10,
      duration: 30,
      repeat: true,
      delay: 0
    }, settings );

    for(i=option.startNum; i<option.steps+1; i++) {
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

    //올바른 값일때만 실행
    if (matchPath[0] !== 'null') {
      setTimeout(function(){
        var anim = setInterval(aniImg, option.duration);

        function aniImg() {
          option.startNum = option.startNum + 1;
          if (option.startNum > option.steps) {
            if (option.repeat) {
              option.startNum = 0; //반복
            } else {
              clearInterval(anim); //정지
            }
          } else {
              $this.attr('src',arrImg[option.startNum]);
          }
        }
      }, option.delay);
    } else {
      return false;
    }

    /**
     * 개선해야 할 과제
     *
     * 이미지가 없어서 에러가 날 때에 에러난 시점을 저장해서 다음 반복 실행시에는
     * 종료 시점을 에러나기 전 시점으로 재실행시켜주기
     * 그러면 두번째 반복부터는 에러가 나지 않을 것이니까
     */
  };

})(jQuery);
