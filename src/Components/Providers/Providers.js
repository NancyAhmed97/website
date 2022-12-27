import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Providers.css"
// import required modules
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";
import { addCompaniesdet } from "../../Redux/Companies";
import { useDispatch } from "react-redux";

function Providers() {
    const dispatch = useDispatch();
    const [companyData, setCompanyData] = useState([])
    useEffect(() => {
        axios.get('https://forall.sa/services/api/ads/companies')
            .then(function (response) {
                // handle success
                setCompanyData(response.data.data);
                dispatch(addCompaniesdet(response.data.data));

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <section className="providers_container  py-5">
            <h5 className="text-center mb-5">Our Providers</h5>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}

                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {companyData.map((company, index) => {
                        console.log(company);
                        return (
                            <SwiperSlide key={index}><Link to={`/provider/${company.id}`}>
                                <img src={company.logo[Object.keys(company.logo)[5]]} alt="logo" className="w-100" />

                                <p className="mt-4 text-center">{company.name.value}</p>
                            </Link></SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>


        </section>
    )
}

export default Providers
