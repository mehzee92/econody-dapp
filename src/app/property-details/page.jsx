"use client";
import { Info } from 'lucide-react';
import Image from 'next/image';
import React, { useState, Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { apiUrl, getQueryParam } from "@/components/utils";
import useAssetDetailStore from "@/stores/assetDetail"
import Scroller from "./Scroller"
import H1 from "./H1";
import MyHolding from "./MyHolding";



// Component that uses useSearchParams
function PropertyDetailsContent() {

    const { detail, offers, fetchAssetDetail } = useAssetDetailStore();


    useEffect(()=>{
        const asset_id = getQueryParam("asset_id");
        fetchAssetDetail(asset_id);
    }, []);


    return (
        <div className=" m-auto py-6 md:py-10 px-4 md:px-10">
            <div className="mx-auto">

                {/* Responsive Layout */}
                <div className="flex  flex-col lg:flex-row gap-4 lg:gap-5">
                    {/* Left Column - Main Image and Gallery */}
                    <div className="w-full lg:w-[30%] bg-white rounded-2xl p-4 space-y-4">
                        {/* Main Property Image */}

                        <h1 className="text-xl lg:hidden md:text-3xl font-bold text-gray-900">
                            <img 
                                className='w-10 h-10 rounded-full inline mr-3 border border-1 border-gray-300'
                                src={apiUrl+"/uploads/"+detail.token_icon} />
                                {detail.asset_name} ({detail.token_symbol})
                        </h1>

                        <div className="bg-gradient-to-br border overflow-hidden rounded-2xl mb-4 h-48 md:h-64 flex items-center justify-center">
                            <img className='h-auto w-full' src={apiUrl+"/uploads/"+detail.thumbnail} alt='house image' width={300} height={200} />
                        </div>


                        <p className="text-gray-800 lg:hidden font-bold text-xl my-2 md:text-xl">
                            {detail.title}
                        </p> 

                        <p className="text-gray-600 lg:hidden leading-relaxed text-justify text-sm md:text-base">
                            {detail.description}
                        </p>


                        <H1 title="Asset Gallery" />


                        <Scroller asset_id={detail.id} />


                        <H1 title="Asset Address / Location" />

                        <div  onClick={()=>{ alert(JSON.stringify(detail)); }} >
                            Address: Sector G-7/4, Capital Teritory, Islmabad
                        </div>
                        <div className="border border-gray-200 shadow-sm rounded-2xl  h-48 md:h-72 relative flex items-center justify-center">
                            <iframe
                                title="Property Location Map"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=77.2090%2C28.6139%2C77.2190%2C28.6239&amp;layer=mapnik&amp;controls=0&amp;zoomcontrol=false"
                                className="w-full h-full rounded-lg border-0"
                                loading="lazy"
                            ></iframe>
                        </div>

                    </div>




                   
                   
                    

                    <div className="w-full lg:w-[70%] space-y-4">


                        <h1 className="text-xl hidden mt-4 lg:block md:text-3xl font-bold text-gray-900">
                            <img 
                                className='w-10 h-10 rounded-full inline mr-3 border border-1 border-gray-300'
                                src={apiUrl+"/uploads/"+detail.token_icon} />
                                {detail.asset_name} ({detail.token_symbol})
                        </h1>

                        <p className="text-gray-800 hidden lg:block font-bold text-xl my-2 md:text-xl">
                            {detail.title}
                        </p> 

                        <p className="text-gray-600 hidden lg:block leading-relaxed text-justify text-sm md:text-base">
                            {detail.description}
                        </p>

                        {/* Property Description */}
                        <div className="border border-gray-200 shadow-sm rounded-2xl px-4 py-4">

                            <H1 title="Tokenization Details" />

                            <div className='flex flex-col sm:flex-row  xl:flex-row justify-between items-start sm:items-center gap-2'>
                                <p className="flex-1 text-gray-700 text-lg my-2  md:text-base">
                                    Token Name :  <span className='font-bold'>{detail.asset_name}</span>
                                </p>  

                                <p className="flex-1 text-gray-700 text-lg my-2  md:text-base">
                                    Token Symbol :  <span className='font-bold'>{detail.token_symbol}</span>
                                </p>  

                                <div className='flex-1'></div>
 
                            </div>
                           

                            <div className='flex flex-col sm:flex-row  xl:flex-row justify-between items-start sm:items-center gap-2'>

                                <p className="flex-1 text-gray-700 text-lg my-2  md:text-base">
                                    Decimals :  <span className='font-bold'>{detail.decimals}</span>
                                </p>  


                                <p className="flex-1 text-gray-700 text-lg my-2  md:text-base">
                                    Total Supply :  <span className='font-bold'>{detail.total_supply}</span>
                                </p> 

                                <div className='flex-1'></div>

                            </div>



                            <p className="text-gray-700 text-lg my-2 md:text-base">
                                Contract Address : <span className='font-bold'>{detail.token_address}</span>
                            </p>

                        </div>

                        {/* Property Stats and Documents */}
                        <div className="flex flex-col sm:flex-row  xl:flex-row gap-4">
                            {/* Property Stats */}
                            




                            <div className=" border border-gray-200 shadow-sm rounded-2xl flex-1 p-4">
                                
                                <H1 title="Asset Performance" />

                                <div className="space-y-3">

                                    <div className="flex flex-col sm:flex-row  xl:flex-row justify-between items-start sm:items-center gap-2">
                                        
                                        <div className="text-gray-700 text-sm md:text-base">
                                            Asset Valuation : <span className='font-bold'>{detail.valuation} {detail.currency}</span> 
                                        </div>


                                        <div className="text-gray-700 text-sm md:text-base"> 
                                            Total Investor Count : <span className='font-bold'>{detail.investors}</span>
                                        </div>



                                    </div>


                                    <div className="flex flex-col sm:flex-row  xl:flex-row justify-between items-start sm:items-center gap-2">
                                        
                                        <div className="text-gray-700 text-sm md:text-base">
                                            Projected APR : <span className='font-bold'>{detail.apr}%</span>
                                        </div>

                                        <div className="text-gray-700 text-sm md:text-base">
                                            Category : <span className='font-bold'>{detail.category}</span>
                                        </div>                                   

                                    </div>

                                    <hr className='my-3' style={{border:"solid 1px #00000010"}} />

                                    <div className="text-gray-700 flex mt-5 items-center justify-center gap-2 text-sm md:text-base">
                                        <div className='flex-1 py-2'>Quantity Sold out  </div>
                                        <div className="relative  flex-3 min-w-[100px] sm:min-w-[130px] bg-gray-300 rounded-full h-3 md:h-4">
                                            <div
                                                className="absolute left-0 h-3 md:h-4 bg-[#00bf63] rounded-full"
                                                style={{ width:detail.progress+"%" }}
                                            ></div>
                                            <div className="absolute right-1 md:right-2 top-[50%] translate-y-[-50%] text-[8px] md:text-[10px] text-gray-700 font-medium">
                                                {detail.progress}%
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* Documents */}
                        <div className="border border-gray-200 shadow-sm rounded-2xl flex-shrink-0 p-4">

                            <H1 title="Tokenization Documents" />

                            <div className="flex flex-wrap items-center py-5 gap-8">

                                {detail.tokenization_whitepaper ? (<a  href={apiUrl+"/uploads/"+detail.tokenization_whitepaper}  
                                        target='_blank'
                                        className="block">
                                        <img src="/images/pdf-ico.png" className="w-8 h-8 inline mr-2 " />
                                        Tokenization Whitepaper
                                    </a>) : null }

                                {detail.ownership_declaration ? ( <a href={apiUrl+"/uploads/"+detail.ownership_declaration}  
                                        target='_blank'
                                        className="block">
                                        <img src="/images/pdf-ico.png" className="w-8 h-8 inline mr-2 " />
                                        Ownership Declaration
                                    </a>) : null }

                                {detail.ddl_agreement ? (<a href={apiUrl+"/uploads/"+detail.ddl_agreement}  
                                        target='_blank'
                                        className="block">
                                        <img src="/images/pdf-ico.png" className="w-8 h-8 inline mr-2 " />
                                        Default, Dispute and Liquidition Agreement
                                    </a>) : null }                                    

                                {detail.revenue_distribution ? (<a href={apiUrl+"/uploads/"+detail.revenue_distribution}  
                                        target='_blank'
                                        className="block">
                                        <img src="/images/pdf-ico.png" className="w-8 h-8 inline mr-2 " />
                                        Revenue Distribution Policy
                                    </a>) : null }


                                {detail.buyback_policy ? (<a href={apiUrl+"/uploads/"+detail.buyback_policy}  
                                        target='_blank'
                                        className="block">
                                        <img src="/images/pdf-ico.png" className="w-8 h-8 inline mr-2 " />
                                        Buyback Policy
                                    </a>) : null}
                                                                           
                            </div>
                        </div>


                        {/* Additional Stats */}


 

                    <MyHolding token_symbol={detail.token_symbol} asset_id={detail.id} />


                        {/* Token Offers Table */}
                        <div className="border border-gray-200 shadow-sm rounded-2xl p-4">

                            <H1 title="Token Offers  " />
                            {detail.asset_id}
                            <div className="overflow-x-auto">
                                {/* Desktop Header */}
                                <div className="hidden md:grid grid-cols-5 px-2">
                                    <div className="py-3 font-semibold text-gray-700 text-left text-xs lg:text-sm">Seller</div>
                                    <div className="py-3 font-semibold text-gray-700 text-left text-xs lg:text-sm">Quantity</div>
                                    <div className="py-3 font-semibold text-gray-700 text-left text-xs lg:text-sm">Price</div>
                                    <div className="py-3 font-semibold text-gray-700 text-left text-xs lg:text-sm">Cliff</div>
                                    <div className="py-3"></div>
                                </div>

                                <div className="space-y-2">
                                    {Array.isArray(offers) && offers.map((offer, index) => (
                                        <div key={index} className="rounded-2xl w-full py-2 font-medium bg-gray-100 border border-gray-200 hover:border-gray-300 transition-colors px-2">
                                            {/* Desktop Layout */}
                                            <div className="hidden md:grid grid-cols-5 items-center">
                                                <div className="px-2 text-gray-900 w-full text-left text-xs lg:text-sm">{offer.seller_id} {offer.seller_name}</div>
                                                <div className="px-2 text-gray-900 w-full text-left text-xs lg:text-sm">{offer.quantity}</div>
                                                <div className="px-2 text-gray-900 w-full text-left text-xs lg:text-sm">{offer.total_price}</div>
                                                <div className="px-2 w-[150%] flex items-center gap-1">
                                                    <span className="text-gray-900 text-xs lg:text-sm">{offer.cliff}</span>
                                                </div>
                                                <div className="px-2 w-full flex justify-end">
                                                    <button className="bg-green-500 hover:bg-green-600 py-1 lg:py-[4px] rounded-3xl text-white px-3 lg:px-4 font-medium text-xs lg:text-sm transition-colors">
                                                        BUY Now
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Mobile Layout */}
                                            <div className="md:hidden space-y-2 py-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs font-medium text-gray-600">SELLER</span>
                                                    <span className="text-xs font-medium text-gray-900">{offer.seller_id} {offer.seller_name}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs font-medium text-gray-600">QUANTITY</span>
                                                    <span className="text-xs font-medium text-gray-900">{offer.quantity}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs font-medium text-gray-600">PRICE</span>
                                                    <span className="text-xs font-medium text-gray-900">{offer.total_price}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs font-medium text-gray-600 flex items-center gap-1">
                                                        CLIFF <Info className="w-3 h-3 text-gray-800" />
                                                    </span>
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-xs font-medium text-gray-900">{offer.cliff}</span>
                                                    </div>
                                                </div>


                                                <div className="pt-2 flex justify-center">
                                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-2xl font-medium text-xs transition-colors w-full">
                                                        BUY NOW
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PropertyDetailsContent;