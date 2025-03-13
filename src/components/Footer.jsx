import React, { useState, useEffect } from 'react';

function Footer() {

  const [upDown, setUpDown] = useState(false); //false(위)/true(아래)

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
      <a className={'top_move ' + (upDown ? 'down' : 'up')} href="#" onClick={topHandler}>TOP</a>
      <address>
        주소
      </address>
      <p>카피라이트</p>
    </footer>
  );
}

export default Footer;