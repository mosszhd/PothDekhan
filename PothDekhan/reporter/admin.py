from django.contrib.gis.admin import OSMGeoAdmin
from .models import Places
from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin

@admin.register(Places)
class PlacesAdmin(LeafletGeoAdmin):
    list_display = ('name', 'lat','lon')
