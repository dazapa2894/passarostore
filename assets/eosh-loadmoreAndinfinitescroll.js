var eoshDomain = Shopify.shop;
        var removePagination = document.querySelectorAll("#collection-pagination, .gf_collection-paginator-wrapper, .pagination-page, .boost-pfs-filter-bottom-pagination, .toolbar-bottom, .Pagination Text--subdued, .pagination, .pagination-border-top, .pagination-custom, .Pagination, .justify-content-center, .collection-pagination, .box__paginate, .paginate, .pagination--container, #pagination, .collection--pagination");
        if(window.location.href.indexOf("collections")>-1 || (window.location.href.indexOf("a/search") > -1 && Shopify.shop=="perkele-shop.myshopify.com") || (window.location.href.indexOf("search")>-1 && (Shopify.shop=="thisisneverthatstore.myshopify.com" || Shopify.shop=="thisisneverthat-intl.myshopify.com" || Shopify.shop == "passarostore.myshopify.com" || Shopify.shop=="funkydecors.myshopify.com") ))
        {
            if(typeof(removePagination[0])!="undefined"){
                if(eoshDomain=="aziodesign.myshopify.com"){
                    removePagination[3].style.display="none";
                } else if(eoshDomain=="vintedge-modern.myshopify.com"){
                    removePagination[0].style.display="none";
                    removePagination[1].style.display="none";
                } else {
                  removePagination[0].style.display="none"; 
                }
            }
        }
        window.onload=function(){
            var eoShFileExist=document.querySelector("script[src*='https://loadmore-infinitescroll.extendons.com']");       
            if(window.location.href.indexOf("collections")>-1 || (window.location.href.indexOf("a/search") > -1 && Shopify.shop=="perkele-shop.myshopify.com") || (window.location.href.indexOf("search")>-1 && (Shopify.shop=="thisisneverthatstore.myshopify.com" || Shopify.shop=="thisisneverthat-intl.myshopify.com" || Shopify.shop == "passarostore.myshopify.com" || Shopify.shop=="funkydecors.myshopify.com") ))
            {
                if(eoShFileExist==null){ 
                    if(eoshDomain=="aziodesign.myshopify.com"){
                        removePagination[3].style.display="none";
                    } else if(eoshDomain=="vintedge-modern.myshopify.com"){
                        removePagination[0].style.display="none";
                        removePagination[1].style.display="none";
                    } else {
                    removePagination[0].style.display="none"; 
                    }  
                }
            }
        }