
import { Card, Image } from 'semantic-ui-react'


const MealCard = ({meal_item}) => {

    console.log(meal_item)

    const {title, image} = meal_item


    return (
        <>
        <Image src={image} wrapped ui={false}/>
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>Item Goes here</Card.Meta>
        </Card.Content>

        </>
    )

}



export default MealCard;