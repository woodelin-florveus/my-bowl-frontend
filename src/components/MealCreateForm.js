import { useState } from "react"

const MealCreateForm = () => {

    // users will be able to add an image and title within this the component 


    const [formData, setFormData] = useState({
        title: "",
        image: "",
        user_id: 1, 
        meal_id: 1
    })



    const handleChange = (event) => {
        setFormData({
            ...formData,[event.target.name]: event.target.value
        })
    }


    const handleSub = (event) => {
        event.preventDefault() 
        //POST Submit
        
        fetch(`http://localhost:3000/meal_plans`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    const {title, image} = formData

    return (
        <div className="pageFormat">
            <section className="mealForm">
                <h1 className="section__title">Create Meal Plan Here</h1>

                    <div className="submissionForm">
                        <form onSubmit={handleSub} className="create_form" autoComplete="off">
                            <label> Enter Title </label>
                                <input 
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={handleChange}
                                    placeholder="add title"
                                />
                            
                            <label> Add Image</label>

                            <input 
                                type="text"
                                name="image"
                                value={image}
                                onChange={handleChange}
                                placeholder="add image"
                            />

                            <input type="submit" value="submit" />
                        </form>
                    </div>

            </section>
        Create title and add cloudinary here 
        </div>
    )

}


export default MealCreateForm