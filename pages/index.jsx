import React from 'react';
import ContainerDou from '../components/ContainerDou';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Link from "next/link"
import Slider from '../components/Slider';
import ProductsContainer from '../components/ProductsContainer';
const index = () => {
    return (
        <React.Fragment>
            <Slider />
            <ContainerDou>
                <div className="title">
                    <h2>Quienes Somos:</h2>
                    <div className='separador'></div>
                    </div>  
                    <div className="duo">
                    <div className='quote'>
                        <p>
                            "Proveemos soluciones diferenciadas para el mercado industrial e institucional"
                        </p>
                    </div>
                    <div className="text ligth">
                        <p>Alkemy™ es una empresa de especialidades químicas que desde sus inicios en agosto de 1989 se ha enfocado en brindar al mercado industrial e institucional soluciones diferenciadas  por su valor para nuestros clientes, las cuales se han  evidenciado mediante  la excelencia en los resultados obtenidos,  la coherencia e impacto financiero en sus operaciones, innovación constante en los sistemas implementados y tecnologías químicas de bajo impacto hacia el ambiente.

Esta mística de trabajo y visión de nuestro negocio nos han permitido expandir nuestra cobertura en toda la región centroamericana con operaciones propias que mantienen la esencia y el espíritu de compromiso hacia la calidad y excelencia en el servicio para satisfacer las necesidades y requerimientos de nuestros clientes; bajo esta premisa y valor corporativo hemos fortalecido nuestra estructura en las áreas de Diseño, Manufactura y Comercialización mediante un sistema de gestión de calidad bajo la norma ISO-9001, así mismo Alkemy™ cuenta con una certificacion de GMP´s y se ha integrado el programa de responsabilidad social empresarial SMETA.</p>
                    </div>
                    </div>
                    
                 
            </ContainerDou> 
            <ContainerDou>
                <div className="title">
                    <h2>Productos</h2>
                    <div className='separador'></div>
                </div>
                <div className="vertical">
                    <ProductCard bg={"https://uploads-ssl.webflow.com/5b217fd3093e3eaeb856fbda/5b9a8855505ecabcf36a6897_banner-4marcas1.png"}         
                        to="detalles"
                        />
                  
                <ProductCard bg={"https://uploads-ssl.webflow.com/5b217fd3093e3eaeb856fbda/5b9a8855505ecabcf36a6897_banner-4marcas1.png"}
                               to="detalles2"
                />
                <ProductCard bg={"https://uploads-ssl.webflow.com/5b217fd3093e3eaeb856fbda/5b9a8855505ecabcf36a6897_banner-4marcas1.png"}
                             to="detalles3"
                />  
                </div>
                <ProductsContainer />
            </ContainerDou>      
        </React.Fragment>
    );  
};

export default index;