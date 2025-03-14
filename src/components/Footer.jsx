import React, { useState, useEffect } from 'react';


function Footer() {

  const [upDown, setUpDown] = useState(false); //false(위)/true(아래)
  const [isOpen, setIsOpen] = useState(false);

  const famHandler = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen); // 토글
  };

  const handleScroll = () => {
    //console.log(window.scrollY);
    if (window.scrollY > 300) {
      setUpDown(true);
    } else {
      setUpDown(false);
    }
  };

  useEffect(() => {
    // window에 scroll 이벤트를 넣는다.
    window.addEventListener('scroll', handleScroll);
    // 페이지를 벗어날 때 이벤트를 제거한다.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topHandler = (e) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <a className={'top_move ' + (upDown ? 'down' : 'up')} href="/" onClick={topHandler}>TOP</a>
      <div className="footerInner">
        <div className="footerTop">
          <ul>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보 처리방침</a></li>
            <li><a href="#">이메일 무단수집 거부</a></li>
          </ul>
        </div>
        <div className="footer_bottom">
          <div className="footer_left">
            <p>&#8251;고객센터 대표전화</p>
            <ul>
              <li>
                <dl>
                  <dt>GS25</dt>
                  <dd>080-999-5425</dd>
                </dl>
              </li>
              <li className="left_txt1">
                <dl>
                  <dt>GS SHOP</dt>
                  <dd>080-414-4545</dd>
                </dl>
              </li>
              <li className="left_txt2">
                <dl>
                  <dt>GS THE FRESH</dt>
                  <dd>080-345-7700</dd>
                </dl>
              </li>
              <li className="left_txt3">
                <dl>
                  <dt>POP카드</dt>
                  <dd>080-855-5538</dd>
                </dl>
              </li>
            </ul>
            <address>
              (주)GS리테일 서울시 강남구 논현로 508(역삼동679번지 GS타워) <br/>
              대표이사 : 허연수 &nbsp;&nbsp;&nbsp;사업자등록번호 : 116-81-18745
            </address>
            <p class="copy">
              Copyright &copy; 2021 GS Retail Co.,Ltd. All Rights Reserved.
            </p>
          </div>
          <div className="footer_right">
            <div className="bottom_menu">
              <ul className="sns">
                <li>
                  <a className="sns1" href="/"></a>
                </li>
                <li>
                  <a className="sns2" href="/"></a>
                </li>
                <li>
                  <a className="sns3" href="/"></a>
                </li>
              </ul>
              <div className="family">
                <a className="arrow" onClick={famHandler} href="/">계 열 사
                  <span><i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i></span>
                </a>
                <ul className={`list ${isOpen ? "open" : ""}`}>
                  <li><a href="/" target="_blank" title="(주)GS 사이트 새창에 열림">(주)GS</a></li>
                  <li><a href="/" target="_blank" title="GS네트웍스 사이트 새창에 열림">GS네트웍스</a></li>
                  <li><a href="/" target="_blank" title="GS칼텍스 사이트 새창에 열림">GS칼텍스(Kixx)</a></li>
                  <li><a href="/" target="_blank" title="GS넷비전 사이트 새창에 열림">GS넷비전</a></li>
                  <li><a href="/" target="_blank" title="GS엠비즈 사이트 새창에 열림">GS엠비즈</a></li>
                  <li><a href="/" target="_blank" title="GS스포츠 사이트 새창에 열림">GS스포츠</a></li>
                  <li><a href="/" target="_blank" title="GS EPS 사이트 새창에 열림">GS EPS</a></li>
                  <li><a href="/" target="_blank" title="GS건설 사이트 새창에 열림">GS건설</a></li>
                  <li><a href="/" target="_blank" title="엘리시아강촌 사이트 새창에 열림">엘리시아강촌</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;