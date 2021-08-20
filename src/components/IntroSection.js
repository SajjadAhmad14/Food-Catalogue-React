import axios from "axios";

const IntroSection = () => {
  return (
    <div className="intro">
      <div className="logo"></div>
      <h2>Discover the best food & drinks!</h2>
      <input type="text" className="search" placeholder="Search for a dish" />
    </div>
  )
}

export default IntroSection;