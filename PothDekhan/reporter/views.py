from django.shortcuts import render
from django.views.generic import TemplateView

from django.shortcuts import render
from .documents import PostDocument

name = ''
lat = 0.0
lon = 0.0
dName = ''
dLat = 0.0
dLon = 0.0

# Create your views here.
class HomePageView(TemplateView):
    template_name = 'index.html'


# Create your views here.

def search(request):
    q = request.GET.get('q')
    dq = request.GET.get('dq')

    if q:
        places = PostDocument.search().query('match',name=q)
    else:
        places = ''
    
    for item in places:
        global name,lat,lon
        name = item.name
        lat = item.lat
        lon = item.lon
        break

    if dq:
        destination = PostDocument.search().query('match',name=dq)
    else:
        destination = ''
    
    for itemD in destination:
        global dName,dLat,dLon
        dName = itemD.name
        dLat = itemD.lat
        dLon = itemD.lon
        break


    return render(request,'index.html',{'name': name,'lat':lat,'lon':lon, 'dName': dName, 'dLat':dLat , 'dLon': dLon})


