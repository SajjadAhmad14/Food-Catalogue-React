/* eslint-disable react/prop-types */
const DetailPage = (props) => {
  // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line react/destructuring-assignment
  console.log(props.location.state);
  console.log('something');
  return (
    <div className="details">
      This is details page
    </div>
  );
};

export default DetailPage;
