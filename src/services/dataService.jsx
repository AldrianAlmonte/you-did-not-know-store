import axios from "axios";

var catalog = [
    {
        _id: "154",
        price: 12.32,
        stock: 13,
        title: "Baby Yoda",
        image: "mattel-collectible-star-wars-the-mandalorian-the-child-11-basic-plush-geek-store-3_400x.webp",
        discount: 5,
        category: "Baby Yoda",
      },
      {
        _id: "155",
        price: 22.71,
        stock: 21,
        title: "Kakashi Sensei",
        image: "naruto-shippuden-kakashi-plush-8-geek-store_400x.webp",
        discount: 10,
        category: "Collectible",
      },
      {
        _id: "156",
        price: 32.0,
        stock: 20,
        title: "Naruto",
        image: "naruto-shippuden-plush-8-geek-store_400x.webp",
        discount: 0,
        category: "Collectible",
      },
      {
        _id: "157",
        price: 32.0,
        stock: 20,
        title: "The Mandalorian pop",
        image: "star-wars-the-mandalorian-and-the-child-pop-moment-vinyl-figure-geek-store_400x.webp",
        discount: 0,
        category: "Collectible",
      },
      {
        _id: "158",
        price: 32.0,
        stock: 20,
        title: "The Child Baby Yoda Wallet",
        image: "star-wars-the-mandalorian-the-child-shield-bi-fold-wallet-geek-store_400x.webp",
        discount: 0,
        category: "Accesories",
      }
    
    ];


class DataService{
  async getCatalog(){

    // get data from server
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    let data = response.data;

    return data;

    //some instructions to
    //retrieve data from the actual server

    // return catalog;
  }
}

export default DataService;
