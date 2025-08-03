import H1 from "./H1";
import { getData } from "@/components/utils";
import { useState, useEffect } from "react";
const MyHolding=({asset_id, token_symbol})=>{    

    const defaultValues = {
                            asset_id: 0,
                            amount_held:0,
                            bought_price:0,
                            current_price:0,
                            revenue_generated:0,
                            asset_metadata: {
                                        name: "",
                                        thumbnail: "",
                                        category:""
                                    }
                        };

    const[state, setState] = useState(defaultValues);

    useEffect(()=>{
        const fetchHolding=async()=>{
            setState(defaultValues);
            const url = "/api/my-assets/my-holding/"+asset_id;
            const result = await getData(url, true);
            if(result.success) {
                setState(result);
            }
        }
        fetchHolding();
    }, []);

    return (
            <div className="border border-gray-200 show shadow-sm rounded-2xl w-full p-4">
                <div className="space-y-3">
                    <H1 title={"My  "+token_symbol+" Holdings Balance"} />
                    <div>
                        <div className='flex space-between'>
                                <div>Total Holding : <span className='font-bold px-2 text-gray-700'>{Math.round(1000*state.amount_held)/1000} {token_symbol}</span></div>
                                <div className='flex-1'></div>
                                <div>Current Value : <span className='font-bold px-2 text-gray-700'>{state.current_price} USDT</span></div>
                        </div>

                        <div className='flex space-between'>
                                <div>Price Bought : <span className='font-bold px-2 text-gray-700'>{state?.bought_price} USDT</span></div>
                                <div className='flex-1'></div>
                                <div>Revenue Generated : <span className='font-bold px-2 text-gray-700'>{state?.revenue_generated} USDT</span></div>
                        </div>        
                    </div>                                
                </div>
            </div>
    )
}

export default MyHolding;