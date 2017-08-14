exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'We believe that every city have something to say'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;

    if(cityName==='sydney'){
       title="Sydney";
       heading="Sydney: Sydney is the city of fireworks.";
    }
    else if(cityName==='adelaide'){
       title="Adelaide";
       heading="Adelaide: Adelaide in a grid, with five squares in the Adelaide city centre and a ring of parks.";
    }
    else if(cityName==='melbourne'){
       title="Melbourne";
       heading="Melbourne: Melbourne is a fantastic place to work, but it's not the centre of the world.";
    }
    else if(cityName==='perth'){
       title="Perth";
       heading="Perth: The Perth Spirit's colours are black and gold, the traditional colours of Western Australia. ";
    }
    else if(cityName==='brisbane'){
       title="Brisbane";
       heading="Brisbane: Winning combination of high-rise modern architecture, lush green spaces";
       imageCount=6;
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
