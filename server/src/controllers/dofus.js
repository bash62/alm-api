require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const lang = {'fr' : 0 ,'en' : 1}
const bonus_type = {"spawn" : "Bonus : Apparition des ressources et des Archimonstres",
                    "butin" : "Bonus : Butin",
                    
}

exports.getToday = async function(req,res,next){
    try{

        const today = new Date();
        let _model = {message : 'Query returns none',status:404}

        await client.connect();
        const alma = await client.db("almanax").collection("almanax_v1").findOne({month_number:String(today.getMonth()+1),day:String(('0'+today.getDate()).slice(-2))})
        
        const _lang = lang[String(req.params.lang)]
        if(req.params.plateforme == "dofus"){
            _model = {
                'bonus': alma['dofus_bonus_type'][_lang],
                'bonus_desc': alma['dofus_bonus_desc'][_lang],
                'offrande' : alma['dofus_offrande'][_lang],
                'img_url' : alma['dofus_offrande_url']
    
            }
        }
        else if(req.params.plateforme == "touch"){
            _model = {
                'bonus': alma['touch_bonus_type'][_lang],
                'bonus_desc': alma['touch_bonus_desc'][_lang],
                'offrande' : alma['touch_offrande'][_lang],
                'img_url' : alma['touch_offrande_url']
    
            }
        }
        
        res.json(_model)
        


    }
    catch(err){

    }

    finally{
        
        client.close();
        next();
    }
}

exports.getByBonusType = async function(req,res,next){

}


exports.getByDate = async function(req,res,next){

    try{
        const today = new Date();
        let _model = {message : 'Query returns none',status:404}
        await client.connect();
        const alma = await client.db("almanax").collection("almanax_v1").findOne({month_number:String(req.params.month),day:String(('0'+req.params.day).slice(-2))})
        if(alma == null){

            res.json({message : 'Query returns none',status:404})
            
        }
        else {
            const _lang = lang[String(req.params.lang)]
            if(req.params.plateforme == "dofus"){
                _model = {
                    'bonus': alma['dofus_bonus_type'][_lang],
                    'bonus_desc': alma['dofus_bonus_desc'][_lang],
                    'offrande' : alma['dofus_offrande'][_lang],
                    'img_url' : alma['dofus_offrande_url']
        
                }
    
            }
            else if(req.params.plateforme == "touch"){
    
                _model = {
                    'bonus': alma['touch_bonus_type'][_lang],
                    'bonus_desc': alma['touch_bonus_desc'][_lang],
                    'offrande' : alma['touch_offrande'][_lang],
                    'img_url' : alma['touch_offrande_url']
        
                }
            }

            res.json(_model)

        }
        
  
        


    }
    catch(err){
        console.log(err);

    }
    finally{
        
        client.close();
        next();
    }
}




