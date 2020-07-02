import React, {useState} from 'react'

const Dashboard = () =>{

    const inivalu = ""
    const incheck = {
        sms:'',
        marketing:'',
        flyers:''
    }
    const [uinput, setInput] = useState(inivalu)
    const [checkBox, setCheckBox] = useState(incheck)

    const name = "admin"

    const handleSubmit = (e) =>{

    }

    const handleChange = (e) =>{
        const {name, type, checked} = e.target
        if (type === "checkbox"){
            setCheckBox({
                [name]:checked
            })
        }
        
    }

    return(
        <div className="dashboard commonClass col-md-12 col-lg-12">
            <div className="u-details col-md-12 noPadding">
                <div className="col-md-1 col-lg-1 col-xs-6 noPadding">
                <i class="fa fa-file-image-o" aria-hidden="true"></i>
                </div>
                <div className="col-md-11 col-lg-11 col-xs-6 dashHeading">
                    <h2>Welcome {name}!</h2>
                </div>
            </div>

            <hr className="borderBottom"/>

            <div className="u-accnt-details">
                <div className="u-accnt-total">
                    <h3>Account Balance. $3000</h3>
                </div>
                <div className="u-accnt-list">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01-Feb-2018</td>
                                <td>Room Rent</td>
                                <td>700</td>
                            </tr>
                            <tr>
                                <td>02-Feb-2018</td>
                                <td>Morrision</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr className="borderBottom"/>

            <div className="u-other-info col-md-12">
                <div className="col-md-6 col-lg-6 col-xs-12 subscribe-data">
                    <h3>Subscribe to Alerts</h3>
                    <div className="sub-datalist">
                        <form onSubmit={handleSubmit}>
                            <div className="sub-data">
                                
                                <label name="sms"><input 
                                    type="checkbox"
                                    name="sms"
                                    value="SMS Alert"
                                    checked={checkBox.sms}
                                    onChange={handleChange}
                                />SMS Alert</label>
                            </div>
                            <div className="sub-data">
                                
                                <label name="marketing"><input 
                                    type="checkbox"
                                    name="marketing"
                                    value={checkBox.marketing}
                                    checked={checkBox.marketing}
                                    onChange={handleChange}
                                />Marketing Newsletter</label>
                            </div>
                            <div className="sub-data">
                                
                                <label><input 
                                    type="checkbox"
                                    name="Flyers"
                                    value={checkBox.flyers}
                                    onChange={handleChange}
                                />Flyers</label>
                            </div>
                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xs-12 subscribe-data">
                    <h3>Two way data binding </h3>
                    <input 
                        type="text" 
                        name="uname" 
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <p>{uinput}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard