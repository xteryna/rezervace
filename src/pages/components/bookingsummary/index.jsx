import { Head } from "../head"
import { Detail } from "../detail"
import { Services } from "../services"
import { Cancel } from "../cancel"
import "./style.css"

const hotel = {
    photo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960",
    name: 'Hotel Lesní Zátiší',
    adress: 'Malohradské skály 347/21',
    city: 'Malohradská ves',
    rating: 4.65,
    room: {
        name: 'Pokoj 2',
        type: 'Dvoulůžkový s dětskou přistýlkou',
        price: '1 800 Kč / noc'
    } 
}

const summary = {
    number: '459787-745',
    dates: {
        from: '13.6.2023',
        to: '17.6.2026'
    },
    guests: '2 dospělí, 1 dítě',
    meals: 'žádné',
    price: 7200,
    checkin: '13.6.2023', 
    checkout: '17.6.2026'
}

const others = {
    parking: '200 Kč / noc', 
    breakfast: '150 Kč / noc', 
    wellness: 'Zdarma',
    wifi: 'Zdarma na všech pokojích'
}

const storno = {
    early: 'Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám účtována žádná částka.',
    late: 'Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám účtována částka za první noc pobytu.'
}



export const BookingSummary = () => {
    return (
      <div className="summary">
        <h2>Booking Summary</h2>
        <Head {...hotel}/>
        <Detail {...summary} />
        <Services {...others} />
        <Cancel {...storno}/>
      </div>
    );
  };