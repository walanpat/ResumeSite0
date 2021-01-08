const NameBlock = () => {
  return (
    <div>
      <div className='profile'>
        <div className='photo'>
          <i className='fas fa-rocket'></i>
        </div>
        <div className='info'>
          <h1 className='name'>William "Alan" Patterson II</h1>
          <h2 className='job'>Software Developer</h2>
        </div>
      </div>
      <div className='about'>
        <h3>About Me</h3>Junior Software Developer looking for fulltime
        employment starting in the summer of 2021 that has a year of experience
        working in React, other JavaScript and API technologies.
      </div>
      <div className='contact'>
        <h3>Contact Me</h3>
        <div className='call'>
          <a href='tel:123-456-7890'>
            <i className='fas fa-phone'></i>
            <span>828.399.1000</span>
          </a>
        </div>
        <div className='address'>
          <a href='https://www.google.com/maps/place/Carrboro,+NC/@35.9263134,-79.1292939,13z/data=!3m1!4b1!4m5!3m4!1s0x89acd965f7016e75:0x1308afb599e6c145!8m2!3d35.9101438!4d-79.0752895'>
            <i className='fas fa-map-marker'></i>
            <span>Carrboro, NC</span>
          </a>
        </div>
        <div className='email'>
          <a href='mailto:walanpat@live.unc.edu'>
            <i className='fas fa-envelope'></i>
            <span>walanpat@live.unc.edu</span>
          </a>
        </div>
        <div className='website'>
          <a href='http://astronaomical.com/' target='_blank'>
            {' '}
            <i className='fas fa-home'></i>
            <span>walanpat.githubpages</span>
          </a>
        </div>
      </div>
      <div className='follow'>
        <h3>Follow Me</h3>
        <div className='box'>
          <a
            href='https://www.facebook.com/alan.patterson.1238'
            target='_blank'
          >
            <i className='fab fa-facebook'></i>
          </a>
          <a href='https://www.instagram.com/astronaomical/' target='_blank'>
            <i className='fab fa-instagram '></i>
          </a>
          <a href='https://www.pinterest.com/astronaomical/' target='_blank'>
            <i className='fab fa-pinterest'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/william-patterson-6233921b8/'
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
