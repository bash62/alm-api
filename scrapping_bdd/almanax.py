from bs4 import BeautifulSoup
import requests
import pymongo
import os
from dotenv import load_dotenv

load_dotenv()



#Date, #OffrandeDemandé, #TypeBonus->data-bonus, #DescriptionBonus->td[2],   
client = pymongo.MongoClient(os.getenv('DB_URI'))
db = client.almanax
mycol = db["alma"]

x = mycol.insert_one(mydict)

month_dict = { "Javian": ["Janvier","Javian"],
                "Flovor": ["Février","Flovor"],
                "Martalo": ["Mars","Martalo"],
                "Aperirel": ["Avril","Aperirel"],
                "Maisial": ["Mai","Maisial"],
                "Juinssidor" : ["Juin","Juinssidor"],
                "Joullier": ["Juillet","Joullier"],
                "Fraouctor": ["Août","Fraouctor"],
                "Septange": ["Septembre","Septange"],
                "Octolliard": ["Octobre","Octolliard"],
                "Novamaire": ["Novembre","Novamaire"],
                "Descendre": ["Decembre","Descendre"],
                }

#print(month_dict["Javian"][1])

almanax = requests.get("https://www.dofuspourlesnoobs.com/calendrier-de-lalmanax.html");
soup = BeautifulSoup(almanax.text, 'html.parser')
_table = soup.find('table',class_="almanax-table");
rows = _table.find_all('tr')
nbr=0

for _tr in rows:

    _almadic = {
        "day": 0,
        "month": [],
        "pnj":"Offrande à ",
        "bonus_type":"",
        "bonus":"",
        "offrande":"",
    }
    if(nbr==0):
        nbr+=1
    else:


        nbr+=1
        _td = _tr.find_all('td')
        _nbr=0
        for _row in _td:
            if(_nbr==0):
                # 1er print: On recupère la date
                # 2eme print: on recupère le nom du pnj à qui faire l'offrande
                _date = _row.findChild('strong').text.split(' ') 
                _pnj = _row.text.split('Offrande')[1].split(' ')[2]

                _almadic["day"] = int(_date[0])
                _almadic["month"] = month_dict[_date[1]]
                _almadic["pnj"] = _almadic["pnj"] + _pnj

                #print(_date)
                #print(_pnj)

            elif(_nbr==1):
                # 1er print: On récupère le type de bonus
                # 2eme print: On récupère l'énoncé du bonus
                _bonus_type = _row.findChild('strong').text 
                _bonus = _row.text.split(_bonus_type)[1]

                _almadic["bonus_type"] = _bonus_type
                _almadic["bonus"] = _bonus

                #print(_bonus_type)
                #print(_bonus)


            elif(_nbr==2):
                _almadic["offrande"] = _row.text
            _nbr+=1
        print(_almadic)