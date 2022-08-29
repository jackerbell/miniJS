<h1>Vnailla JS_fourth_project</h1>

<h3>Piano</h3>

<br>

* 기능

  ![음악재생기 설명](../../images/README/음악재생기 설명-166175651972314.png)

  <br>

  * 건반을 누르면 해당 음계가 화면에 표시됨

  * 피아노 건반에 커서를 올릴 경우 `hover`효과로 각 건반에 대응되는 키보드 키가 표시됨

  * 피아노 건반에 커서를 올릴 경우 `title`에 적힌 힌트가 보여짐 

  * 건반 키를 누를 경우 `transition`(scale(0.95) 색상:푸른계통 폰트:red)효과 발생 

  * 건반 키를 계속 누르고 있어도 중복현상 발생되지 않음(`e.preventDefault()`)

    <br><br>

* 일정

  2022년 8월 23일 <br>

  * 피아노 프로젝트 시작.<br>

  * 레이아웃 구성중. <br>

  * 내일 오전중으로 레이아웃 작업 마무리 이후 기능 작업예정. <br>

  * 작업기간은 일주일. <br>

  * 구현 예정인 기능은 건반을 치면 audio가 동작되고, 친 건반의 음계가 화면에 표시하는 기능과<br>

  * 건반에 `hover` 효과를 주어 해당 건반의 음계가 텍스트로 나타나는 기능이 있음.<br>

  * 향후 작업 중 혹은 작업이 끝난 후 어울리는 기능이 있을 경우 추가예정..  <br>

  <br>

  2022년 8월 24일 <br>

  * 오전<br>

    * 레이아웃 마무리.<br>

    * 음계별 오디오 삽입 및 건반에 키보드 키 표시.<br>

    * 다음부터 기능 작업.<br><br>

  * 저녁<br>

    * audio와 건반을 매칭시키기 위해서 `data-key`(HTML 사용자정의)속성을 각각 건반(.key)과 오디오에 추가. <br>

    * 이벤트 객체를 파라미터로 주어  오디오와 건반(div.key)요소에 접근해 오디오를 재생시키는 `playKey(e)` 함수 선언 .<br>

    * `window.addEventListener`로 `keydown`이벤트를 주어 playKey(e)를 호출시켜 건반을 누를 때마다 해당 건반의 음계에 해당하는 오디오 출력하는 기능 추가.<br>

  <br>

  2022년 8월 28일<br>

  * 기존 `id=scale` 을 `id=displayKey`로 바꾸고 키를 누를 때마다 해당 키의 음계가 표시되도록 함.<br>

  * 위의 효과 구현을 위해서 각 건반에  해당 건반의 음계를 의미하는 `data-scale` 사용자 지정속성을 추가. <br>

  * 검은 건반의 CSS 선택자에서 `nth`대신 속성 선택자`[data-key={e.keycode}]`로 대체 및 일부 잘못된 위치 수정. <br>

  * `.key`에 `transition` 속성 추가. <br>

  * 키를 누를 때, 전환효과(transition[음영,글자색,크기], css`.playing`) 추가 및 전환효과 제거(`removePlaying`)를 `addEventListener`의 `transtioned`이벤트를 이용해 구현.<br>

  * UI(요소, 폰트) 크기 확대.

  <br>

  <br>

  2022년 8월 29일<br>

  * 키보드 키를 계속 누르고 있으면, 전환효과가 사라지지 않고 계속 나타나는 중복현상 발생.

  * `playKey(e)`함수 내부, 동작의 마지막 부분에 `e.preventDefault()` 를 넣어서 한 번 동작이 수행된 후 이벤트의 기능을 멈추어서 중복현상을 방지. 

  * 처음 목표로 세웠던 구현기능들을 모두 구현했으므로 이번 프로젝트는 종료.

  * 이번에 배웠던 건 `forEach` 문의 활용과 사용자 지정 속성(`data-*`) 및 속성선택자(`[]`)의 사용, `addEventListener`의 `transitioned`이벤트의 활용, <e.preventDefault()`함수의 사용 등을 배웠습니다.<br><br>

* 후기(반성할 점)

  * 스크립트 함수를 작성하는 데 집중한 나머지..  `transitioned`이벤트를 받기 위해서는 대상의 css 속성에 `transition`이 설정되어 있어야 하는데 CSS에서 해당 요소에 `transition` 속성이 실수로 지워진 줄 모르고 원인을 찾는데 시간을 허비했습니다.<br>

  * `event`의 동작을 제대로 점검하지 않고 마무리를 하려던 도중 중복문제를 발견해 급하게 마무리하려 했습니다. <br>

  * `position` 속성을 활용할 경우 부모 요소의 `text-align:center` 등과 같은 정렬 요소가 적용되지 않는 점과 피아노의 레이아웃을 만드는데 예상보다 시간이 많이 걸렸습니다. <br><br>

* 참조한 사이트

  * <a href="https://plitche.github.io/language/javascript/2021-07-12-preventDefault">https://plitche.github.io/language/javascript/2021-07-12-preventDefault/ preventDefault() 간단 사용법</a>

  * <a href="https://mber.tistory.com">https://mber.tistory.com/6 transtioned event</a>

  * <a href="https://velog.io/@gga01075/HTML%ED%83%9C%EA%B7%B8%EC%97%90-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%86%8D%EC%84%B1-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0-ppec05qv">https://velog.io/@gga01075/HTML%ED%83%9C%EA%B7%B8%EC%97%90-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%86%8D%EC%84%B1-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0-ppec05qv HTML 사용자 지정 속성</a>

  

  

  