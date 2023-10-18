import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Detail({ onClose, proyecto }) {
  const [activeTab, setActiveTab] = useState('fotos'); // Estado para controlar la pestaña activa

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
        <div className="fixed inset-0 bg-opacity-70 bg-black z-50 flex items-center justify-center">

            <div className="relative bg-mantis-500 p-4 w-11/12 md:w-3/4 h-4/6 sm:h-5/6 text-right rounded-lg">

                    <button onClick={onClose} className="absolute top-2 right-2 bg-transparent border border-black rounded-lg px-2 text-black hover:bg-black hover:text-white cursor-pointer">
                        <FontAwesomeIcon icon={faX} />
                    </button>

                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold text-black project-name"> {proyecto.nombre}</h1>
                    </div>

                    <div className="flex justify-between">

                        <div onClick={() => handleTabClick("fotos")} className={`flex-1 cursor-pointer ${ activeTab === "fotos" ? "bg-mantis-400 rounded-t-lg border-b border-black flex justify-center " : "flex justify-center border-b border-black"} tabx`}>
                            <h1 className="text-sm">Fotos</h1>
                        </div>

                        <div onClick={() => handleTabClick("videos")} className={`flex-1 cursor-pointer ${ activeTab === "videos" ? "bg-mantis-400 rounded-t-lg border-b border-black flex justify-center " : "flex justify-center border-b border-black"} tabx`}>
                            <h1 className="text-sm">Videos</h1>
                        </div>

                    </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className={`${ activeTab === "fotos" ? "block" : "hidden" } column overflow-y-auto w-screen max-w-xs sm:max-w-3xl ml-1 sm:ml-24 mt-14 sm:mt-4`}>

                        <div className="">
                            <Carousel showThumbs={false} showStatus={false} itemsToShow={1} itemsToScroll={1} infiniteLoop={false} showArrows={true}>

                                {proyecto.fotos.map((imagen, index) => (
                                    <div key={index}>
                                        <img
                                        src={imagen}
                                        alt={`Foto ${index}`}
                                        className="detail-image"
                                        />
                                    </div>
                                ))}

                            </Carousel>
                        </div>

                    </div>


                    <div className={`${ activeTab === "videos" ? "block" : "hidden" } flex items-center justify-center h-screen max-h-96 w-72 sm:w-screen sm:max-w-4xl ml-4 sm:ml-10 mt-4 sm:mt-6 overflow-y-auto`}>
                        <div className=" h-full w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src={proyecto.linkVideo}
                                title="YouTube video player"
                                // frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>

  );
}

export default Detail;