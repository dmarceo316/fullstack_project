
export default function SignUp(){
    return(
        <div className="row mt-5">
            <div className="col-12">    
                <h1 className="mb-4">Sign Up</h1>
                <div className="d-flex justify-content-center" >
                <form>
                    <div className="form-group row">
                        <div className="mb-3">
                            <label for="inputFirstName" className="form-label">First Name</label>
                            <input type="email" className="form-control" id="inputFirstName" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="inputLastName" className="form-label">Last Name</label>
                            <input type="email" className="form-control" id="inputLastName" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="inputEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="inputUsername" className="form-label">Username</label>
                            <input type="email" className="form-control" id="inputUsername" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3 ">
                            <label for="inputPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword"/>
                        </div>
                        <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Super User?</label>
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Submit</button> <br/>
                </form>
                </div>
            </div>
        </div>
    )
}