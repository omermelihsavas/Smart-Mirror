import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from 'react-slick';
import './Gallery.css'

function Gallery() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:4000/api/upload-image");
                setPhoto(res.data);
            } catch (err) {
                console.log(err, "Fotoğraflar sunucudan getirilemedi...");
            }
        };

        fetchData();
    }, []);

    const imageDatas = photo.map((image, index) => {
        // Binary veriyi Base64'e dönüştürme
        const base64Image = btoa(
            new Uint8Array(image.img.data.data).reduce(
                (datas, byte) => datas + String.fromCharCode(byte),
                ''
            )
        );

        // Base64 verisini kullanarak <img> elementi oluşturma
        return <img key={index} src={`data:image/jpeg;base64,${base64Image}`} alt={`${index}`} height="300px" />;
    });

    const settings = {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        draggable: false,
    }

    return (
        <div className='container'>
            <Slider {...settings}>                
                {imageDatas}
            </Slider>
        </div>
    )
}

export default Gallery
