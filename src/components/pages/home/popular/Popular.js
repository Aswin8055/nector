import "./Popular.css";
import Product from '../../home/Products/Product';
export default function Popular(){
      const data = [
        {image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
            name:"Blue Diamond Almonds Lightly Salted Vegetables",
            oldPrice:"Rs.250.8",newPrice:"Rs. 230.85"},

        {image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
            name:"Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
            oldPrice:"Rs.250.8",newPrice:"Rs. 230.85"},

        {image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
            name:"All Natural Italian-Style Cashew Mix",
            oldPrice:"Rs. 550.8",newPrice:"Rs. 520.85"},
        {image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
            name:"Instant Herbal Bevarage with Dandelion",
            oldPrice:"Rs. 3,500.00",newPrice:"Rs. 32.8"},
        {image:"https://www.bigbasket.com/media/uploads/p/m/240067_23-tata-tea-gold-tea.jpg?tr=w-3840,q=80",
            name:"Tata Tea Gold Assam Teas, 500 g",
            oldPrice:"Rs. 1,850.00",newPrice:"Rs. 1,498.50"},
        {image:"https://www.bigbasket.com/media/uploads/p/m/297576_17-tata-tea-chakra-gold-dust-tea.jpg?tr=w-640,q=80",
            name:"Tata Tea Chakra Gold Premium Tea, 500 g",
            oldPrice:"Rs. 695.00",newPrice:"Rs.495.00"},
         {image:"https://www.bigbasket.com/media/uploads/p/m/1206632_4-paper-boat-apple-fruit-juice.jpg?tr=w-3840,q=80",
            name:"Apple Juice-Rich In Vitamin",
            oldPrice:"Rs.35.00",newPrice:"Rs.20.00"},
         {image:"https://www.bigbasket.com/media/uploads/p/l/1213178-2_1-paper-boat-swing-juicier-drink-slurpy-mango.jpg",
            name:"Paper Boat Swing Juicier Drink 50 ml",
            oldPrice:"Rs. 75",newPrice:"Rs. 60"},
         {image:"https://www.bigbasket.com/media/uploads/p/m/40038381_6-fresho-farm-eggs-brown-medium-antibiotic-residue-free.jpg?tr=w-1920,q=80",
            name:"Farm Eggs - Brown, Medium 10 pcs",
            oldPrice:"Rs.200",newPrice:"Rs.180.00"},  
         {image:"https://www.bigbasket.com/media/uploads/p/m/40161155_3-farm-made-free-range-eggs.jpg?tr=w-1920,q=80",
            name:"UPF Healthy Brown Eggs - Large, Rich 30 pcs",
            oldPrice:"Rs. 150.00",newPrice:"Rs. 100.00"}, 
        
    ];
    return(
        <section className="homeProducts">
        <div className="container-fluid">
            <div className="d-flex align-items-center pop" >
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <div className="list">
            <ul className=" list-inline ml-auto filterTabs">
                <li className="list-inline-item ">
                    <a className="cursor">All</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Fruits</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Vegetables &amp; Organising</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Milk</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Eggs</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Snacks</a>
                </li>
            </ul>
            </div>
            </div>
        </div>
        <div className="productRow">
           {
                data.length!==0&&data.map((item)=>{
                    return (
                        
                            <div className="item">
                                    <Product data={item}/>
                                
                             </div>
                        
                    );
                })
}
        </div>
     </section>
    );
}