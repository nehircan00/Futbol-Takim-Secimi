function merhaba(){
    let ad,soyad,yas,takim;

     ad=document.getElementById("txtad").value;
     soyad=document.getElementById("txtsoyad").value;
     yas=document.getElementById("txtyas").value;
     takim=document.getElementById("listeTakimlar").selectedIndex;
       
       document.getElementById("sonucBaslik").innerHTML="";
       document.getElementById("yazi").innerHTML="";

       if(takim==0){
           document.body.style.backgroundColor="#000";
           yazi.innerHTML="Birgün değil, Hergün BEŞİKTAŞ"
           document.body.style.color="#fff"
           document.getElementById("resim").setAttribute("src", "bşk.jpg");

       }
       else if(takim==1){
        document.body.style.backgroundColor="yellow";
        yazi.innerHTML="Hasretin tadı aşkın tarifidir Fenerbahçe"
        document.getElementById("resim").setAttribute( "src", "fb.jpg");

    }
       else if(takim==2){
        document.body.style.backgroundColor="red";
        yazi.innerHTML=" Bir gülüşü var sanırsın Galatasaray sahaya çıkıyor"
        document.getElementById("resim").setAttribute( "src","gs.jpg");
    }
       else if(takim==3){
        document.body.style.backgroundColor="blue";
        yazi.innerHTML="Güçlüyüz, gururluyuz, çünkü biz; Trabzonspor’luyuz"
        document.getElementById("resim").setAttribute("src","ts.jpg");
    }

       if(yas<18){
         sonucBaslik.innerHTML="Sitemize üye olmak için 18 yaşından büyük olmalısınız.";
     }   

     else{
         sonucBaslik.innerHTML="Sitemize üye olabilisiiz.";
     }

}

