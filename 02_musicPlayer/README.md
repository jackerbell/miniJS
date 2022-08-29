<h1>Vnailla JS_second_project</h1>

<h3>musicPlayer</h3>

----------------------------------------------

<br>

* 기능

  ![음악재생기 설명](../../images/README/음악재생기 설명.png)

  <br>
  

![음악재생기 설명](../../images/README/음악재생기 설명-16617534289914.png)

<br>

![음악재생기 설명](../../images/README/음악재생기 설명-16617537452776.png)

  <br>

![음악재생기 설명](../../images/README/음악재생기 설명-16617532098212.png)

<br><br>

* 재생,정지,옵션(일반,1곡만 반복, 전체 반복, 랜덤) 이전, 다음곡 이동 기능 보유
  * 좌측 상단 음표 아이콘은 화면 전환용(재생리스트, 현재 재생중인 곡)
  * 돋보기 아이콘 클릭 시 검색모드로 전환 해제는 돋보기 아이콘을 한 번더 클릭!
  * 좋아요 기능(누를 시 하트 문양에 `transition`효과로 크기확대 및 색상 변화(붉은색 계통), 1회 한정)
  * 재생 중, 정지 중인 곡의 폰트 색에 차이를 줌 좌측의 음표가 사라지고 주위의 `box-shadow`로 음영처리 됨.
* 현재 재생중인 곡 화면으로 가면 곡의 진행 시간과 타임바가 존재 여기에서는 정지, 재생, 이전곡, 다음곡 전환만 가능
  * 재생인 끝나면 곡의 이미지 커버와 곡명 가수명 장르와 같은 정보가 자동으로 전환됨<br><br>

* 일정

  2022년 7월 10일<br>

  * page1(전체 재생 리스트), page2(지금 재생 중인 곡) 두 파트로 나누고 page항목 하단 버튼요소에 두 페이지를 오갈 수 있는 toggle 기능을 추가
  * page1의 프레임(header, main(재생곡 정보,재생설정,재생리스트,컨트롤러 총 4구간 )) 완성 세부사항은 아직 진행중.

  <br><br>

  2022년 7월 11일 <br>

  * header 부분에 재생 옵션(shuffle, rotate all, rotate1)에 따른 어썸폰트 표시기능 및 heart('좋아요'기능)에 hover 효과 부여
  * 플레이 리스트 기본 틀 완성 
  * 하단 컨트롤러 기본 틀 완성 

  <br><br>

  2022년 7월 13일<br>

  * page2 프레임 정리(header, main(재생곡 사진, 노래제목·장르,재생시간,컨트롤러))
  * header 및 컨트롤러 영역에 어썸폰트 추가 
  * 어썸폰트 영역에 cursor: 'pointer' 를 주어 커서효과 추가 
  * page1 의 재생리스트 레이아웃 변경

  <br><br>

  2022년 7월 15일 ~ 16일 <br>

  * header 부분 좌측 어썸폰트에는 page변환 기능 우측 어썸폰트에는 탐색창 기능(input 검색바가 나오면서 주위는 음영효과)을 추가 
  * main의 재생 옵션 부분에는 클릭을 할 때마다 지정한 재생 옵션의 텍스트와 어썸폰트로 변경하는 기능 추가
  * heart('좋아요' 기능) 누를 시 하트 아이콘에 트랜지션(1s 동안 색 빨강계열, 크기 1.3배로 커짐) 효과 부여 및 1회 한정 카운트 기능 추가
  * page1, 2의 컨트롤러에 play icon 부분에 play, pause icon이 번갈아 나오도록 토글 기능 추가
  * 레이아웃 고려 page2의 우측 어썸폰트 제거
  * 예시 이미지와 텍스트 대신 적용할 음원커버(이미지)와 곡명, 장르, 가수명 기입.. 재생리스트 구간 이미지 레이아웃 작업

   <br> <br>

  2022년 7월 17일 ~ 18일<br>

  * heart 함수 대신 like로 함수명 교체
  * 곡이 재생될 때마다 컨트롤러나 커버화면에 나오는 이미지와 정보들을 변화시켜주는 loadSong 함수 기능 추가 
  * 접근 요소및 공용으로 처리할만한 변수들을 전역으로 처리
  *  재생옵션에 onetime 기능 추가
  * 재생,정지,이전곡,다음곡 기능 추가
  * 재생시간, 타임바 작업 중.... setinterval, clearinterval의 사용방법에 대해 잘 모르겠다...
  * 추후 index를 조정해서 랜덤재생, 반복재생, 전곡반복재생, 한번재생 기능을 구현할 예정.. 

  <br><br>

  2022년 7월 19일<br>

  * 변수 대입 후 null값 초기화 및 전역선언으로 setinterval, clearinterval 문제 해결(재생시간, 타임바 작업완료)

  * 재생옵션 onetime 대신 normal로 대체 

  * 재생옵션 조건 간소화

  * 재생옵션에 따른 index순서 조정을 통해서 이전곡, 다음곡 항목에 옵션조건 추가

  * prev,next 버튼 누르고 다음곡이 나올시 재생시간, 타임바 초기화 추가

  * 순서가 repeat(전체순환재생)일 때 마지막 곡 이후 next, prev 버튼을 누를시 json객체 정보를 가져오지 못하는 문제가 발생  >  prev,next 조건 점검 결과 조건 수정 후 해결

  * setinterval 역시 연속적으로 버튼을 누르게 되면 시간이 중첩되어서 가산되는 현상이 발생.. > clearinterval을 prev, next btn에 넣어서 해결

  * 재생종료 시 재생옵션에 따라 순번을 정하여 다음 곡 재생 기능 추가<br><br>

* 후기(반성할 점)

  * next prev 버튼에 대해선 옵션에 따라 정상적으로 동작하는 듯 하나 음악을 정상적으로 모두 듣고 난후 다음 곡을 재생할 때 index부분에 문제가 있어서인지 예상대로 동작되지 않는다. 

  * 현재 시점에서 프로젝트는 일단 마무리하기로 했다. 코드를 작성하다보니 필요이상으로 길어졌다고 생각하고 코드리뷰를 하면서 코드를 깔끔하게 정리할 예정이다. 

  * playList_Song 항목의 리스트 중 현재 재생중인 곡에 대해 transition 효과를 부여하여 텍스트 색을 변화시키는 기능 추가 다만, 현재 일반재생 과정에서 index가 한 칸씩 밀려서 표시되어 재생버튼을 눌러야 현재 재생중인 곡에 효과가 부여되어 수정이 필요하다. <br>

    <br>

* 참조 사이트

  * <a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions  CSS transition 사용하기</a>

  * <a href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval">https://developer.mozilla.org/en-US/docs/Web/API/setInterval</a>
    <a href="https://curryyou.tistory.com/328">https://curryyou.tistory.com/328 setInterval, clearInterval</a>

  

