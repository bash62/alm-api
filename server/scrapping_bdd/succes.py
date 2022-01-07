from bs4 import BeautifulSoup
import requests
import pymongo
import time
import sys
import random
import math
import os




client = pymongo.MongoClient('mongodb+srv://admin:Q7CdWB3w6DnbSs2l@api.crsg4.mongodb.net/Almanax?retryWrites=true&w=majority')
db = client.succes
mycol = db["dungeon"]


def scrapp(_month,_day):
   
        ladder = requests.get('https://www.dofus.com/fr/mmorpg/communaute/annuaires/pages-persos/496700201-zirgoflex/succes/recherche?asd=y&acm=3&page=1')
        soup = BeautifulSoup(ladder.text, 'html.parser')
        print(soup.text)
        #x = mycol.insert_one(_almadic)
        #print(x,_month+"-"+_day)
        #print(_almadic)
        




scrapp("04","03")


