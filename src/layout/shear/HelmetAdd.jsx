import { useState } from "react";
import { Helmet } from "react-helmet-async";

const HelmetAdd = ({pageTitle, pageDescription}) => {
    
    const pageKeywords = 'fashion, clothing, accessories, trends,Dora Collection,Fashion,Clothing,Apparel,Style,Trendy,Chic,Fashionable, Wardrobe, Outfit, Designer, Boutique, Dresses, Tops, Bottoms,  Accessories,  Handbags,  Shoes ,Jewelry,Trends, Streetwear, Casual, Formal, Eveningwear, Luxury Fashion, Affordable Fashion, Fashion Trends, Fashion Tips, Fashion Inspiration,Fashionista,Fashion Influencer, Fashion Blog, Fashion Forward, Stylish Looks, Celebrity Fashion, Red Carpet Fashion, Runway Fashion, Sustainable Fashion, Eco-Friendly Fashion, Vintage Fashion, Retro Fashion,Bohemian Fashion,Urban Fashion,Plus Size Fashion,Petite Fashion,Maternity Fashion,Men s Fashion,Women s Fashion,Children s Fashion, Online Fashion Store';
  
   
    return (
        <div>
           <Helmet>

        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords+"  Dora Collection presents a captivating blend of contemporary fashion and timeless elegance. Explore our curated selection of trendsetting clothing, chic accessories, and stylish essentials designed to elevate your wardrobe. From sophisticated dresses to versatile separates, each piece embodies quality craftsmanship and on-trend flair. Discover your signature style with Dora Collection  where fashion meets individuality."} />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Mohammad Ahtesam" />
        {/* Open Graph meta tags */}
        <meta property="og:title" content={'Dora Collection'} />
        <meta property="og:description" content={"Dora Collection presents a captivating blend of contemporary fashion and timeless elegance. Explore our curated selection of trendsetting clothing, chic accessories, and stylish essentials designed to elevate your wardrobe. From sophisticated dresses to versatile separates, each piece embodies quality craftsmanship and on-trend flair. Discover your signature style with Dora Collection  where fashion meets individuality."} />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
      
           </Helmet>
        </div>
    );
};

export default HelmetAdd;