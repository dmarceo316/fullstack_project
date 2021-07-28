
export default function Dashboard(){
    return(
        <div className="container">
            <div className='row mb-5'>
                <div className='col-12'>
                    <h1>Welcome User!</h1> 
                    <button className="btn btn-danger">Sign Out</button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-sm-6">
                    <h1>Leave a comment!</h1>
                </div>
                <div className="col-sm-6">
                    <div className="d-flex justify-content-center" >
                    <form>
                        <div class="form-group">
                            <label for="comment">Comment:</label>
                            <textarea class="form-control" rows="5" id="comment"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button> <br/>
                    </form>
                    </div>
                </div>
            </div>
        </div>

    )
}