const Account = () => {
    return ( <>
    <div className="bg">
        <div className="accountcontainer">
    <div className="subnav">

    </div>
    <div className="accountdetails">
        <div className="personaldetails">
            <div className="personaldetailsname">
            <span>firstname: <input type="text" placeholder="Preetham Paul"/></span>
            <span>Lastname: <input type="text" placeholder="Chinta" /></span>
            </div>
            <div className="personaldetailsage">
            <span>Date of birth: <input type="date" /></span>
            <span>age: <input type="text" placeholder="16" /></span> 
           
            </div>
            <div className="personaldetailsage2">
            <span>Gender: <select name="" id="">
                <option value="">Male</option>
                <option value="">Female</option>
                </select></span> 
            <span>blood type
                <select name="" id="">
                    <option value="">O+</option>
                    <option value="">AB+</option>
                    <option value="">A+</option>
                    <option value="">B+</option>
                    <option value="">AB-</option>
                    <option value="">O-</option>
                </select>
                </span> 
            </div>

            <div className="personaldetailsaddress">
            <span>Address <input type="text" /></span> 
            <span>City </span> 
            <span>State</span> 
            <span>Pincode</span> 
            <span>Country</span> 
            </div>
        </div>
        <div className="userdetails">
            <span>Email</span>
            <span>Phone</span>
            <span>Password</span>
            <span>Confirm Password</span>
        </div>
        <div className="billingdetails">
            <span>card no.</span>
            <span>expiry</span>
            <span>cvv</span>
            <span>Name</span>
            <span>Address</span>
        </div>
    </div>

        </div>
    </div></>  );
}
 
export default Account;