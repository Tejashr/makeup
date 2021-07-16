import React, { useEffect, useState } from 'react';
import { GetDetails } from './axios';

function Cart() {

    let [item, setItem] = useState([])

    useEffect(async () => {
        let details = await GetDetails();
        setItem(details.data)
        console.log(details.data[0].image_link)
    }, [])

    return (
        <>
            <div className="row">
                {
                    item.map((user, index) => {
                        console.log(user)
                        return (
                            <div className="col-md-6 col-sm-12 animate-box col-lg-4 mt-5">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top" style={{ height: "18rem" }} src={`${user.image_link}`} alt="Image not found" />
                                    <div class="card-body bg-warning">
                                        <h5 class="card-title">{user.name}</h5>
                                        <p class="card-text">{user.brand}</p>
                                        <h6 className="card-text">Price: Rs{user.price}</h6>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">{user.description}</li>
                                    </ul>
                                    <div class="card-footer bg-warning">
                                        <a href={`${user.product_link}`} target="_blank" class="card-link text-dark">Product link</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    );
}

export default Cart;