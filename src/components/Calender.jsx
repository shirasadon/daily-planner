function Calender(props) {
  const mystyle = {
    color: "white",
    backgroundColor: "gray",
    padding: "10px",
    fontFamily: "Arial",
    width:"800px",
    height:"200px",
    borderColor: "coral"
  };
    return(<div style={mystyle}>{props.children}</div>)
}

export default Calender;