import React from 'react'
import "./App.css"


export const Award = () => {
  return (
<div id="myCarousel" className="carousel slide container" data-bs-ride="carousel">
    <div className="carousel-inner w-100">
        <div className="carousel-item active">
            <div className="col-md-3">
                <div className="card card-body">
                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=1" />
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="col-md-3">
                <div className="card card-body">
                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=2"/>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="col-md-3">
                <div className="card card-body">
                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=3"/>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="col-md-3">
                <div className="card card-body">
                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=4"/>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="col-md-3">
                <div className="card card-body">
                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=5"/>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="col-md-3">
                <div className="card card-body">
                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=6"/>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="col-md-3">
                <div className="card card-body">
                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=7"/>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="col-md-3">
                <div className="card card-body">
                    <img className="img-fluid" src="https://via.placeholder.com/640x360?text=8"/>
                </div>
            </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
  )
}
