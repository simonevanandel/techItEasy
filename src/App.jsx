import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import minus from './assets/minus.png';
import check from './assets/check.png';
import calculateSoldProducts from "./helpers/calculateSoldProducts.js";
import calculateInitialStock from "./helpers/calculateInitialStock.js";
import calculateProductsToSell from "./helpers/calculateProductsToSell.js";
import createProductName from "./helpers/createProductName.js";
import createProductPrice from "./helpers/createProductPrice.js";
import createScreenSizesString from "./helpers/createScreenSizesString.js";

function App() {
    function sortBestSellers() {
        inventory.sort((a, b) => {
            return a.sold - b.sold;
        });

        console.log(inventory);
    }

    function sortCheapest() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        });

        console.log(inventory);
    }

    function sortSport() {
        inventory.sort((a, b) => {
            return a.refreshRate - b.refreshRate;
        });

        console.log(inventory);

    }

    return (
        <main className="page-container">
            <h1>Tech it easy dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="dashboard-container">
                    <article className="dashboard-item items-sold">
                        <h3>Aantal verkochte producten</h3>
                        <h2>{calculateSoldProducts(inventory)}</h2>
                    </article>
                    <article className="dashboard-item items-original">
                        <h3>Aantal ingekochte producten</h3>
                        <h2>{calculateInitialStock(inventory)}</h2>
                    </article>
                    <article className="dashboard-item items-to-sell">
                        <h3>Aantal te verkopen producten</h3>
                        <h2>{calculateProductsToSell(inventory)}</h2>
                    </article>
                </div>
                <h3>Beschikbare merken</h3>
                <ul>
                    {inventory.map((tv) => {
                        return <li key={`merkenlijst-${tv.type}`}>{tv.brand}</li>
                    })}
                </ul>
            </section>
            <section className="best-seller-container">
                <h2>Best verkochte tv</h2>
                <article className="product product-best-seller">
                    <span className="product-image">
                        <img src={bestSellingTv.sourceImg} alt="Afbeelding van het product"/>
                    </span>
                    <div className="product-info">
                        <h3>{createProductName(bestSellingTv)}</h3>
                        <p className="product-price">{createProductPrice(bestSellingTv.price)}</p>
                        <p>{createScreenSizesString(bestSellingTv.availableSizes)}</p>
                        <ul className="option-list">
                            <li><img src={check} alt="Icoon: aanwezig" className="icon"/>wifi</li>
                            <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>speech</li>
                            <li><img src={check} alt="Icoon: aanwezig" className="icon"/>hdr</li>
                            <li><img src={check} alt="Icoon: aanwezig" className="icon"/>bluetooth</li>
                            <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>ambilight</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section>
                <h2>Alle tvs</h2>
                <button type="button" onClick={sortBestSellers}>
                    Meest verkocht eerst
                </button>
                <button type="button" onClick={sortCheapest}>
                    Goedkoopste eerst
                </button>
                <button type="button" onClick={sortSport}>
                    Meest geschikt voor sport eerst
                </button>
                {inventory.map((tv) => {
                    return (
                        <article className="product" key={tv.type}>
                            <span className="product-image">
                                <img src={tv.sourceImg} alt="Afbeelding van het product"/>
                            </span>
                            <div className="product-info">
                                <h3>{createProductName(tv)}</h3>
                                <p className="product-price">{createProductPrice(tv.price)}</p>
                                <p>{createScreenSizesString(tv.availableSizes)}</p>
                                <ul className="option-list">
                                    {tv.options.map((option) => {
                                        if (option.applicable === true) {
                                            return <li key={`${tv.type}-${option.name}`}><img src={check} alt="Icoon: aanwezig" className="icon"/>{option.name}</li>
                                        } else {
                                            return <li key={`${tv.type}-${option.name}`}><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>{option.name}</li>
                                        }
                                    })}
                                </ul>
                            </div>
                        </article>
                    )})}
            </section>
        </main>
    )
}

export default App
