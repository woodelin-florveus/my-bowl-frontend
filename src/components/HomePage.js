
const HomePage = () => {




    const dummy_image = "https://dummyimage.com/300x300/000/fff"

    return (
        <div className="pageFormat">
            <section className="intro">
                <h1 className="section__title section__title--intro"> Our Services </h1>
            </section>

            {/* services */}

            <section className="meal_services">
                <div className="services">
                    <div className="service_card">
                        <img src={dummy_image} alt="photo_dump" />
                        <div className="content">
                        <h3>Meal Plan</h3>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder 
                    text commonly used to demonstrate the visual form of a 
                    document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </div>
                    </div>

                    <div className="service_card">
                        <img src={dummy_image} alt="photo_dump" />
                        <div className="content">
                        <h3>Nutrition Info</h3>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder 
                    text commonly used to demonstrate the visual form of a 
                    document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </div>
                    </div>

                    <div className="service_card">
                    <img src={dummy_image} alt="photo_dump" />
                        <div className="content">
                        <h3>About</h3>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder 
                    text commonly used to demonstrate the visual form of a 
                    document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </div>
                    </div>
                </div>
            </section>

            <section className="why_our_services">
                <div className="why_container">
                    <div className="why_image">
                        {/* add image here */}
                    </div>
                    <div className="why_content">
                        <h2> Better Lifestyle</h2>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder 
                    text commonly used to demonstrate the visual form of a 
                    document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </div>
                </div>
            </section>
            {/* add a universal footer */}
        </div>
    )

}

export default HomePage;

