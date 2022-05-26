function Mounth(props) {
  const {mounth,days,day=[]}=props

    return (
      
      <div>
       {props.children}
        {/* <div>{mounth}</div> */}
    { <table className="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">{mounth}</th>
      </tr>
    </thead>
    {/* <tbody>
      <tr>
        <th scope="row">May</th>
        <td>June</td>
        <td>July</td>
        <td>August</td>
      </tr>
      <tr>
        <th scope="row">September</th>
        <td>October</td>
        <td>November</td>
        <td>December</td>
      </tr>
    </tbody> */}
  </table> }
  </div>  );
 
}

export default Mounth;






