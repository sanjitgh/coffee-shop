import toast from "react-hot-toast";

// get coffee
const getAllFavourite = () => {
    const all = localStorage.getItem('favourite');
    if (all) {
        const favourite = JSON.parse(all);
        console.log(favourite);
        return favourite
    }
    else {
        console.log('[]');
        return [];
    }
}

// add coffee
const addFavourite = coffee => {
    const favourites = getAllFavourite();
    const isExist = favourites.find(item => item.id == coffee.id);
    if (isExist) return toast.error('This item already exist!');
    favourites.push(coffee);
    localStorage.setItem('favourite', JSON.stringify(favourites))
    toast.success('Successfully Added!');
}

// remove coffee
const removeFavourite = id => {
    const favourites = getAllFavourite();
    const remaining = favourites.filter(coffee => coffee.id != id);
    localStorage.setItem('favourite', JSON.stringify(remaining))
    toast.success('Successfully Removed!');
}

export { addFavourite, getAllFavourite, removeFavourite }