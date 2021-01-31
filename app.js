function imag(){
var maldives = prompt('Do you love maldives How many photos you want to see ??');


document.write('<p>'+'you entered this number: '+maldives+'</p>')

images =['<img src="images/Maafushi.jpg"/>','<img src="images/Fihalhohi.jpg"/>','<img src="images/pic.jpg"/>','<img src="images/pic1.jpg"/>','<img src="images/pic2.jpg"/>','<img src="images/pic3.jpg"/>','<img src="images/pic4.jpg"/>','<img src="images/pic5.jpg"/>','<img src="images/pic6.jpg"/>','<img src="images/pic7.jpg"/>','<img src="images/pic8.jpg"/>']

for(var i=0;i<maldives;i++){
    document.write(images[i])
}
}

function palces(){
var mal = prompt('what do you want to visit in the maldives put on of this choices Maafushi or Biyadhoo or Fihalhohi to have more info about this place ');


while(!(mal =='Maafushi' || mal =='Biyadhoo' || mal=='Fihalhohi')){
    
    mal = prompt('please enter the correct item,what do you want to visit in the maldives put on of this choices Maafushi or Biyadhoo or Fihalhohi to have more info about this place')
}
document.write('<h1>'+mal+'</h1>')

if (mal=='Maafushi'){
document.write('<h4>'+'<em>'+'Maafushi is one of the biggest and most popular local islands in Maldives. It is located in South Male Atoll just 27 km away from Male. The size is 1270 x 265 m. The island itself has an elongated form. 2700 people live on the island. It’s amazing how so many people can live on such a small piece of land, but as on other islands, you won’t feel that the place is overcrowded.'+'</em>'+'</h4>');

document.write('<img src="images/Maafushi.jpg"/>')  
}else if(mal=='Biyadhoo'){
    document.write('<h4>'+'<em>'+'There’s no pretence about Biyadhoo – if you’re looking for a simple escape at a good value, established resort with a wonderful natural environment, this is it. It’s why many of the guests here return year after year. The resort has recently improved many of its facilities, with changes including free Wi-Fi, twice-weekly snorkelling trips, as well as a refreshment of the rooms, reception, restaurant and bar.'+'</em>'+'</h4>');
    document.write('<img src="images/Biyadhoo.jpg"/>')     
}else if (mal=='Fihalhohi'){
        document.write('<h4 font>'+'<em>'+'Come to a place where a captivating view of the Indian Ocean and the natural tropical beauty of the island is a constant setting. Fihalhohi Island Resort, Maldives is the absolute paradise island escape. A truly idyllic spot where mind and body are reinvigorating, and where the sands of time stand still.'+'</em>'+'</h4>');
        document.write('<img src="images/Fihalhohi.jpg"/>') 
    }
    else{
        alert('wrong insert')
    }
}

imag();
palces();