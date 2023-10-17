document.addEventListener("DOMContentLoaded", function () {
    function setImagesSize(className, width, height) {
        const images = document.getElementsByClassName(className);
        for (let i = 0; i < images.length; i++) {
            images[i].style.width = width;
            images[i].style.height = height;
        }
    }
document.getElementById("showall").addEventListener ("click",function(){
    setImagesSize("watch", "350px", "200px");
        setImagesSize("car", "350px", "200px");
        setImagesSize("neclace", "350px", "200px");
        setImagesSize("flower", "350px", "200px");
document.getElementsByClassName("watch")[0].src="https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE="  
document.getElementsByClassName("watch")[1].src="https://www.jiomart.com/images/product/original/rvqtdza9wc/iloz-luxury-new-rose-gold-color-stylish-magnet-watch-girls-watches-for-women-stylish-branded-fashion-latest-new-design-girls-analog-watch-for-women-product-images-rvqtdza9wc-0-202210160102.jpg?im=Resize=(1000,1000)"  
document.getElementsByClassName("watch")[2].src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2278228/2022/4/19/2451411c-8346-4b8e-b228-e60351d536161650342959173-DressBerry-Women-Mauve-Analogue-Watch-1341650342959089-7.jpg"  
document.getElementsByClassName("car")[0].src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg" 
document.getElementsByClassName("car")[1].src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg" 
document.getElementsByClassName("car")[2].src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg" 
document.getElementsByClassName("neclace")[0].src="https://www.khwaahish.com/wp-content/uploads/2022/02/KNA711.jpg"    
document.getElementsByClassName("neclace")[1].src="https://blingvine.com/cdn/shop/products/enchanted-necklace-set-necklace-sets-blingvine-301149_1000x.jpg?v=1641410776"  
document.getElementsByClassName("neclace")[2].src="https://images-static.nykaa.com/media/catalog/product/a/1/a1e882dnsn8_206.jpg?tr=w-500,pr-true"  
document.getElementsByClassName("flower")[0].src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"  
document.getElementsByClassName("flower")[1].src="https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80"  
document.getElementsByClassName("flower")[2].src="https://i.pinimg.com/originals/86/90/14/869014ea87e157354d2326a5961b20e0.png"
});

document.getElementById("watches").addEventListener ("click",function(){
    setImagesSize("watch", "350px", "200px");
        setImagesSize("car", "0px", "0px");
        setImagesSize("neclace", "0px", "0px");
        setImagesSize("flower", "0px", "0px");
    document.getElementsByClassName("watch")[0].src="https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE="  
    document.getElementsByClassName("watch")[1].src="https://www.jiomart.com/images/product/original/rvqtdza9wc/iloz-luxury-new-rose-gold-color-stylish-magnet-watch-girls-watches-for-women-stylish-branded-fashion-latest-new-design-girls-analog-watch-for-women-product-images-rvqtdza9wc-0-202210160102.jpg?im=Resize=(1000,1000)"  
    document.getElementsByClassName("watch")[2].src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2278228/2022/4/19/2451411c-8346-4b8e-b228-e60351d536161650342959173-DressBerry-Women-Mauve-Analogue-Watch-1341650342959089-7.jpg"  
    document.getElementsByClassName("car")[0].src=" " 
    document.getElementsByClassName("car")[1].src=" " 
    document.getElementsByClassName("car")[2].src=" " 
    document.getElementsByClassName("neclace")[0].src=" "    
    document.getElementsByClassName("neclace")[1].src=" "  
    document.getElementsByClassName("neclace")[2].src=" "  
    document.getElementsByClassName("flower")[0].src=" "  
    document.getElementsByClassName("flower")[1].src=" "  
    document.getElementsByClassName("flower")[2].src=" "  
    });

    document.getElementById("cars").addEventListener ("click",function(){
        setImagesSize("watch", "0px", "0px");
        setImagesSize("car", "350px", "200px");
        setImagesSize("neclace", "0px", "0px");
        setImagesSize("flower", "0px", "0px");
        document.getElementsByClassName("car")[0].src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg" 
        document.getElementsByClassName("car")[1].src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg" 
        document.getElementsByClassName("car")[2].src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg" 
        document.getElementsByClassName("neclace")[0].src=" "    
        document.getElementsByClassName("neclace")[1].src=" "  
        document.getElementsByClassName("neclace")[2].src=" "  
        document.getElementsByClassName("flower")[0].src=" "  
        document.getElementsByClassName("flower")[1].src=" "  
        document.getElementsByClassName("flower")[2].src=" "  
        document.getElementsByClassName("watch")[0].src=" "  
        document.getElementsByClassName("watch")[1].src=" "  
        document.getElementsByClassName("watch")[2].src=" "  
        });

        document.getElementById("neclaces").addEventListener ("click",function(){
            setImagesSize("watch", "0px", "0px");
        setImagesSize("car", "0px", "0px");
        setImagesSize("neclace", "350px", "200px");
        setImagesSize("flower", "0px", "0px");
            document.getElementsByClassName("watch")[0].src=" "  
            document.getElementsByClassName("watch")[1].src=" "  
            document.getElementsByClassName("watch")[2].src=" "  
            document.getElementsByClassName("car")[0].src=" " 
            document.getElementsByClassName("car")[1].src=" " 
            document.getElementsByClassName("car")[2].src=" " 
            document.getElementsByClassName("neclace")[0].src="https://www.khwaahish.com/wp-content/uploads/2022/02/KNA711.jpg"    
            document.getElementsByClassName("neclace")[1].src="https://blingvine.com/cdn/shop/products/enchanted-necklace-set-necklace-sets-blingvine-301149_1000x.jpg?v=1641410776"  
            document.getElementsByClassName("neclace")[2].src="https://images-static.nykaa.com/media/catalog/product/a/1/a1e882dnsn8_206.jpg?tr=w-500,pr-true"  
            document.getElementsByClassName("flower")[0].src=" "  
            document.getElementsByClassName("flower")[1].src=" "  
            document.getElementsByClassName("flower")[2].src=" "  
            });

            document.getElementById("flowers").addEventListener ("click",function(){
                setImagesSize("watch", "0px", "0px");
        setImagesSize("car", "0px", "0px");
        setImagesSize("neclace", "0px", "0px");
        setImagesSize("flower", "350px", "200px");
                document.getElementsByClassName("watch")[0].src=" "  
                document.getElementsByClassName("watch")[1].src=" "  
                document.getElementsByClassName("watch")[2].src=" "  
                document.getElementsByClassName("car")[0].src=" " 
                document.getElementsByClassName("car")[1].src=" " 
                document.getElementsByClassName("car")[2].src=" " 
                document.getElementsByClassName("neclace")[0].src=" "    
                document.getElementsByClassName("neclace")[1].src=" "  
                document.getElementsByClassName("neclace")[2].src=" "  
                document.getElementsByClassName("flower")[0].src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"  
                document.getElementsByClassName("flower")[1].src="https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80"  
                document.getElementsByClassName("flower")[2].src="https://i.pinimg.com/originals/86/90/14/869014ea87e157354d2326a5961b20e0.png"  
                });
    


    

});

