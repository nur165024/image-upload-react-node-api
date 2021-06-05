import React from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    
      }
    
      const imageUpload = (event) => {
        console.log();
        const imageData = new FormData();
        imageData.set('key','4cf870205332f6ab8ae9aa9618f436b2');
        imageData.append('image',event.target.files[0]);
    
        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h2>Image Upload</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                        </div>
                                        
                                        <div className="form-group">
                                        <label htmlFor="image">Image Upload</label>
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

export default ImageUpload;