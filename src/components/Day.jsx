import Card from "react-bootstrap/Card";
function Day(props) {
    const {day,title,description,today}=props
    return (

      
<div class="container">
  <div class="row">
    <div class="col-sm">
    <Card style={{ width: "18rem" }}>
       <Card.Body>
         <Card.Title>{day}</Card.Title>
      <h5>{title}</h5>
       <h6>{description}</h6>
       <h6>{today}</h6>
    </Card.Body>
   </Card>
    </div>
    {/* <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div> */}
  </div>
</div>


    //   <Card style={{ width: "18rem" }}>
    //   <Card.Body>
    //     <Card.Title>{day}</Card.Title>
    //     <h5>{title}</h5>
    //     <h6>{description}</h6>
    //   </Card.Body>
    // </Card>
  );
}

export default Day;