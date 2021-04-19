import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Contact = () => {

    const history = useHistory();
    const [user, setuser] = useState({
        name:"" , email:"" , work:"" , phone:""
    })

    let name , value;
    const inpiHan = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuser({...user , [name]:value});
    }

    const dataSend = async(e) => {
        e.preventDefault();

        const {name , email , work , phone} = user;

        const res = await fetch("/contact" , {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name , email , work , phone
            })
        })
        const dataGya = await res.json();
        if(dataGya.status === 422 || !dataGya){
            window.alert("Failed")
        }else{
            window.alert("Successfully Saved")

            history.push("/")
        }
    }   

    return (
        <div>
            <h1>Contact :</h1>
            <form method="POST" className="container">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Enter Your Name</label>
                    <input type="text" name="name" value={user.name} onChange={inpiHan} className="form-control" aria-describedby="emailHelp" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Enter Your Email</label>
                    <input type="email" name="email" value={user.email} onChange={inpiHan} className="form-control" placeholder="Email-Id" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Enter Your Wrok</label>
                    <input type="text" name="work" value={user.work} onChange={inpiHan} className="form-control" placeholder="Work" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Enter Your Phone</label>
                    <input type="text" name="phone" value={user.phone} onChange={inpiHan} className="form-control" placeholder="Phone" />
                </div>
                <button onClick={dataSend} type="submit" className="btn btn-primary">Sendit</button>
            </form>

            <div>
                <footer className="footer">
                <div className="container">
                    <span>Created By ❤️ AnkitTechFirm Pvt.Ltd</span>
                </div>
                </footer>
            </div>
        </div>
    );
};

export default Contact;