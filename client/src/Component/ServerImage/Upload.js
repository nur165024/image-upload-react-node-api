import React, { useState } from 'react';

const Upload = () => {
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const imageUpload = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('email', info.email)

        fetch('http://localhost:4000/image-upload-server', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h2>Server Image Upload</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input onBlur={handleBlur} type="email" className="form-control" name="email" id="email" placeholder="Enter email" />
                                    </div>
                                        
                                    <div className="form-group">
                                        <label htmlFor="image">Server Image</label>
                                        <input type="file" onChange={imageUpload} className="form-control" id="image" />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary">Submit</button>                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Upload;