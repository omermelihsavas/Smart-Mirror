import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './News.css'
import Slider from 'react-slick';

function News() {
    const [newsTitle, setNewsTitle] = useState([]);
    const [newsDesc, setNewsDesc] = useState([]);

    //CNN TÜRK Son Dakika
    useEffect(() => {
        async function GetNews() {
            try {
                const response = await fetch('https://www.cnnturk.com/feed/rss/turkiye/news');
                const xmlData = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(xmlData, 'application/xml');
                const items = xml.getElementsByTagName('item');
                const newsTitleArray = [];
                const newsDescArray = [];

                for (let i = 0; i < items.length; i++) {
                    const title = items[i].getElementsByTagName('title')[0].textContent;
                    newsTitleArray.push(title);
                    const description = items[i].getElementsByTagName('description')[0].textContent;
                    newsDescArray.push(description);
                }
                setNewsTitle(newsTitleArray);
                setNewsDesc(newsDescArray);

            } catch {
                console.log('Veriler alınırken hata oluştu.');
            }
        }
        GetNews();
    }, []);

    const settings = {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        draggable: false
    }

    return (
        <div className='container'>
            <h3>Son Dakika Haberleri</h3>

            <Slider {...settings}>
                {newsTitle.map((title, indexT) => (
                    <div className='title' key={indexT}>
                        {title}
                    </div>
                ))}
            </Slider>

            <hr className="horizontal-rule" />

            <Slider {...settings}>
                {newsDesc.map((desc, indexD) => (
                    <div className='description' key={indexD}>
                        {desc}
                    </div>
                ))}
            </Slider>

        </div>
    )
}

export default News