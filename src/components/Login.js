

export default function Login(){
    return(
        <div className="row mt-5">
            <div className="col-12">
            <h1 className="mb-3">Welcome!</h1>
            <h1 className="mb-2">Please sign in!</h1>
                <div className="d-flex justify-content-center" >
                <form>
                    <div className="form-group row">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3 ">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Submit</button> <br/>
                    <button href="#"className="btn btn-danger">Sign up</button>
                </form>
                </div>
            </div>
        </div>
    )
}