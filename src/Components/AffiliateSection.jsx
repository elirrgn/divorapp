import Card from "./Card";
import image from "../assets/img/placeholder.jpg";

function AffiliateSection() {
    const restaurants = [
        {
            name: 'minute by tuk tuk',
            image: image,
            type: 'cafè - western food',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, aliquid sequi esse neque iusto quaerat quasi voluptatibus, facilis natus tempore eum quidem quisquam quam vel hic delectus nisi recusandae.',
            id: 0
        },
        {
            name: "minute by tuk tuk",
            image: image,
            type: "cafè - western food",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, aliquid sequi esse neque iusto quaerat quasi voluptatibus, facilis natus tempore eum quidem quisquam quam vel hic delectus nisi recusandae.",
            id: 1
        },
        {
            name: "minute by tuk tuk",
            image: image,
            type: "cafè - western food",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, aliquid sequi esse neque iusto quaerat quasi voluptatibus, facilis natus tempore eum quidem quisquam quam vel hic delectus nisi recusandae.",
            id: 2
        },
        {
            name: "minute by tuk tuk",
            image: image,
            type: "cafè - western food",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, aliquid sequi esse neque iusto quaerat quasi voluptatibus, facilis natus tempore eum quidem quisquam quam vel hic delectus nisi recusandae.",
            id: 3
        },
        {
            name: "minute by tuk tuk",
            image: image,
            type: "cafè - western food",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, aliquid sequi esse neque iusto quaerat quasi voluptatibus, facilis natus tempore eum quidem quisquam quam vel hic delectus nisi recusandae.",
            id: 4
        },
        {
            name: "minute by tuk tuk",
            image: image,
            type: "cafè - western food",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, aliquid sequi esse neque iusto quaerat quasi voluptatibus, facilis natus tempore eum quidem quisquam quam vel hic delectus nisi recusandae.",
            id: 5
        }
    ]

    const cards = restaurants.map((r) => {
        <Card key={r.id} name={r.name} imagesrc={r.image} type={r.type} text={r.text} />
    })

    return(
        <div className="container affiliate-container">
            <div className="affiliate-text-container">
                <h1>our affiliate restaurants</h1>
            </div>
            <div className="affiliate-card-container">
                {restaurants.map((r) => (
                    <Card key={r.id} name={r.name} imagesrc={r.image} type={r.type} text={r.text} />
                ))};
            </div>
        </div>
    );
}

export default AffiliateSection