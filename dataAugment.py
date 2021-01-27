from geopy.geocoders import Nominatim
import json 
import csv
import time
from geopy.extra.rate_limiter import RateLimiter

geolocator = Nominatim(user_agent="puth")
geocode = RateLimiter(geolocator.geocode, min_delay_seconds=1)

with open('./test.json',encoding='UTF8') as json_file: 
    data = json.load(json_file) 
  
geo_data = data['elements'] 
data_file = open('./test.csv', 'w' , encoding="utf-8")   
csv_writer = csv.writer(data_file) 
count = 0
  
for item in geo_data: 
    if count == 0: 
        dict1 = {"address_name" : None}
        item.update(dict1)
        header = item.keys() 
        csv_writer.writerow(header) 
        print(header)
        count += 1


    
    # Writing data of CSV file 
    if item["type"]=="node":
        location = geocode(f"{item['lat']},{item['lon']}",language='en')
        #print(f"{item['lat']},{item['lon']}")
        dict2 = {"address_name" : location.address}
        #print(dict1)
        item.update(dict2)
  
        #lat = item["lat"]
        #lon = item["lon"]
        csv_writer.writerow(item.values()) 
        print(item.values())

  
data_file.close() 