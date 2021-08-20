import axios from "axios";

const IntroSection = () => {
  async function fetchData() {
    try {
      const result = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      const categories = await result.data
      return categories;
    } catch (error) {
      return error;
    }
  }
  let list = [];
  (async () => {
    const arr = await fetchData();
    const a = arr.categories;
    list = a.map(item => item.strCategory);
    console.log(list[0]);
  })();
  return (
    <div className="intro">
      <div className="logo"></div>
      <h2>Discover the best food & drinks!</h2>
      <select className="categroes">
        <option>Categories</option>
      </select>
      <input type="text" className="search" placeholder="Search for a dish" />
    </div>
  )
}

export default IntroSection;