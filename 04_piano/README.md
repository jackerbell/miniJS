<h1>Vnailla JS_fourth_project</h1>

<h3>Piano</h3>
* 기능
  <img src="https://user-images.githubusercontent.com/65724413/187188194-e4fb658f-9ae1-47a8-aa63-f2dd83ff6771.gif"/>
  <br><br>
* 일정

  2022년 8월 23일 

  * 피아노 프로젝트 시작<br>

  * 레이아웃 구성중 <br>

  * 내일 오전중으로 레이아웃 작업 마무리 이후 기능 작업예정 <br>

  * 작업기간은 일주일 <br>

  * 구현 예정인 기능은 건반을 치면 audio가 동작되고, 친 건반의 음계가 화면에 표시하는 기능과<br>

  * 건반에 `hover` 효과를 주어 해당 건반의 음계가 텍스트로 나타나는 기능이 있음.<br>

  * 향후 작업 중 혹은 작업이 끝난 후 어울리는 기능이 있을 경우 추가예정..  <br>

  <br>
  <br>

  2022년 8월 24일 

  * 오전

    * 레이아웃 마무리<br>

    * 음계별 오디오 삽입 및 건반에 키보드 키 표시<br>

    * 다음부터 기능 작업<br><br>

  * 저녁

    * audio와 건반을 매칭시키기 위해서 `data-key`(HTML 사용자정의)속성을 각각 건반(.key)과 오디오에 추가 <br>

    * 이벤트 객체를 파라미터로 주어  오디오와 건반(div.key)요소에 접근해 오디오를 재생시키는 playKey(e) 함수 선언 

    * window.addEventListener로 `keydown`이벤트를 주어 playKey(e)를 호출시켜 건반을 누를 때마다 해당 건반의 음계에 해당하는 오디오 출력하는 기능 추가<br>
      <br>

  2022년 8월 28일

  * 기존 `id=scale` 을 `id=displayKey`로 바꾸고 키를 누를 때마다 해당 키의 음계가 표시되도록 함.

  * 위의 효과 구현을 위해서 각 건반에  해당 건반의 음계를 의미하는 `data-scale` 사용자 지정속성을 추가 

  * 검은 건반의 CSS 선택자에서 `nth`대신 속성 선택자`[data-key={e.keycode}]`로 대체 및 일부 잘못된 위치 수정 

  * `.key`에 `transition` 속성 추가 

  * 키를 누를 때, 전환효과(transition[음영,글자색,크기], css`.playing`) 추가 및 전환효과 제거(`removePlaying`)를 `addEventListener`의 `transtioned`이벤트를 이용해 구현

  * UI(요소, 폰트) 크기 확대

  * 건반의 키 표시를 제거하고 `hover`효과를 통해 건반의 키보드 키를 나타나도록 함<br><br>

  2022년 8월 29일

  * 중복현상 방지(e.preventDefalut), 프로젝트 완료

  

  

  
