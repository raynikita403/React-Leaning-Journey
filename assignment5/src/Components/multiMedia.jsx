import React from "react";
import img1 from '../assets/bike1.jpeg';
import img2 from '../assets/bike2.jpeg';
import img3 from '../assets/bike3.jpeg';
import img4 from '../assets/bike4.jpeg';
import vedio1 from '../assets/bike.mp4';
import data from '../assets/data.json';
import { CiImageOn } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";



export const ImageComponent = () => {
 
  const images = [
    {
      id: 1,
      img: img1,
      title: "Beach View",
      desc: "Relax at the sunny seaside resort.",
    },
    {
      id: 2,
      img: img2,
      title: "Mountain Stay",
      desc: "Enjoy a peaceful mountain retreat.",
    },
    {
      id: 3,
      img: img3,
      title: "City Life",
      desc: "Experience vibrant city culture.",
    },
    {
      id: 4,
      img: img4,
      title: "Desert Safari",
      desc: "Adventure through the golden dunes.",
    },
   
  ];

  return (
    <div className="container my-5">
      <h4 className="text-center bg-danger text-white py-3 rounded">  <CiImageOn size={30} className="me-2 mb-1" /> Images</h4>
      <div className="row mt-4">
        {images.map((item) => (
          <div key={item.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={item.img}
                className="card-img-top"
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">{item.desc}</p>
                <button className="btn btn-danger text-light">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const VideoComponent = () => {

  return (
   <div className="container my-5">
      <h4 className="text-light bg-danger text-center py-3"> <FaVideo size={30} className="me-2 mb-1" />Video</h4>
      <video
        width="100%"
        height="350"
        controls
        className="rounded shadow"
      >
        <source
          src={vedio1}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export const AudioComponent = () => {
  const mediaList = data.media;

  return (
    <div className="container mt-4">
      <h4 className="text-center mb-4 bg-danger text-light py-3"> <GiLoveSong size={30} className="me-2 mb-1" /> Movie Audio Gallery</h4>
      <div className="row">
        {mediaList.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card shadow-sm text-center p-3">
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "contain", borderRadius: "10px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <audio controls className="w-100 mt-2">
                  <source src={item.audio} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};