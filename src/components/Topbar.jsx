import "../styles/Topbar.scss"

const Topbar = () => {
  return (
    <header className="header">
      <div className="container">

        <nav>
          <h1 className="logo">My Website</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">services</a></li>
          </ul>
        </nav>

        <div className="content my-1">
          <div>
            <h1>Make Your Marketing Real</h1>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              facere nihil eligendi ea mollitia placeat, odio aspernatur
              perspiciatis dicta in delectus nobis dolores cupiditate voluptatem
              ullam optio iste? Excepturi, illum?
            </p>
            <a href="#" className="btn-primary">Learn More</a>
            <a href="#" className="btn-secondary">Sighn Up</a>
          </div>
          <img src="https://themesbrand.com/zooki/layouts/images/home-2-img.png"alt="landing" />
        </div>
        
      </div>
    </header>
  );
};
export default Topbar;
