import { useHistory } from 'react-router-dom'

import { Card, Image } from 'semantic-ui-react'

const MealCard = ({meal_item}) => {

    console.log(meal_item)

    const {title, image, id, meal} = meal_item

    const history = useHistory()


    


    return (
        <>
        <Image src={image} wrapped ui={false} onClick={() => history.push({
            pathname: `/meals/${id}`, state: {id: id, meal: meal}
        })}/>
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>Item Goes here</Card.Meta>
        </Card.Content>
        </>
    )

}



export default MealCard;