<h1>Vnailla JS_fourth_project</h1>

<h3>Piano</h3>

현황

* 기능

  ![피아노](../../images/README/피아노.png)

  * 건반(키보드 키)을 누르면 해당 건반의 음계가 화면에 표시됨

  * 건반을 누르면 전환효과(크기,배경색,폰트색) 발생 및 해당 건반의 음계의 오디오 재생

  * 건반 주변에 커서를 올리면 힌트(`title`)가 나옴

  * 건반을 계속 누르고 있어도 중복현상이 발생하지 않음(`e.preventDefault()`)

    <br><br>

* 일정

  2022년 8월 23일 

  * 피아노 프로젝트 시작

  * 레이아웃 구성중 

  * 내일 오전중으로 레이아웃 작업 마무리 이후 기능 작업예정 

  * 작업기간은 일주일 

  * 구현 예정인 기능은 건반을 치면 audio가 동작되고, 친 건반의 음계가 화면에 표시하는 기능과

  * 건반에 `hover` 효과를 주어 해당 건반의 음계가 텍스트로 나타나는 기능이 있음.

  * 향후 작업 중 혹은 작업이 끝난 후 어울리는 기능이 있을 경우 추가예정..  

  <br>
  <br>

  2022년 8월 24일 

  * 오전

    * 레이아웃 마무리

    * 음계별 오디오 삽입 및 건반에 키보드 키 표시

    * 다음부터 기능 작업

      <br><br>

  * 저녁

    * `audio`와 건반을 매칭시키기 위해서 `data-key`(HTML 사용자정의)속성을 각각 건반(.key)과 오디오에 추가 

    * 이벤트 객체를 파라미터로 주어  오디오와 건반`(div.key)`요소에 접근해 오디오를 재생시키는 `playKey(e)` 함수 선언 

    * `window.addEventListener`로 `keydown`이벤트를 주어 `playKey(e)`를 호출시켜 건반을 누를 때마다 해당 건반의 음계에 해당하는 오디오 출력하는 기능 추가

      <br>
      <br>

  2022년 8월 28일

  * 기존 `id=scale` 을 `id=displayKey`로 바꾸고 키를 누를 때마다 해당 키의 음계가 표시되도록 함.

  * 위의 효과 구현을 위해서 각 건반에  해당 건반의 음계를 의미하는 `data-scale` 사용자 지정속성을 추가 

  * 검은 건반의 CSS 선택자에서 `nth`대신 속성 선택자`[data-key={e.keycode}]`로 대체 및 일부 잘못된 위치 수정 

  * `.key`에 `transition` 속성 추가 

  * 키를 누를 때, 전환효과(transition[음영,글자색,크기], css`.playing`) 추가 및 전환효과 제거(`removePlaying`)를 `addEventListener`의 `transtioned`이벤트를 이용해 구현

  * UI(요소, 폰트) 크기 확대

  * 건반의 키 표시를 제거하고 `hover`효과를 통해 건반의 키보드 키를 나타나도록 함

    <br>
    <br>

  2022년 8월 29일

  * 중복현상 방지(`e.preventDefault()`)로 마무리

  <br>
  <br>

* 후기(반성할 점)

  * `position` 속성을 쓸 때, `text-align`과 같은 정렬 옵션이 적용되지 않는다는 것을 다시 복습할 수 있었습니다.
  * 간단한 레이아웃임에도 작업을 할 때 어려움이 있었습니다.(검은색 건반의 위치..)

  * `addEventListener`의 전환효과를 쓸 때는 해당요소에 전환 속성`(transition)`이 있어야 하는데 HTML 코드를 제대로 보지 않아서 수정할 때 시간을 허비했습니다. 
  * 키를 계속 누르고 있으면, 전환효과가 중복되어 키를 누르지 않는 상태에서도 계속 전환효과가 남았는데 `e.prevnetDefault()`로 이를 해결할 수 있었습니다.
  * 사용자 지정 속성 `data=*` 및 속성선택자 `[]`를 배웠음에도 이번 프로젝트에서 처음 써보았습니다. 

* 참조사이트

  <a href="https://mber.tistory.com/6">https://mber.tistory.com/6</a> 트랜지션 이벤트
  <a href="https://velog.io/@hyowon_lee/JavaScript-transitionend-%EC%9D%B4%EB%B2%A4%ED%8A%B8">https://velog.io/@hyowon_lee/JavaScript-transitionend-%EC%9D%B4%EB%B2%A4%ED%8A%B8</a> 트랜지션 이벤트 활용
  <br>
  <a href="https://plitche.github.io/language/javascript/2021-07-12-preventDefault/">https://plitche.github.io/language/javascript/2021-07-12-preventDefault/</a> preventDefault() 사용법

  

  

  

  
