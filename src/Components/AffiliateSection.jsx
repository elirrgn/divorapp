import Card from "./Card";
import image from "../assets/img/placeholder.jpg";
import image2 from "../assets/img/placeholder2.jpg";

function AffiliateSection() {
    const restaurants = [
        {
            name: 'just eat it',
            image: image2,
            type: 'bar - restaurant',
            id: 0
        },
        {
            name: "minute by tuk tuk",
            image: image,
            type: "cafè - western food",
             id: 1
        },
        {
            name: "just eat it",
            image: image2,
            type: "bar - restaurant",
             id: 2
        },
        {
            name: "minute by tuk tuk",
            image: image,
            type: "cafè - western food",
             id: 3
        },
        {
            name: "just eat it",
            image: image2,
            type: "bar - restaurant",
             id: 4
        },
        {
            name: "minute by tuk tuk",
            image: image,
            type: "cafè - western food",
             id: 5
        }
    ]

    const cards = restaurants.map((r) => {
        <Card key={r.id} name={r.name} imagesrc={r.image} type={r.type} text={r.text} />
    })

    return(
        <>
            <div className="container affiliate-container">
                <div className="affiliate-text-container">
                    <h1>our affiliate restaurants</h1>
                </div>
            </div>
            <div className="affiliate-card-overflow-hidden">
                <div className="affiliate-card-container">
                    {restaurants.map((r) => (
                        <Card key={r.id} name={r.name} imagesrc={r.image} type={r.type} />
                    ))}
                </div>
                <div className="affiliate-card-container">
                    {restaurants.map((r) => (
                        <Card key={r.id} name={r.name} imagesrc={r.image} type={r.type} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default AffiliateSection