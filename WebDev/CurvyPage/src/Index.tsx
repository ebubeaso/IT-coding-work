import React from 'react';
import ReactDOM from 'react-dom';

const Main: React.FC = () => {
    return (
        <div>
            <section className="Section1">
                <h1 className="Title">This is a very curvy page</h1>
                <div className="Wave1">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,
                    743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,
                    31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,
                    118.92,1055.71,111.31,985.66,92.83Z" className="ShapeFill"></path>
                    </svg>
                </div>
            </section>
            <section className="Section2">
                <h1 className="Title">This is also another curvy section</h1>
                <div className="Wave1">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,
                    743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,
                    31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,
                    118.92,1055.71,111.31,985.66,92.83Z" className="ShapeFill"></path>
                    </svg>
                </div>
            </section>
        </div>
    )
}
ReactDOM.render(<Main/>, document.getElementById("root"));