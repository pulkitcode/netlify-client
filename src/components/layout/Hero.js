import React from 'react'


export const Hero = () => {
    return (
        <section style={{
            background: "#252631",
            padding: "10% 0",
        }}>
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8 mx-auto">
                        <h1 className="text-white mb-5">Hello, how can we help you?</h1>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 mx-auto">
                        <form className="input-group input-group-lg mb-3">
                            <input className="form-control border-0" type="search" placeholder="Search" />
                            <span className="input-group-append p-0">
                                <button className="btn text-muted" type="submit"><i className="fas fa-search"></i></button>
                            </span>
                        </form>
                    </div>
                </div>

            </div>
        </section >
    )
}
