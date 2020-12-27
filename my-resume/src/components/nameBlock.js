const NameBlock = () => {
  return (
    <div>
      <div className='profile'>
        <div className='photo'>
          <i className='fas fa-rocket'></i>
        </div>
        <div className='info'>
          <h1 className='name'>Nicholas Georgiou</h1>
          <h2 className='job'>Software Developer</h2>
        </div>
      </div>
      <div className='about'>
        <h3>About Me</h3>I'm a web designer for Fiserv, specializing in web
        design, graphic design, and UX. Experienced with the Adobe Creative
        Suite, responsive design, social media management, and prototyping.
      </div>
      <div className='contact'>
        <h3>Contact Me</h3>
        <div className='call'>
          <a href='tel:123-456-7890'>
            <i className='fas fa-phone'></i>
            <span>123-456-7890</span>
          </a>
        </div>
        <div className='address'>
          <a href='https://goo.gl/maps/fiTBGT6Vnhy'>
            <i className='fas fa-map-marker'></i>
            <span>Provo, Utah</span>
          </a>
        </div>
        <div className='email'>
          <a href='mailto:astronaomical@gmail.com'>
            <i className='fas fa-envelope'></i>
            <span>astronaomical</span>
          </a>
        </div>
        <div className='website'>
          <a href='http://astronaomical.com/' target='_blank'>
            {' '}
            <i className='fas fa-home'></i>
            <span>astronaomical.com</span>
          </a>
        </div>
      </div>
      <div className='follow'>
        <h3>Follow Me</h3>
        <div className='box'>
          <a href='https://www.facebook.com/astronaomical/' target='_blank'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='https://www.instagram.com/astronaomical/' target='_blank'>
            <i className='fab fa-instagram '></i>
          </a>
          <a href='https://www.pinterest.com/astronaomical/' target='_blank'>
            <i className='fab fa-pinterest'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/naomi-weatherford-758385112/'
            target='_blank'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://codepen.io/astronaomical/' target='_blank'>
            <i className='fab fa-codepen'></i>
          </a>
          <a href='https://www.behance.net/astronaomical' target='_blank'>
            <i className='fab fa-behance'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NameBlock;
