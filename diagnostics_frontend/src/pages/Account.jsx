const Account = () => {
    return ( <>
    <div className="bg">
        <div className="accountcontainer">
    <div className="subnav">

    </div>
    <div className="accountdetails">

        <div className="personaldetails">
            <div className="personaldetailsname">
                <div className="inputlabel">
                <span className="f10 py5">Firstname</span> <input type="text" placeholder="Preetham Paul"/>
                </div>
                <div className="inputlabel">
                <span className="f10 py5">Lastname</span> <input type="text" placeholder="Chinta" />
                </div>
            </div>




            <div className="personaldetailsage">
            <div className="inputlabel"><span className="f10 py5">Date of birth</span> <input type="date" /></div>
            <div className="inputlabel"> <span className="f10 py5"> Age</span> <input  type="text" placeholder="16" /></div> 
           
            </div>

        </div>
      
    </div>

        </div>
    </div></>  );
}
 
export default Account;